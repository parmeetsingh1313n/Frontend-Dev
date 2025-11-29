(function () {
    const select = document.getElementById('daySelect');
    const results = document.getElementById('results');

    function render(list, day) {
        if (!list.length) {
            results.innerHTML = `<div>No classes today (${day}).</div>`;
            return;
        }
        let html = '<table><thead><tr><th>Subject</th><th>Faculty</th><th>Time</th></tr></thead><tbody>';
        list.forEach(r => html += `<tr><td>${r.subject}</td><td>${r.faculty}</td><td>${r.time}</td></tr>`);
        html += '</tbody></table>';
        results.innerHTML = html;
    }

    async function load(day) {
        results.innerHTML = 'Loading...';
        try {
            const res = await fetch(`http://localhost:3005/timetable?day=${encodeURIComponent(day)}`);
            if (!res.ok) throw new Error('Failed');
            const data = await res.json();
            render(data, day);
        } catch (e) {
            results.innerHTML = '<div class="err">Error loading timetable</div>';
        }
    }

    select.addEventListener('change', () => load(select.value));
    // initial
    load(select.value);
})();
