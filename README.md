# CityPantry Frontend Coding Challenge - Angular
This is a coding challenge written in Angular.

The aim of this challenge is to write a simple frontend application
interfacing with the backend provided, to display a list of orders in an
appropriate format.

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

## Running Tests
```
yarn test
```
This runs tests for the frontend.

Tests for the backend are not required.

E2E tests are out of scope.
