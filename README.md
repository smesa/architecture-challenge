# Architecture Challenge

This project includes a Node.js server and a React web application.

## Requirements

- Docker
- Docker Compose

## Project Structure
```.
├── README.md
├── docker-compose.yml
├── server
│ ├── app.js
│ ├── src
│ │ └── ...
│ └── Dockerfile
└── web
├── src
│ └── ...
├── public
│ └── ...
└── Dockerfile```

## Instructions to run the project

1. Clone this repository on your local machine.

```bash
git clone https://github.com/smesa/architecture-challenge.git
```

2. Navigate to the project directory.

```bash
cd architecture-challenge
```

3. Build and run the services using Docker Compose.

```bash
docker-compose up -d --build
```

4. The web application will be available at http://localhost:5173, and the server at http://localhost:3000.

## Stop and remove services

To stop and remove the services and containers, run the following command:

```bash
docker-compose down
```