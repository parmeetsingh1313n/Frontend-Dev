(function () {
    const usersEl = document.getElementById('users');
    const ordersEl = document.getElementById('orders');
    const productsEl = document.getElementById('products');
    const warnEl = document.getElementById('warn');

    // show skeletons are already in HTML
    const urls = [
        'http://localhost:3004/users',
        'http://localhost:3004/orders',
        'http://localhost:3004/products'
    ];

    Promise.all(urls.map(u => fetch(u).then(r => {
        if (!r.ok) throw new Error('Fetch failed');
        return r.json();
    })))
        .then(([users, orders, products]) => {
            usersEl.innerHTML = `<div style="font-size:18px">${users.length}</div><div>Users</div>`;
            ordersEl.innerHTML = `<div style="font-size:18px">${orders.length}</div><div>Orders</div>`;
            productsEl.innerHTML = `<div style="font-size:18px">${products.length}</div><div>Products</div>`;
        })
        .catch(err => {
            // If any failed, still attempt to show what we can
            warnEl.style.display = 'block';
            fetch('http://localhost:3004/users').then(r => r.json()).then(d => usersEl.innerHTML = `<div style="font-size:18px">${d.length}</div><div>Users</div>`).catch(() => usersEl.innerHTML = 'N/A');
            fetch('http://localhost:3004/orders').then(r => r.json()).then(d => ordersEl.innerHTML = `<div style="font-size:18px">${d.length}</div><div>Orders</div>`).catch(() => ordersEl.innerHTML = 'N/A');
            fetch('http://localhost:3004/products').then(r => r.json()).then(d => productsEl.innerHTML = `<div style="font-size:18px">${d.length}</div><div>Products</div>`).catch(() => productsEl.innerHTML = 'N/A');
        });
})();
