// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array named studentsList containing the two students
const studentsList: Array<Student> = [student1, student2];

// Render a table using Vanilla JavaScript
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Append a new row to the table for each student
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const cellFirstName: HTMLTableCellElement = document.createElement("td");
  const cellLocation: HTMLTableCellElement = document.createElement("td");

  cellFirstName.textContent = student.firstName;
  cellLocation.textContent = student.location;

  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);
