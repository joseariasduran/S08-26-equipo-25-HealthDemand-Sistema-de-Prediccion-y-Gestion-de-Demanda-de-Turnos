document.addEventListener('DOMContentLoaded', () => {

    // ==================== CONFIGURACIÓN DE TU API ====================
    // ⚠️ Reemplaza esta URL por la tuya de ngrok (cámbiala cada vez que reinicies ngrok)
    const API_URL = "https://quintin-unresisted-jimply.ngrok-free.dev/predict";
    // ==================================================================

    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeBtn = document.getElementById('close-btn');
    const predictionForm = document.getElementById('prediction-form');
    const predictionResult = document.getElementById('prediction-result');
    const probValue = document.getElementById('prob-value');
    const predictionText = document.getElementById('prediction-text');
    const probBarFill = document.getElementById('prob-bar-fill');
    const resetBtn = document.getElementById('reset-btn');
    const predictBtn = document.getElementById('predict-btn');

    // Alternar ventana del chat
    function toggleChat() {
        chatWindow.classList.toggle('hidden');
    }

    chatButton.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Envío del formulario → llamada a la API
    predictionForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Capturar datos del formulario
        const payload = {
            especialidad: document.getElementById('especialidad').value,
            sede: document.getElementById('sede').value,
            tipo_atencion: document.getElementById('tipo_atencion').value,
            dia_semana: parseInt(document.getElementById('dia_semana').value, 10),
            franja: document.getElementById('franja').value
        };

        console.log("Enviando a la API:", payload);

        // Estado de carga
        predictBtn.innerText = "Prediciendo...";
        predictBtn.disabled = true;
        predictBtn.style.backgroundColor = "#aaa";

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // ⚠️ CRÍTICO: evita la página de advertencia de ngrok
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log("Respuesta de la API:", data);

            // La API devuelve algo como:
            // {"prevision":"no","probabilidad":49.6808,"probabilidades":{"no":50.3192,"yes":49.6808}}
            mostrarResultado(data);

        } catch (error) {
            console.error("Error al llamar a la API:", error);
            alert("No se pudo conectar con el servicio de predicción.\n\n" +
                  "Verifica que:\n" +
                  "1. Tu servidor ngrok esté corriendo.\n" +
                  "2. La URL en script.js sea la actual.\n\n" +
                  "Detalle: " + error.message);
        } finally {
            predictBtn.innerText = "PREDECIR ASISTENCIA";
            predictBtn.disabled = false;
            predictBtn.style.backgroundColor = "#004d40";
        }
    });

    // Mostrar el resultado de la predicción
    function mostrarResultado(data) {
        const probYes = data.probabilidades?.yes ?? 0;
        const probNo  = data.probabilidades?.no  ?? 0;
        const prevision = data.prevision; // "yes" o "no"

        // Redondear a 2 decimales
        const probYesRound = probYes.toFixed(2);
        const probNoRound  = probNo.toFixed(2);

        // Ocultar formulario, mostrar resultado
        predictionForm.style.display = 'none';
        predictionResult.classList.add('show');

        // Elegir el color y el mensaje según la predicción
        if (prevision === 'yes') {
            predictionResult.classList.remove('no');
            predictionResult.classList.add('yes');
            probValue.textContent = probYesRound + '%';
            probValue.style.color = '#54A24B';
            predictionText.innerHTML = `✅ <b>Alta probabilidad de ASISTENCIA</b><br>
                <small>Probabilidad de que el paciente asista: <b>${probYesRound}%</b></small>`;
            probBarFill.style.background = '#54A24B';
            probBarFill.style.width = probYesRound + '%';
        } else {
            predictionResult.classList.remove('yes');
            predictionResult.classList.add('no');
            probValue.textContent = probNoRound + '%';
            probValue.style.color = '#E45756';
            predictionText.innerHTML = `⚠️ <b>Alta probabilidad de INASISTENCIA</b><br>
                <small>Probabilidad de que el paciente NO asista: <b>${probNoRound}%</b></small>`;
            probBarFill.style.background = '#E45756';
            probBarFill.style.width = probNoRound + '%';
        }
    }

    // Botón "Nueva predicción"
    resetBtn.addEventListener('click', () => {
        predictionForm.reset();
        predictionForm.style.display = 'block';
        predictionResult.classList.remove('show', 'yes', 'no');
        probBarFill.style.width = '0%';
    });
});