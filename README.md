# frontend layout

This is a simple project which contains basic strucure for starting a frontend application.
This project contains the following elements :
bootstrap@3.3.5 (scss), 
angularJS + ui.router, 
jquery, 
jspm, 
babel (ecma2015) 

In components directory, you can find a "welcome" module which contains all the things (controller, service, partial, test, scss file) you need for starting with angular !

1. install npm
2. cd static
3. run : npm install jspm gulp
4. run : npm install
5. run : jspm dl-loader babel
6. run : jspm install (say yes if prompt asking for generating config.js file)
7. run static server with livereload : gulp server, and "welcome" should be printed on the screen !
