$(function () {
    const $faq = $('#faq');

    // 1) click question -> toggle answer
    $faq.on('click', '.question', function () {
        $(this).next('.answer').slideToggle(180);
    });

    // 2) hover -> change question color
    $faq.on('mouseenter', '.question', function () {
        $(this).css('color', '#0b5');
    }).on('mouseleave', '.question', function () {
        $(this).css('color', '');
    });

    // 3) dblclick -> collapse all answers
    $faq.on('dblclick', '.question', function () {
        $faq.find('.answer').slideUp(200);
    });

    // For demo add an input to second answer to show focus/blur behavior
    $faq.find('.qa').eq(1).find('.answer').append('<div><input class="answerInput" placeholder="Type reply"></div>');

    // 4) focus -> highlight parent question
    $faq.on('focus', '.answerInput', function () {
        $(this).closest('.qa').find('.question').addClass('focusHighlight');
    });

    // 5) blur -> reset background
    $faq.on('blur', '.answerInput', function () {
        $(this).closest('.qa').find('.question').removeClass('focusHighlight');
    });
});
