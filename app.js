/////////////   [1] set random array of words  ///////////////////
let randomString =
  "Welcome likely looking find perfect help do While this tool generator that will generate words for variety activities Even allows you adjust parameters of random best fit your needs";
let randomWords = randomString.split(" ");
// console.log(randomWords);
///////////////////////////////////////////////////////////////////

/////////////  [2] set levels and set default level   ///////////////////
const lvl = {
  easy: 6,
  normal: 4,
  hard: 2,
};
let defaultLevelName = "easy";
let defaultLevelSeconds = lvl[defaultLevelName];
// console.log(defaultLevelSeconds);
///////////////////////////////////////////////////////////////////

/////////////  [3] catch the selectors   ///////////////////
let startBtn = document.querySelector(".game .start");
let levelName = document.querySelector(".game .massage .lvl");
let levelSeconds = document.querySelector(".game .massage .seconds");
let theWord = document.querySelector(".game .the-word");
let input = document.querySelector(".game .input");
let upcomingWord = document.querySelector(".game .upcoming");
let secondsLeft = document.querySelector(".game .control .time span");
let score = document.querySelector(".game .control .score span.got");
let totalScore = document.querySelector(".game .control .score span.total");
let finish = document.querySelector(".game .finish");
///////////////////////////////////////////////////////////////////

//////////////  [3] fill the dynamic data by js   //////////////
levelName.innerHTML = defaultLevelName;
levelSeconds.innerHTML = defaultLevelSeconds;
secondsLeft.innerHTML = defaultLevelSeconds;
totalScore.innerHTML = randomWords.length;
score.innerHTML = 0;
//////////////////////////////////////////////////////////////////

//////////////  [5] remove paste event by js    //////////////////
input.onpaste = () => {
  return false;
};
//////////////////////////////////////////////////////////////////

//////////////  [6] on start click functionalty    //////////////////
startBtn.onclick = function () {
  this.remove();
  input.focus();
  generate();
};
//////////////////////////////////////////////////////////////////

//////////////  [7] make function that generate random array of word and put the data into html    //////////////////
function generate() {
  let randomNum = Math.trunc(Math.random() * randomWords.length);
  let randomWord = randomWords[randomNum];
  let indexWord = randomWords.indexOf(randomWord);
  randomWords.splice(indexWord, 1);
  theWord.innerHTML = randomWord;
  upcomingWord.innerHTML = "";

  for (let i = 0; i < randomWords.length; i++) {
    let divWord = document.createElement("div");
    divWord.appendChild(document.createTextNode(randomWords[i]));
    upcomingWord.appendChild(divWord);
  }
  startPlay();
}
//////////////////////////////////////////////////////////////////

//////////////  [8] make play function countdown  //////////////////
function startPlay() {
  secondsLeft.innerHTML = defaultLevelSeconds;
  let startCount = setInterval(() => {
    secondsLeft.innerHTML--;
    if (input.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
      console.log("good");
      clearInterval(startCount);
      input.value = "";
      score.innerHTML++;
      if (randomWords.length > 0) {
        generate();
      } else {
        let span = document.createElement("span");
        span.classList.add("good");
        span.appendChild(document.createTextNode("good luck"));
        finish.appendChild(span);
      }
    }
    if (
      secondsLeft.innerHTML == 0 &&
      input.value.toLowerCase() != theWord.innerHTML.toLowerCase()
    ) {
      clearInterval(startCount);
      let span = document.createElement("span");
      span.classList.add("bad");
      span.appendChild(document.createTextNode("bad luck"));
      finish.appendChild(span);
    }
  }, 1000);
}
//////////////////////////////////////////////////////////////////
