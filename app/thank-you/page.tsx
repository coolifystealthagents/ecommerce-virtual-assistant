import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = { title: 'Choose a time', robots: { index: false, follow: false } };

export default async function ThankYouPage() {
  const cookieStore = await cookies();
  if (cookieStore.get('eva_lead_confirmed')?.value !== 'confirmed') redirect('/contact-us?booking=requires-confirmed-lead');
  return <div><header className="page-hero"><p className="eyebrow">Request received</p><h1>Thanks. Pick a time that works for you.</h1><p>Your free consultation can help turn the workflow into a clear support brief.</p></header><section className="content-wrap"><iframe className="booking-frame" title="Book your consultation" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="lazy"/></section></div>;
}
