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
  Primeiramente, é necessária a execução do seguinte comando para a instalação do typescript:
  
  `npm install -g typescript`
  
  Após isso, é necessário instalar as dependências, com o seguinte comando:

  `npm install`

  Com as dependências instaladas, é importante criar a imagem no docker. Para isso, deve-se utilizar o comando

  `docker run -d --name carona -p 5433:5432 -e POSTGRES_PASSWORD=123456 postgres:13.5`

  Com isso, a aplicação está devidamente configurada. Então, é necessário criar um documento .env. O modelo pode ser encontrado no arquivo 

  `.env.example`

  Nele, serão necessárias as inserções da porta utilizada para a API, a url do banco de dados, uma chave para assinar e verificar os JSON Web Tokens, e um email e senha para APP de onde serão enviadas as notificações do aplicativo. 
  Neste [link](https://www.bing.com/ck/a?!&&p=2f2547c968ceb018JmltdHM9MTcyODk1MDQwMCZpZ3VpZD0yMzg2NDM5Ni00NDlhLTYxM2QtMTNjMC01NzE1NDVlMzYwYmImaW5zaWQ9NTQ4NQ&ptn=3&ver=2&hsh=3&fclid=23864396-449a-613d-13c0-571545e360bb&psq=como+cadastrar+uma+senha+de+app+em+um+email&u=a1aHR0cHM6Ly93d3cucG9ydGFsaW5zaWdodHMuY29tLmJyL3Blcmd1bnRhcy1mcmVxdWVudGVzL2NvbW8tY3JpYXItc2VuaGEtZGUtYXBwLW5vLWdtYWlsIzp-OnRleHQ9QWNlc3NlJTIwc3VhJTIwQ29udGElMjBkbyUyMEdvb2dsZS4lMjBTZWxlY2lvbmUlMjBTZWd1cmFuJUMzJUE3YS4lMjBFbSxvbmRlJTIwdXNhciVDMyVBMSUyMGElMjBzZW5oYSUyMGRlJTIwYXBwLiUyMFNlbGVjaW9uZSUyMEdlcmFyLg&ntb=1) você pode encontrar mais informações de como cadastrar uma senha de aplicativo no email.

  Com o .env devidamente configurado, pode-se utilizar o comando 

  `ts-node-dev ./prisma/seed.ts`

  para povoar o banco de dados, seguido do comando

  `ts-node-dev ./src/main.ts`

  para inicializar a aplicação. 

  Caso não queira povoar o banco, pode-se utilizar diretamente o segundo comando. 

  Caso povoe o banco e deseja acessar algum dos usuários já criados, as informações de login desses usuários são:

            email: 'usuario[número de usuário]@gmail.com',
            password: 'Abcde1234.'

  No total, 6 usuários são cadastrados por esse comando, e cada um possui como diferença no login apenas o número(de 1 a 6) no espaço [número do usuário] no email.
    

## Licença
O projeto trata-se de um software livre.

## Autores
  - William Wallace Teodoro Rodrigues - williamwallace@alunos.utfpr.edu.br
  - Guilherme Almeida Lopes - guilhermealmeidalopes@alunos.utfpr.edu.br
  - Yuri Ulisses dos Santos Baza - yuribaza@alunos.utfpr.edu.br
