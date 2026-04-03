import React from 'react';
import { Button } from './Button';

export type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  imageSrc,
  imageAlt = 'Opita Sync product illustration',
  onPrimaryClick,
  onSecondaryClick
}: HeroProps) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 24,
        alignItems: 'stretch'
      }}
    >
      <div
        style={{
          background: '#F5F7FA',
          border: '1px solid #C9D2DC',
          borderRadius: 24,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <span style={{ color: '#44607F', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {eyebrow}
        </span>
        <h1 style={{ color: '#0B1530', fontSize: 48, lineHeight: 1.05, marginBottom: 16, marginTop: 16 }}>
          {title}
        </h1>
        <p style={{ color: '#334155', fontSize: 18, lineHeight: 1.6, marginBottom: 24, marginTop: 0 }}>{subtitle}</p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Button onClick={onPrimaryClick}>
            {primaryCtaLabel}
          </Button>
          <Button variant="secondary" onClick={onSecondaryClick}>
            {secondaryCtaLabel}
          </Button>
        </div>
      </div>
      <div
        style={{
          background: '#F5F7FA',
          border: '1px solid #C9D2DC',
          borderRadius: 24,
          padding: 32,
          minHeight: 360,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} style={{ width: '100%', borderRadius: 24 }} />
        ) : (
          <div style={{ color: '#44607F', textAlign: 'center', maxWidth: 280 }}>
            <strong>Illustration slot</strong>
            <p style={{ marginBottom: 0 }}>Connect the governed corridor or domain visual here.</p>
          </div>
        )}
      </div>
    </section>
  );
}
