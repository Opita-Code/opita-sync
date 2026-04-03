import React from 'react';

export type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre
      style={{
        margin: 0,
        background: '#0B1530',
        color: '#F8FAFC',
        borderRadius: 16,
        padding: 20,
        overflowX: 'auto',
        lineHeight: 1.5
      }}
    >
      {code}
    </pre>
  );
}
