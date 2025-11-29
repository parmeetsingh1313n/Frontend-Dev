$(function () {
    let counter = 6;

    $('#addPost').on('click', function () {
        $('#posts').append(`<article class="post">Post ${counter++}: New Article</article>`);
    });

    $('#prependPost').on('click', function () {
        $('#posts').prepend(`<article class="post" style="background:#fffbe0">Featured: Breaking News</article>`);
    });

    $('#removeLast').on('click', function () {
        $('#posts .post').last().remove();
    });

    $('#posts').on('click', '.post', function () {
        $(this).before('<span class="tag">NEW</span>');
        $(this).after('<span class="tag">READ</span>');
    });

    $('#posts').on('dblclick', function () {
        $('#posts .post').each(function () {
            const txt = $(this).text().toLowerCase();
            if (txt.includes('js') || txt.includes('javascript')) {
                $(this).css('background', '#e6f7ff');
            }
        });
    });
});
