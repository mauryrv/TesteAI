# Modelo de domínio e glossário

## Glossário

| Termo | Definição |
|-------|-----------|
| Animal | Indivíduo do rebanho identificado unicamente na fazenda |
| Brinco / tag | Identificador físico ou eletrônico [definir regra de unicidade] |
| Lote | Agrupamento operacional de animais [persistente ou só etiqueta — definir] |
| Pasto | Área de pastejo; pode ter capacidade e histórico de ocupação |
| Protocolo sanitário | Conjunto de regras/tarefas sanitárias [detalhar] |
| GMD | Ganho médio diário entre duas pesagens |
| [preencher] | |

## Entidades principais (rascunho)

[Preencher atributos mínimos e se o identificador é UUID ou bigint.]

- **Farm** — nome, timezone, documento da propriedade [se necessário].
- **User** — vínculo com uma ou mais fazendas e papel.
- **Animal** — `farmId`, identificadores, raça, sexo, datas chave, status (`active`, `sold`, `dead`, …).
- **Weighing** — `animalId`, data/hora, peso, método.
- **HealthEvent** — tipo, data, produto/lote veterinário [conforme escopo].

## Invariantes (regras que não podem ser violadas)

1. Um animal pertence a **exatamente uma fazenda** [ou definir transferência como fluxo explícito].
2. Pesagem com data futura em relação ao servidor: [proibir / permitir com flag].
3. Animal encerrado (`sold`/`dead`): [proibir novos eventos exceto correção administrativa — definir].
4. [Preencher]

## Eventos de domínio (opcional)

Se usar eventos internos (não confundir com fila):

| Evento | Quando ocorre |
|--------|----------------|
| `AnimalRegistered` | [preencher] |
| [preencher] | |

## Dúvidas em aberto

- [ ] Unicidade do brinco: global na fazenda ou por espécie?
- [ ] [preencher]
