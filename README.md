# Example Udibo React App

[![CI/CD](https://github.com/udibo/react-app-example/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/udibo/react-app-example/actions/workflows/main.yml)
[![license](https://img.shields.io/github/license/udibo/react-app_example)](https://github.com/udibo/react-app-example/blob/main/LICENSE)

A basic example of a [Udibo React App](https://jsr.io/@udibo/react-app).

- [GitHub Repository](https://github.com/udibo/react_app/)
- [Documentation](https://jsr.io/@udibo/react-app)

## Deployment

The workflow is configured to run tests for all PRs and to deploy to Deno
Deploy.

If you are forking this repository, you will need to update the workflow.

If you are using Deno Deploy, you should update `.github/workflows/main.yml` to
use your project. If you don't have a project created yet on Deno Deploy, create
a new one and configure it to use GitHub Actions for deployment. The GitHub
action is required because there is a build step.

If you are not planning on using Deno Deploy, remove the CD job from
`.github/workflows/main.yml` or write your own deployment action to replace it.

## Tasks

To run the tests, use `deno task test` or `deno task test-watch`.

To check formatting and run lint, use `deno task check`.

The following 2 commands can be used for creating builds.

- `deno task build-dev`: Builds the application in development mode.
- `deno task build-prod`: Builds the application in production mode.

A build must be generated before you can run an application. You can use the
following 2 commands to run the application.

- `deno task run-dev`: Runs the application in development mode.
- `deno task run-prod`: Runs the application in production mode.

To run the application in development mode with live reloading, use
`deno task dev`.

When in development, identifiers are not minified and sourcemaps are generated
and linked.

The commands ending in `-dev` and `-prod` set the `APP_ENV` and `NODE_ENV`
environment variables. The `NODE_ENV` environment variable is needed for react.
If you use the `deno task build` or `deno task run` tasks, you should make sure
that you set both of those environment variables. Those environment variables
are also needed if you deploy to Deno Deploy.

## Contributing

To contribute, please read the [contributing instruction](CONTRIBUTING.md).
