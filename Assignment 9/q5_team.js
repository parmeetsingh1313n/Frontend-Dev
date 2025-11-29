$(function () {
    // 1) click manager -> highlight direct reports
    $('.department').on('click', '.manager', function () {
        $(this).siblings('.members').find('.employee').toggleClass('highlight');
    });

    // 2) hover employee -> show contact (using .find or .next-like)
    $('.department').on('mouseenter', '.employee', function () {
        $(this).find('.contact').show();
    }).on('mouseleave', '.employee', function () {
        $(this).find('.contact').hide();
    });

    // 3) click department -> change background of all members using .children()
    $('.department').on('click', function (e) {
        if ($(e.target).hasClass('manager')) return; // avoid double effect when manager clicked
        $(this).children('.members').children('.employee').css('background', '#fff7e6');
    });

    // 4) select random employee -> highlight siblings
    $('#randomBtn').on('click', function () {
        const $all = $('.employee');
        const idx = Math.floor(Math.random() * $all.length);
        const $picked = $all.eq(idx);
        $picked.siblings('.employee').addClass('highlight');
        $picked.addClass('highlight');
    });

    // 5) collapse/expand using .parent() and .find()
    $('#toggleTeamsBtn').on('click', function () {
        $('.department').each(function () {
            $(this).find('.members').slideToggle(200);
        });
    });
});
