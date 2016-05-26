## Overview

This Angular 1.4.x application is designed to be hosted on the force.com platform. That introduces **one very key concept** to keep in mind:

The final Angular application code is zipped and uploaded as a static resource using "grunt deploy". To make the development process
more fluid however, during development, you can use the "Request Mapper" browser plugin below to point to the javascript, CSS and HTML source files
running on your desktop. This requires 1) the "grunt watch" command to be invoked and 2) the node.js application running on your localhost at port 443 (HTTPS - Salesforce requires it)

The steps outlined in Developer Setup below will:

- Pull down the Angular JS application code + All Salesforce metadata to your desktop
- Install the development tools via NPM that are only required for development and don't need to be deployed to Salesforce
- Install the application runtime dependencies (e.g. Angular library, Bootstrap, etc) via Bower
- Set up the "Request Mapper" browser plugin that redirects JS, CSS and HTML requests to your localhost instead of the static resource (IMPORTANT: The VisualForce page and Apex classes cannot be run locally and must be uploaded to Salesforce via the "grunt deploy" or automated builds from Jenkins.)
- Get an SSL cert set up on your localhost and start up a node.js web server. Salesforce requires all requests to JS, CSS and HTML files to be over HTTPS.
- Starting "grunt watch" so that changes made to Angular JS, CSS and HTML files will be "built" and reflected in Salesforce (if the Request Mapper plugin is turned on)

# Developer Setup

## Global Dependencies for Developers

Make sure the following are installed:

* [node.js](http://nodejs.org)
* [Git](http://git-scm.com/download/)
* [Ruby](https://www.ruby-lang.org/en/) (should already be installed on OSX)

and then run the following in the terminal:

    $ sudo npm install -g grunt-cli
    $ sudo npm install -g bower
	
## Initial download and setup of Angular on Developer's desktop

    $ Clone this repo to any folder on your computer
    $ cd angular-boilerplate
    $ sudo npm install
    $ bower install
    $ grunt build

## Request Mapper

The extension and installation instructions are on GitHub:

https://github.com/aputinski/request-mapper

The following RegEx / URL pairs can be used in the options page of the extension

RegEx | URL

`.*\/resource\/.*/app_statics\/js/lib.min.js` | https://localhost/js/build/lib.js

`.*\/resource\/.*/app_statics\/js/main.min.js` | https://localhost/js/build/main.js

`.*\/resource\/.*\/app_statics\/css/main.min.css` | https://localhost/styles/main.css

`.*\/resource\/.*\/app_statics\/templates` | https://localhost/templates/

## SSL

In order for the Request Mapper plugin to work with force.com, the local versions must be accessed via SSL.

In the app directory, run the following commands in the terminal.

When prompted for "common name" enter `secure.yourapp.dev`

    $ mkdir ssl && cd ssl
    $ openssl genrsa -des3 -out server.key 1024
    $ openssl req -new -key server.key -out server.csr
    $ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
    $ cp server.key server.tmp
    $ openssl rsa -in server.tmp -out server.key

Once you have created self signed certificate

    $ cd ../
    $ sudo node app.js

This will start a nodejs server on port 443 which can be accessed at [https://localhost]

Note: Use Ctrl + C to kill the app and not Ctrl + Z which will simply suspend the app but keep it running in the background.

## Whitelist Self Signed Certificate (Google Chrome)

- Open up Localhost and choose to proceeed anyway.
- Open up Chrome Settings > Show advanced settings > HTTPS/SSL > Manage Certificates.
- Click the Authorities tab and scroll down to find your certificate under the Organization Name that you gave to the certificate OR make sure you are in "login" in the left navigation, click the + and add the certificate that you created.
- Select it, click Edit, check all the boxes and click OK. You may have to restart Chrome.

# Development Helper Tasks

## Grunt

Running `grunt watch` will automatically build JS/CSS upon saving.

Running `grunt test` will run browserify and the jasmine unit tests.

Running `grunt eslint` will run the eslint task on js files in assets/js/modules. Configuration is maintained in the .eslintc file.

Running `grunt build` will run tests and build the compressed and compiled resources but not move them to the deploy temp folder, compress and move into the metadata folder.

Running `grunt build-full` will compile the resources, compress them into a static resource and put that resource in ../src/allsource/src/staticresources so that it is ready to be deployed to Salesforce.

Running `grunt deploy` will run the deployCode ANT task to push the metadata in ../src/allsource/src to the Salesforce instance identified in the ../build.properties file.