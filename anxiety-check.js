document.getElementById('anxietyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const q1 = parseInt(document.getElementById('question1').value);
    const q2 = parseInt(document.getElementById('question2').value);
    const q3 = parseInt(document.getElementById('question3').value);
    const q4 = parseInt(document.getElementById('question4').value);
    const q5 = parseInt(document.getElementById('question5').value);
    const q6 = parseInt(document.getElementById('question6').value);
    const q7 = parseInt(document.getElementById('question7').value);
    const q8 = parseInt(document.getElementById('question8').value);

    // Calculate total score
    const totalScore = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8;
    const maxScore = 24; // 3 points for each question (8 questions)
    const percentage = (totalScore / maxScore) * 100;

    // Generate report
    let report = `Your anxiety score is ${percentage.toFixed(2)}%. `;
    let recommendations = '';

    if (percentage <= 33) {
        recommendations = 'Your anxiety levels are low. Consider maintaining a healthy lifestyle and practicing relaxation techniques.';
    } else if (percentage <= 66) {
        recommendations = 'Your anxiety levels are moderate. Consider engaging in mindfulness activities, exercise, or talking to a therapist.';
    } else {
        recommendations = 'Your anxiety levels are high. It is recommended to seek professional help and consider therapy options.';
    }

    // Display the result
    document.getElementById('report').innerText = report;
    document.getElementById('recommendations').innerText = recommendations;
    document.getElementById('result').style.display = 'block';
});