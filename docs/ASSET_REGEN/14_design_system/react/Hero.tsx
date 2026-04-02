import React from "react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="opita-hero">
      <div className="opita-card pad">
        <span className="opita-eyebrow">AI-first governed control plane</span>
        <h1 className="opita-title">Operate business changes with control.</h1>
        <p className="opita-subtitle">
          Opita Sync helps teams move through a governed corridor of proposal, preview, approval, execution, inspection and recovery.
        </p>
        <div className="opita-actions">
          <Button>See the governed corridor</Button>
          <Button variant="secondary">Explore the product domains</Button>
        </div>
      </div>
      <div className="opita-card pad">
        <img src="/illustrations/homepage-hero-platform.png" alt="Governed control plane illustration" style={{ width: "100%", borderRadius: 24 }} />
      </div>
    </section>
  );
}
