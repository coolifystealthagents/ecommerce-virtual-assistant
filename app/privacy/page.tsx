import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy policy', description: 'How Ecommerce Virtual Assistant collects, uses, and protects information submitted through this website.', alternates: { canonical: '/privacy' } };

export default function PrivacyPage() {
  return <div><header className="page-hero"><p className="eyebrow">Privacy</p><h1>Privacy policy</h1><p>Last updated October 20, 2026</p></header><section className="content-wrap"><div className="prose">
    <h2>Information we collect</h2><p>When you use our consultation form, we collect the information you submit: first and last name, business email address, telephone number, company name, company website, company size, anticipated number of positions, referral source, and message. We also process basic site usage, conversion, security, and performance events.</p>
    <h2>How we use information</h2><p>We use submitted information to respond to your request, prepare and coordinate a consultation, maintain delivery records, improve this website, measure whether the inquiry flow works, and protect the service from abuse.</p>
    <h2>Service providers and recipients</h2><p>Form information is sent to the configured lead-delivery service. If that delivery cannot be confirmed, the same inquiry may be sent to the authorized Stealth Agents Mattermost workspace as a durable fallback. Site events are processed through the configured ACR Tracking service. If you continue to scheduling after a confirmed submission, OnceHub processes the booking information you choose to provide there.</p>
    <h2>Retention and choices</h2><p>Records are retained only as long as reasonably needed to respond, coordinate service, maintain business records, prevent abuse, and meet legal obligations. You may ask about, correct, or request deletion of submitted information, subject to applicable recordkeeping requirements.</p>
    <h2>Contact</h2><p>Privacy questions and requests can be sent to hello@{site.domain}.</p>
  </div></section></div>;
}
