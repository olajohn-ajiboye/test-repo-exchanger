# Exchange App

This app is based on create-react-app:
* `yarn start` to run it locally
* `yarn test` to run all tests
* `yarn build` to build for production

## Main libraries used:
* `React` - obvious
* `redux` - state  management
* `styled-components` - for styling



## Structure:

* `actions/` - contains all action creators and action types
* `components/`
* `components/styled` - all styled components
* `reducers` - 
* `widgets` - Exchange screen

## Features
* Exchange with updated currency every 10 seconds
* Exchanged amount is deducted from right pocket
* Prevents exchange when amount exceed pocket money
* Switch currencies and pockets

## Improvement
* Withdrawals not fully implemented
* Loading states
* Better error handling and prevention of over draft - Currently exchange button is disabled and amount is shown in red
* Better data structure for handling prices states.