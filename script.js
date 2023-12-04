document.getElementById("checkAnswers").addEventListener("click", function() {
    // Verifica se todas as perguntas foram respondidas
    const answers = document.getElementById("quizForm").elements;
    for (let i = 1; i <= 10; i++) {
        const questionKey = `q${i}`;
        if (!answers[questionKey].value) {
            alert("Por favor, responda todas as perguntas antes de verificar.");
            return;
        }
    }

    let correctAnswers = 0;
    const correctResponses = {
        q1: "c",
        q2: "a",
        q3: "d",
        q4: "a",
        q5: "d",
        q6: "c",
        q7: "a",
        q8: "c",
        q9: "b",
        q10: "d"
    };

    for (let i = 1; i <= 10; i++) {
        const questionKey = `q${i}`;
        if (answers[questionKey].value === correctResponses[questionKey]) {
            correctAnswers++;
        }
    }

    document.getElementById("score").textContent = correctAnswers;
});
