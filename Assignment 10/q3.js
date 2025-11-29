// q3.js — Load tasks using jQuery AJAX and support query params + PATCH to toggle completed
$(function(){
  const base = 'http://localhost:3003/tasks';
  const $list = $('#list');
  const $filter = $('#filter');

  function load(params = {}) {
    $list.html('Loading...');
    $.ajax({
      url: base,
      data: params,
      success(data) {
        render(data);
      },
      error() { $list.html('<div class="err">Failed to load tasks</div>'); }
    });
  }

  function render(tasks) {
    $list.empty();
    if (!tasks.length) $list.html('<div>No tasks found</div>');
    tasks.forEach(t => {
      const $t = $(`
        <div class="task" data-id="${t.id}">
          <div><strong>${t.title}</strong> <small>(${t.priority})</small></div>
          <div>
            <label><input type="checkbox" ${t.completed?'checked':''}/> Completed</label>
          </div>
        </div>
      `);
      $t.find('input').on('change', function(){
        const newVal = $(this).is(':checked');
        // PATCH to toggle completed
        $.ajax({
          url: `${base}/${t.id}`,
          method: 'PATCH',
          contentType: 'application/json',
          data: JSON.stringify({ completed: newVal }),
          success() { t.completed = newVal; },
          error() {
            // revert checkbox on error
            $(this).prop('checked', !newVal);
            alert('Failed to update task');
          }, context: $t.bind(this)
        });
      });
      $list.append($t);
    });
  }

  // filter change -> reload using query params
  $filter.on('change', function(){
    const val = $(this).val();
    if (!val) load();
    else if (val === 'completed') load({ completed: true });
    else load({ priority: val });
  });

  // initial load
  load();
});