<h3 align="center">
  <a href="https://express-ejs-serverless.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/6df855ad94082500b16b025c084a84a872ef89fc/logo/express-ejs-ejs-netlify.png" width="100px">
  </a>
  <br/>
Express / EJS / Serverless / Netlify
</h3>

## Hello there 👋

This web app is a basic setup built with Express and EJS, deployed serverlessly on Netlify. It features minimal styling, CSS, JavaScript, and includes a favicon handler for testing purposes.

### Key Features

- **Server Configuration:**
  - **server.js**: Uses `serverless-http` to wrap the Express app for serverless deployment.
  - **app.js**: Sets up the Express app, configures EJS as the view engine, serves static files, and defines a route for rendering the index.ejs template.

- **Netlify Configuration:**
  - **netlify.toml**: Specifies build command, functions directory, and included files. It defines redirect rules for images, CSS, and all other requests to the serverless function.

- **View Templates:**
  - **index.ejs**: An EJS template that renders an HTML page with a title, CSS styles, and an image.
  
- **Package Configuration:**
  - **package.json**: Lists project dependencies and provides metadata about the project.

### Packages used

- **[@netlify/functions](https://docs.netlify.com/functions/overview/)** - This package is used to create serverless functions on Netlify. It provides the tools needed to define, build, and deploy serverless functions using the Netlify platform. Used to handle backend logic, API endpoints, and dynamic server-side functionality without needing a dedicated server.
- **[express](https://expressjs.com/)** - It simplifies the creation of web servers and APIs, allowing you to handle HTTP requests, define routes, and implement middleware functions. In this project, Express acts as the primary framework for building and running the server that delivers HTML pages, handles routes, and serves static files like images and CSS.
- **[serverless-http](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)** - This package acts as a bridge between traditional HTTP servers (like Express) and serverless environments (such as AWS Lambda or Netlify Functions). It converts your Express app into a serverless-compatible function.
- **[ejs](https://ejs.co/)** - EJS stands for Embedded JavaScript, and it's a templating engine for generating HTML markup using JavaScript.
- **[serve-favicon](https://www.npmjs.com/package/serve-favicon)** - It helps in efficiently serving the favicon from the /public directory. Without it, the server would have to handle favicon requests manually. 

## Run 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Start with cloning this repo on your local machine via cli or github-desktop:

`
$ git clone https://github.com/AndrasE/Express-EJS-Serverless-Netlify
`

`
$ cd PROJECTNAME
`

To install and set up the library, run:

`
$ npm install
`

Install Netlify CLI globally:

`
$ npm install -g netlify-cli
`

Serving the app:

`
$ netlify dev
`