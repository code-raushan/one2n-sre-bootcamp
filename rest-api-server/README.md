# Student API

This API is built with Node.js, TypeScript, PostgreSQL, Prisma and Kysely. It provides CRUD operations for managing students.

## Base Route

All routes are prefixed with `/api/v1`.

## Routes

### GET /api/v1/students

Retrieves a list of all students.

### GET /api/v1/students/:id

Retrieves a specific student by their ID.

### POST /api/v1/students

Adds a new student. The request body should include the details of the student to be added.

### PATCH /api/v1/students/:id

Updates a specific student by their ID. The request body should include the details to be updated.

### DELETE /api/v1/students/:id

Deletes a specific student by their ID.

## Tech Stack

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- PostgreSQL: A powerful, open source object-relational database system.
- Prisma: An open-source database toolkit.
- Kysely: A TypeScript-first SQL query builder and runner.
- Makefile
- Docker
- Docker Compose
- Nginx