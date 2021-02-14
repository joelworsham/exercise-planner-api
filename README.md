# Exercise Planner API 🥃

Centralized API for the Exercise Planner platform. Utilizing Postgres, Express, GraphQL, Sequelize, and Passport Authentication.

- [Local Development](#local-development)
    - [PreRequisites](#prerequisites)
        - [Automated System Check](#automated-system-check)
        - [Node](#node)
        - [Yarn](#yarn)
        - [Postgres](#postgres)
    - [Installation](#installation)

## Local Development
The following documentation provides information on what is required to run the system locally and how to contribute.

### PreRequisites
In order to run this system on your machine locally, the following must be installed and possibly configured.

#### Automated System Check
Exercise Planner comes with a script to check that your system can or cannot run the Exercise Planner API.

*NOTE: For the script to run, you must already have Node and Yarn installed, and must have already run `yarn install`, as the script requires Node as well as some dependencies. If you do not yet have Node and Yarn installed, please continue reading, and then run this script.*

In order to run the script, simply open your terminal in this project and run:

```shell script
$ yarn run system-check
```

#### Node
[Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

This system runs on Node. This means you must have Node installed on your machine *globally*.

Follow the instructions here to install NPM on your machine:

- Node: [https://nodejs.org/en/](https://nodejs.org/en/)

#### Yarn
[Yarn](https://yarnpkg.com/) is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

This system uses Yarn to install and manage local dependencies. Therefore, it is required for local development.

Follow the instructions here to install Yarn on your machine:

- Yarn: [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

#### Postgres
[PostgreSQL](https://www.postgresql.org/) is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

Postgres must be installed on your machine *globally* in order for this API to run, as it provides the local database.

To install, follow the instructions here, using your preferred method of installation:

- MacOSX: [https://www.postgresql.org/download/macosx/](https://www.postgresql.org/download/macosx/)
- Windows: [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)

### Installation
Once all pre-requisites of the system have been installed, you may continue with system installation.

**Copy the `.env.example` file as a new `.env` file.**
```shell script
$ cp .env.example .env
```

After copying, make the following change(s) to your new `.env` file:

- Replace `{computer_username}` with your actual username in the variable `DATABASE_URL`.
    - E.G. `DATABASE_URL=postgres://myusername:@localhost:5432/ep`

**Run installation scripts.**
```shell script
$ yarn install #               Installs all dependencies
$ yarn run system-check #      Ensures system is valid to run Exercise Planner API
$ yarn run dev:postgres:init # Initializes the Postgres database for Exercise Planner
$ yarn run dev #               Starts the system at http://localhost:3000 (unless HOST/PORT are set to something else in your ENV file)
```

Assuming all of the above works with no errors, the system should be running! 🎉

### Local Env with Docker and Docker Compose

If you want to run a PostgresQL DB inside of a container, you can run:

> See [Initialization](#initialization) if this is your first-time run.

```shell script
$ docker-compose up
#=> the API server and Pgsql database will now be running
#=>   The server will be running on localhost:3000
#=>   The pgsql server will be running on localhost:5432
```

Notes:

- The database will mount to `tmp/db`
- The server will be mounted to the root directory.  Any change you make will also be reflected in
  the container.

#### Initialization

If you have _not_ set up your database yet:

```shell script
$ docker-compose up -d db
$ yarn run dev:postgres:init
$ docker-compose down db
```

### Testing

We use [Jest](https://jestjs.io) for testing.

```shell
$ yarn test
```

#### Configuring Jest with JetBrains

If you are reading/writing a test and notice that `describe()` or `it()` have issues being
undefined:

- In Preferences | Languages & Frameworks | JavaScript | Libraries
- Press **Download**
- Select `jest` from the list of available stubs
- Press **Download and Install**

