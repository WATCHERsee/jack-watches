'use client';
import { useState } from 'react';
import { WatchTheme } from '@/data/themes';

interface Props {
  watches: WatchTheme[];
  title?: string;
}

export default function ProductGrid({ watches, title }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <p className="section-label" style={{ textAlign: 'center', marginBottom: 48 }}>
          {title}
        </p>
      )}
      <div className="product-grid">
        {watches.map((w, i) => {
          const isOpen = selected === i;
          return (
            <div
              key={w.name}
              className={`product-card ${isOpen ? 'open' : ''}`}
              style={{
                '--accent': w.accent,
                '--accent-light': w.accentLight,
                '--accent-dim': w.accentDim,
                '--card-bg': w.cardBg,
              } as React.CSSProperties}
              onClick={() => setSelected(isOpen ? null : i)}
            >
              <div className="product-image-wrap">
                <img src={w.image} alt={w.name} className="product-image" loading="lazy" />
                {w.badge && <span className="product-badge">{w.badge}</span>}
              </div>
              <div className="product-info">
                <p className="product-collection">{w.collection}</p>
                <h3 className="product-name">{w.name}</h3>
                <div className="product-price-row">
                  {w.originalPrice && (
                    <span className="product-price-original">{w.originalPrice}</span>
                  )}
                  <span className="product-price">{w.price}</span>
                </div>
                {isOpen && (
                  <div className="product-details">
                    <div className="product-colors">
                      {w.colors.map(c => (
                        <span
                          key={c.name}
                          className="color-swatch"
                          style={{ background: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                    <ul className="product-features">
                      {w.features.map(f => <li key={f}>{f}</li>)}
                    </ul>
                    <a href="#" className="btn-primary" style={{ marginTop: 20, display: 'inline-block' }}>
                      Select Options
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
