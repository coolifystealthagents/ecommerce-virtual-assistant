import type { Metadata } from 'next';
import Link from 'next/link';
import { OnceHubEmbed } from '@/components/OnceHubEmbed';
import styles from '@/app/conversion.module.css';

export const metadata: Metadata = {
  title: 'Schedule Your Consultation',
  description: 'Choose a time for an ecommerce operations consultation with Ecommerce Virtual Assistant.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className={styles.conversionPage}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className="eyebrow">Consultation scheduling</p>
          <h1>Choose a time for a focused workflow conversation.</h1>
          <p className={styles.lead}>
            If you have just sent the consultation form, the next step is to select an available time. You can also use this page directly whenever you need the scheduler.
          </p>
          <Link className={styles.textLink} href="/contact-us">Return to the consultation form</Link>
        </div>
      </header>
      <section className={styles.schedulerSection} aria-labelledby="scheduler-heading">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Official OnceHub scheduler</p>
          <h2 id="scheduler-heading">Select an available time.</h2>
          <p>Choose a time in the scheduler below. A booking is complete only when OnceHub confirms it.</p>
        </div>
        <OnceHubEmbed />
      </section>
    </div>
  );
}
