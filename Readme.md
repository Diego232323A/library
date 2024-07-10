# Library Microservices

Este proyecto implementa una arquitectura de microservicios para gestionar una biblioteca. Incluye tres microservicios: `books-service`, `authors-service` y `reviews-service`. Cada microservicio tiene un endpoint que devuelve datos simulados.

## Estructura del Proyecto

- **books-service**: Servicio para gestionar libros.
- **authors-service**: Servicio para gestionar autores.
- **reviews-service**: Servicio para gestionar reseñas.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalación y Ejecución Local

### Paso 1: Clonar el Repositorio

```sh
git clone https://github.com/Diego232323a/library.git
cd library-microservices

### Paso 2: Navegar a Cada Microservicio, Instalar Dependencias y Ejecutar

Books Service
    cd books-service
    npm install
    npm start

Authors Service
    cd authors-service
    npm install
    npm start

Reviews Service
    cd reviews-service
    npm install
    npm start

### Paso 3: Acceder a los Endpoints

Books Service: http://localhost:3001/books
Authors Service: http://localhost:3002/authors
Reviews Service: http://localhost:3003/reviews