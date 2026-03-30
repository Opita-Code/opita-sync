# S0A — OSF vs Opita Sync consumption boundary v1

## Objetivo

Definir la frontera obligatoria entre OSF y Opita Sync para evitar mezclar framework y producto durante diseño, implementación y posicionamiento.

## In scope

- separación framework vs producto;
- ownership por plano;
- modelo de consumo de OSF por Opita Sync;
- reglas de no-duplicación.

## Out of scope

- redefinir OSF;
- redefinir roadmap A-E;
- convertir OSF en producto final;
- introducir nuevos seams de dominio.

## Requirements

### Requirement: Framework vs product separation
The system MUST treat OSF and Opita Sync as separate concerns.

#### Scenario: Architectural ownership
- GIVEN a capability is being designed
- WHEN its responsibility is evaluated
- THEN kernel, runtime, policy and evidence concerns SHALL belong to OSF, while product UX and operational experience SHALL belong to Opita Sync

### Requirement: OSF as governed kernel
Opita Sync MUST consume OSF as the canonical governed kernel.

#### Scenario: Product uses kernel
- GIVEN Opita Sync needs to execute a governed corridor
- WHEN the product invokes core behavior
- THEN it SHALL rely on OSF canonical artifacts and execution boundaries

### Requirement: No duplicated truth
Opita Sync MUST NOT introduce an alternative truth plane, runtime authority or policy authority.

#### Scenario: No duplicate authority
- GIVEN product features evolve
- WHEN new surfaces or control features are added
- THEN they MUST reuse OSF authority instead of duplicating canonical logic

### Requirement: Product-owned experience
Opita Sync SHALL own tenant onboarding, visible catalog, operator surfaces and realtime delivery.

#### Scenario: Product control plane
- GIVEN a tenant interacts with the system
- WHEN onboarding, catalog visibility or operator experience is needed
- THEN these concerns SHALL belong to Opita Sync and not to OSF

### Requirement: Governed corridor preservation
The product MUST preserve the governed corridor defined by OSF.

#### Scenario: Corridor continuity
- GIVEN a user starts with natural language intent
- WHEN the request moves through the system
- THEN the flow SHALL remain `intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

## Ownership model

### OSF owns

- canonical contracts
- runtime
- policy
- approvals
- evidence
- event log
- inspection/recovery core
- registry/resolution

### Opita Sync owns

- tenant onboarding
- visible catalog
- operator/admin/approver surfaces
- product realtime delivery
- product configuration
- pilot and adoption workflow

## Acceptance criteria

- queda explícito que OSF != Opita Sync;
- queda definido qué ownership pertenece a cada uno;
- queda definido cómo Opita Sync consume OSF;
- queda prohibida la duplicación de runtime, truth y policy;
- el corredor gobernado sigue intacto.

## Dependencies

- `README.md`
- `source-of-truth/product-definition.md`
- `specs/productization-gap-closure/s0-product-scope-and-vertical-v1.md`
