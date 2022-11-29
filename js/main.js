const currentyeararabic = new Date().getFullYear();
const currentyearroman = toRoman(currentyeararabic);

const skills = ["javascript", "typescript", "html", "css", "python", "java"];
const tools = ["firefox", "vs code", "git", "github", "zsh", "bash", "linux"];
let toolcounter = 0;
let skillcounter = 0;

const copyrighttext = document.getElementById("currentyear");
const hellodiv = document.querySelector(".hello");
const languagediv = document.getElementsByClassName("sect1")[0];
const toolsdiv = document.getElementsByClassName("sect2")[0];

copyrighttext.innerHTML = currentyearroman;

copyrighttext.addEventListener("click", () => {
  if (copyrighttext.innerHTML == currentyeararabic) {
    copyrighttext.innerHTML = currentyearroman;
  } else {
    copyrighttext.innerHTML = currentyeararabic;
  }
});

setInterval(() => {
  document.querySelector(".sect1 > h2").innerHTML = skills[skillcounter];
  skillcounter++;
  if (skillcounter == 6) {
    skillcounter = 0;
  }
}, 1500);

setTimeout(() => {
  setInterval(() => {
    document.querySelector(".sect2 > h2").innerHTML = tools[toolcounter];
    toolcounter++;
    if (toolcounter == 7) {
      toolcounter = 0;
    }
  }, 1500);
}, 750);

let togglestate;
languagediv.addEventListener("click", () => {
  let oppositestate = document.querySelector(".sect2 > .more").className == "more unhid";
  if (!togglestate || oppositestate) {
    document.querySelector(".sect1 > .more").className = "more unhid";
    document.querySelector(".sect2 > .more").className = "more";
    togglestate = true;
  } else {
    document.querySelector(".sect1 > .more").className = "more";
    togglestate = false;
  }
});

toolsdiv.addEventListener("click", () => {
  let oppositestate = document.querySelector(".sect1 > .more").className == "more unhid";
  if (!togglestate || oppositestate) {
    document.querySelector(".sect2 > .more").className = "more unhid";
    document.querySelector(".sect1 > .more").className = "more";
    togglestate = true;
  } else {
    document.querySelector(".sect2 > .more").className = "more";
    togglestate = false;
  }
});

function toRoman(num) {
  var listOfNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var listOfRoman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  var numToRoman = "";
  for (let i = 0; i < listOfNum.length; i++) {
    while (num >= listOfNum[i]) {
      numToRoman += listOfRoman[i];
      num -= listOfNum[i];
    }
  }
  return numToRoman;
}
