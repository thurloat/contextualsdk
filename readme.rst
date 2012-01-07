Contextual SDK
==============

SDK for developing google / xobni contextual gadgets right in the browser with the tools you're used to using.
No messy iframe junk to get in your way.

Features
--------

Command Line Utility
....................

installs as a package and can be run in any area.

generates a project scaffolding so you put your tests in the right spot, a default application.xml and gadget.xml file

SDK Dashboard
.............

server runs at localhost:8000/

main view shows a list of actions. run unit tests, configure test environment, and launch test environment

Configuration screen allows you to set the email body, any content matches from google, and additional url args that
might be passed into the iFrame Renderer.

Unit Testing
............

mocha http://visionmedia.github.com/mocha/

iFrame Renderer
...............

at http://localhost:8000/ifr? it renders the gadget

makeRequest Proxy
.................

there will be a request proxy to handle gadgets.io.makeRequest proxying at http://localhost:8000/proxy

setPrefs backend
................

localStorage or filesystem.

packaging and deployment
........................

deploys directly to s3 using knox. http://thechangelog.com/post/2128784522/knox-s3-lib

code compiles with uglify.js
