![alt tag](https://raw.githubusercontent.com/klaaz0r/storytime-frontend/master/src/assets/images/promo.png)
#Introduction
Frontend voor de social story time app https://story.social

#Installation

`npm install`

this runs gulp build and creates a public folder from the sources
```
 //is the default task that wachtes files for changes and rebuilds the project + reloads the browser if livereload is installed
$gulp
//create the project public folder
$gulp build
//simple clean up the public folder for a reset in development
$gulp clean
```
#Testing
Testing is done with selenmium and karma 

#File structure

```
└── src
    ├── app
    │   ├── app.js
    │   ├── app.main.controller.js
    │   └── components
    │       ├── auth
    │       ├── login
    │       ├── navigation
    │       ├── register
    │       └── static
    ├── assets
    │   ├── images
    │   │   └── main_title.png
    │   ├── js
    │   │   └── base.js
    │   └── scss
    │       ├── components
    │       └── main.scss
    └── index.html
```
