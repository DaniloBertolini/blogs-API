# :pencil: [API Blog]()

Uma API e um banco de dados para produção de conteúdo em um blog! Foi desenvolvida uma aplicação em Node.js utilizando o pacote sequelize para criação de um CRUD de posts, com validação do usuário utilizando a biblioteca JsonWebToken.

## :bomb: Tecnologias

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [JsonWebToken](https://jwt.io/)
- [Nodemon](https://nodemon.io/)
- [NodeJs](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Joi](https://joi.dev/)
- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)

## :bulb: Funcionalidades

- Endpoints que serão conectados ao banco de dados
- Controle de usuários através de validação JWT.
- É necessário um login para faer uma postagem.

## :computer: Utilização

1. **GET /Login**
   - Retorna um token do Usuário que acabou de Logar.

2. **GET /user**
   - Retorna uma lista com todos os Usuários.

3. **GET /user/:id**
   - Retorna um Usuário em específico pelo ID.
   
4. **POST /user**
   - Cadastra um Usuário novo.

5. **DELETE /user/me**
   - Deleta o usuário logado no momento.

6. **GET /categories**
   - Retorna uma lista com todas as categorias.

7. **POST /categories**
   - Cria uma categoria.

8. **GET /post**
   - Retorna uma lista com todas as Postagens

9. **GET /post/:id**
   - Retorna uma Postagem em específico pelo ID.

10. **GET /post/search?q=vamo**
    - Retorna uma lista com todas as Postagens que contenham no Título ou no Conteúdo, a palavra buscada.

11. **POST /post**
    - Cria uma nova Postagem.

12. **PUT /post/:id**
    - Altera o Título e o Conteúdo da Postagem em específico pelo ID.

13. **DELETE /post/:id**
    - Deleta uma Postagem em específico pelo ID.

## :whale2: Como acessar com Docker
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está `1.26.0` por `1.29.2`.**

  - Abra o terminal e clone o repositório.
  ```bash
    git clone git@github.com:DaniloBertolini/blogs-API.git
  ```
  - Execute os serviços `node` e `db`
  ```bash
    docker-compose up -d --build
  ```
  - Entre no `container` executado no comando anterior.
  ```bash
    docker exec -it blogs_api bash
  ```
  - Instale as dependências dentro do container.
  ```bash
    npm install
  ```
  - Inicie o servidor de desenvolvimento.
  ```bash
    npm run dev
  ```
  - [Now go to HTTP requests](#http).

## :books: Como acessar localmente

  - Abra o terminal e clone o repositório.
  ```bash
    git clone git@github.com:DaniloBertolini/blogs-API.git
  ```
  - Renomeie o `env.example` arquivo para `.env`.
  - Instale as dependências.
  ```bash
    npm install
  ```
  - Inicie o servidor de desenvolvimento.
  ```bash
    env $(cat .env) npm run dev
  ```

## :zap: Usando solicitações HTTP para usar a API
  - Acesse uma plataforma de sua preferência para fazer solicitações HTTP, como [ThunderClient](https://www.thunderclient.com/) ou [Insomnia](https://insomnia.rest/) 
  - Importe o arquivo de solicitação HTTP válido para sua plataforma da past `requestCollection`.
  - Agora você pode testar esta API.
