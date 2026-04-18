# Segurança e LGPD

## Autenticação

- Mecanismo: [JWT em header Bearer / cookies httpOnly — definir].
- Refresh tokens: [sim/não; onde armazenar no cliente].
- Tempo de vida do access token: [preencher].

## Autorização

- Modelo: **RBAC** [ou ABAC — definir].
- Perfis iniciais: [ex.: `farm_admin`, `operator`, `vet_readonly`].

| Perfil | Pode |
|--------|------|
| [preencher] | |

## Multi-tenant (multi-fazenda)

- Identificador do tenant: [header `X-Farm-Id` / claim JWT `farmId` / subdomínio — **definir uma fonte única**].
- **Toda** leitura/escrita em dados de negócio deve filtrar por `farm_id` no servidor. O cliente não é fonte confiável.
- Testes de integração devem incluir caso **cross-tenant** esperando 404 ou 403.

## Senhas e credenciais

- Algoritmo: [preencher: ex. Argon2id, bcrypt].
- Política mínima de senha: [preencher].
- Nunca logar senha, token completo ou `Authorization`.

## LGPD e dados pessoais

- Dados pessoais tratados: [listar: nome, e-mail, telefone de usuários/colaboradores].
- Base legal: [consentimento / execução de contrato — definir com assessoria se necessário].
- Titular pode solicitar: [exportação / exclusão — fluxo a definir].
- Retenção: [preencher prazos].

## Infraestrutura

- HTTPS obrigatório em produção.
- Cabeçalhos: [preencher: HSTS, CSP conforme frontend].
- Segredos: [Vault / env do provedor / variáveis do CI — definir].

## Incidentes

- Contato responsável: [preencher].
- Passos resumidos em caso de vazamento: [link interno ou checklist].
