import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { EditorialCard } from '@/components/EditorialCard';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Ecommerce Operations Blog', description: 'Practical, source-conscious field notes for catalog, order, returns, marketplace, customer-support, and inventory workflows.', alternates: { canonical: '/blog' } };
export default function BlogPage() { return <div>
  <header className="split-hero editorial-index-hero"><div><p className="eyebrow">Ecommerce operations field notes</p><h1>Better handoffs begin with better questions.</h1><p>Focused guides for making source records, routine preparation, decision rights, and exceptions easier to see and review.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Discuss your workflow <ArrowIcon /></Link><a className="quiet-link" href="#articles">Browse field notes</a></div></div><div className="split-hero-media photo-media editorial-photo blog-photo"><Image src="/thumbnails/november-11/ecommercevirtualassistant-control-a-customer-warranty-registration-handoff.png" alt="Ecommerce operator reviewing a warranty registration handoff at a desk" fill preload sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
  <section id="articles" className="content-wrap editorial-library"><div className="section-heading"><p className="eyebrow">Curated library</p><h2>Practical operating guides.</h2><p>Each guide addresses a distinct queue and links preparation to the evidence and owner needed for a controlled decision.</p></div><div className="editorial-grid">{blogPosts.map((post) => <EditorialCard key={post.slug} href={`/blog/${post.slug}`} image={post.thumbnail} label={post.category} title={post.title} summary={post.description} meta={`Published ${post.publishedAt} | ${post.readTime}`} action="Read the field note" />)}</div></section>
</div>; }
