# CRUD Produtos

Uma aplicação seguindo as ideias de um CRUD.  O front end foi feito em react e a api em spring.
Por padrão, a porta usada é a **localhost:8080**.
<br/>
<img src="https://i.imgur.com/Z4ZwJTV.png">

## Documentação da API

#### Retorna todos os produtos

```http
  GET /produtos
```

#### Retorna um produto baseado pelo nome

```http
  GET /produtos/{nome}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome do produto que você quer |

#### Retorna um item baseado pelo id

```http
  GET /produtos/produto/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O id do produto que você quer |


#### Retorna produtos baseado em uma categoria
```http
  GET /produtos/categoria/{categoria}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `categoria`      | `string` | **Obrigatório**. a categoria que você quer |


#### Adiciona um produto
```http
  POST /produtos/cadastrar
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `url`      | `string` | **Obrigatório**. Url do produto que você quer enviar|
| `nome`      | `string` | **Obrigatório**. Nome do produto que você quer enviar|
| `categoria`      | `string` | **Obrigatório**. Categoria do produto que você quer enviar|
| `descricao`      | `string` | **Obrigatório**. Descrição do produto que você quer enviar|


#### Atualiza um produto
```http
  PUT /produtos/atualizar
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`        | `string`  | **Obrigatório**. Id do produto que você quer alterar|
| `url`      | `string` | **Obrigatório**. Url do produto que você quer alterar|
| `nome`      | `string` | **Obrigatório**. Nome do produto que você quer alterar|
| `categoria`      | `string` | **Obrigatório**. Categoria do produto que você quer alterar|
| `descricao`      | `string` | **Obrigatório**. Descrição do produto que você quer alterar|



#### Remove um produto
```http
  PUT /produtos/remover/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`        | `string`  | **Obrigatório**. Id do produto que você quer deletar|




