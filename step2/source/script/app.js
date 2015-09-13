var template,
    search = require('script/search.js');

template = '<h1>Find. Anything.</h1>' + search.template;

document.getElementById("app").innerHTML = template;
