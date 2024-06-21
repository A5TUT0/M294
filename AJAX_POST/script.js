document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("sumButton");

  button.addEventListener("click", function () {
    // Holt die Werte der Eingabefelder
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);

    const numbers = [num1, num2, num3, num4]; // Erstellt ein Array mit den Zahlen

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/sum", true); // Konfiguriert die AJAX-Anfrage
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Überprüft, ob die Anfrage abgeschlossen und erfolgreich war
        const response = JSON.parse(xhr.responseText); // Analysiert die JSON-Antwort
        document.getElementById("result").textContent = "Sum: " + response.sum; // Zeigt die Summe im Absatz mit der ID "result" an
      }
    };

    xhr.send(JSON.stringify({ numbers: numbers })); // Sendet die Anfrage mit den Daten im JSON-Format
  });
});
