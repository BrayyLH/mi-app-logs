function registrarLog(mensaje, tipo = "info") {
  const logsDiv = document.getElementById('logs');
  const logEntry = document.createElement('p');
  logEntry.style.color = tipo === "error" ? "red" : tipo === "warning" ? "orange" : "green";
  logEntry.textContent = `[${new Date().toISOString()}] [${tipo.toUpperCase()}] ${mensaje}`;
  logsDiv.appendChild(logEntry);
}

function saludar() {
  document.getElementById('resultado').textContent = "✅ Hola desde CI/CD con Logs";
  registrarLog("Saludar ejecutado correctamente.");
}

function forzarError() {
  document.getElementById('resultado').textContent = "❌ Ups, error simulado";
  registrarLog("Error forzado por el usuario.", "error");
}