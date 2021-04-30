# Challenge Bten Fullstack

## Instruções

Criar um site web utilizando angular 11 e node.js, com os seguintes requisitos:

- Tela de Login
- Tela de Cadastro (opção caso o usuário não tenha login)
- Tela de Dashboard com gráficos em tela logada (dados mockados, pegando do backend)
- API de login
- API CRUD de usuário
- Integrando o client com server através de APIs

## Exemplo de tela logada
Somente um exemplo, não precisa ser necessariamente igual


![alt text](https://res.cloudinary.com/hew4hghip/image/upload/v1619198749/geral/Challenge_bten_front.png)

## Iniciando Server:

- Configurar .env de acordo com .env-example

```sh
cd server
yarn
yarn typeorm migration:run
yarn dev
```

## Iniciando Client:

```sh
cd client
yarn
ng serve
```

## Entrega:

- Criar um repositório público no github ou bitbucket com esse código e nos enviar o link

## Extras (opcional): 
- Telas responsivas
- Testes unitários
- Hospedar em servidor gratuito (heroku por exemplo)
- 