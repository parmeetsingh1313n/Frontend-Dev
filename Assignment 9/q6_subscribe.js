$(function () {
    const $topics = $('#topics');

    // 1) subscribe
    $topics.on('click', '.sub', function () {
        const name = $(this).closest('.topic').text().trim().split(' ')[0];
        showMsg(`Subscribed to ${name}`);
    });

    // 2) unsubscribe
    $topics.on('click', '.unsub', function () {
        const name = $(this).closest('.topic').text().trim().split(' ')[0];
        showMsg(`Unsubscribed from ${name}`);
    });

    // 3) dynamically add new topic (delegation ensures events attached)
    $('#addTopic').on('click', function () {
        const val = $('#newTopic').val().trim();
        if (!val) return;
        $topics.append(`<div class="topic">${val} <button class="sub">Subscribe</button> <button class="unsub">Unsubscribe</button> <button class="remove">Remove</button></div>`);
        $('#newTopic').val('');
        showMsg('Topic added');
    });

    // 4) remove specific subscription -> detach by removing the element
    $topics.on('click', '.remove', function () {
        $(this).closest('.topic').remove();
        showMsg('Topic removed');
    });

    function showMsg(text) {
        $('#msg').text(text).show().fadeOut(2000);
    }
});
