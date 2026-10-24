import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar } from '@/components/ArticleSidebar';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';
import TocSync from '@/components/TocSync';
const displayPublishedDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));

const idFor = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = blogBySlug(slug); return p ? { title: p.title, description: p.description, alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: 'article', publishedTime: p.publishedAt, images: p.thumbnail ? [p.thumbnail] : ['/images/blog-field-notes.svg'] } } : {}; }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = blogBySlug(slug); if (!p) notFound();
  const related = blogPosts.filter((item) => item.slug !== p.slug).slice(0, 3);
  const heroImage = p.thumbnail || '/images/blog-field-notes.svg';
  const toc = [...p.sections.map((section) => ({ href: `#${idFor(section.heading)}`, label: section.heading })), { href: '#questions', label: 'Common questions' }, { href: '#source', label: 'Source note' }];
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.description, datePublished: p.publishedAt, dateModified: p.publishedAt, image: `https://${site.domain}${heroImage}`, author: { '@type': 'Organization', name: `${site.name} Editorial Team` }, publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: `https://${site.domain}/logo.svg` } }, mainEntityOfPage: `https://${site.domain}/blog/${p.slug}` };
  return <div><TocSync />
    <header className="split-hero article-header"><div><p className="eyebrow"><Link href="/blog">Field notes</Link> / {p.category}</p><h1>{p.title}</h1><p>{p.description}</p><p className="meta">{site.name} Editorial Team · Published <time dateTime={p.publishedAt}>{displayPublishedDate(p.publishedAt)}</time> · {p.readTime}</p></div><div className="split-hero-media artwork-media"><Image className="article-hero" src={heroImage} alt={`Editorial illustration for ${p.title}`} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
    <section className="content-wrap article-layout"><article className="prose">{p.sections.map((section) => <section key={section.heading} id={idFor(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section id="questions"><h2>Common questions</h2>{p.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section><section id="source" className="sources"><h2>Source note</h2><p>This guide uses public guidance as a boundary and review reference; it does not report a proprietary performance study or replace professional advice.</p><p><a href={p.source.url} rel="noopener noreferrer">{p.source.label}</a></p></section><Link className="button primary" href="/contact-us">Discuss this workflow</Link></article><ArticleSidebar items={toc} related={related.map((item) => ({ href: `/blog/${item.slug}`, title: item.title }))} /></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Continue reading</p><h2>Related field notes</h2></div><div className="article-grid">{related.map((item) => <Link className="article-card" href={`/blog/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p></Link>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </div>;
}
