import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { serviceContent } from '@/lib/service-content';

export const metadata: Metadata = { title: 'Ecommerce virtual assistant services', description: 'Explore focused support roles for catalog, orders, returns, marketplaces, customer care, and inventory.', alternates: { canonical: '/services' } };

export default function ServicesPage() { return <div>
  <header className="split-hero"><div><p className="eyebrow">Commerce operations services</p><h1>One role. One queue. Clear ownership.</h1><p>Build remote support around the recurring work your store already understands - then define inputs, evidence, decision rights, and review before volume grows.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Plan a role <ArrowIcon /></Link><a className="quiet-link" href="#service-collection">Explore all services</a></div></div><div className="split-hero-media artwork-media"><Image src="/images/services/services-system.svg" alt="Ecommerce support work organized in one operating system" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></header>
  <section className="section services-intro"><p className="eyebrow">Designed for controlled delegation</p><div><h2>Capacity without blurred authority.</h2><p>Each service starts with a defined source, an observable output, and a named escalation owner. Assistants prepare, coordinate, document, and follow through. Your team retains policy, pricing, payment, inventory, compliance, and material customer decisions.</p></div></section>
  <section id="service-collection" className="section"><div className="service-grid">{serviceContent.map((service) => <Link className="service-card service-card-visual" href={`/services/${service.slug}`} key={service.slug}><div><Image src={service.hero} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div><h2>{service.name}</h2><p>{service.short}</p><span className="text-link">View workflow, controls, and boundaries <ArrowIcon /></span></Link>)}</div></section>
  <section className="quality-band section"><div><p className="eyebrow">A useful starting point</p><h2>Choose the workflow you can review.</h2></div><div><p>Start where the source material is known, the output is inspectable, and a qualified owner is available. A narrow first queue produces better evidence than delegating an entire function at once.</p><Link className="button light" href="/contact-us">Talk through the first handoff</Link></div></section>
</div>; }
