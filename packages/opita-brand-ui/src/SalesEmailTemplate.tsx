import React from 'react';
import { Callout } from './Callout';
import { SectionHeading } from './SectionHeading';

export type SalesEmailTemplateProps = {
  subject: string;
  greeting?: string;
  intro: string;
  positioning: string;
  nextStep: string;
  signature?: string;
};

export function SalesEmailTemplate({
  subject,
  greeting = 'Hi [Name],',
  intro,
  positioning,
  nextStep,
  signature = 'Best,\n[Name]'
}: SalesEmailTemplateProps) {
  return (
    <div style={{ display: 'grid', gap: 24, fontFamily: 'Inter, Arial, sans-serif', maxWidth: 900 }}>
      <SectionHeading
        eyebrow="Editorial outreach"
        title="Sales email template"
        description="A reusable outreach template that keeps the product framed as governed control, not as a generic AI platform."
      />
      <Callout>
        <strong>Subject</strong>
        <p style={{ marginBottom: 0, marginTop: 12, lineHeight: 1.6 }}>{subject}</p>
      </Callout>
      <article style={{ background: '#FFFFFF', border: '1px solid #C9D2DC', borderRadius: 20, padding: 24, display: 'grid', gap: 16 }}>
        <p style={{ color: '#0B1530', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-line' }}>
          {`${greeting}\n\n${intro}\n\n${positioning}\n\n${nextStep}\n\n${signature}`}
        </p>
      </article>
    </div>
  );
}
