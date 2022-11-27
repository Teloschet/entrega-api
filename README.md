<p align="center">
<img align="center" src="https://i.imgur.com/D6N2baN.png" width="150" height="150" alt="telos"><br><br>
<img src="https://travis-ci.org/laravel/framework.svg">
<img src="https://img.shields.io/packagist/dt/Teloschet/telos">
<img src="https://img.shields.io/packagist/v/Teloschet/telos">
<img src="https://img.shields.io/packagist/l/Teloschet/telos">
</p>

# Entrega-API
## Visão geral

Back-end para entregas feito em TypeScript/Prisma + PostgreSQL.
<br>
O Prisma é utilizado como ORM p/ auxiliar no cumprimento das regras de negócio e tornar o banco mais organizado.

# Documentação
## Geral
**Headers**
| header       | valor            | obrigatório |
|--------------|------------------|-------------|
| Content-Type | application/json | sim         |

# Dependências
### Desenvolvimento
* TypeScript
* Express
* Cors
* Bcrypt
* JWT
* Ts-Node-Dev
* Dotenv
* Express-async-errors
* Morgan
* Signale

### Banco de Dados
* Prisma
* PostgreSQL

### Padronização de Código
* Eslint
* Prettier

# Utilização
## Para fazer download do projeto
~~~bash
> git clone https://github.com/Teloschet/entrega-api.git
> cd entrega-api
~~~

## Instalação de dependências
~~~bash
> yarn
~~~

## Subir migrates para banco de dados & Executar
~~~bash
> yarn run migrate
> yarn run dev
~~~

**Não esqueça de alterar as váriaveis de ambiente!**