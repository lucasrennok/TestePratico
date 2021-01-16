# :bookmark_tabs: Teste Prático

Aplicação web para armazenar comentários em um banco MySql a partir de requisições Ajax à API local. A aplicação deve ler os comentários com Text to Speech do IBM Watson.

## Como Executar

Primeiramente, deve-se instalar as dependências e configurar os arquivos .env existentes na pasta 'server' e na pasta 'web'.

### - Instalação

Baixe este repositório em algum diretório da máquina e deixe-o aberto.

* **Server**

Abra um terminal ou prompt de comando dentro da pasta 'server' e execute o comando:
> npm install

* **Web**

O mesmo deve ser feito na pasta 'web', abrindo outro terminal ou prompt de comando execute o comando:
> npm install

### - Configuração

* **Server**

Primeiramente, crie um banco de dados MySql para guardar os comentários.
Depois, na pasta 'server' altere 'mysql://USER:PASS@localhost:3306/DB_NAME' presente no arquivo '.env.example' para o que é utilizado para acessar o banco, mudando as partes de 'USER' para o usuário, 'PASS' para a senha, '3306' para a porta e 'DB_NAME' para o nome do banco. Por fim, renomeie o arquivo '.env.example' para '.env'.

Na pasta 'server', abra um terminal ou prompt de comando e execute o comando:
> npm run knex:migrate

Assim serão executadas as migrações para o banco de dados MySql.

* **Web**

Entre na pasta 'web' e altere 'YOUR_API_BASE_URL_HERE' e 'YOUR_API_KEY_HERE' para a URL e a ApiKey recebidas da API Text to Speech do IBM Watson.

### - Execução

* **Server**
Na pasta 'server' execute o comando:
> npm start

* **Web**
Na pasta 'web' execute o comando:
> npm start
