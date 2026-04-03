import React from 'react';

export type NavbarProps = {
  brand: string;
  links: string[];
};

export function Navbar({ brand, links }: NavbarProps) {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        paddingBottom: 24
      }}
    >
      <div style={{ color: '#0B1530', fontWeight: 800, fontSize: 20 }}>{brand}</div>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', color: '#334155', fontWeight: 500 }}>
        {links.map((link) => (
          <span key={link}>{link}</span>
        ))}
      </div>
    </nav>
  );
}
