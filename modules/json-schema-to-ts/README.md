# Exemplo: CRUD Básico com `@fastify/type-provider-json-schema-to-ts`

Este pacote demonstra uma API CRUD (Create, Read, Update, Delete) completa para gerenciar usuários, construída com Fastify e usando `json-schema-to-ts` para validação de schema com segurança de tipo.

## 🚀 Conceitos Principais Ilustrados

-   **Definição de Schema**: Todos os schemas são definidos como objetos JavaScript puros e validados com `as const satisfies JSONSchema`.
-   **Inferência de Tipos**: Os tipos TypeScript são inferidos automaticamente a partir dos schemas JSON, garantindo um alinhamento perfeito entre a validação em tempo de execução e os tipos estáticos.
-   **Schemas Compartilhados**: Os schemas são registrados uma vez usando um `fastify-plugin` e referenciados (`$ref`) em múltiplas rotas para evitar duplicação.
-   **Desserialização de Tipos**: Mostra como converter tipos de dados automaticamente durante a serialização, como transformar uma string de data do banco de dados em um objeto `Date` na resposta.

## 🛠️ Tecnologias Utilizadas

-   [Fastify](https://fastify.dev/): O framework web.
-   [@fastify/type-provider-json-schema-to-ts](https://github.com/fastify/fastify-type-provider-json-schema-to-ts): A biblioteca que conecta as definições de JSON Schema aos tipos TypeScript.
-   [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts): O motor principal para a inferência de tipos.
-   [tsx](https://github.com/esbuild-kit/tsx): Para executar código TypeScript diretamente em desenvolvimento.

## ⚡ Como Executar Este Exemplo

1.  Certifique-se de ter instalado todas as dependências a partir da **raiz do monorepo**:
    ```bash
    # A partir da raiz do projeto
    npm install
    ```

2.  Execute o servidor de desenvolvimento para este pacote específico:
    ```bash
    # A partir da raiz do projeto
    npm run dev --workspace=@modules/json-schema-to-ts
    ```
    
    Alternativamente, você pode executar o script diretamente do diretório deste pacote:
    ```bash
    # A partir de modules/json-schema-to-ts
    npm run dev
    ```

## ↔️ Endpoints da API

A API segue um padrão RESTful para o recurso de usuários:

| Método   | Rota          | Descrição                  |
| :------- | :------------ | :------------------------- |
| `POST`   | `/users`      | Cria um novo usuário.      |
| `GET`    | `/users`      | Lista todos os usuários.   |
| `GET`    | `/users/:id`  | Obtém um usuário por ID.   |
| `PUT`    | `/users/:id`  | Atualiza um usuário por ID.|
| `DELETE` | `/users/:id`  | Deleta um usuário por ID.  |

### Exemplo de Requisição

Para criar um usuário, envie uma requisição `POST` para `/users` com o seguinte corpo:

```json
{
  "firstName": "John",
  "secondName": "Doe"
}
```
