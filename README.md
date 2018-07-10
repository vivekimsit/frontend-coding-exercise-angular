# City Pantry Frontend/Angular coding challenge
This is a coding exercise written in [Angular 5](https://angular.io/docs).

In this exercise you will write a simple frontend application
interfacing with the backend provided.

The purpose of the exercise is to evaluate your approach to software
development covering among other things elements of Object Oriented Design,
Software Design Patterns and Testing.

This exercise is not time bounded.

## Requirements
The API endpoint at `/orders` returns order objects.
The `/orders` page on the frontend should display these objects for
consumption by a customer service representative who will use it
to liaise with customers.

You should provide an implementation of the `/orders` page which,
on load, fetches the data from the backend endpoint and displays it
in an appropriate format.
Not all the data may be required - you should decide which parts
of the data should be displayed.

The resulting page would be end-user facing and should be styled appropriately.
It needs to be functional and easy to use but does not need to contain flourishes
such as animations beyond what is required for a user to easily grasp the data.

## Additional Notes
Complete the exercise using TypeScript, HTML, and SASS.

Structure your code as if this were a real, large, production application.
You may however choose to provide simplified implementations or
skip them entirely for some aspects (such as error handling,
or cross-device support) if you feel it is necessary. In such situations
add a comment in the code explaining what you have simplified or skipped
and what a full implementation would consist of.

State any assumptions you make as comments in the codebase.
If any aspect of the above specification is unclear then please also
state, as comments in the source, your interpretation of the requirement.

You are encouraged to write any tests you may feel are necessary or helpful,
but to save you time, end-to-end tests are discouraged.

You are free to install any node.js packages or CSS libraries (such as bootstrap 
or Material Design) you require to complete this task, but you may not use
UI component libraries such as Material2, PrimeNG or ng-bootstrap,
or third-party pagination or data table modules.

## Development
You will need to use the [Yarn Package Manager](https://yarnpkg.com).
After installing, run the following commands in the root directory to start developing:

```bash
# Install dependencies and set up the server
yarn install

# Starts the live-reloading development servers at localhost:4200 (frontend) and localhost:4300 (API)
yarn start
```

## API
The API is accessible at `http://localhost:4300`.

The orders are accessible under the `/orders` endpoint which takes an
optional `page` parameter, starting at 1.

You are free to modify the backend in any way you see fit.

## Running Tests
```
yarn test
```
This runs tests for the frontend.

You should not write tests for the backend or E2E tests.
