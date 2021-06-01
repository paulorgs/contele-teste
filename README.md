# contele-teste

## Descrição

> API desenvolvida com Typescript,NodeJS e Express

## Endpoints

<table>
<thead>
<tr>
<th>HTTP</th>
<th>ROUTE</th>
<th>BODY</th>
<th>DESCRIÇÃO</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/api/v1/users</td>
<td></td>
<td>Listar todos usuarios</td>
</tr>
<tr>
<td>GET</td>
<td>/api/v1/users/user_id</td>
<td></td>
<td>Listar único usuário</td>
</tr>
<tr>
<td>POST</td>
<td>/api/v1/users</td>
<td>JSON { "email":"usuario@exemplo.com", "password":"senha"}</td>
<td>Criar único usuário</td>
</tr>
<tr>
<td>PUT</td>
<td>/api/v1/users/user_id</td>
<td>JSON  { "email":"usuario@exemplo.com", "password":"senha"} </td>
<td>Alterar um único usuário</td>
</tr>
<tr>
<td>DELETE</td>
<td>/api/v1/users</td>
<td></td>
<td>Remover todos usuarios</td>
</tr>
<tr>
<td>DELETE</td>
<td>/api/v1/users/user_id</td>
<td></td>
<td>Remover único usuário</td>
</tr>
</tbody>
</table>

## Instalação e Execução

- Baixe o projeto em sua máquina diretamente ou então utilizando o comando <code>git clone https://github.com/paulorgs/contele-teste </code>

- Entre na pasta do projeto e execute o comando <code> yarn </code> ou então <code> npm install </code> e aguarde a instalação dos pacotes.

- Execute o comando <code>yarn dev:start</code> ou então  <code>npm run dev:start</code> caso tenha utilizado NPM para realizar a instalação.

- Utilize um cliente REST como Postman ou Insomnia para realizar as requisições.
