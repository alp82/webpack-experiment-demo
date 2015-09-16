import template from 'template/search.html';
import styles from 'style/search.css';
import $ from 'jquery';

let formClass = `.${ styles.search }`;
$(document).on('submit', formClass, search);

function search(e) {
    let query = $(`${ formClass } input`).val(),
        url = `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${ query }`;

    $.getJSON(url, (response) => {
        let gifs = [];
        $.each(response.data, (key, imgData) => {
            gifs = [
              ...gifs,
              `<img src='${ imgData.images.fixed_width.url }'
                    title='${ imgData.caption }'/>`
            ];
        });

        $("#results").html(gifs.join("") || "<em>Nothing, sorry.</em>");
    });

    e.preventDefault();
}

module.exports = {
    template: template({ styles })
};
