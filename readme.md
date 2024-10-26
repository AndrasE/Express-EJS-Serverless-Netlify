<h3 align="center">
  <a href="https://express-ejs-serverless.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/19807d2abb90eb6d5d1cc17f619d2397062d2574/logo/express-ejs-ejs-netlify.png" width="100px">
  </a>
  <br/>
Netlify EJS Express Serverless Test
</h3>

## Hello there 👋

This test is a simple web app built using Express, EJS, and deployed serverless on Netlify.

### Server Configuration

- **server.js**:

  - Uses `serverless-http` to wrap the Express app for serverless deployment.
- **app.js**:
  - Sets up the Express app, configures EJS as the view engine, serves static files, and defines a route for rendering the index.ejs template.

### Netlify Configuration

- **netlify.toml**:

  - Specifies build command, functions directory, and included files. It defines redirect rules for images, CSS, and all other requests to the serverless function.

### View Templates

- **index.ejs**:

  - An EJS template that renders an HTML page with a title, CSS styles, and an image.

### Package Configuration

- **package.json**:

  - Lists project dependencies and provides metadata about the project.

