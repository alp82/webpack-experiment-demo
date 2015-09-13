import template from 'template/app.html';
import styles from 'style/app.css';
import logo from 'image/logo.png';
import search from 'script/search.js';

document.getElementById("app").innerHTML = template({
    images: {
        logo: logo
    },
    styles: styles,
    search: search.template
});
