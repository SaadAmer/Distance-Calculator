## Getting started
This is a project to calculate the distance betwen two addresses. It uses the Nominatim API for this purpose.

It has a backend, a frontend and database (PostgreSQL)

All three have their own dockerfiles and are containerized and run via docker compose.


### Setting up a development environment

You will need Docker and Docker Compose to run this project

Go into the backend and frontend directories and run the following command in each:

```bash
# Install dependencies

npm install
```

### Run Tests

Some tests have been added here (although not required in the document).
In future, these can be expanded to increase coverage and inlcude integration tests.

```bash
# Run Unit Tests

npm test
```

### Run Docker instance of Postgres Database
Run the following command to run all three containers (backend, forntend and database)
```bash

docker-compose up --build
```

## Known Issues
1. The applcation uses session storage. This sometimes causes an error in making the user_id. Open in a new incognito window to fix this
2. The web page does not look exactly like the figma document. This is due to time constraints.
3. Linting has not been implemented (not mentioned in the assessment document).
4. Limited unit tests have been implemented to display profieciency(Not mentioned in the assessment document).



## Release Process
1. Checkout `main` branch
2. Update version numbers in package.json files
3. Commit changes to `main`
4. Push changes to main.
6. Run CI/CD pipelines (In the future).