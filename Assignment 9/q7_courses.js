$(function () {
    const $courses = $('#coursesList .course');
    const $count = $('#matchedCount');

    function updateCount(n) { $count.text(`${n} courses matched`); }

    $('#searchInput').on('keyup', function () {
        const q = $(this).val().trim().toLowerCase();
        let matched = 0;
        $courses.each(function () {
            const text = $(this).text();
            if (!q || text.toLowerCase().includes(q)) {
                $(this).show();
                // highlight matched portion..
                if (q) {
                    const re = new RegExp('(' + q + ')', 'ig');
                    $(this).html(text.replace(re, '<span class="highlight">$1</span>'));
                } else {
                    $(this).text(text);
                }
                matched++;
            } else {
                $(this).hide();
            }
        });
        updateCount(matched);
    });

    $('#searchInput').on('keydown', function (e) {
        if (e.key === 'Escape') {
            $(this).val('');
            $courses.show().each(function () { $(this).html($(this).text()); });
            updateCount($courses.length);
        }
    });

    // init
    updateCount($courses.length);
});
