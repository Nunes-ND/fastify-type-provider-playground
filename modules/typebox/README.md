# Exemplo: CRUD Básico com `@fastify/type-provider-typebox`

Este pacote demonstra uma API CRUD (Create, Read, Update, Delete) completa para gerenciar usuários, construída com Fastify e usando `@sinclair/typebox` para validação de schema com segurança de tipo.

## 🚀 Conceitos Principais Ilustrados

-   **Definição de Schema com TypeBox**: Todos os schemas são definidos de forma programática usando os construtores do TypeBox (ex: `Type.Object({...})`).
-   **Inferência de Tipos**: Os tipos TypeScript são inferidos a partir dos schemas usando `Static<typeof schema>`, garantindo consistência entre a estrutura de dados e os tipos estáticos.
-   **Validação Eficiente**: O Fastify utiliza o `@fastify/type-provider-typebox` para compilar e validar os schemas de forma otimizada, aproveitando o compilador JIT do Ajv.
-   **Schemas Reutilizáveis**: Mostra como criar schemas componentizados e reutilizá-los em diferentes partes da aplicação para manter o código limpo e organizado.

## 🛠️ Tecnologias Utilizadas

-   [Fastify](https://fastify.dev/): O framework web.
-   [@fastify/type-provider-typebox](https://github.com/fastify/fastify-type-provider-typebox): A biblioteca que integra o TypeBox com o sistema de tipos do Fastify.
-   [@sinclair/typebox](https://github.com/sinclairzx81/typebox): A biblioteca para construir schemas JSON com segurança de tipo em TypeScript.
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
    npm run dev --workspace=@modules/typebox
    ```
    
    Alternativamente, você pode executar o script diretamente do diretório deste pacote:
    ```bash
    # A partir de modules/typebox
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
