
$( document ).ready(function() {
    jQuery(function($) {
        $("#rss-feeds").rss("https://feed.laravel-news.com/", {
            entryTemplate: '<li class="list-group-item" style="padding: 0;margin: 0">' +
                '<img src="{teaserImageUrl}" alt="" style="width:50px; height:50px;margin-right: 5px">' +
                '<a href="{url}">{title}</a>' +
                '<p>{shortBody} <span style="font-size:12px">[{date}]</span></p></li>',
            dateFormat: 'ddd, DD MMM YYYY'
        })
    })
});





