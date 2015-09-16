import template from 'template/app.html';
import styles from 'style/app.css';
import logo from 'image/logo.png';
import { template as search } from 'script/search.js';

document.getElementById("app").innerHTML = template({
    images: { logo },
    search,
    styles
});
