# CityPantry Frontend Coding Challenge - Angular
This is a coding challenge written in Angular.

The aim of this challenge is to write a simple frontend application
interfacing with the backend provided.

The purpose of the exercise is to evaluate your approach to software
development covering among other things elements of Object Oriented Design,
Software Design Patterns and Testing.
This exercise is not time bounded.

## Requirements
You should provide an implementation of the `/orders` page which, on load,
fetches the data from the backend endpoint and displays it in an
appropriate format.
Not all the data may be required - you should decide which parts
of the data should be displayed.

The resulting page should work well but does not need to styled beautifully
beyond what is required for a user to easily grasp the data.

## Additional Notes
Complete the exercise using TypeScript, HTML, and SASS/CSS.

Structure your code as if this was a real, production application.
You may however choose to provide simplified implementations or
skip them entirely for some aspects (such as error handling,
or cross-device support) if you feel it is necessary.

State any assumptions you make as comments in the codebase.
If any aspects of the above specification is unclear then please also
state, as comments in the source, your interpretation of the requirement.

You should provide sufficient evidence that your solution is complete by,
as a minimum, indicating that it works correctly against the supplied data.
You are encouraged to write any tests you may feel are necessary or helpful,
but to save you time, end-to-end tests are discouraged.

You are free to install any node packages you require to complete this task.

## Development
```bash
# Setup
yarn install

# Live-reloading development server at localhost:4200 and localhost:4300
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

Tests for the backend are not required.

E2E tests are out of scope.
