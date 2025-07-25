<p align="center">
  <h1>Fastify Schema Provider Playground</h1>
</p>

> 👨‍🚀 **Um repositório para estudar e comparar diferentes provedores de schema no Fastify.**

## 💎 Sobre Este Repositório

Este repositório é um monorepo playground projetado para demonstrar e comparar várias bibliotecas de validação de schema e provedores de tipo no ecossistema Fastify. Cada pacote é um exemplo autocontido de uma API CRUD simples, permitindo uma comparação clara e direta entre diferentes abordagens.

O objetivo principal é fornecer um ambiente de aprendizado estruturado para entender como integrar e usar os principais provedores de tipo, como `@fastify/type-provider-json-schema-to-ts`, `@fastify/type-provider-zod` e `@fastify/type-provider-typebox`. Também exploramos como substituir o validador padrão por outras bibliotecas populares, como `yup` ou `joi`.

### 📦 Pacotes do Playground

| #   | 💎   | Exemplo                                    | Status     |
| --- | --- | ------------------------------------------ | ---------- |
| 1   | 💎   | `@fastify/type-provider-json-schema-to-ts` | `Em breve` |
| 2   | 💎   | `@fastify/type-provider-zod`               | `Em breve` |
| 3   | 💎   | `@fastify/type-provider-typebox`           | `Em breve` |

### ⚡ Como Executar um Exemplo

1.  **Clone o repositório** e navegue para a raiz do projeto.

2.  **Instale todas as dependências** para o monorepo inteiro:
    ```bash
    npm install
    ```

3.  **Execute um exemplo específico** usando o comando `npm run dev` com a flag `--workspace`. Por exemplo, para executar o exemplo `json-schema-to-ts`:
    ```bash
    npm run dev --workspace=@modules/json-schema-to-ts
    ```
    
    O servidor para o exemplo escolhido será iniciado em modo de desenvolvimento com recarregamento automático.

---

🚀 **Bons estudos!**
