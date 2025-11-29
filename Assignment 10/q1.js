$(function () {
    const $input = $('#search');
    const $results = $('#results');
    const $loading = $('#loading');
    let timer = null;

    function render(items) {
        $results.empty();
        if (!items.length) {
            $results.append('<div class="empty">No products found</div>');
            return;
        }
        items.forEach(p => {
            const el = $(`
        <div class="product">
          <img src="${p.image}" alt="${p.name}" />
          <div>
            <div><strong>${p.name}</strong></div>
            <div>$${p.price.toFixed(2)}</div>
          </div>
        </div>
      `);
            $results.append(el);
        });
    }

    function search(q) {
        $loading.show();
        $.ajax({
            url: 'http://localhost:3001/products',
            data: { q },
            dataType: 'json',
            success(data) { render(data); },
            error() { $results.html('<div class="empty">Error loading products</div>'); },
            complete() { $loading.hide(); }
        });
    }

    // debounce user typing
    $input.on('input', function () {
        clearTimeout(timer);
        const q = $(this).val().trim();
        timer = setTimeout(() => {
            search(q);
        }, 300);
    });

    // initial load (all)
    search('');
});
