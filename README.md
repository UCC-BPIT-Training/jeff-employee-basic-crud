# Employee Management API

## Overview

Build a basic HR-style REST API using Node.js and Express to manage employee records. Store data in a simple array for now.

## Installation

```sh
npm install
```

## Run the server

```sh
npm run dev
```

## Requirements

### Sample Employee Data

Create an array to store employees like this:

```js
const employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'HR Specialist' },
];
```

## Endpoints to Build

### `1️⃣ GET /employees`

- Return the full list of employees

### `2️⃣ GET /employees/:id`

- Return a single employee by ID
- If not found, return 404 with a message, (add `status`)

```js
res.status(404).json({ message: 'Employee not found' });
```

### `3️⃣ POST /employees`

- Add a new employee
- Accept `name` and `position` from the request body
- Generate a unique ID manually (e.g., `Math.max(...ids) + 1` or `crypto.randomUUID()`, see https://nodejs.org/api/crypto.html#cryptorandomuuidoptions)

### `4️⃣ PUT /employees/:id`

- Update an existing employee's name or position
- Return updated object or error if not found

### `5️⃣ DELETE /employees/:id`

- Remove an employee from the list by ID

## Hint

- You can use `find()` method, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- You can use `crypto.randomUUID()`, see https://nodejs.org/api/crypto.html#cryptorandomuuidoptions

## Stretch Goals (Optional Challenges)

### Validation

- Ensure name and position are not employe
- Return a 400 error for invalid input

### Search Functionality

- Add `GET /employees/search` with query to get by its key (e.g., `/employees/search?name=Alice`)
- Return all emplyees matching the name (case-insensitive)

### Add "status" field

- Allow employees to be "active" or "inactive"
- Filter by status `GET /employees?status=active`

## Deliverables

- A working Express server
- Routes for all 5 CRUD actions
- Responses in clean JSON format
- Proper error handling
