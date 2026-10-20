'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Item = { href: string; label: string };
type Related = { href: string; title: string };

export function ArticleSidebar({ items, related }: { items: Item[]; related: Related[] }) {
  const [active, setActive] = useState(items[0]?.href.slice(1) || '');
  useEffect(() => {
    const nodes = items.map((item) => document.getElementById(item.href.slice(1))).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, .2, .8] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return <aside className="sidebar article-sidebar" aria-label="Article navigation">
    <nav className="sidebar-toc"><p className="eyebrow">On this page</p>{items.map((item) => { const id = item.href.slice(1); return <a key={item.href} href={item.href} aria-current={active === id ? 'location' : undefined}>{item.label}</a>; })}</nav>
    <div className="sidebar-related"><p className="eyebrow">Related reading</p>{related.map((item) => <Link key={item.href} href={item.href}>{item.title}</Link>)}</div>
    <div className="sidebar-cta"><p className="eyebrow">A practical next step</p><h2>Turn one workflow into a clear role brief.</h2><Link className="button primary" href="/contact-us">Book a free call</Link></div>
  </aside>;
}
