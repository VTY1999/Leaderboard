import './style.css';

const userName = document.querySelector('#username');
const score = document.querySelector('#user-score');
const scoreBoard = document.querySelector('#scores');
const form = document.querySelector('.add-scores');
const refreshBtn = document.querySelector('#btn');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/E4fgdgzgDxgchhc/scores';

const postData = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: userName.value,
        score: score.value,
      }),
    });
    form.reset();
  });
};

postData();

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  scoreBoard.innerHTML = '';
  data.result.forEach((e) => {
    scoreBoard.innerHTML += `<p>${e.user}: ${e.score}</p>`;
  });
};

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchData();
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  fetchData();
});