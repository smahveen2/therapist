document.getElementById('startBtn').addEventListener('click', function () {
    alert('Let\'s kickstart your assessment! Choose any service below, buddy!');
});

// Event listener for service buttons
const serviceButtons = document.querySelectorAll('.serviceBtn');
serviceButtons.forEach(button => {
    button.addEventListener('click', function () {
        const serviceName = button.getAttribute('data-service');
        startQuestionnaire(serviceName);
    });
});

function startQuestionnaire(serviceName) {
    let questions;
    switch (serviceName) {
        case 'Anxiety Check':
            questions = ["On a scale of 1-10, how anxious do you feel?", "Have you experienced panic attacks?"];
            break;
        case 'PTSD Analysis':
            questions = ["Have you experienced a traumatic event?", "Do you have nightmares related to the event?"];
            break;
        case 'Phobias Detector':
            questions = ["What’s your biggest fear?", "Do you avoid situations that trigger this fear?"];
            break;
        default:
            questions = [];
    }

    let responses = [];
    let count = 0;

    function askQuestion() {
        if (count < questions.length) {
            const answer = prompt(questions[count]);
            responses.push(answer);
            count++;
            askQuestion();
        } else {
            alert('Thank you for your responses: ' + responses.join(', '));
        }
    }

    askQuestion();
}