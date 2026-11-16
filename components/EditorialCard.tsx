import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from './Icons';

type EditorialCardProps = {
  href: string;
  image?: string;
  label: string;
  title: string;
  summary: string;
  meta?: string;
  action: string;
  compact?: boolean;
};

export function EditorialCard({ href, image, label, title, summary, meta, action, compact = false }: EditorialCardProps) {
  return <Link className={`editorial-card${compact ? ' editorial-card-compact' : ''}`} href={href}>
    {image ? <div className="editorial-card-media"><Image src={image} alt="" fill sizes={compact ? '(max-width: 700px) 100vw, 33vw' : '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw'} /></div> : null}
    <div className="editorial-card-body">
      <span className="editorial-label">{label}</span>
      <h2>{title}</h2>
      <p>{summary}</p>
      {meta ? <p className="meta">{meta}</p> : null}
      <span className="text-link">{action} <ArrowIcon /></span>
    </div>
  </Link>;
}
