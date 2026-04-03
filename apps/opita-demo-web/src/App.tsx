import React, { useMemo, useState } from 'react';
import { opitaOfficeDemoLandingContent, opitaOfficeMobileDemoFlowContent } from '@opita-code/opita-brand-core';
import { Button, MobileDemoFlowPage, OpitaOfficeDemoPage } from '@opita-code/opita-brand-ui';
import { opitaOfficeStoragePlan, runOrderDeviationRecoveryScenario, runOrderRecoveryScenario } from '@opita-code/opita-office-sandbox';

const scenario = runOrderRecoveryScenario('2026-04-03');
const recoveryScenario = runOrderDeviationRecoveryScenario('2026-04-03');

function formatOrderState(label: string, order: typeof scenario.orderBefore) {
  return [
    `${label}`,
    `order id: ${order.id}`,
    `status: ${order.status}`,
    `priority: ${order.priority}`,
    `owner: ${order.owner}`,
    `total: ${order.total}`,
    `updated at: ${order.lastUpdatedAt}`
  ];
}

function isMobileViewport() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(max-width: 768px)').matches;
}

type DemoMode = 'auto' | 'web' | 'mobile';
type DemoSurface = 'landing' | 'scenario' | 'recovery';

function AppChrome({
  mode,
  surface,
  businessDate,
  onModeChange,
  onSurfaceChange,
  children
}: {
  mode: DemoMode;
  surface: DemoSurface;
  businessDate: string;
  onModeChange: (mode: DemoMode) => void;
  onSurfaceChange: (surface: DemoSurface) => void;
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', background: '#E2E8F0' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#0B1530',
          color: '#FFFFFF',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          fontFamily: 'Inter, Arial, sans-serif'
        }}
      >
        <div>
          <strong>Opita Sync demo shell</strong>
          <div style={{ fontSize: 13, opacity: 0.85 }}>Modo de preview para QA de landing-demo y mobile flow</div>
          <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4 }}>
            Demo business date: {businessDate} · reset policy: {opitaOfficeStoragePlan.resetPolicy}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 13 }}>Mode</span>
            <Button variant={mode === 'auto' ? 'primary' : 'secondary'} onClick={() => onModeChange('auto')}>
              Auto
            </Button>
            <Button variant={mode === 'web' ? 'primary' : 'secondary'} onClick={() => onModeChange('web')}>
              Web
            </Button>
            <Button variant={mode === 'mobile' ? 'primary' : 'secondary'} onClick={() => onModeChange('mobile')}>
              Mobile
            </Button>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 13 }}>Surface</span>
            <Button variant={surface === 'landing' ? 'primary' : 'secondary'} onClick={() => onSurfaceChange('landing')}>
              Landing
            </Button>
            <Button variant={surface === 'scenario' ? 'primary' : 'secondary'} onClick={() => onSurfaceChange('scenario')}>
              Scenario
            </Button>
            <Button variant={surface === 'recovery' ? 'primary' : 'secondary'} onClick={() => onSurfaceChange('recovery')}>
              Recovery
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export function App() {
  const [mode, setMode] = useState<DemoMode>('auto');
  const [surface, setSurface] = useState<DemoSurface>('landing');

  const mobile = useMemo(() => {
    if (mode === 'web') return false;
    if (mode === 'mobile') return true;
    return isMobileViewport();
  }, [mode]);

  if (mobile) {
    return (
      <AppChrome businessDate={scenario.businessDate} mode={mode} surface={surface} onModeChange={setMode} onSurfaceChange={setSurface}>
        <MobileDemoFlowPage
          brand="Opita Sync"
          navLinks={['Mobile', 'Live call', 'Verify', 'Next action']}
          hero={{
            eyebrow: opitaOfficeMobileDemoFlowContent.hero.eyebrow,
            title:
              surface === 'landing'
                ? opitaOfficeMobileDemoFlowContent.hero.title
                : surface === 'recovery'
                  ? 'Handle a deviation during the live call and confirm the recovery path.'
                : 'Follow the live corrective flow from the call to the verified outcome.',
            subtitle:
              surface === 'landing'
                ? opitaOfficeMobileDemoFlowContent.hero.subtitle
                : surface === 'recovery'
                  ? 'This preview frames the mobile experience as a live corrective call where the system detects that an intermediate result is still not healthy enough and proposes a recovery.'
                : 'This preview focuses on the same sandbox case, but frames it as the compact mobile flow that starts from a real-time operative call.',
            primaryCtaLabel: opitaOfficeMobileDemoFlowContent.hero.primaryCta,
            secondaryCtaLabel: opitaOfficeMobileDemoFlowContent.hero.secondaryCta
          }}
          callMoments={opitaOfficeMobileDemoFlowContent.callMoments}
          operatorSignals={opitaOfficeMobileDemoFlowContent.operatorSignals}
          compactVerification={opitaOfficeMobileDemoFlowContent.compactVerification}
          mobilePrinciples={opitaOfficeMobileDemoFlowContent.mobilePrinciples}
          liveIntent={surface === 'recovery' ? recoveryScenario.initialAgentAction.intent : scenario.agentAction.intent}
          liveProposal={surface === 'recovery' ? recoveryScenario.recoveryAgentAction.proposal : scenario.agentAction.proposal}
          liveOutcome={
            surface === 'recovery'
              ? `${recoveryScenario.recoveryAgentAction.executionSummary} ${recoveryScenario.verificationAfterRecovery.summary}`
              : `${scenario.agentAction.executionSummary} ${scenario.agentAction.verificationSummary}`
          }
        />
      </AppChrome>
    );
  }

  return (
    <AppChrome businessDate={scenario.businessDate} mode={mode} surface={surface} onModeChange={setMode} onSurfaceChange={setSurface}>
      <OpitaOfficeDemoPage
        brand="Opita Sync"
        navLinks={['Demo', 'Why now', 'Opita Office', 'Audit']}
        hero={{
          eyebrow: opitaOfficeDemoLandingContent.hero.eyebrow,
          title:
            surface === 'landing'
              ? opitaOfficeDemoLandingContent.hero.title
              : surface === 'recovery'
                ? 'See how the demo tenant detects a weak intermediate state and stabilizes it.'
              : 'Review the governed scenario running over the Opita Office demo tenant.',
          subtitle:
            surface === 'landing'
              ? opitaOfficeDemoLandingContent.hero.subtitle
              : surface === 'recovery'
                ? 'This preview emphasizes the recovery path: the system recognizes a deviation after a partial fix, recommends a stronger action and verifies the stabilized state.'
              : 'This preview isolates the main scenario so the operator or executive can focus on before/after, governance, verification and next-best-action over the sandbox.',
          primaryCtaLabel: opitaOfficeDemoLandingContent.hero.primaryCta,
          secondaryCtaLabel: opitaOfficeDemoLandingContent.hero.secondaryCta
        }}
        summaryCards={opitaOfficeDemoLandingContent.summaryCards}
        scenarioThesis={opitaOfficeDemoLandingContent.scenarioThesis}
        whyNowItems={opitaOfficeDemoLandingContent.whyNow}
        whyOpitaSyncItems={opitaOfficeDemoLandingContent.whyOpitaSync}
        trustLayerItems={opitaOfficeDemoLandingContent.trustLayer}
        afterTheCallItems={opitaOfficeDemoLandingContent.afterTheCall}
        beforePanel={{
          title: 'Before',
          items: formatOrderState(
            surface === 'recovery' ? 'Order before first action' : 'Order before change',
            surface === 'recovery' ? recoveryScenario.orderBefore : scenario.orderBefore
          )
        }}
        afterPanel={{
          title: surface === 'recovery' ? 'After recovery' : 'After',
          items: formatOrderState(
            surface === 'recovery' ? 'Order after recovery' : 'Order after change',
            surface === 'recovery' ? recoveryScenario.orderAfterRecovery : scenario.orderAfter
          ),
          tone: 'muted'
        }}
        governancePanel={{
          title: surface === 'recovery' ? 'Deviation advisor' : 'Approval task',
          items:
            surface === 'recovery'
              ? [recoveryScenario.deviation.recommendation, ...recoveryScenario.deviation.findings]
              : [
                  `task id: ${scenario.taskAfter.id}`,
                  `sensitivity: ${scenario.taskAfter.sensitivity}`,
                  `status before: ${scenario.taskBefore.status}`,
                  `status after: ${scenario.taskAfter.status}`,
                  `latest comment: ${scenario.taskAfter.comments[scenario.taskAfter.comments.length - 1]}`
                ]
        }}
        verificationPanel={{
          title: surface === 'recovery' ? 'Verification after recovery' : 'Verification',
          items:
            surface === 'recovery'
              ? [recoveryScenario.verificationAfterRecovery.summary, ...recoveryScenario.verificationAfterRecovery.findings]
              : [scenario.verification.summary, ...scenario.verification.findings],
          tone: 'muted'
        }}
        intent={surface === 'recovery' ? recoveryScenario.initialAgentAction.intent : scenario.agentAction.intent}
        proposal={
          surface === 'recovery'
            ? `${recoveryScenario.initialAgentAction.proposal} Recovery proposal: ${recoveryScenario.recoveryAgentAction.proposal}`
            : scenario.agentAction.proposal
        }
        executionSummary={
          surface === 'recovery'
            ? `${recoveryScenario.initialAgentAction.executionSummary} Recovery: ${recoveryScenario.recoveryAgentAction.executionSummary}`
            : scenario.agentAction.executionSummary
        }
        recommendedNextAction={surface === 'recovery' ? recoveryScenario.recoveryAgentAction.recommendedNextAction : scenario.agentAction.recommendedNextAction}
      />
    </AppChrome>
  );
}
