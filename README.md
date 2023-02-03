# MfMuiStarter

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **This is the experiment project to use micro-frontend for auth(module 1), remote(module 2) and shell(the main app)**

## auth module(Update: auth module was moved to AuthProvider)

1. Auth module presents the login for with yup validation;
2. MUI Grid is used for responsive design
3. Formik is used for form validation and submit
4. The global auth state is managed by React Context API
5. Update: AuthProvider is more flexible to be shared by both shell app and remote apps

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

## Development Host server

Run `npm run start` for a dev server. The app will automatically reload if you change any of the source files.

1. Host App: Navigate to http://localhost:4200/.
2. Remote App: Navigate to http://localhost:4201/.
3. Host App will render the remote app
4. Remote App's route was handled by a Redirector which will remove the extra path from the local request

## Running unit tests

Run `npm run test:shell` to execute the unit tests for host app.
Run `npm run test:remote` to execute the unit tests for remote app.
Run `npm run app-shared` to execute the unit tests for app-shared library.
Run `npm run test:common-lib` to execute the unit tests for common-lib library.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Todo

1. Will add some unit tests : wip

2. Will add some e2e tests : todo

3. Will add more configurations to mui theme : done

4. Will add more components to the codebase

   4.1 added anchored-popover to common-lib

   4.2 added link-tab to common-lib

   4.3 added form-field and form-input to common-lib

   4.4 added appbar related component to common-lib

   4.5 added top-appbar(app specific appbar) to app-shared

   4.6 added align-itemslist to common-lib

   4.7 added more components to the common-lib

   4.8 refactored tab-bar to make the value of the tabs to be number

5. Will try to move the fonts/images into the common-assets library : done

   5.1 move global scss file to common-assets library : todo
