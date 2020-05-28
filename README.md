# Adventure capitalist client

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


This is a client for the [Adventure capitalist game](https://github.com/stanislav-halyn/adventure-capitalist-game) repository. It handles the back-end socket events and shows the updated info to the user.


# About
This project is using React, Redux and Typescript as a main stack of technologies.

The project is using `feature-based` architecture as in my opinion it's quite maintainable and simple. At the moment there's only one feature: `game`, which includes the ui logic of the game handling.


# Commits convention
This repo is using [commitizen](https://github.com/commitizen/cz-cli) to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). To be able to commit into this repo, you should run following commands:
```
  npm install -g commitizen
  npm install
```

In order to create a new commit you should type in your console:
```
  git cz
```

You'll be prompted to fill out required commit fields.

  > Note: this repo is using `hasky` hooks,
  so you won't be able to push commits which don't follow the conventional commits rules.


# Installation

Minimum required version of node is `11.15.0`.

In order to run the project, you need to rename the `.env.example` file to `.env` and set you environmental variables.

When your `.env` file is set up, you need to install dependencies with the following commands in your console:

```
  npm i
```


Now to run the project in dev mode, run the following command:

```
  npm start
```

In order to build the production version, run:

```
  npm run build
```

# Linters

This project is using `stylelint` and `eslint` for linting.

```
  npm run lint
  npm run stylelint
```

# Tests

To run the tests, simply run:

```
  npm test
```
