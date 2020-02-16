# INFOSEC

## First project - JWT implementation



## Routes

#### Users and sessions
| URL | Type | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| /session | unauthenticated | post | JSON | JSON | Create a new session |
| /dashboard | authenticated | get | Nothing | text | JWT authentication test |


## API

| Technology | Description | Link |
| ------ | ------ | ------ |
| GitHub | Version Controlling | [github.com] |

## API Directories

- Routes ```./src/routes```
- Auth middleware ```./src/app/middlewares```
- Auth configuration ```./src/config/auth```
- Server configurations ```./src/server.js```

## Configuring the API locally

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code> or <code>yarn</code>
- Create an ```.env``` file similar to ```.env.example``` and add your secret in AUTH_SECRET
- Run the server in development mode <code>npm run dev</code> or <code>yarn dev </code>
- Access in your browser <a href="http://localhost:3001/dashboard">http://localhost:3001/dashboard</a>

By: <a href="https://github.com/hick97">Henrique Augusto</a>

[mlab.com]: <https://mlab.com>
[github.com]: <https://www.github.com>
