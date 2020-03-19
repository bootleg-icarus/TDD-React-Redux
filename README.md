This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## `yarn start`

## `yarn test`

## `yarn build`

The goal of this repo was to get started with testing react-redux apps with jest and enzyme. Some earlier components were built before their tests but the TDD approach took hold soon enough.

TDD (Test Driven Development) refers to the idea of focusing on the input and output before building the components that actually do the heavy lifting.

[Jest](https://jestjs.io) is a test runner framework, it gives you some great functions that you can use to assert some condition and test if the result is what you'd expect.

[Enzyme](https://enzymejs.github.io/enzyme/) is a utility that helps in testing react components like you'd test some other javascript functions.

[prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) is also used because it should be if you're not using typescript. Type checking is pretty important and can help catch a few bugs. [check-prop-types](https://www.npmjs.com/package/check-prop-types) is used to auto-test prop-types. Since JS does type coercion, sometimes there's just a warning and no errors.

The rest is pretty basic React ( and Redux )
