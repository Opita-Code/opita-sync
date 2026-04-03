import React from 'react';

export type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul style={{ color: '#334155', lineHeight: 1.6, marginBottom: 0, marginTop: 8, paddingLeft: 20 }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
