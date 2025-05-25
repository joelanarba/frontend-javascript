// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Joel",
  lastName: "Amuni",
  age: 22,
  location: "Cape Coast"
};

const student2: Student = {
  firstName: "Stephanie",
  lastName: "Larbi",
  age: 21,
  location: "Accra"
};

// Add students to an array
const studentsList: Student[] = [student1, student2];

// Create HTML table
const table = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";

const tbody = document.createElement("tbody");

// Add each student's first name and location to table
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  nameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
