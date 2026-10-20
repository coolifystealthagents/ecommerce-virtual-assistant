import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar } from '@/components/ArticleSidebar';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';

const idFor = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = researchBySlug(slug); return p ? { title: p.title, description: p.summary, alternates: { canonical: `/research/${p.slug}` }, openGraph: { type: 'article', publishedTime: p.publishedAt, images: p.thumbnail ? [p.thumbnail] : ['/images/research-evidence-desk.svg'] } } : {}; }

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = researchBySlug(slug); if (!p) notFound();
  const related = researchPosts.filter((item) => item.slug !== p.slug).slice(0, 3);
  const heroImage = p.thumbnail || '/images/research-evidence-desk.svg';
  const sections = p.sections || [];
  const toc = [...sections.map((section) => ({ href: `#${idFor(section.heading)}`, label: section.heading })), { href: '#sources', label: 'Sources' }];
  const schema = { '@context': 'https://schema.org', '@type': 'ScholarlyArticle', headline: p.title, description: p.summary, datePublished: p.publishedAt, image: `https://${site.domain}${heroImage}`, author: { '@type': 'Organization', name: `${site.name} Research Desk` }, mainEntityOfPage: `https://${site.domain}/research/${p.slug}` };
  return <div>
    <header className="split-hero article-header"><div><p className="eyebrow"><Link href="/research">Research protocols</Link> / {p.cluster}</p><h1>{p.title}</h1><p>{p.summary}</p><p className="meta">{site.name} Research Desk · Published {p.publishedAt}</p></div><div className="split-hero-media artwork-media"><Image className="article-hero" src={heroImage} alt={`Research illustration for ${p.title}`} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
    <section className="content-wrap article-layout"><article className="prose"><p className="research-finding"><strong>Protocol status:</strong> {p.finding}</p>{sections.map((section) => <section key={section.heading} id={idFor(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<section id="sources" className="sources"><h2>Sources and boundaries</h2><p>These sources provide public context for the protocol. Their inclusion does not mean they endorse this site or that the proposed study has been conducted.</p><ol>{p.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></section><Link className="button primary" href="/contact-us">Discuss the workflow</Link></article><ArticleSidebar items={toc} related={related.map((item) => ({ href: `/research/${item.slug}`, title: item.title }))} /></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </div>;
}
