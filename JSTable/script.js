// Array mit Objekten
const daten = [
  { name: "Anna", alter: 25, stadt: "Bern" },
  { name: "Max", alter: 30, stadt: "Zürich" },
  { name: "Sophie", alter: 22, stadt: "Genf" },
  { name: "Jonas", alter: 28, stadt: "Basel" },
];

// Funktion zum Füllen der Tabelle
function fülleTabelle(daten) {
  const tbody = document.querySelector("#data-table tbody");

  daten.forEach((datum) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = datum.name;
    tr.appendChild(tdName);

    const tdAlter = document.createElement("td");
    tdAlter.textContent = datum.alter;
    tr.appendChild(tdAlter);

    const tdStadt = document.createElement("td");
    tdStadt.textContent = datum.stadt;
    tr.appendChild(tdStadt);

    tbody.appendChild(tr);
  });
}

// Aufruf der Funktion
fülleTabelle(daten);
