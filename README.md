# Side Demo
Demo for Side Interview

## Built With

* [Material UI] - The CSS Styling framework used
* [Redux] - Library used for data management
* [ReactJS] -  The Frontend framework used
* [React-redux] -  Library used for data management
* [React-create-app] - Basic scaffolding for the app
* [Fontawesome] - Used for standard icons in the app
* [React-router-dom] - The Frontend Module used to handle basic routing
* [Redux-thunk] - Middleware used for redux control

## Potential Tests to do

1. Selection of listings to be saved
1. Switching pages from Listings homepage to Saved Listings
1. Fetching listings making sure to get data back
1. Saving listings in local storage and retrieving it on hard refresh
1. Showing proper information in the individual listing cards
1. Showing proper saved state of individual listing cards
1. Clicking on listing “Heart” save icon toggles listing in saved list in store

## Why I used Redux

1. I wanted to have an Example of a scalable solution
1. Using redux makes testing easier
1. I wanted easy access to data for components
1. I wanted to avoid bad practices like prop drilling
1. Saving to local storage can be automated in redux
1. I used “redux-thunk” for better control of the redux flow

## Responsiveness

1.	I used Material UI for managing the CSS and responsiveness
1.	Material UI has a system built into it to help make apps responsive

## Other thoughts
1. I Used functional components with hooks to reflect newer practices in the react world
1. I made the assumption that the only items to be shown on the “saved Listings” page were the ones that were selected by the user

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Authors

* **Shane White** - *Complete Work* - [Galvatron7](https://github.com/galvatron7)
