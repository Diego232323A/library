# Library Microservices

This project implements a microservices architecture to manage a library. It includes three microservices: `books-service`, `authors-service` and `reviews-service`. Each microservice has an endpoint that returns simulated data.

## Project Structure

- **books-service**: Service to manage books.
- **authors-service**: Service to manage authors.
- **reviews-service**: Service to manage reviews.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Local Installation and Execution

### Step 1: Clone the Repository

```sh
git clone https://github.com/Diego232323a/library.git
cd library-microservices

### Step 2: Navigate to Each Microservice, Install Dependencies and Run

Book Service
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

### Step 3: Access Endpoints

Books Service: http://localhost:3001/books
Authors Service: http://localhost:3002/authors
Reviews Service: http://localhost:3003/reviews