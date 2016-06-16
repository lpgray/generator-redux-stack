# generator-redux-stack

A react/redux generator with all the build tooling goodies.

<img src='https://www.dropbox.com/s/r3q2da52xbihpyq/octopus.jpg?raw=1' width='400px'>

## Requirements

+ NodeJS
+ Yeoman

## Tech Stack

* [express](http://expressjs.com/) - Server HTTP framework
* [react](https://facebook.github.io/react/) - View layer
* [redux](https://github.com/reactjs/redux) - State management
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack](https://webpack.github.io/) - Module bundler
* [mocha](https://mochajs.org/) - Testing framework

## Setup

Install it globally:

```sh
$ npm install -g generator-redux-stack
```

## Usage

Make a folder for your app:

```sh
$ mkdir app-name && cd app-name
```

Generate the scaffolding:

```sh
$ yo redux-stack
```

Boot up the app at [http://localhost:3000](http://localhost:3000):

```sh
$ npm start
```

## License

MIT
