// Simple dynamic form generator
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    render(targetId) {
        const container = document.getElementById(targetId);
        let html = "<form id='dynamicForm'>";

        this.fields.forEach(f => {
        html += `
        <label>${f.label}</label>
        <input type="${f.type}" id="${f.label.toLowerCase()}" />
        <br><br>`;
        });

        html += "<button type='button' onclick='getFormData()'>Submit</button></form>";
        container.innerHTML = html;
    }
}

function getFormData() {
    const inputs = document.querySelectorAll("#dynamicForm input");
    let res = {};

    inputs.forEach(i => {
        res[i.id] = i.value;
    });

    console.log("Form Data:", res);
}
