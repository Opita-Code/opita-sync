# S1A — AWS-first platform profile v1

## Objetivo

Definir el profile de implementación AWS-first para Opita Sync v1 preservando las decisiones duras ya cerradas del baseline reusable v1.

## In scope

- mapping de seams actuales a servicios AWS recomendados;
- reglas de no-regresión arquitectónica;
- componentes AWS baseline vs opcionales.

## Out of scope

- reabrir runtime durable;
- reemplazar Cerbos como PDP principal;
- mover truth plane fuera de PostgreSQL;
- convertir AWS services en nueva fuente de verdad del dominio.

## Requirements

### Requirement: Durable runtime preservation
The AWS implementation MUST preserve Temporal as the only durable runtime of truth.

#### Scenario: Workflow runtime on AWS
- GIVEN the system is deployed on AWS
- WHEN the durable runtime is selected
- THEN the runtime SHALL remain Temporal and MUST NOT be replaced by Step Functions

### Requirement: Policy engine preservation
The AWS implementation MUST preserve Cerbos as the main PDP.

#### Scenario: Policy on AWS
- GIVEN the system runs on AWS
- WHEN policy enforcement is deployed
- THEN Cerbos SHALL remain the PDP and MUST NOT be replaced by Amazon Verified Permissions as core authority

### Requirement: Truth plane preservation
The AWS implementation MUST preserve PostgreSQL as the canonical transactional truth plane.

#### Scenario: Transactional truth on AWS
- GIVEN the system uses AWS managed data services
- WHEN the truth plane is deployed
- THEN Aurora PostgreSQL SHALL be the preferred deployment target for canonical records

### Requirement: Artifact plane mapping
The AWS implementation SHALL use Amazon S3 as the baseline artifact and evidence plane.

#### Scenario: Artifact persistence
- GIVEN artifacts or evidence blobs need durable storage
- WHEN the artifact plane is provisioned on AWS
- THEN the system SHALL store them in S3 and not inside PostgreSQL blobs by default

### Requirement: Cache and retrieval mapping
The AWS implementation SHOULD use ElastiCache for Valkey and Amazon OpenSearch Service for retrieval or corpus workloads when activated.

#### Scenario: Complementary planes
- GIVEN cache and retrieval are enabled
- WHEN AWS services are selected
- THEN ephemeral acceleration SHALL map to ElastiCache for Valkey and corpus search SHALL map to OpenSearch without becoming truth plane

### Requirement: Compute and platform profile
The AWS implementation SHOULD use Amazon EKS as the primary deployment baseline for core services that preserve the current seams.

#### Scenario: Core services on AWS
- GIVEN Opita Sync services are deployed on AWS
- WHEN a platform profile is selected
- THEN EKS SHOULD host Temporal, Cerbos and core application services while preserving current boundaries

### Requirement: Observability profile
The AWS implementation MUST preserve OpenTelemetry and SHOULD map observability to AWS-managed complements without replacing canonical evidence.

#### Scenario: Observability on AWS
- GIVEN the observability stack is deployed on AWS
- WHEN traces, metrics and logs are exported
- THEN OTel SHALL remain the instrumentation baseline and observability MUST NOT replace canonical evidence or event records

## AWS service mapping

| Seam / Need | AWS recommendation | Rule |
|---|---|---|
| transactional truth plane | Amazon Aurora PostgreSQL | canonical truth |
| durable runtime | Temporal on Amazon EKS backed by Aurora PostgreSQL | do not replace with Step Functions |
| policy decision point | Cerbos on Amazon EKS | do not replace with AVP as core PDP |
| object storage / evidence | Amazon S3 | primary artifact plane |
| cache / locks / hints | Amazon ElastiCache for Valkey | ephemeral only |
| retrieval / corpus | Amazon OpenSearch Service | never truth plane |
| compute baseline | Amazon EKS | preferred baseline |
| ingress / edge | AWS Load Balancer Controller + ALB/NLB; API Gateway where edge protocol/value justifies it | no new domain seams |
| secrets | AWS Secrets Manager | operational secret source |
| identity optional | Amazon Cognito or IAM Identity Center | optional platform identity |
| observability | ADOT + Amazon Managed Grafana + CloudWatch / AMP as appropriate | derived observability only |

## Alternatives with tradeoffs

### Identity

- **Amazon Cognito / IAM Identity Center**: mejor fit AWS-native, menos fricción operativa, integración fuerte con ecosistema AWS.
- **Keycloak en EKS**: más portable y controlable, pero con más carga operativa.

### Edge

- **ALB/NLB + EKS**: más simple para servicios internos y HTTP estándar.
- **API Gateway**: útil para borde público, throttling, auth centralizada y contratos externos, pero no debe introducir seams nuevos por sí mismo.

### Observability

- **ADOT + AMG + CloudWatch/AMP**: mejor fit AWS-managed y menor carga operativa.
- **LGTM self-managed en EKS**: más cercanía al documento convergente original, pero más costo operativo.

## Acceptance criteria

- queda explícito qué servicios AWS mapean a cada seam principal;
- queda explícito qué NO se puede reemplazar aunque exista servicio AWS alternativo;
- Aurora PostgreSQL, S3, EKS, ElastiCache y OpenSearch quedan ubicados correctamente;
- identity y observability quedan como perfiles de plataforma, no como redefinición del dominio.

## Dependencies

- `specs/osf-convergence/phase-1-implementation-profile.md`
- `specs/osf-convergence/phase-5-service-topology-and-platform-profile.md`
- `specs/productization-gap-closure/s1-tenant-operable-baseline-v1.md`
