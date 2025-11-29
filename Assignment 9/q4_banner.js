$(function () {
    const $banners = $('#banners .banner');

    // show all initially with fadeIn
    $banners.fadeIn(300);

    $('#hideBtn').on('click', function () {
        $banners.slice(0, 2).hide();
    });

    $('#showBtn').on('click', function () {
        $banners.show();
    });

    $('#slideBtn').on('click', function () {
        $banners.slideToggle(350);
    });

    $('#fadeBtn').on('click', function () {
        $banners.fadeOut(200).fadeIn(400);
    });

    // 5) rotate every 5 seconds using fadeIn/fadeOut
    let idx = 0;
    setInterval(function () {
        $banners.fadeOut(300);
        $banners.eq(idx % $banners.length).fadeIn(400);
        idx++;
    }, 5000);
});
