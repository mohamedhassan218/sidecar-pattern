# Sidecar Pattern

## About

**This repo is mentioned in [this article](https://medium.com/@m.hassan.def/sidecar-pattern-enhancing-microservices-with-ease-442ed6071654), which is about the Sidecar Architecture Pattern. Ensure to check it out, and I hope it adds knowledge to you through the repo, the article, or both!**

The **Sidecar Pattern** is a microservices design pattern where an auxiliary service (the sidecar) runs alongside the main service, providing additional functionalities such as logging, monitoring, or security without modifying the core service. This pattern is commonly used in microservice architectures to ensure separation of concerns while enhancing observability and maintainability.

In this example, the sidecar acts as a logging service, capturing requests sent to the main service and logging them for monitoring purposes.

This repository demonstrates the Sidecar Pattern using Node.js, Express, Docker, and Docker Compose. It consists of:

- **Main Service**: A simple Express server that responds with "Hello, World!".

- **Sidecar Service**: A logging service that receives logs from the main service and prints them to the console.

- **Docker Compose**: Used to manage both services as separate containers.

When a request is made to the main service, it forwards a log message to the sidecar service, which logs the request.

## How to Use This Repo

- Ensure you have the following installed:
  - Docker
  - Docker Compose

- Running the Project
  1. Clone the Repository:
        ```bash
        git clone <repo-url>
        cd sidecar-pattern
        ```
  2. Download dependencies for each service:
        ```bash
        cd main-service
        npm install
        cd ..
        cd sidecar-service
        npm install
        ```
  3. Start the Services:
        ```bash
            cd ..
            docker-compose up --build
        ```
  4. Test the Application:
     1. Open your browser and visit: 
        ```bash
        http://localhost:3000/
        ```
     2. Or use CURL from your terminal:
        ```bash
        curl http://localhost:3000/
        ```
  5. Stopping the Services:
        ```bash
        docker-compose down
        ```