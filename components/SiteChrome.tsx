import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowIcon } from './Icons';
import { PrimaryNav } from './PrimaryNav';

const ParentAttribution = ({ inverse = false }: { inverse?: boolean }) => (
  <a className={`parent-attribution${inverse ? ' inverse' : ''}`} href="https://stealthagents.com/" rel="noopener noreferrer">
    <span>Powered by StealthAgents</span>
  </a>
);

export function Header() {
  return <header data-site-header="sticky" className="site-header">
    <div className="header-inner">
      <Link className="brand" href="/" aria-label={`${site.name} home`}><Image src="/logo.svg" alt="" width={44} height={44} priority /><span>{site.name}</span></Link>
      <PrimaryNav />
      <div className="persistent-parent-attribution"><ParentAttribution /></div><div className="header-actions"><Link id="cta-global-header-bookcall" className="button compact primary" href="/contact-us">Book a free call <ArrowIcon /></Link></div>
    </div>
  </header>;
}

export function Footer() {
  return <footer data-site-footer="true" className="site-footer">
    <div className="footer-main">
      <div><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={46} height={46} /><span>{site.name}</span></Link><p>Specialist remote staff for {site.audience}, built around documented workflows and accountable handoffs.</p><ParentAttribution inverse /></div>
      <div><h2>Explore</h2><div data-footer-menu="true" className="footer-links"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/contact-us">Contact Us</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
      <div><h2>Start a conversation</h2><p>Bring one recurring ecommerce workflow. We will help shape the support role, boundaries, and review plan.</p><Link className="button light" href="/contact-us">Book a free consultation</Link></div>
    </div>
    <section className="site-parent-company" aria-label="Powered by StealthAgents"><a className="site-parent-logo" href="https://stealthagents.com/" aria-label="Visit StealthAgents"><img src="/stealthagents-parent-logo.png" alt="StealthAgents" width="158" height="53" loading="lazy" /></a><div><h2>Powered by StealthAgents</h2><p>StealthAgents recruits and supports the remote professionals behind our services, from matching and onboarding to ongoing team support.</p><a className="site-parent-link" href="https://stealthagents.com/">Explore StealthAgents ↗</a></div></section><div className="footer-base"><p>© {new Date().getFullYear()} {site.name}. A Stealth Agents subsidiary.</p><p>Secure form submissions only. Do not send credentials or payment data.</p></div>
  </footer>;
}
