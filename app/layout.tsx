import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Ecommerce Operations Support`, template: `%s | ${site.name}` },
  description: site.heroBody,
  applicationName: site.name,
  openGraph: { type: 'website', siteName: site.name, title: `${site.name} | Ecommerce Operations Support`, description: site.heroBody, url: `https://${site.domain}`, images: [{ url: '/hero.png', width: 1536, height: 1024, alt: site.heroAlt }] },
  twitter: { card: 'summary_large_image', title: site.name, description: site.heroBody, images: ['/hero.png'] },
  alternates: { canonical: '/' },
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: `https://${site.domain}`, logo: `https://${site.domain}/logo.svg`, parentOrganization: { '@type': 'Organization', name: 'Stealth Agents', url: 'https://stealthagents.com/' } };
  return <html lang="en" data-design={site.design}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}>
    <a className="skip-link" href="#main-content">Skip to main content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer />
    <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    <Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
  </body></html>;
}
