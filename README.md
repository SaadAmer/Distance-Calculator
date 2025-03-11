## Getting started
This is a project to calculate the distance betwen two addresses. It uses the Nominatim API for this purpose.

It has a backend, a frontend and database (PostgreSQL)

All three have their own dockerfiles and are containerized and run via docker compose.

In a real application, the environment variables ould have been gotten froma secure secrets vault.

The application has been deployed on AWS and can be accessed at http://13.40.144.220:4173/


### Available Endpoints:

- Distance: Calculates the distance between two addresses. Stores successful queries.

- History: Returns a table of the user's successful queries.

### Run a Dockerized instance of the Distance Application
Run the following command to run all three containers (backend, forntend and database)

You will need Docker and Docker Compose to run this project

```bash
docker compose up --build

# or if using an older standalone version:

docker-compose up --build
```

Navigate to http://localhost:4173/  on a web browser to test.

### Setting up a development environment locally

Go into the backend and frontend directories and run the following command in each:

```bash
# Install dependencies

npm install
```

In case you want to run the components without docker, you will need Node.js 18, and PostgreSQL 17

### Run Tests

Some tests have been added here (although not required in the document).
In future, these can be expanded to increase coverage and inlcude integration tests.

```bash
# Run Unit Tests

npm test
```

## Possible AI improvements
1. Although the Nominatim search endpoint has free form capability, an API call to an LLM could be used to predict locations with prompts
such as "The famous bridge in London", or "The big opera house in Sydney"
2. General NLP or LLMs could also be used for autocorrect purposes for example, New Yrok, Lordon, Padis, etc
3. LLMs could provide additional info such as time to travel, or the travel distance itself
4. LLMs could call the distance api to integrate its function into larger apps, such as calendars, home automation, etc.


## Known Issues
1. The applcation uses session storage. This sometimes causes an error in making the user_id. Open in a new incognito window to fix this
2. The web page does not look exactly like the figma document. This is due to time constraints.
3. Linting has not been implemented. (not mentioned in the assessment document).
4. The assessment document does not mention testing, but limited unit tests have been implemented to display proficiency.


## Release Process
1. Checkout `main` branch
2. Create a release branch.
3. Update version numbers in package.json files
4. Run all tests
5. Update CHANGELOG.
5. Merge into `main`
6. Tag with new version (In future)
6. Run CI/CD pipelines (In the future)