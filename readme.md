# Netlify EJS Express Serverless Test

This test is a simple web app built using Express, EJS, and deployed on Netlify.

## Server Configuration

- **server.js**:

  - Uses `serverless-http` to wrap the Express app for serverless deployment.
- **app.js**:
  - Sets up the Express app, configures EJS as the view engine, serves static files, and defines a route for rendering the index.ejs template.

## Netlify Configuration

- **netlify.toml**:

  - Specifies build command, functions directory, and included files. It defines redirect rules for images, CSS, and all other requests to the serverless function.

## Package Configuration

- **package.json**:

  - Lists project dependencies and provides metadata about the project.

## View Templates

- **index.ejs**:

  - An EJS template that renders an HTML page with a title, CSS styles, and an image.