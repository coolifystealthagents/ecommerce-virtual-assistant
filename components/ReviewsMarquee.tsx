'use client';

import { useEffect, useRef } from 'react';

type Review = { headline: string; body: string; name: string; detail: string };

export function ReviewsMarquee({ reviews }: { reviews: Review[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rail = track.current;
    const frame = viewport.current;
    if (!rail || !frame || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let offset = 0;
    let animation = 0;
    let last = performance.now();
    let paused = false;
    const step = (now: number) => {
      const elapsed = Math.min(now - last, 40);
      last = now;
      if (!paused && rail.firstElementChild) {
        offset += elapsed * .035;
        const first = rail.firstElementChild as HTMLElement;
        const width = first.getBoundingClientRect().width + 18;
        if (offset >= width) { offset -= width; rail.appendChild(first); }
        rail.style.transform = `translate3d(${-offset}px,0,0)`;
      }
      animation = requestAnimationFrame(step);
    };
    const pause = () => { paused = true; };
    const play = () => { paused = false; last = performance.now(); };
    frame.addEventListener('pointerenter', pause);
    frame.addEventListener('pointerleave', play);
    frame.addEventListener('focusin', pause);
    frame.addEventListener('focusout', play);
    animation = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(animation); frame.removeEventListener('pointerenter', pause); frame.removeEventListener('pointerleave', play); frame.removeEventListener('focusin', pause); frame.removeEventListener('focusout', play); };
  }, []);

  return <div className="reviews-viewport" ref={viewport} aria-label="StealthAgents reviews">
    <div className="reviews-track" ref={track}>{reviews.map((review) => <figure className="review-card" key={`${review.name}-${review.headline}`} tabIndex={0}>
      <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>“{review.body}”</blockquote>
      <figcaption><strong>{review.name}</strong><span>{review.detail}</span></figcaption>
    </figure>)}</div>
  </div>;
}
