import search from 'script/search.js';

var template = `
<h1>Find. Anything.</h1>
${search.template}
`;

document.getElementById("app").innerHTML = template;
