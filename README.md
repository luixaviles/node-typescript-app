# node-typescript-app
A `node` server with a set of `RESTful` services using entirely `TypeScript` language.

## Support this project
- Star GitHub repository :star:
- Follow updates on [Twitter](https://twitter.com/luixaviles)

## Slides
Please find some slides with the relevant code explanation here: [https://luixaviles.com/ng-colombia-2017](https://luixaviles.com/ng-colombia-2017)

## Features
- TypeScript language
- Gulp tasks + TypeScript plugin
- Experimental TypeScript decorators.
- TypeScript decorators for `RESTful` services through [routing-controllers](https://github.com/pleerock/routing-controllers)
- Use of `Dependency Injection` pattern: [injection-js](https://github.com/mgechev/injection-js).

# Running Server locally
## Prerequisites

First, ensure you have the following installed:

1. Node - Download and Install latest version of Node: [NodeJS](http://http://nodejs.org)
2. Git - Download and Install [Git](http://git-scm.com)
3. Gulp - `npm install -g gulp-cli`

After that, use `Git bash` to run all commands if you are on Windows platform.

## Clone repository

In order to start the project use:

```bash
$ git clone https://github.com/luixaviles/node-typescript-app.git
$ cd node-typescript-app
```

## Install dependencies

You'll need to download some node modules defined into `package.json` file.

```
npm install
```

## Build the app
Run the following command

```
gulp build
```

This will generate a `dist` directory(JavaScript output files).

## Run the app

```
npm start
```

Now open your browser here: [http://localhost:3000/speakers](http://localhost:3000/speakers)

You'll have available the following `RESTful` services:

```
GET http://localhost:3000/speakers
GET http://localhost:3000/speakers/:id
POST http://localhost:3000/speakers
PUT http://localhost:3000/speakers/:id
DELETE http://localhost:3000/speakers/:id

GET http://localhost:3000/speakers/:id/slides
GET http://localhost:3000/speakers/:id/slides/:idSlide
```

If you want to change the port, please update `index.ts` file.

## License

MIT
