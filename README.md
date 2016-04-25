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
