const DOMAIN = "https://opentdb.com/api_config.php"
const topicSelector = document.querySelector(`#topicSelector`)
let index = 0 

  
async function fetchData(topic) {
  let topicNumber
  if (topic === "movie") {
    topicNumber = 11
  } else if (topic === "music") {
    topicNumber = 12
  } else if (topic === "tvShow") {
    topicNumber = 14
  } else if (topic === "cartoonCharacter") {
    topicNumber = 32
  }

  const Base_URL = `https://opentdb.com/api.php?amount=10&category=${topicNumber}&difficulty=easy&type=multiple`
  console.log(Base_URL)
  try {
    let response = await axios.get(Base_URL)
    let data = response.data.results
    topicSelector.remove()
    generateGame(data)
  } catch (error) {
    console.log(error)
  }
}

//console.log(topicSelector)
topicSelector.addEventListener(`click`, (e) => {
  e.preventDefault()
  console.log(e.target.id)
  fetchData(e.target.id)
});

function generateGame(data) {
  removeQuestion()
  console.log(data)
  const container = document.querySelector(".container")

  const questionsDiv = document.createElement("div")
  questionsDiv.className = "questions-div"
  container.appendChild(questionsDiv)
  questionsDiv.innerText = data[index].question

  const choicesDiv = document.createElement('div')
  choicesDiv.className = "choices-div"
  container.appendChild(choicesDiv)

    const answers = document.createElement("p")
    answers.className = "answers"
    container.appendChild(answers)
    answers.innerText = data[index].correct_answer
    answers.addEventListener('click', () => {
      generateGame(data)
    })

    data[index].incorrect_answers.forEach((answers) => {
      const inncorectAnswers = document.createElement("p")
      inncorectAnswers.className = "answers"
      container.appendChild(inncorectAnswers)
      inncorectAnswers.innerText = answers
      inncorectAnswers.addEventListener('click', () => {
        generateGame(data)
      })
      // console.log(data)
    });
index += 1
}

function removeQuestion() {
  const oldQuestion = document.querySelector(".container")
  while (oldQuestion.lastChild) {
    oldQuestion.removeChild(oldQuestion.lastChild)
  }
}

function shuffle(index) {
  index.sort(() => Math.random() - 0.5);
}
shuffle(index);
