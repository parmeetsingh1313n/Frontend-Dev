(function () {
    const base = 'http://localhost:3002/employees';
    const tbody = document.querySelector('#tbl tbody');
    const errEl = document.getElementById('err');

    function fetchEmployees() {
        errEl.textContent = '';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', base);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                render(data);
            } else {
                errEl.textContent = 'Failed to load employees';
            }
        };
        xhr.onerror = function () { errEl.textContent = 'Network error'; };
        xhr.send();
    }

    function render(list) {
        tbody.innerHTML = '';
        list.forEach(emp => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${emp.id}</td><td>${emp.name}</td><td class="status">${emp.status}</td><td><input type="checkbox" ${emp.status === 'active' ? 'checked' : ''} /></td>`;
            const cb = tr.querySelector('input');
            cb.addEventListener('change', function () {
                const newStatus = this.checked ? 'active' : 'inactive';
                // optimistic UI: update immediately
                tr.querySelector('.status').textContent = newStatus;
                // send PATCH
                const patch = new XMLHttpRequest();
                patch.open('PATCH', `${base}/${emp.id}`);
                patch.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                patch.onload = function () {
                    if (!(patch.status >= 200 && patch.status < 300)) {
                        // revert UI
                        tr.querySelector('.status').textContent = emp.status;
                        cb.checked = emp.status === 'active';
                        errEl.textContent = 'Failed to update status';
                    } else {
                        // update local emp.status to new value
                        emp.status = newStatus;
                    }
                };
                patch.onerror = function () {
                    tr.querySelector('.status').textContent = emp.status;
                    cb.checked = emp.status === 'active';
                    errEl.textContent = 'Network error during update';
                };
                patch.send(JSON.stringify({ status: newStatus }));
            });
            tbody.appendChild(tr);
        });
    }

    // initial load
    fetchEmployees();
})();
