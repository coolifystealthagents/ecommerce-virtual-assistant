import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root=path.resolve(import.meta.dirname,'../..');
const date='2026-10-13';
const errors=[];
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');
function parse(relative,name){const match=read(relative).match(new RegExp(`export const ${name}:[^=]+\\s=\\s([\\s\\S]+);\\s*$`));if(!match)throw new Error(`Cannot parse ${name}`);return JSON.parse(match[1])}
const blogs=parse('lib/october13BlogPosts.ts','october13BlogPosts');
const research=parse('lib/october13ResearchPosts.ts','october13ResearchPosts');
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
if(blogs.length!==12)errors.push(`Expected 12 Blog; found ${blogs.length}`);
if(research.length!==5)errors.push(`Expected 5 Research; found ${research.length}`);
if(manifest.counts.blog!==12||manifest.counts.research!==5||manifest.counts.total!==17||manifest.items.length!==17)errors.push('Manifest counts are not 12 Blog + 5 Research');
if(manifest.publicationDate!==date)errors.push('Manifest publication date is wrong');
const slugs=new Set(),titles=new Set(),thumbnails=new Set(),exactParagraphs=new Map();
const normalize=value=>value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const tokens=value=>new Set(normalize(value).split(' ').filter(Boolean));
const jaccard=(a,b)=>{const aa=tokens(a),bb=tokens(b);let overlap=0;for(const value of aa)if(bb.has(value))overlap++;return overlap/(aa.size+bb.size-overlap)};
const newParagraphs=[];
for(const item of [...blogs,...research]){
  if(item.publishedAt!==date)errors.push(`${item.slug}: wrong visible date`);
  if(/\b(?:2026|oct(?:ober)?\.?\s*13|10[/-]13)\b/i.test(item.title))errors.push(`${item.slug}: date appears in title`);
  if(slugs.has(item.slug))errors.push(`${item.slug}: duplicate slug`);slugs.add(item.slug);
  if(titles.has(item.title))errors.push(`${item.slug}: duplicate title`);titles.add(item.title);
  if(!item.thumbnail||thumbnails.has(item.thumbnail))errors.push(`${item.slug}: missing or duplicate thumbnail`);thumbnails.add(item.thumbnail);
  const thumbnailPath=`public${item.thumbnail}`;
  if(!fs.existsSync(path.join(root,thumbnailPath)))errors.push(`${item.slug}: thumbnail file missing`);
  else {const svg=read(thumbnailPath);const escaped=item.title.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');if(!svg.includes('width="1200" height="630"')||!svg.includes(`<title id="title">${escaped}</title>`))errors.push(`${item.slug}: thumbnail dimensions or exact title failed`)}
  if(!item.sections||item.sections.length<8)errors.push(`${item.slug}: insufficient section depth`);
  for(const section of item.sections||[])for(const paragraph of section.paragraphs||[]){const norm=normalize(paragraph);if(norm.length<120)errors.push(`${item.slug}: paragraph too short in ${section.heading}`);if(exactParagraphs.has(norm))errors.push(`${item.slug}: exact duplicate prose from ${exactParagraphs.get(norm)}`);else exactParagraphs.set(norm,item.slug);newParagraphs.push({slug:item.slug,text:paragraph})}
}
for(let i=0;i<newParagraphs.length;i++)for(let j=i+1;j<newParagraphs.length;j++){if(newParagraphs[i].slug===newParagraphs[j].slug)continue;const score=jaccard(newParagraphs[i].text,newParagraphs[j].text);if(score>=0.88)errors.push(`${newParagraphs[i].slug}: near-duplicate prose (${score.toFixed(2)}) with ${newParagraphs[j].slug}`)}
for(const item of blogs){if(item.sections.length<8||item.sections.reduce((n,s)=>n+s.paragraphs.length,0)<16)errors.push(`${item.slug}: Blog depth below eight sections/sixteen paragraphs`);if(!item.faq||item.faq.length<3)errors.push(`${item.slug}: missing FAQ depth`)}
const authoritativeHosts=new Set(['www.census.gov','www.ftc.gov','www.nist.gov','www.cisa.gov','www.usps.com','www.cbp.gov','www.consumerfinance.gov']);
for(const item of research){if(item.sections.length<10||item.sections.reduce((n,s)=>n+s.paragraphs.length,0)<20)errors.push(`${item.slug}: Research depth below ten sections/twenty paragraphs`);if(item.sources.length!==10||new Set(item.sources.map(source=>source.url)).size!==10||item.sources.some(source=>{try{const url=new URL(source.url);return url.protocol!=='https:'||!authoritativeHosts.has(url.hostname)}catch{return true}}))errors.push(`${item.slug}: requires exactly 10 unique authoritative HTTPS sources`)}
for(const relative of [...manifest.registryPaths,...manifest.routePaths,...manifest.indexPaths,...manifest.sidebarPaths,...manifest.sitemapPaths])if(!fs.existsSync(path.join(root,relative)))errors.push(`Missing architecture path ${relative}`);
const content=read('lib/content.ts'),blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),sitemap=read('app/sitemap.ts');
for(const name of ['october13BlogPosts','october13ResearchPosts'])if(!content.includes(name))errors.push(`Registry missing ${name}`);
if(!blogRoute.includes('related')||!blogRoute.includes('sidebar'))errors.push('Blog route lacks related/sidebar behavior');
if(!researchRoute.includes('ResearchSidebar')||!researchRoute.includes('p.sections'))errors.push('Research route lacks sections/sidebar behavior');
if(!sitemap.includes('blogPosts.map')||!sitemap.includes('researchPosts.map'))errors.push('Sitemap does not enumerate Blog and Research');
for(const relative of ['lib/october12BlogPosts.ts','lib/october12ResearchPosts.ts']){try{const base=execFileSync('git',['show',`${manifest.baseSha}:${relative}`],{cwd:root,encoding:'utf8'});if(base!==read(relative))errors.push(`${relative}: immutable base corpus changed`)}catch(error){errors.push(`${relative}: unable to verify immutable base corpus`)}}
function parseExisting(source,name,nextName){const pattern=nextName?new RegExp(`const ${name}:[^=]+=\\s*([\\s\\S]*?);\\s*\\n\\s*const ${nextName}`):new RegExp(`const ${name}:[^=]+=\\s*([\\s\\S]*?);\\s*\\n\\s*export const blogPosts`);const match=source.match(pattern);if(!match)throw new Error(`Cannot parse ${name}`);return JSON.parse(match[1])}
const prior=[...parse('lib/october12BlogPosts.ts','october12BlogPosts'),...parse('lib/october12ResearchPosts.ts','october12ResearchPosts'),...parseExisting(content,'existingBlogPosts','existingResearchPosts'),...parseExisting(content,'existingResearchPosts')];
const priorParagraphs=prior.flatMap(item=>(item.sections||[]).flatMap(section=>(section.paragraphs||[]).map(text=>({slug:item.slug,text}))));
for(const fresh of newParagraphs)for(const old of priorParagraphs){if(normalize(fresh.text)===normalize(old.text))errors.push(`${fresh.slug}: duplicates base prose from ${old.slug}`);else {const score=jaccard(fresh.text,old.text);if(score>=0.9)errors.push(`${fresh.slug}: near-duplicate base prose (${score.toFixed(2)}) from ${old.slug}`)}}
if(errors.length){console.error(`FAIL (${errors.length})\n- ${errors.join('\n- ')}`);process.exit(1)}
console.log('PASS: EcommerceVirtualAssistant October 13 publication validated (12 Blog, 5 Research, 17 exact-title 1200×630 thumbnails; duplicate/base audits clear).');
