(function ($) {
    // $ is jQuery v1
    const items = ['slide-1', 'slide-2', 'slide-3'];
    let i = 0;
    setInterval(function () {
        $('#carousel').text('Carousel (v1): ' + items[i % items.length]);
        i++;
    }, 2000);

    $('#widgetA').on('click', function () {
        $(this).toggleClass('active');
    });
})(window.$v1);

// v3 controls modal popups and tooltips
(function ($) {
    // $ is jQuery v3
    $('#modalTrigger').on('click', function () {
        const $m = $('<div class="modal" style="position:fixed;left:30%;top:30%;background:#fff;padding:20px;border:1px solid #333">Notification <button id="closeModal">Close</button></div>');
        $('body').append($m);
        $m.on('click', '#closeModal', function () { $m.remove(); });
    });

    $('#widgetB').attr('title', 'Tooltip (v3)');
    $('#widgetB').on('mouseenter', function () {
        const $tip = $('<div class="tip" style="position:absolute;left:80%;top:10%;background:yellow;padding:4px;border:1px solid #333">Tooltip</div>');
        $('body').append($tip);
    }).on('mouseleave', function () {
        $('.tip').remove();
    });
})(window.$v3);
