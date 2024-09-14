# Simple-Api
A simple Express API built with TypeScript. This API includes endpoints for greetings and system information, and it is tested using Jest and Supertest.

## Features
* `GET /hello`: Returns a greeting message. Accepts an optional name query parameter.
* `GET /info`: Returns information about the server including the current time, client IP address, hostname, and request headers.

## Getting Started
1. Clone the repository:
* git clone `https://github.com/Manar960/Simple-Api.git`
* cd Simple-Api

2. Install dependencies:
   ```bash
   npm install

## Running the Server
1. Start the server:
* ```bash
   npm start
* The server will be running at `http://localhost:3000`.

## Running Tests
1. Run tests using `Jest`:
*  ```bash
   npm test
* This command will run all the tests defined in the __tests__ directory.

## Test Output
* The test results will indicate whether the API endpoints are functioning as expected.
* If there are issues with asynchronous operations (e.g., the server not closing properly), Jest might display a warning. Ensure all resources are properly cleaned up in your test code.

# Project Structure
* `src/index.ts`: Main entry point for the Express application.
* `src/controller/userInfo.controller.ts`: Contains the controller logic for handling API requests.
* `src/routes/userInfo.router.ts`: Defines the routes for the API.
* `__tests__/userInfo.test.ts`: Contains the Jest tests for the API endpoints.

## Example Usage

### GET /hello

- **Request**: `GET /hello?name=Manar`
- **Response**:

  ```json
  {
    "greeting": "Hello, Manar!"
  }

### GET /info

- **Request**: `GET /info`
- **Response**:

  ```json
  {
    "time": "2024-09-14T12:34:56.789Z",
    "client_address": "127.0.0.1",
    "host_name": "your-hostname",
    "headers": {
      "host": "localhost:3000",
      "user-agent": "PostmanRuntime/7.28.4",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9"
    }
  }



