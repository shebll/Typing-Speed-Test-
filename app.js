/////////////   [1] set random array of words  ///////////////////
let randomString =
  "Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs";
let randomWords = randomString.split(" ");
// console.log(randomWords);
///////////////////////////////////////////////////////////////////

/////////////  [2] set levels and set default level   ///////////////////
const lvl = {
  easy: 6,
  normal: 4,
  hard: 2,
};
let defaultLevelName = "normal";
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
