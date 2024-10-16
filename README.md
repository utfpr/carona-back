Carona Consciente: aplicativo móvel para conectar motoristas e comunidade acadêmica da UTFPR em traslados locais

## Descrição
O presente aplicativo trata-se de um aplicativo de carona universitária com foco na Universidade Tecnológica Federal do Paraná - Campus Campo Mourão, 
que visa unir passageiros e motoristas, servidores ou alunos da universidade, a fim de otimizar o encontro de caronas na rota da universidade.
As funcionalidades presentes no aplicativo são:
  - Criaçao de usuários, apenas com email com domínio @alunos.utfpr.edu.br ou @utfpr.edu.br;
  - Cadastro de carros por parte dos usuários;
  - Aos usuários com carros cadastrados, é possível selecionar o carro padrão;
  - Aos usuários com carros cadastrados, é possível editar ou excluir carros;
  - Aos usuários com carros cadastrados, é possível criar ou excluir caronas;
  - Aos usuários com caronas cadastradas, é possível remover usuários da carona;
  - À todos os uduários, é permito entrar e sair de caronas;
  - À todos os usuários presentes em uma carona, é possível enviar e visualizar mensagens no chat da carona;
Além disso, notificações são enviadas para o email dos usuários em situações como:
  - Criar conta;
  - Entrar em corrida, no caso de motoristas;
  - Sair ou ser removido da corrida;
  - Quando um usuário sai ou é removido de uma corrida em que se é motorista;

## Índice
- Instalação
- Uso
- Contribuição
- Licença
- Autores

## Instalação
  
 
Clone o repositório com o seguinte comando:

```bash
git clone https://github.com/utfpr/carona-back.git
```

Na sequência, acesse o diretório do repositório clonado e instale o Typescript com o seguinte comando:

```bash
npm install -g typescript
```

Ainda no mesmo diretório, instale as dependências do projeto, com o seguinte comando:

```bash
npm install
```

Após a instalação das dependências, crie a imagem no docker. Para isso, deve-se utilizar o comando:

```bash
docker run -d --name carona -p 5433:5432 -e POSTGRES_PASSWORD=123456 postgres:13.5
```

Na sequência é necessário criar um arquivo `.env`. O modelo pode ser encontrado no arquivo `.env.example` localizado na raiz do projeto.

Se você rodar o sistema em modo local (servidores backend e frontend na mesma máquina), apenas crie uma cópia do arquivo `.env.example` para `.env`

```bash
cp .env.example .env
```

Caso contrário, é necessário inserir a porta utilizada para a API, a url do banco de dados, uma chave para assinar e verificar os JSON Web Tokens.

Opcionalmente, caso deseje o funcionamento das notificações, um email e senha para APP de onde serão enviadas as notificações do aplicativo. Neste [link](https://support.google.com/accounts/answer/185833?hl=pt-BR) você pode encontrar mais informações de como cadastrar uma senha de aplicativo no email.

Com o .env devidamente configurado, é necessário executar o comando para criar o modelo do banco de dados:

```bash
npx prisma migrate dev
```

Você será solicitado a dar um nome para a nova migration. Escolha um nome que lhe for conveniente, como por exemplo, `carona`.

Opcionalmente, podemos povoar o banco de dados com dados sintéticos:

```bash
npm run seed
```

Em seguida, use o seguinte comando para inicializar a aplicação. 

```bash
npm run start:dev
```

Os dados sintéticos do banco possuem seis usuários (numerados de 1 a 6) com a mesma senha para acesso ao sistema, no seguinte padrão:

`Nome: Usuário 1`
`Email: usuario1@gmail.com`
`Senha: Abcde1234.`

Para fazer login, escolha um usário utilize o email e a senha provida para acessar o sistema pelo frontend.

            email: 'usuario[número de usuário]@gmail.com',
            password: 'Abcde1234.'


## Licença
O projeto utiliza a Licença de Software Livre MIT.

## Autores
  - William Wallace Teodoro Rodrigues - williamwallace@alunos.utfpr.edu.br
  - Guilherme Almeida Lopes - guilhermealmeidalopes@alunos.utfpr.edu.br
  - Yuri Ulisses dos Santos Baza - yuribaza@alunos.utfpr.edu.br
