![storytime logo](https://raw.githubusercontent.com/klaaz0r/storytime-frontend/master/public/images/logos/logo_width.png)
---
#Intrudoction
Frontend voor de social story time app

#Installation
install node, gulp and bower and run

`npm install`

`bower install`

to start running the project use `gulp` command. You can work in de source/scss folder and on save gulp will save and compile the code and nodemon will restart the server on change (html, js and css).


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
