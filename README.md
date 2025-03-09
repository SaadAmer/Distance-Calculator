## Getting started

### Setting up a development environment

You will need Docker and Docker Compose to run this project

```bash
# Install dependencies
Go into the backend and frontend directories and run the following command in each:

npm install

# Activate virtual environment
poetry shell
```

### Run local server
```bash
poe serve
```


### Run Tests
```bash
# Run Unit Tests
poe unit

# Run Integration Tests
poe integration

# Update Integration Syrupy snapshots
poe integration-snapshot-update
```

### Run Docker instance of Postgres Database
```bash
# Start database
poe db_start

# Stop database
poe db_stop

# Migrate database
poe db_migrate
```

## Release Process
1. Checkout `main` branch
2. Run `poetry run poe version --tag <semver without 'v' prefix>`
3. Commit changes to `main`
4. Push changes to main.
5. Add a tag `v<semver>` through GitLab
6. Run CI/CD pipelines