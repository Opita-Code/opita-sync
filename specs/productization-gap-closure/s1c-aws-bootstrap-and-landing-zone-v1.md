# S1C — AWS bootstrap and landing zone v1

## Objetivo

Definir el bootstrap mínimo de plataforma y landing zone en AWS para desplegar Opita Sync v1 con profile AWS-first sin introducir deuda estructural temprana.

## In scope

- región efectiva del proyecto;
- red base para EKS, Aurora PostgreSQL y servicios core;
- baseline de secretos, cifrado y storage;
- naming y tags operativas mínimas;
- readiness mínima para S2-S6.

## Out of scope

- organización multi-account enterprise completa;
- multi-región;
- DR avanzado;
- optimización profunda de costos;
- despliegue final de todos los servicios del producto.

## Contexto verificado

- la configuración global del AWS CLI tiene una región inválida (`opita code`);
- `us-east-1` responde correctamente a STS;
- existe una VPC default y una VPC custom `10.0.0.0/16`;
- la VPC custom actual no tiene Internet Gateway ni NAT visibles y su tabla de rutas solo contiene la ruta local;
- existe al menos un bucket S3 (`prueba-aws-01`), pero no hay evidencia de bootstrap de plataforma listo para EKS/Aurora.

## Requirements

### Requirement: Valid project region
The platform bootstrap MUST define one valid AWS region as the effective region for Opita Sync v1.

#### Scenario: Region baseline fixed
- GIVEN the current CLI configuration contains an invalid region value
- WHEN the bootstrap baseline is defined
- THEN the project SHALL declare one valid effective region before provisioning platform resources

### Requirement: Dedicated workload network
The platform SHOULD use a dedicated VPC baseline for Opita Sync workloads instead of relying on the default VPC.

#### Scenario: Workload isolation
- GIVEN Opita Sync is bootstrapped in AWS
- WHEN workload networking is provisioned
- THEN the platform SHOULD isolate product workloads from the default VPC baseline

### Requirement: Private-first service placement
EKS nodes, Temporal, Cerbos and Aurora PostgreSQL MUST run in private subnets.

#### Scenario: Core services not public
- GIVEN the core platform is deployed
- WHEN subnets are assigned
- THEN core services SHALL run in private subnets and SHALL NOT require public IP exposure

### Requirement: Public ingress boundary
Only ingress components that terminate edge traffic MAY run in public subnets.

#### Scenario: Public edge only
- GIVEN the platform exposes HTTP traffic
- WHEN subnet placement is evaluated
- THEN only ALB/NLB or edge components MAY require public subnet placement

### Requirement: Baseline connectivity
The landing zone MUST provide the network paths required for EKS image pulls, secret retrieval, S3 artifact access and managed database connectivity.

#### Scenario: Platform can bootstrap workloads
- GIVEN EKS nodes and core services are created
- WHEN they need to pull images and access AWS managed services
- THEN connectivity SHALL exist without forcing public placement of core workloads

### Requirement: Secret management baseline
The platform MUST use AWS Secrets Manager for operational secrets.

#### Scenario: Secret source of truth
- GIVEN database credentials or service secrets are needed
- WHEN the platform provisions runtime configuration
- THEN Secrets Manager SHALL be the operational secret source

### Requirement: Encryption baseline
The platform MUST rely on AWS-managed encryption for S3, Aurora and secrets at minimum.

#### Scenario: Baseline encryption
- GIVEN storage resources are provisioned
- WHEN they are created
- THEN encryption at rest SHALL be enabled for canonical storage and secrets

### Requirement: Tagging baseline
The bootstrap MUST define a minimum tagging model for ownership, environment and cost attribution.

#### Scenario: Cost and ownership visibility
- GIVEN AWS resources are provisioned for Opita Sync
- WHEN tags are inspected
- THEN each resource SHALL expose project, environment, owner and managed-by metadata

## Recommended landing zone shape

### Region

- effective region inicial recomendada: `us-east-1`

### Networking

- 1 VPC dedicada para Opita Sync
- 3 AZs mínimas
- 3 subnets privadas para workloads
- 2 o 3 subnets públicas para ingress
- Internet Gateway
- NAT Gateway mínimo para private egress **o** VPC endpoints suficientes si se optimiza costo más adelante

### Core platform placement

- **EKS** en subnets privadas
- **Aurora PostgreSQL** en subnets privadas
- **Temporal** en EKS
- **Cerbos** en EKS
- **ALB/NLB** en subnets públicas

### Storage and secrets

- **S3** para artifacts/evidence
- **Secrets Manager** para secretos
- **KMS-managed encryption** baseline para S3, Aurora y secretos

## Minimum tagging model

- `Project=OpitaSync`
- `Environment=<dev|staging|prod>`
- `ManagedBy=aws-cli|terraform|eksctl`
- `Owner=<team-or-user>`
- `Scope=platform|data|runtime|edge`

## Alternatives with tradeoffs

### VPC strategy

- **Nueva VPC dedicada**: mejor aislamiento y menos deuda; recomendada.
- **Reusar la VPC custom actual**: menos trabajo inicial, pero hoy aparece incompleta y con riesgo de deuda de red.

### Egress strategy

- **NAT Gateway**: más simple operativamente, más costo.
- **VPC endpoints + egress reducido**: más eficiente a futuro, pero más complejidad de bootstrap.

### Provisioning workflow

- **AWS CLI + scripts iniciales**: rápido para bootstrap temprano.
- **Terraform después del baseline**: mejor reproducibilidad cuando el shape ya esté validado.

## Acceptance criteria

- la región efectiva queda fijada;
- queda definida una landing zone privada-first apta para EKS + Aurora;
- secrets, encryption y tagging baseline quedan definidos;
- queda explícito que la VPC default no es la base recomendada;
- la plataforma queda lista para habilitar S2-S6 sin reabrir seams del dominio.

## Dependencies

- `specs/productization-gap-closure/s1a-aws-platform-profile-v1.md`
- `specs/productization-gap-closure/s2-postgres-hardening-v1.md`
