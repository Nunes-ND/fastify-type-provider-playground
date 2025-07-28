# Exemplo: CRUD Básico com `@fastify/type-provider-zod`

Este pacote demonstra uma API CRUD (Create, Read, Update, Delete) completa para gerenciar usuários, construída com Fastify e usando `zod` para validação de schema com segurança de tipo.

## 🚀 Conceitos Principais Ilustrados

-   **Definição de Schema com Zod**: Todos os schemas são definidos usando os construtores de schema do Zod (ex: `z.object({...})`).
-   **Inferência de Tipos**: Os tipos TypeScript são inferidos diretamente dos schemas Zod usando `z.infer<typeof schema>`, garantindo um alinhamento perfeito entre a validação e os tipos estáticos.
-   **Validação Integrada**: O Fastify utiliza o `@fastify/type-provider-zod` para validar automaticamente as requisições e serializar as respostas com base nos schemas definidos.
-   **Coerção de Tipos**: Demonstra como o Zod pode coagir tipos de entrada (como strings em rotas) para os tipos esperados (como números) automaticamente.

## 🛠️ Tecnologias Utilizadas

-   [Fastify](https://fastify.dev/): O framework web.
-   [@fastify/type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod): A biblioteca que conecta as definições de schema do Zod ao Fastify.
-   [Zod](https://zod.dev/): A biblioteca de validação de schema e inferência de tipos.
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
    npm run dev --workspace=@modules/zod
    ```
    
    Alternativamente, você pode executar o script diretamente do diretório deste pacote:
    ```bash
    # A partir de modules/zod
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
