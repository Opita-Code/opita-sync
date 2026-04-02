import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const background = variant === 'primary' ? '#0B1530' : '#FFFFFF';
  const color = variant === 'primary' ? '#FFFFFF' : '#0B1530';
  const border = variant === 'primary' ? 'none' : '1px solid #0B1530';

  return (
    <button
      {...props}
      className={className}
      style={{
        padding: '12px 20px',
        borderRadius: '16px',
        background,
        color,
        border,
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: 600,
        cursor: 'pointer'
      }}
    />
  );
}
