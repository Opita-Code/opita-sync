import React from 'react';
import { Navbar } from './Navbar';

export type PageShellProps = {
  brand: string;
  navLinks: string[];
  children: React.ReactNode;
};

export function PageShell({ brand, navLinks, children }: PageShellProps) {
  return (
    <main style={{ background: '#FFFFFF', padding: 32 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gap: 48, fontFamily: 'Inter, Arial, sans-serif' }}>
        <Navbar brand={brand} links={navLinks} />
        {children}
      </div>
    </main>
  );
}
