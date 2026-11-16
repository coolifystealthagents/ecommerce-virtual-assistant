import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { EditorialCard } from '@/components/EditorialCard';
import { researchPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Ecommerce Operations Research Protocols', description: 'Transparent ecommerce operations research protocols with explicit populations, evidence lineage, review, privacy, and limits.', alternates: { canonical: '/research' } };
export default function ResearchPage() { return <div>
  <header className="split-hero editorial-index-hero"><div><p className="eyebrow">Research protocols</p><h1>Measure the workflow without hiding uncertainty.</h1><p>Proposed methods for inspecting ecommerce evidence, timing, consistency, and source lineage. These are protocols, not completed studies or performance claims.</p><div className="hero-actions"><a className="button primary" href="#protocols">Review the protocols <ArrowIcon /></a><Link className="quiet-link" href="/contact-us">Discuss an operating question</Link></div></div><div className="split-hero-media photo-media editorial-photo research-photo"><Image src="/images/commerce/research-evidence-review.webp" alt="Analyst comparing charts across printed reports, a tablet, and a laptop" fill preload sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
  <section id="protocols" className="content-wrap editorial-library"><div className="section-heading"><p className="eyebrow">Methods library</p><h2>Reproducible questions, explicit limits.</h2><p>Every protocol names its observation unit, evidence requirements, missing-data treatment, review plan, privacy boundaries, and interpretive limits.</p></div><div className="editorial-grid">{researchPosts.map((post) => <EditorialCard key={post.slug} href={`/research/${post.slug}`} image={post.thumbnail} label={post.cluster} title={post.title} summary={post.summary} meta={`Protocol published ${post.publishedAt}`} action="Review the method" />)}</div></section>
</div>; }
