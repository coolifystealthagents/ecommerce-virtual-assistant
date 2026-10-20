'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
] as const;

type CurrentState = 'exact' | 'section' | null;

function currentState(pathname: string, href: string): CurrentState {
  if (pathname === href) return 'exact';
  if (href !== '/' && pathname.startsWith(`${href}/`)) return 'section';
  return null;
}

export function PrimaryNav() {
  const pathname = usePathname();

  return <nav aria-label="Primary navigation">
    {items.map((item) => {
      const current = currentState(pathname, item.href);
      return <Link
        key={item.href}
        href={item.href}
        className="primary-nav-link"
        data-current={current || undefined}
        aria-current={current ? (current === 'exact' ? 'page' : 'location') : undefined}
      >{item.label}</Link>;
    })}
  </nav>;
}
