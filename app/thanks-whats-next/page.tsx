import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/app/conversion.module.css';

export const metadata: Metadata = {
  title: 'What Happens Next',
  description: 'Prepare for an ecommerce operations consultation with practical workflow context.',
  alternates: { canonical: '/thanks-whats-next' },
  robots: { index: false, follow: false },
};

const steps = [
  {
    label: 'Choose one workflow',
    body: 'Bring a recurring queue that needs a clearer owner, output, handoff, or review point.',
  },
  {
    label: 'Gather useful context',
    body: 'Note the systems involved, the current owner, and an example of what complete work looks like.',
  },
  {
    label: 'Mark the boundaries',
    body: 'Identify the policy, payment, inventory, and escalation decisions that should remain with your team.',
  },
];

export default function NextPage() {
  return (
    <div className={styles.conversionPage}>
      <header className={styles.confirmationHero}>
        <div className={styles.heroInner}>
          <p className="eyebrow">Prepare for the conversation</p>
          <h1>What happens after you book.</h1>
          <p className={styles.lead}>
            Once OnceHub confirms your selected time, use these prompts to prepare practical context for the conversation.
          </p>
        </div>
      </header>
      <section className={styles.nextSection} aria-labelledby="next-steps-heading">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">A useful starting point</p>
          <h2 id="next-steps-heading">Bring the workflow, not sensitive data.</h2>
          <p>Passwords, payment details, customer records, and other confidential information are not needed for an initial conversation.</p>
        </div>
        <div className={styles.stepGrid}>
          {steps.map((step, index) => (
            <article className={styles.stepCard} key={step.label}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{step.label}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <aside className={styles.directNote} aria-label="Direct navigation note">
          <div>
            <p className="eyebrow">Need to start or reschedule?</p>
            <h2>If you reached this page directly, no booking status is assumed.</h2>
            <p>Use the official scheduler to choose a time, or return to the consultation form if you have not sent your request.</p>
          </div>
          <div className={styles.actions}>
            <Link className="button primary" href="/thank-you">Open the scheduler</Link>
            <Link className={styles.secondaryButton} href="/contact-us">Go to the consultation form</Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
