document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("sumButton");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  if (!button) {
    console.error("Button mit ID 'sumButton' nicht gefunden");
    return;
  }

  button.addEventListener("click", function () {
    // Obtener los valores de los campos de entrada
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
      result.textContent = "Bitte geben Sie gültige Zahlen ein.";
      return;
    }

    const numbers = [num1, num2, num3, num4]; // Crear un array con los números

    result.textContent = ""; // Limpiar el texto del resultado
    loading.classList.add("active"); // Mostrar la animación de carga

    console.log("Loading animation should be visible now.");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/sum", true); // Configurar la solicitud AJAX
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // Verificar si la solicitud ha finalizado
        console.log("Request completed with status: " + xhr.status);
        loading.classList.remove("active"); // Ocultar la animación de carga
        console.log("Loading animation should be hidden now.");
        if (xhr.status === 200) {
          // Verificar si la solicitud fue exitosa
          const response = JSON.parse(xhr.responseText); // Analizar la respuesta JSON
          result.textContent = "Sum: " + response.sum; // Mostrar la suma en el párrafo con ID "result"
        } else {
          result.textContent = "Fehler bei der Berechnung."; // Mostrar un mensaje de error
        }
      }
    };

    xhr.onerror = function () {
      loading.classList.remove("active"); // Ocultar la animación de carga
      console.log("Request encountered an error.");
      result.textContent = "Fehler bei der Berechnung."; // Mostrar un mensaje de error
    };

    xhr.send(JSON.stringify({ numbers: numbers })); // Enviar la solicitud con los datos en formato JSON
  });
});
