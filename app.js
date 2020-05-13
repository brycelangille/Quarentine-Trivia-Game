const DOMAIN = "https://opentdb.com/api_config.php";
const topicSelector = document.querySelector(`#topicSelector`);
let index = 0;
let score = 0;
const scoreP = document.querySelector(".score");
scoreP.innerText = score;

async function fetchData(topic) {
  let topicNumber;
  if (topic === "movie") {
    topicNumber = 11;
  } else if (topic === "music") {
    topicNumber = 12;
  } else if (topic === "tvShow") {
    topicNumber = 14;
  } else if (topic === "cartoonCharacter") {
    topicNumber = 32;
  }

  const Base_URL = `https://opentdb.com/api.php?amount=10&category=${topicNumber}&difficulty=easy&type=multiple`;
  console.log(Base_URL);
  try {
    let response = await axios.get(Base_URL);
    let data = response.data.results;
    topicSelector.remove();
    generateGame(data);
  } catch (error) {
    console.log(error);
  }
}

//console.log(topicSelector)
topicSelector.addEventListener(`click`, (e) => {
  e.preventDefault();
  let pick = document.querySelector(".pick")
  pick.remove()
  //console.log(e.target.id);
  fetchData(e.target.id);
});

function generateGame(data) {
  removeQuestion();
  let answersArray = [];
  console.log(data);
  const container = document.querySelector(".container");

  const questionsDiv = document.createElement("div");
  questionsDiv.className = "questions-div";
  container.appendChild(questionsDiv);
  questionsDiv.innerText = data[index].question.replace(/\&quot;/g, `"`).replace(/\&#039;/g, `'`).replace(/\&amp;/g, `&`).replace(/\&ntilde;/g, `ñ`).replace(/\&aacute;/g, `á`).replace(/\&Uuml;/g, `Ü`).replace(/\&eacute;/g, `é`);
  answersArray.push(data[index].correct_answer);
  data[index].incorrect_answers.forEach((answer) => {
    answersArray.push(answer);
  });

  const answerDiv = document.createElement("div");
  answerDiv.className = "answer-div";
  container.appendChild(answerDiv);

  shuffleArray(answersArray).forEach((answer) => {
    const answerP = document.createElement("p");
    answerP.className = "answer-p";
    answerP.innerText = answer.replace(/\&quot;/g, `"`).replace(/\&#039;/g, `'`).replace(/\&amp;/g, `&`).replace(/\&ntilde;/g, `ñ`).replace(/\&aacute;/g, `á`).replace(/\&uumi;/g, `Ü`).replace(/\&eacute;/g, `é`);
    answerDiv.appendChild(answerP);
    answerP.addEventListener("click", (e) => {
      checkAnswer(e.target, data[index -1].correct_answer)
      generateGame(data);
    });
  });
  if (index === 9) {
    removeQuestion()
    const menu = document.getElementById('menu')
    menu.style.display = "block";
  }
  index += 1;
}
const yes = document.getElementById('restart-button')
    yes.addEventListener('click', () => {
      window.location.href = './topic.html'
    })
      const no = document.getElementById('exit-button')
      no.addEventListener('click', () => {
        window.location.href = './index.html'
    })

function removeQuestion() {
  const oldQuestion = document.querySelector(".container");
  while (oldQuestion.lastChild) {
    oldQuestion.removeChild(oldQuestion.lastChild);
  }
}

function shuffleArray(answersArray) {
  let shuffledAnswers = answersArray;
  let currentIndex = shuffledAnswers.length;
  let temp, rand;
  while (currentIndex !== 0) {
    currentIndex--;
    rand = Math.floor(Math.random() * currentIndex);
    temp = shuffledAnswers[currentIndex];
    shuffledAnswers[currentIndex] = shuffledAnswers[rand];
    shuffledAnswers[rand] = temp;
  }
  return shuffledAnswers;
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer.textContent === correctAnswer) {
    score += 1;
    scoreP.innerText = score;
    console.log(`your correct`);
  } else {
    console.log(`your wrong`);
  }
}