## team-bot

### Installation

Install [Node Package Manager (NPM)] and [Node.js] to run.

To check if you have Node.js installed correctly, run this command in your terminal:
```sh
$ node -v
```

To confirm that you have npm installed you can run this command in your terminal:
```sh
$ npm -v
```

To install most of the dependencies we will make use of [Yarn] package manager. [Yarn] is a super set of [Node Package Manager (NPM)], which install dependencies in parallel, secure and reliable manner.

Install [Yarn] globally by using the following command:

```sh
$ npm install --global yarn
```

Install the dependencies and devDependencies and start the server.

```sh
$ yarn
```

### Server

Format for passing argument to npm script
```sh
npm run <command> [-- <args>]
```

Here are multiple ways to run the server
```sh
$ npm start -s (Recommended Default Port 8080)
$ npm run server -- -p 8080 (Pick Any Available Port No)
```



### Logging Techniques

The common approach to log the output in Node is to use console.log()
A better approach is to use [Winston] logging methods

| Methods |
| ------ |
| debug |
| info |
| warn |
| error |



### Solar System Exploration, 1950s – 1960s

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


[//]: # (Reference links used in the doc)

[Node Package Manager (NPM)]: <https://www.npmjs.com/>
[Node.js]: <https://nodejs.org/>
[Yarn]: <https://yarnpkg.com/>
[Winston]: <https://www.npmjs.com/package/winston>
