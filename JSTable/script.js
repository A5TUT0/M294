// Array mit Objekten
const daten = [
  { name: "Anna", alter: 25, stadt: "Bern" },
  { name: "Max", alter: 30, stadt: "Zürich" },
  { name: "Sophie", alter: 22, stadt: "Genf" },
  { name: "Jonas", alter: 28, stadt: "Basel" },
];

// Funktion zum Füllen der Tabelle
function fülleTabelle(daten) {
  // Select the table body element
  const tbody = document.querySelector("#data-table tbody");

  // Loop through each object in the data array
  daten.forEach((datum) => {
    // Create a new table row element
    const tr = document.createElement("tr");

    // Create a new table data element for the name, set its text content, and append it to the row
    const tdName = document.createElement("td");
    tdName.textContent = datum.name;
    tr.appendChild(tdName);

    const tdAlter = document.createElement("td");
    tdAlter.textContent = datum.alter;
    tr.appendChild(tdAlter);

    const tdStadt = document.createElement("td");
    tdStadt.textContent = datum.stadt;
    tr.appendChild(tdStadt);

    // Append the row to the table body
    tbody.appendChild(tr);
  });
}

// Aufruf der Funktion
fülleTabelle(daten);
