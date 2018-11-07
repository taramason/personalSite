# Starter Template React
**NOTES:**

* **_npm install_** to install all dependencies
* **_npm run start:dev_**

### This is a webpack project to both serve a React site locally for development and to build a bundle for production.

Development environment includes:

* Support for CSS Modules 

* Hot Module Reloading, Hot loader enabled in webpack-dev-server  

* Proxying of asset requests to a different URL (you do not need to implement a dev server to respond to proxied requests, if they 404 that will be good enough). **_NEED TO IMPLEMENT_**

Production build config includes:

* Dead code elimination, package.json enables "tree shaking" in prod  

* Any necessary polyfills, Lodash installed, I don't think I used it  

* Code minification, Webpack v4+ will minify your code by default in production mode.  

* Source maps **_DONE? NEED TO CHECK_**  

