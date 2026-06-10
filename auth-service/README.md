# Auth Service

Handles user registration, login, and JWT token generation.

## Port
3001

## Database
MongoDB — `climdash_auth`

## Endpoints
- POST /auth/register — Create new user
- POST /auth/login — Login and get JWT token

## Environment Variables
- PORT=3001
- MONGO_URI=mongodb://mongo-auth:27017/climdash_auth
- JWT_SECRET=supersecretkey123

## Run locally
npm install
node src/server.js