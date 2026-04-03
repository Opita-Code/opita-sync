import React from 'react';

export type CalloutProps = {
  children: React.ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return (
    <div
      style={{
        background: '#F5F7FA',
        border: '1px solid #C9D2DC',
        borderRadius: 16,
        padding: 20,
        color: '#0B1530'
      }}
    >
      {children}
    </div>
  );
}
