<img width="120px" align="right" src="https://ng.cash/_nuxt/img/logo-ngcash-branco.88c5860.svg"/>  
<br/>
 <h1>API - Transações Financeiras</h1>
 
<p><strong>Contexto</strong></p>

Simulação de uma API <strong>dockerizada</strong> para um site interno de transações financeiras, no qual é possível realizar transferências e consultar seus dados, além de poder filtrar as transações realizadas em cash-in e cash-out. 

A api foi construída utilizando <strong>PostgreSQL</strong>, <strong>TypeScript</strong> e <strong>Node.js</strong>, no modelo <strong>MSC</strong> (model, service e controller).
Sendo <strong>TypeORM</strong> responsável pela conexão com o banco de dados, service pelas regras de negócio, e controller por lidar com as requisições e respostas.

A partir da rota de login, todas as rotas são autenticadas utilizando <strong>JWT</strong>.

Para uma boa estruturação do código foi configurado o <strong>ESLint</strong>.

Você pode testar a aplicação através do <strong>docker</strong> seguindo a explicação em "Como rodar o projeto na sua máquina".

<details>
 <summary><strong>Habilidades desenvolvidas durante o desenvolvimento do projeto:</strong></summary><br />
 
- :fire: **Organizar uma aplicação completa desde o primeiro passo**; :fire:
- Criar e modelar um banco de dados utilizando TypeORM;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada camada;
- Entender e aplicar os padrões REST;
-  :fire: **Criar aplicação dockerizada**; :fire:
- Utilizar Dotenv para as variáveis de ambiente secretas.

</details>


<details>
 <summary><strong>Tecnologias utilizadas:</strong></summary><br />
 <ul>
    <li>Typescript,</li>
    <li>Node.js,</li>
    <li>Nodemon,</li>
    <li>Express.js,</li>
    <li>Dotenv,</li>
    <li>PostgreSQL,</li>
    <li>TypeORM,</li>
    <li>JWT,</li>
    <li>Joi,</li>
    <li>Eslint,</li>
    <li>Express-async-errors,</li>
    <li>Bcrypt,</li>
    <li>Joi-password-complexity.</li>
</ul>

</details>

<details>
 
   <summary><strong>Como rodar o projeto na sua máquina:</strong></summary><br />
 
   <strong>:sparkles: Rodando com Docker</strong>
  
  >Clone o projeto em uma pasta/repositório git com o comando `git clone`
  
  - Caso não tenha o git instalado em sua máquina, você pode realizar a instalação através da [documentação](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
  
  - Entre na pasta do projeto clonado
  
  > Rode os containers com o comando `docker-compose up -d`
  
  - Esse serviço irá inicializar dois containers chamados postgres(port: 5432) e ng-finance(port: 3000)
  
  > Use o comando `docker exec -it ng-finance bash`
  
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  
  > Instale as dependências com `npm install`
  
  - Não é necessário editar o aquivo .env.example, o docker-compose já está com as variáveis de ambiente.
  
  > Para iniciar a aplicação: `npm start`
  
:eyes: **De olho nas dicas:** 
 
 - Para rodar o projeto desta forma, **obrigatóriamente** você deve ter o `Git`, o `Docker` e o `Docker-compose` instalados em seu computador.

 - :sparkles:E pronto!! O projeto está rodando na sua máquina:sparkles:
 
</details>

<details>
 <summary><strong>Informações sobre o banco de dados</strong></summary><br />
 
 ![Captura de tela de 2022-11-22 17-53-57](https://user-images.githubusercontent.com/93014254/203419410-5edc71fd-d956-4b55-8eca-9a874e869716.png)
 
   <p>A imagem acima exemplifica o banco de dados e as relações entre as tabelas</p>
   

</details>
