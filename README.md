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
 
</details>

<details>
 <summary><strong>Informações sobre o banco de dados:</strong></summary><br />
 
 ![Captura de tela de 2022-11-22 17-53-57](https://user-images.githubusercontent.com/93014254/203419410-5edc71fd-d956-4b55-8eca-9a874e869716.png)
 
   <p>A imagem acima exemplifica o banco de dados e as relações entre as tabelas</p>
   
   - A tabela <strong>users</strong> possui informações sobre os usuários;
   - A tabela <strong>transactions</strong> possui informações das transações feita por cada usuário;
   - A tabela <strong>accounts</strong> possui informações da conta de cada usuário:
     Essa tabela possui um relacionamento N:1 com a tabela transactions, sendo assim, uma conta pode possuir várias transações, mas uma transação só pode ser feita por uma conta.
   
</details>

</details>

<details>
 <summary><strong>Regras de negócio:</strong></summary><br />
   
  - Qualquer pessoa deverá poder utilizar a aplicação. Para isso, basta realizar o cadastro informando *username* e *password*.
- Deve-se garantir que cada *username* seja único e composto por, pelo menos, 3 caracteres.
- Deve-se garantir que a *password* seja composta por pelo menos 8 caracteres, um número e uma letra maiúscula. Lembre-se que ela deverá ser *hashada* ao ser armazenada no banco.
- Durante o processo de cadastro de um novo usuário, sua respectiva conta deverá ser criada automaticamente na tabela **Accounts** com um *balance* de R$ 100,00. É importante ressaltar que caso ocorra algum problema e o usuário não seja criado,  a tabela **Accounts** não deverá ser afetada.
- Todo usuário deverá conseguir logar na aplicação informando *username* e *password.* Caso o login seja bem-sucedido, um token JWT (com 24h de validade) deverá ser fornecido.
- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar seu próprio *balance* atual. Um usuário A não pode visualizar o *balance* de um usuário B, por exemplo.
- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de realizar um *cash-out* informando o *username* do usuário que sofrerá o *cash-in*), caso apresente *balance* suficiente para isso. Atente-se ao fato de que um usuário não deverá ter a possibilidade de realizar uma transferência para si mesmo.
- Toda nova transação bem-sucedida deverá ser registrada na tabela **Transactions**. Em casos de falhas transacionais, a tabela **Transactions** não deverá ser afetada.
- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar as transações financeiras (*cash-out* e *cash-in*) que participou. Caso o usuário não tenha participado de uma determinada transação, ele nunca poderá ter acesso à ela.
- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de filtrar as transações financeiras que participou por:
 > Transações de *cash-out;*
 
 > Transações de *cash-in.*
   
</details>
