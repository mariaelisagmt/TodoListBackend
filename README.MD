#Passos para criar o projeto:
#Configurar o git
git init

#Criar uma nova branch
git checkout -b feature/estrutura

#Criar arquivo readme.md
Preencher com os dados iniciais do projeto e anotações

#Fazer o pull das alterações para o github e configurar o projeto

#criar o git ignore
com dados do node_modules e do .env

#Criando o projeto
npm init -y 

#Instale as dependencias
npm i express cors dotenv helmet morgan express-async-errors
npm i -D typescript ts-node @types/express @types/cors @types/morgan


#Inicialização do ts
npx tsc --init

Configure o arquivo

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src/",
    "moduleResolution": "node",
    "baseUrl": ".",
    "outDir": "./dist/",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "ts-node": { "transpileOnly": true }
}


#Criar essa estrutura
![](image.png)

server.ts: módulo de inicialização do servidor web onde nossa webapi estará hospedada, módulo de infraestrutura;
app.ts: módulo de configuração da webapi, módulo de aplicação;
routers: pasta onde guardaremos os módulos de roteamento, que mapeiam os endpoints para as funções de controle;
controllers: pasta onde guardaremos os módulos de controle, que recebem as requisições roteadas e fazem os processamentos necessários;
models: pasta onde guardaremos os módulos de entidades, que contém a especificação delas;
repositories: pasta onde guardaremos os módulos de repositório, que contém as funções de leitura, exclusão, inserção, etc das entidades;

https://www.luiztools.com.br/post/como-criar-uma-webapi-com-node-js-express-e-typescript/?utm_source=google&utm_medium=cpc&utm_campaign=12231680300&utm_content=151110166044&utm_term=tutorial%20api%20node%20express&gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0csmDpYT1OVL4ZZkZ2g08RRy7lDGpBfr_bKclV1G65lAT9_cbXyNe5s4aAo0YEALw_wcB