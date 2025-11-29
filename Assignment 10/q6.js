(function () {
    const api = 'http://localhost:3006/users';
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const msg = document.getElementById('msg');
    const btn = document.getElementById('register');

    function show(text, isErr = false) {
        msg.textContent = text;
        msg.className = isErr ? 'err' : 'success';
    }

    btn.addEventListener('click', async function () {
        const name = nameEl.value.trim();
        const email = emailEl.value.trim();
        if (!name || !email) { show('Please enter name and email', true); return; }

        try {
            // 1. Check duplicate
            const check = await axios.get(api, { params: { email } });
            if (check.data && check.data.length) {
                show('Email already registered.', true);
                return;
            }
            // 2. POST new user
            const res = await axios.post(api, { name, email });
            if (res.status === 201 || res.status === 200) {
                show('Registration successful.');
                nameEl.value = ''; emailEl.value = '';
            } else {
                show('Failed to register', true);
            }
        } catch (err) {
            show('Network or server error', true);
            console.error(err);
        }
    });
})();
