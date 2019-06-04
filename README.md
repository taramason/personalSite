# Tara Mason's Personal Resume Site
**NOTES:**

* **_npm install_** to install all dependencies
* **_npm run start:dev_**

### This is a webpack project to both serve a React site locally for development and to build a bundle for production. It is hosted in Firebase.

Design:

* Designed in XD by Tara Mason to mimic the look and feel of her resume.

Development environment includes:

* Support for CSS Modules 

* Hot Module Reloading, Hot loader enabled in webpack-dev-server  

* SVG loading enabled

Production build config includes:

* Dead code elimination, package.json enables "tree shaking" in prod  

* Code minification, Webpack v4+ will minify your code by default in production mode.  

* Source maps.

