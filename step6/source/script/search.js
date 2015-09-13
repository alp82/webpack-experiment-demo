import template from 'template/search.html';
import styles from 'style/search.css';
import $ from 'jquery';

var formClass = '.' + styles.search;
$(document).on('submit', formClass, search);

function search(e) {
    var query = $(formClass + ' input').val(),
        url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + query;

    $.getJSON(url, function(response) {
        var gifs = [];
        $.each(response.data, function(key, imgData) {
            gifs.push("<img src='" + imgData.images.fixed_width.url + "' title='" + imgData.caption + "'/>");
        });

        $("#results").html(gifs.join("") || "<em>Nothing, sorry.</em>");
    });

    e.preventDefault();
}

module.exports = {
    template: template({
        styles: styles
    })
};