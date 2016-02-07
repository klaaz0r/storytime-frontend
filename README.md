![storytime logo](https://github.com/klaaz0r/storytime-frontend/blob/master/src/assets/img/logos/logo_width.png?raw=true)
---
#Intrudoction
Frontend voor de social story time app

#Installation
install node

`npm install`

this runs and updates all the vendor files. 

`bower install && gulp build` 

to start running the project use `gulp` command for working in development. LiveReload is working and we compile scss with node-sass-middleware in development instead of compiling it with gulp! this does create a `public/` folder at this point! 

#File structure

```
├── Procfile        <-- settings for heroku
├── bower.json 
├── dist            <-- created on the server
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── js
│   │   └── libs
│   └── index.html
├── gulpfile.js     <-- gulp settings 
├── package.json    <-- node settings  
├── server.js       <-- server start 
└── src             <-- working folder
    ├── app
    │   ├── components
    │   └── shared
    ├── assets
    │   ├── css
    │   ├── img
    │   ├── js
    │   └── libs
    └── index.html
```
