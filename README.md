#Introduction
Frontend voor de social story time app https://story.social

#Installation

`npm install`

this runs gulp build and creates a public folder from the sources

`gulp` is the default task that wachtes files for changes and rebuilds the project + reloads the browser if livereload is installed

`gulp build` create the project public folder

`gulp clean` simple clean up the public folder for a reset in development

#File structure

```
.storytime
├── LICENSE
├── Procfile
├── README.md
├── gulpfile.js
├── node_modules
├── server.js
└── src
    ├── app
    │   ├── app.js
    │   └── components
    ├── assets
    │   ├── images
    │   ├── js
    │   ├── scss
    │   └── theme
    └── index.html
```
