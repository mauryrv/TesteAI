# Contratos de API

## Estilo

- **REST** [ou GraphQL — definir].
- Base path: `/api/v1` [ajustar].
- Formato: JSON; charset UTF-8; datas em **ISO 8601** em UTC no wire [confirmar].

## Documentação viva

- Fonte da verdade: [preencher: OpenAPI gerado em build, arquivo YAML, etc.].
- URL pública da doc em dev: [preencher].

## Convenções REST

| Ação | Método | Exemplo |
|------|--------|---------|
| Listar | GET | `/api/v1/animals` |
| Obter um | GET | `/api/v1/animals/:id` |
| Criar | POST | `/api/v1/animals` |
| Atualizar total | PUT/PATCH | [definir] |
| Remover | DELETE | [definir soft vs hard] |

## Paginação e filtros

- Estilo: [cursor / offset — definir].
- Parâmetros padrão: `limit` máximo [ex.: 100], `sort` [whitelist de campos].

## Respostas de erro

Formato único sugerido:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Mensagem legível",
    "details": [{ "field": "weightKg", "issue": "must be positive" }]
  }
}
```

| Código HTTP | `code` interno | Uso |
|-------------|------------------|-----|
| 400 | `VALIDATION_ERROR` | Entrada inválida |
| 401 | `UNAUTHORIZED` | Sem credencial ou token inválido |
| 403 | `FORBIDDEN` | Credencial ok mas sem permissão ou outro tenant |
| 404 | `NOT_FOUND` | Recurso inexistente ou fora do tenant |
| 409 | `CONFLICT` | Violacao de invariante ou duplicidade |
| 500 | `INTERNAL_ERROR` | Erro não tratado (sem detalhes sensíveis) |

## Versionamento

- Quebra compatível: novo prefixo `/v2` ou header [definir política].

## Idempotência

Operações sensíveis (ex.: pagamento futuro): [definir uso de `Idempotency-Key`].
