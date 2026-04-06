// ==========================
// SIMULADOR DE INGRESO - MATEMÁTICAS
// ==========================

// ===== PREGUNTAS DE MATEMÁTICAS (Base DOCX provista) =====
const questions = [
    { 
        id: 1, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Si R es un razonamiento cuya estructura es (H1 ʌ H2) → C, entonces R es válido si y solo si se cumple que:', 
        options: [
            'a) Las hipótesis H1 y H2 son formas proposicionales tautológicas.', 
            'b) La conclusión C es una forma proposicional tautológica.', 
            'c) La estructura (H1 ʌ H2) → C; es una forma proposicional tautológica.', 
            'd) La forma proposicional asociada a R es una contradicción.'
        ], 
        answer: 'c' 
    },
    { 
        id: 2, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Si se sabe que \\(-3 < x < 2\\) y se define la expresión \\(E = 5 - 2x\\), ¿cuál es el intervalo correcto al que pertenece E?', 
        options: [
            'a) &nbsp;\\(1 < E < 11\\)', 
            'b) &nbsp;\\(-1 < E < 9\\)', 
            'c) &nbsp;\\(1 < E < 6\\)', 
            'd) &nbsp;\\(0 < E < 11\\)'
        ], 
        answer: 'a' 
    },
    { 
        id: 3, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Considere los números reales x, y, z, entonces siempre es VERDAD que:', 
        options: [
            'a) &nbsp;\\(\\frac{x}{y+z}\\ = \\frac{x}{y}\\ + \\frac{x}{z}\\) ; &nbsp;\\(z \\neq -y\\) , &nbsp;\\(y \\neq 0\\) , &nbsp;\\(z \\neq 0\\)', 
            'b) &nbsp;\\(|x+y| = |x| + |y|\\)', 
            'c) &nbsp;\\( \\sqrt[3]{x+y} = \\sqrt[3]{x} + \\sqrt[3]{y} \\)', 
            'd) &nbsp;\\( \\sqrt{x^2} = |x|\\)'
        ], 
        answer: 'd' 
    },
    { 
        id: 4, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Si A y B son subconjuntos no vacíos de un conjunto referencial Re donde \\(A \\neq B\\) y \\(A \\cup B = A\\), entonces es VERDAD que:', 
        options: [
            'a) &nbsp\\(A \\cap B = A\\)', 
            'b) &nbsp\\(B - A = \\emptyset\\)', 
            'c) &nbsp\\(A - B = A\\)', 
            'd) &nbsp\\(A \\subseteq A \\cap B\\)'
        ], 
        answer: 'b' 
    },
    { 
        id: 5, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Al simplificar la expresión \\( \\frac{x^2-5x+6}{x^3-8} \\cdot \\frac{x^2+2x+4}{x-3} \\), se obtiene:', 
        options: ['a) 1', 'b) &nbsp\\(\\frac{x-2}{x+2}\\)', 'c) &nbsp\\(x-3\\)', 'd) 0'], 
        answer: 'a' 
    },
    { 
        id: 6, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: '¿Cuál de las siguientes afirmaciones describe mejor a un Producto Notable dentro del contexto de las expresiones algebraicas?', 
        options: [
            'a) Es una ecuación que solo es verdadera para ciertos valores de la variable.', 
            'b) Es una igualdad que no se cumple para números negativos.', 
            'c) Es una identidad algebraica que se cumple para cualquier valor de las variables involucradas.', 
            'd) Son aplicables a cualquier par de binomios aleatorios.'
        ], 
        answer: 'c' 
    },
    { 
        id: 7, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Determine el conjunto solución de la siguiente inecuación: \\( \\frac{|x-2|-3}{x^2-1} \\leq 0 \\)', 
        options: [
            'a) &nbsp;\\((- \\infty, -1) \\cup [1, 5]\\)', 
            'b) &nbsp;\\((-1, 1) \\cup [5, \\infty)\\)', 
            'c) &nbsp;\\([-1, 1] \\cup \\{5\\}\\)', 
            'd) &nbsp;\\((- \\infty, -1) \\cup (1, 5]\\)'
        ], 
        answer: 'd' 
    },
    { 
        id: 8, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Si una ecuación cuadrática de la forma \\(ax^2 + bx + c = 0\\) tiene un discriminante igual a cero (\\(\\Delta=0\\)), ¿cuál es la interpretación teórica correcta sobre sus raíces en el conjunto de los números reales?', 
        options: [
            'a) La ecuación no tiene raíces reales (sus raíces son complejas).', 
            'b) La ecuación tiene dos raíces reales distintas.', 
            'c) La ecuación tiene una única solución real (raíz doble o de multiplicidad 2).', 
            'd) La parábola asociada a la ecuación no corta al eje x en ningún punto.'
        ], 
        answer: 'c' 
    },
    { 
        id: 9, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'En un sistema de ecuaciones lineales de 3 x 3, si tras aplicar el método de Gauss se llega a una fila de la forma [0 0 0 | 5], ¿qué se puede concluir teóricamente sobre el sistema?', 
        options: [
            'a) El sistema es inconsistente (no tiene solución).', 
            'b) El sistema tiene una solución única donde z = 5.', 
            'c) El sistema es consistente dependiente (tiene infinitas soluciones).', 
            'd) El sistema necesita una cuarta ecuación para poder resolverse.'
        ], 
        answer: 'a' 
    },
    { 
        id: 10, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: '¿Cuál es el intervalo de valores de x que satisface la condición \\( \\sqrt{x^2-9} < 4\\)?', 
        options: [
            'a) (-5, 5)', 
            'b) &nbsp; \\( (-5, -3] \\cup [3, 5) \\)',
            'c) &nbsp; \\( [-5, -3] \\cup [3, 5] \\)',
            'd) (3, 5)'
        ], 
        answer: 'b' 
    },
    { 
        id: 11, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Sea \\(f(x)=\\frac{1}{\\sqrt{x-2}}\\) y \\(g(x)= x^2-9\\). Determine el dominio de la función producto \\((f \\cdot g)(x)\\)', 
        options: [
            'a) &nbsp;\\([2, \\infty)\\)', 
            'b) &nbsp;\\((2, \\infty)\\)', 
            'c) &nbsp;\\((- \\infty, -3) \\cup (3, \\infty)\\)', 
            'd) &nbsp;\\([2, 3) \\cup (3, \\infty)\\)'
        ], 
        answer: 'b' 
    },
    { 
        id: 12, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Considere la función escalonada \\(h(x) = \\lceil x \\rceil\\) (función techo) y la función afín \\(f(x)=2x-1\\). ¿Cuál es el valor de \\((h-f)(1,2)\\)?', 
        options: ['a) 0,6', 'b) 1,4', 'c) 0,4', 'd) -0,4'], 
        answer: 'a' 
    },
    { 
        id: 13, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Sea f una función por tramos cuya regla de correspondencia es:<p> \\(f(x) = \\begin{cases} x-1, & -2 \\le x < 0 \\\\ x^2, & -2 \\le x \\le 2 \\\\ 1, & x > 2 \\end{cases}\\)<p>Entonces el rango de f es:', 
        options: [
            'a) rg f = [-3, 4]', 
            'b) rg f = &nbsp; \\( [-3, -1) \\cup [0, 1) \\cup (1, 4] \\)', 
            'c) rg f = &nbsp; \\( [-3, -1) \\cup [0, 4] \\)', 
            'd) rg f = &nbsp; \\( [-3, -1) \\cup (0, 1) \\)'
        ], 
        answer: 'c' 
    },
    { 
        id: 14, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Seleccione el enunciado falso dada la función \\(f(x) = x^2 - 2x + 1\\).', 
        options: [
            'a) Rg f(x) = [0, +\\(\\infty\\))', 
            'b) El eje de simetría es x = 1', 
            'c) El intercepto con el eje "x" es el punto (1,0)', 
            'd) f(x) es una función par.'
        ], 
        answer: 'd' 
    },
    { 
        id: 15, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Sea \\( g: \\mathbb{R} \\rightarrow \\mathbb{R} \\) la función definida por \\(g(x)=x^2+ 2\\). ¿Es esta función sobreyectiva en el conjunto de los números reales?', 
        options: [
            'a) Sí, porque es una función cuadrática definida en todos los reales.', 
            'b) Sí, porque su gráfica se extiende hacia el infinito.', 
            'c) No, porque su rango es <span style="vertical-align: middle;">&nbsp\\( [2, +\\infty) \\)</span> &nbsp; y no coincide con el conjunto de llegada <span style="vertical-align: middle;">&nbsp;\\( \\mathbb{R} \\)</span>.',
            'd) No, porque no es una función lineal.'
        ], 
        answer: 'c' 
    },
    { 
        id: 16, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Sea la función \\(f:[0, 2] \\rightarrow \\mathbb{R} \\) definida por:<p> \\(f(x) = \\begin{cases} x, & \\text{si } 0 \\le x < 1 \\\\ x+1, & \\text{si } 1 \\le x \\le 2 \\end{cases}\\)<p>¿Es esta función inyectiva?', 
        options: [
            'a) No, porque tiene un salto (discontinuidad) en x = 1.', 
            'b) Sí, porque es estrictamente creciente en todo su dominio.', 
            'c) No, porque el valor y = 1,5 no tiene preimagen.', 
            'd) Sí, porque es una función biyectiva en los Reales.'
        ], 
        answer: 'b' 
    },
    { 
        id: 17, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Si una función f es estrictamente decreciente en todo su dominio, ¿cuál de las siguientes afirmaciones sobre su función inversa \\(f^{-1}\\) es correcta?', 
        options: [
            'a) La función inversa &nbsp;\\(f^{-1}\\)&nbsp; también será estrictamente decreciente.', 
            'b) La función inversa &nbsp;\\(f^{-1}\\)&nbsp; será estrictamente creciente.', 
            'c) No se puede asegurar que exista una función inversa.', 
            'd) La función inversa será una función par.'
        ], 
        answer: 'a' 
    },
    { 
        id: 18, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'En una progresión aritmética con diferencia común \\(d \\neq 0\\), si se aumenta el valor de cada término en una constante k, ¿qué sucede con la nueva progresión resultante?', 
        options: [
            'a) Se convierte en una progresión geométrica de razón k', 
            'b) Sigue siendo una progresión aritmética pero su diferencia común ahora es d + k', 
            'c) Deja de ser una progresión porque se pierde el patrón de suma.', 
            'd) Sigue siendo una progresión aritmética con la misma diferencia común d'
        ], 
        answer: 'd' 
    },
    { 
        id: 19, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'La matriz aumentada de un sistema de ecuaciones lineales es:<br> \\[ \\begin{pmatrix} 1 & 0 & 2 & | & 1 \\\\ 0 & 1 & -3 & | & 2 \\\\ 0 & 0 & (a^2-1) & | & (a+1) \\end{pmatrix} \\]<br>Entonces es VERDAD que:', 
        options: [
            'a) Si &nbsp;\\(a \\neq 1\\), el sistema de ecuaciones lineales siempre es inconsistente', 
            'b) Si &nbsp;\\(a = 1\\), el sistema de ecuaciones lineales tiene infinitas soluciones', 
            'c) Si &nbsp;\\(a = -1\\), el sistema de ecuaciones lineales tiene solución única', 
            'd) Si &nbsp;\\(a \\neq -1\\)&nbsp; y &nbsp;\\(a \\neq 1\\), el sistema de ecuaciones lineales tiene solución única'
        ], 
        answer: 'd' 
    },
    { 
        id: 20, 
        block: 'ALGEBRA Y FUNCIONES', 
        text: 'Utilizando la regla de la cadena, determine la derivada de \\(g(x)=(3x^2+1)^5\\).', 
        options: [
            'a) &nbsp;\\(g\'(x)=30x(3x^2+1)^4\\)', 
            'b) &nbsp;\\(g\'(x)=15x^2(3x^2+1)^4\\)', 
            'c) &nbsp;\\(g\'(x)=5(3x^2+1)^4\\)', 
            'd) &nbsp;\\(g\'(x)=30(3x^2+1)^4\\)'
        ], 
        answer: 'a' 
    }
];

// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 24 * 60; // 20 minutos
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

// --- ENVÍO DE CORREO AL ADMIN (Lógica Ajustada para Matemáticas) ---
async function enviarCopiaAlAdmin(results, finalScore) {
    const emailUsuario = window.currentUser ? window.currentUser.email : "Desconocido";
    
    // Generar el detalle de respuestas
    let detalle = "";
    questions.forEach(q => {
        const marcada = userAnswers[q.id] || "N/A";
        detalle += `P${q.id}: Marcó [${marcada.toUpperCase()}] - Correcta [${q.answer.toUpperCase()}] | `;
    });

    const payload = {
        "Estudiante": emailUsuario,
        "Materia": "MATEMÁTICAS",
        "Puntaje": `${finalScore} / 1000`,
        "Aciertos": `${results.correctAnswers} / ${results.totalQuestions}`,
        "Respuestas_Detalle": detalle,
        "_subject": `Resultados Matemáticas: ${emailUsuario}`,
        "_captcha": "false",
        "_template": "table"
    };

    try {
        await fetch("https://formsubmit.co/ajax/sebastianneto84@gmail.com", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log("Copia de seguridad enviada al admin.");
    } catch (e) {
        console.error("Error al enviar copia:", e);
    }
}

function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    // Key única para intentos de matemáticas
    let attempts = localStorage.getItem(`attempts_matematicas_${email}`) || 0; 
    
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos para Matemáticas. Se cerrará tu sesión.");
      logoutAndReload(); 
      return;
    }

    // Registramos intento específico de matemáticas
    if (window.currentUser && !isAdmin) {
        let attempts = localStorage.getItem(`attempts_matematicas_${window.currentUser.email}`) || 0;
        attempts = parseInt(attempts) + 1;
        localStorage.setItem(`attempts_matematicas_${window.currentUser.email}`, attempts);
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    // Forzar renderizado de LaTeX
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    // Apuntamos al nuevo ID math-nav-buttons
    const navContainer = document.getElementById('math-nav-buttons');
    if (!navContainer) {
        console.error("Error: No se encontró el div 'math-nav-buttons'.");
        return;
    }
    navContainer.innerHTML = '';

    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        
        navContainer.appendChild(button);
    });
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';

    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text}</p>`;

    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }

    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage}</p>`;
    }
    
    html += '<div class="options">';

    q.options.forEach((option, i) => {
        // En matemáticas usamos solo letras minúsculas para valor (a,b,c,d)
        const optionValue = String.fromCharCode(97 + i); 
        const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
        html += `
            <label>
                <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                ${option}
            </label>
        `;
    });
    html += '</div>'; 
    
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}

function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizStateMatematicas"); // Key específico matemáticas
    
    const results = calculateResults();
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    enviarCopiaAlAdmin(results, finalScore);

    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text}</p>`;
        
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }

        html += '<div class="options">';
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const isSelected = userAnswer === optionValue;
            const isTheCorrectAnswer = q.answer === optionValue;
            let labelClass = '';
            if (isSelected && isCorrect) labelClass = 'correct';
            else if (isSelected && !isCorrect) labelClass = 'incorrect';
            else if (isTheCorrectAnswer) labelClass = 'correct';
            html += `
                <label class="${labelClass}">
                    <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                    ${option}
                </label>`;
        });
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizStateMatematicas", JSON.stringify(state)); // Key específico
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizStateMatematicas");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizStateMatematicas")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});