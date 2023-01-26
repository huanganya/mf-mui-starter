# MfMuiStarter

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **This is the experiment project to use micro-frontend for auth(module 1), remote(module 2) and shell(the main app)**

## auth module

Auth module presents the login for with yup validation;
MUI Grid is used for responsive design
Formik is used for form validation and submit
The global auth state is managed by React Context API

## remote module

Remote module has the button to decrease a number
the global state of the number is managed by React Context API

## shell module(the host app)

Shell module is the main app who is using both auth module and remote module.
Shell module also has its own pages.
The global state of the host app is managed by React Context API.

## Generate a remote module

Run `nx g @nrwl/react:remote remote-xxx host:shell` to generate a remote.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@mf-mui-starter/mylib`.

## Development server

Run `npm run start` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Todo

1. Will add some unit tests
2. Will add some e2e tests
3. Will add more configurations to mui theme
4. Will add more components to the codebase
