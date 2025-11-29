$(function () {
    // 1) On page load - greeting based on time
    const hour = new Date().getHours();
    let greeting = "Hello";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    $('#greetTitle').text(`${greeting}!`);
    $('#greetMsg').text('Welcome to our website.');

    // 2) Change Greeting -> motivational quote
    $('#changeGreetingBtn').on('click', function () {
        $('#greetTitle').text('Keep Going — You Got This!');
        $('#greetMsg').text('Small improvements every day lead to big results.');
    });

    // 3) Toggle visibility
    $('#toggleMsgBtn').on('click', function () {
        $('#greetMsg').toggle();
    });

    // 4) Alert when greeting is clicked
    $('#greetTitle').on('click', function () {
        alert('Greeting clicked — have an awesome day!');
    });
});
