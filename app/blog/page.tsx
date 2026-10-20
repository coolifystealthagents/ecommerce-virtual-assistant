import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Ecommerce Operations Blog', description: 'Practical, source-conscious field notes for catalog, order, returns, marketplace, customer-support, and inventory workflows.', alternates: { canonical: '/blog' } };
export default function BlogPage() { return <div>
  <header className="split-hero"><div><p className="eyebrow">Ecommerce operations field notes</p><h1>Better handoffs begin with better questions.</h1><p>Focused guides for making source records, routine preparation, decision rights, and exceptions easier to see and review.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Discuss your workflow <ArrowIcon /></Link><a className="quiet-link" href="#articles">Browse field notes</a></div></div><div className="split-hero-media artwork-media"><Image src="/images/blog-field-notes.svg" alt="Editorial field notes beside an ecommerce workflow diagram" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
  <section id="articles" className="content-wrap"><div className="section-heading"><p className="eyebrow">Curated library</p><h2>Six practical operating guides.</h2><p>Each guide addresses a distinct queue and links preparation to the evidence and owner needed for a controlled decision.</p></div><div className="article-grid">{blogPosts.map((post) => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}>{post.thumbnail && <Image src={post.thumbnail} alt="" width={1200} height={630} />}<span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><p className="meta">Published {post.publishedAt} · {post.readTime}</p><span className="text-link">Read the field note <ArrowIcon /></span></Link>)}</div></section>
</div>; }
