# A Simple React/Redux Client
This is a simple example of how React and Redux can be used in to create a client-side timer application. 
Webpack is used both to provide both a hot-replacement development server, and to deploy sources into a bundle for production. 
An incredibly simple example test is included.

## Installation
Navigate your terminal or equivalent to the root directory of the project and simply enter...

```
npm install
```

## Development
To start the hot-replacement webpack development server enter...

```
npm start
```

...and then navigate your browser to `localhost:8080`. This uses the configuration found in `./webpack.config.js`.

## Deployment
To have Webpack deploy the client code to a bundle enter...

```
npm run build
```

... which will create a `bundle.js` file located at `./public/scripts`. This uses the configuration found in `./webpack.prod.config.js`.

## Testing
To run the extremely basic test provided...

```
npm run test
```

...but this is only really included as an extreme introductory example.

## Lint

If you are new to Lint/this technology stack/programming in general and are wondering why you cannot seem to get the `lint` script you saw in the projects `package.json` to work, it is probably as you do not have the correct modules locally.
I have all the `eslint` packages I need installed globally, so they have not been included as dependencies. If you want to give it a go, first enter...

```
npm install eslint eslint-plugin-import eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react -g
```

...and now when you run this command...

```
npm run lint
```

...you should see absolutely nothing. Thats a good thing, it means I have kept the project clean. Try entering things like unecessary spaces at the end of lines and random characters into the code and when you rerun the process you will see errors appear.
