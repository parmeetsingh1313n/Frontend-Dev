$(function () {
    const existingEmails = ['user@example.com', 'test@site.com'];

    function validateName() {
        const val = $('#name').val().trim();
        if (!val) {
            $('#eName').text('Name is required'); $('#name').addClass('invalid'); return false;
        }
        $('#eName').text(''); $('#name').removeClass('invalid'); return true;
    }

    function validateEmail() {
        const val = $('#email').val().trim();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(val)) {
            $('#eEmail').text('Invalid email'); $('#email').addClass('invalid'); return false;
        }
        if (existingEmails.includes(val)) {
            $('#eEmail').text('Email already in use'); $('#email').addClass('invalid'); return false;
        }
        $('#eEmail').text(''); $('#email').removeClass('invalid'); return true;
    }

    function validatePassword() {
        const val = $('#password').val();
        if (val.length < 8) {
            $('#ePass').text('Password must be at least 8 characters'); $('#password').addClass('invalid'); return false;
        }
        $('#ePass').text(''); $('#password').removeClass('invalid'); return true;
    }

    // live validation to clear errors on input
    $('#name').on('input', validateName);
    $('#email').on('input', validateEmail);
    $('#password').on('input', validatePassword);

    $('#regForm').on('submit', function (e) {
        e.preventDefault();
        const ok = validateName() & validateEmail() & validatePassword();
        if (ok) {
            $('#msg').text('Form Submitted Successfully').show();
            existingEmails.push($('#email').val().trim());
        }
        else {
            $('#msg').hide();
        }
    });
});
