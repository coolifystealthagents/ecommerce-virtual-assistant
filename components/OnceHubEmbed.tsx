'use client';

import Script from 'next/script';
import styles from '@/app/conversion.module.css';

const BOOKING_URL = 'https://go.oncehub.com/StealthAgentsTeam';

export function OnceHubEmbed() {
  return (
    <div className={styles.schedulerShell} aria-labelledby="scheduler-heading">
      <div
        id="SOIDIV_StealthAgentsTeam"
        className={styles.schedulerEmbed}
        data-so-page="StealthAgentsTeam"
        data-height="650"
        data-style="border: 0; min-width: 290px; max-width: 100%;"
        data-psz="00"
      />
      <Script id="oncehub-embed" src="https://cdn.oncehub.com/mergedjs/so.js" strategy="afterInteractive" />
      <p className={styles.schedulerFallback}>
        If the scheduler does not load,{' '}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Open the scheduler in a new tab
        </a>.
      </p>
      <noscript>
        <p className={styles.schedulerFallback}>
          JavaScript is required for the embedded scheduler.{' '}
          <a href={BOOKING_URL}>Open the scheduler in a new tab</a>.
        </p>
      </noscript>
    </div>
  );
}
