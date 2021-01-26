const ball = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = ['Tak.', 'Nie.', 'Nie chcesz znać odpowiedzi na to pytanie...', 'Wolę to przemilczeć.', 'To jest pytanie do jasnowidza, nie dla kuli...', 'Nie wiem.'];



const animation = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkQuestion, 1000);
};

const checkQuestion = () => {
    if (question.value === '') {
        error.textContent = 'Wpisz pytanie!';
        answer.textContent = '';
    } else if (question.value.slice(-1) !== '?') {
        error.textContent = 'Pamiętaj o "?" na końcu pytania!';
        answer.textContent = '';
    } else {
        run();
        error.textContent = '';
    }

    ball.classList.remove('shake-animation');
};

const run = () => {
    answer.innerHTML = `<span>Odpowiedź:</span> ${answers[Math.floor(Math.random()*answers.length)]}`;
};

ball.addEventListener('click', animation);