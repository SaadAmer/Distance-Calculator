## Getting started

### Setting up a development environment

You will need Docker and Docker Compose to run this project

Go into the backend and frontend directories and run the following command in each:

```bash
# Install dependencies

npm install
```

### Run Tests
```bash
# Run Unit Tests
npm test
```

### Run Docker instance of Postgres Database
```bash

Run the following command to run all three containers (backend, forntend and database)
docker-compose up --build
```

## Release Process
1. Checkout `main` branch
2. Update version numbers in package.json
3. Commit changes to `main`
4. Push changes to main.
6. Run CI/CD pipelines (In the future).