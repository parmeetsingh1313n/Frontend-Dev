$(function () {
    const $grid = $('#productGrid');

    // 4) apply discounted style using attribute selector
    $grid.find('.product[data-discount="true"]').addClass('discounted');

    // event delegation for click on product (highlight) and favorite toggle
    $grid.on('click', '.product', function (e) {

        if ($(e.target).hasClass('fav')) return;
        const $p = $(this);
        if (Number($p.attr('data-stock')) === 0) {
            // 5) out of stock alert
            alert('Product out of stock!');
            return;
        }
        $p.toggleClass('selected');
    });

    // 2) hover to show additional product details
    $grid.on('mouseenter', '.product', function () {
        $(this).find('.details').stop(true).slideDown(120);
    }).on('mouseleave', '.product', function () {
        $(this).find('.details').stop(true).slideUp(100);
    });

    // 3) favorite icon toggles selected class only on icon
    $grid.on('click', '.fav', function (e) {
        e.stopPropagation();
        $(this).toggleClass('fav-selected');
        $(this).text($(this).hasClass('fav-selected') ? '♥' : '♡');
    });
});
