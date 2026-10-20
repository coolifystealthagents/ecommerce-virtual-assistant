import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon, CheckIcon } from '@/components/Icons';
import { detailedServiceBySlug, serviceContent } from '@/lib/service-content';
import { site } from '@/lib/site';

export function generateStaticParams() { return serviceContent.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = detailedServiceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${slug}` }, openGraph: { images: [service.hero] } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = detailedServiceBySlug(slug);
  if (!service) notFound();
  const related = serviceContent.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.short, provider: { '@type': 'Organization', name: site.name, url: `https://${site.domain}` }, areaServed: 'Worldwide', url: `https://${site.domain}/services/${service.slug}` };
  return <div className="service-detail">
    <header className="split-hero service-hero"><div><p className="eyebrow"><Link href="/services">Services</Link> / Specialist role</p><h1>{service.name}</h1><p>{service.short} Built for teams that need visible evidence, named owners, and boundaries that hold when the queue gets busy.</p><div className="hero-actions"><Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this role <ArrowIcon /></Link><a className="quiet-link" href="#workflow">See the workflow</a></div></div><div className="split-hero-media artwork-media"><Image src={service.hero} alt={service.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
    <section className="service-overview section"><div><p className="eyebrow">Who this role fits</p><h2>A focused support layer, not a transfer of accountability.</h2></div><div><p className="lead">{service.audience}</p>{service.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="section service-inputs"><div className="section-heading"><p className="eyebrow">Start with reliable inputs</p><h2>Give the role evidence it can use.</h2></div><div className="check-grid">{service.inputs.map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div></section>
    <section id="workflow" className="section workflow-section"><div className="section-heading"><p className="eyebrow">Operating workflow</p><h2>Move routine work forward without hiding exceptions.</h2></div><div className="workflow-list">{service.workflow.map((step) => <article key={step}><span aria-hidden="true" className="workflow-dot" /><p>{step}</p></article>)}</div><Link id={`cta-services-${service.slug}-workflow`} className="button primary" href="/contact-us">Map your first workflow <ArrowIcon /></Link></section>
    <section className="section paired-lists"><div><p className="eyebrow">Deliverables</p><h2>What the role can maintain</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">What remains with your team</p><h2>Decision rights stay explicit</h2>{service.boundaries.map((item) => <p key={item}>{item}</p>)}</div></section>
    <section className="section quality-band"><div><p className="eyebrow">Quality controls</p><h2>Inspect the evidence, not just the activity.</h2></div><div className="quality-list">{service.qualityControls.map((item) => <p key={item}>{item}</p>)}</div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Where the role becomes useful</p><h2>Three concrete operating scenarios.</h2></div><div className="scenario-grid">{service.scenarios.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
    <section className="section faq-section"><div><p className="eyebrow">Role questions</p><h2>Frequently asked questions</h2></div><div>{service.faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    <section className="section related-services"><div className="section-heading"><p className="eyebrow">Related services</p><h2>Build a connected commerce support team.</h2></div><div className="service-grid">{related.map((item) => <Link className="service-card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.name}</h3><p>{item.short}</p><span className="text-link">Explore this role <ArrowIcon /></span></Link>)}</div></section>
    <section className="closing"><p className="eyebrow">Begin with one bounded queue</p><h2>Design the role before you fill it.</h2><p>Bring the recurring work, current systems, and decision owner. We will help turn them into a practical support brief.</p><Link id={`cta-services-${service.slug}-consultation`} className="button light" href="/contact-us">Book a free consultation <ArrowIcon /></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </div>;
}
