let employees = [];
let editIndex = null;

document.getElementById('employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;

    if (editIndex === null) {
       
        employees.push({ name, position, salary });
    } else {
        
        employees[editIndex] = { name, position, salary };
        editIndex = null;
    }

    document.getElementById('employee-form').reset();
    document.getElementById('submit-btn').textContent = 'Add Employee';
    renderEmployeeList();
}); 

function renderEmployeeList() {
    const tableBody = document.querySelector('#employee-table tbody');
    tableBody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.salary}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editEmployee(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function editEmployee(index) {
    const employee = employees[index];

    document.getElementById('name').value = employee.name;
    document.getElementById('position').value = employee.position;
    document.getElementById('salary').value = employee.salary;

    editIndex = index;
    document.getElementById('submit-btn').textContent = 'Update Employee';
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeList();
}
