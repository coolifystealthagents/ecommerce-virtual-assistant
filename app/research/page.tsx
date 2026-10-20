import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { researchPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Ecommerce Operations Research Protocols', description: 'Transparent ecommerce operations research protocols with explicit populations, evidence lineage, review, privacy, and limits.', alternates: { canonical: '/research' } };
export default function ResearchPage() { return <div>
  <header className="split-hero"><div><p className="eyebrow">Research protocols</p><h1>Measure the workflow without hiding uncertainty.</h1><p>Proposed methods for inspecting ecommerce evidence, timing, consistency, and source lineage. These are protocols - not completed studies or performance claims.</p><div className="hero-actions"><a className="button primary" href="#protocols">Review the protocols <ArrowIcon /></a><Link className="quiet-link" href="/contact-us">Discuss an operating question</Link></div></div><div className="split-hero-media artwork-media"><Image src="/images/research-evidence-desk.svg" alt="A research desk showing evidence points and a magnifying lens" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
  <section id="protocols" className="content-wrap"><div className="section-heading"><p className="eyebrow">Methods library</p><h2>Reproducible questions, explicit limits.</h2><p>Every protocol names its observation unit, evidence requirements, missing-data treatment, review plan, privacy boundaries, and interpretive limits.</p></div><div className="content-grid">{researchPosts.map((post) => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}>{post.thumbnail && <Image src={post.thumbnail} alt="" width={1200} height={630} />}<span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta">Protocol published {post.publishedAt}</p><span className="text-link">Review the method <ArrowIcon /></span></Link>)}</div></section>
</div>; }
