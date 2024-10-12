
# Microservicio de Consulta de Personajes

Este microservicio permite consultar personajes a través de dos endpoints: uno para obtener un personaje por nombre y otro para crear un nuevo personaje en la base de datos. En caso de que el personaje no exista en la base de datos, se consultará a un API externo para obtener la información necesaria.

## Ejecución

Para ejecutar el microservicio, asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu máquina. Luego, ejecuta el siguiente comando:

```bash
npm run start


## APIs

#### Buscar personaje por nombre

```http
  GET /api/character?name={name}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Nombre por el cual buscsara en ls BD |

#### Crear personaje

```http
  POST /api/character
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | Nombre del personaje a crear |
| `peso`      | `string` | Peso del personaje |
| `altura`      | `string` | altura del personaje |
