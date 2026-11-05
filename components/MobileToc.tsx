type Item = { href: string; label: string };

export function MobileToc({ items }: { items: Item[] }) {
  return (
    <details className="mobile-toc">
      <summary>On this page</summary>
      <nav aria-label="Table of contents">
        {items.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </details>
  );
}
