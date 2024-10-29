let selectedRow = null;

// Function to handle form submission
function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        if (selectedRow === null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

// Read form data into an object
function readFormData() {
    return {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };
}

// Insert a new record into the table
function insertNewRecord(data) {
    const tableBody = document.getElementById("stdList").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow(tableBody.length);

    newRow.insertCell(0).innerHTML = data.id;
    newRow.insertCell(1).innerHTML = data.name;
    newRow.insertCell(2).innerHTML = data.email;
    newRow.insertCell(3).innerHTML = '<a onClick="onEdit(this)">Edit</a>';
    newRow.insertCell(4).innerHTML = '<a onClick="onDelete(this)">Delete</a>';
}

// Reset the form fields
function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

// Edit an existing record
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
}

// Update the record with the new form data
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.email;
}

// Delete a record from the table
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        const row = td.parentElement.parentElement;
        document.getElementById("stdList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// Validate the form input
function validate() {
    let isValid = true;
    if (document.getElementById("name").value === "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}
