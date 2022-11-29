const skillsinterval = 1000;

const currentyeararabic = new Date().getFullYear();
const currentyearroman = toRoman(currentyeararabic);

let deviceWidth = window.innerWidth;
let deviceHeight = window.innerHeight;
window.addEventListener("resize", () => {
  deviceWidth = window.innerWidth;
  deviceHeight = window.innerHeight;
});

const skills = ["javascript", "typescript", "html", "css", "python", "java"];
const tools = ["dev tools", "vs code", "git", "github", "zsh", "bash", "linux"];
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

let mouseisoverlang = false;
languagediv.addEventListener("mouseover", () => {
  mouseisoverlang = true;
});
languagediv.addEventListener("mouseout", () => {
  mouseisoverlang = false;
});

let mouseisovertools = false;
toolsdiv.addEventListener("mouseover", () => {
  mouseisovertools = true;
});
toolsdiv.addEventListener("mouseout", () => {
  mouseisovertools = false;
});

setInterval(() => {
  if (mouseisoverlang) {
    document.querySelector(".sect1 > h2").innerHTML = skills[skillcounter];
    skillcounter++;
    if (skillcounter == 6) {
      skillcounter = 0;
    }
  }
}, skillsinterval);

setInterval(() => {
  if (mouseisovertools) {
    document.querySelector(".sect2 > h2").innerHTML = tools[toolcounter];
    toolcounter++;
    if (toolcounter == 7) {
      toolcounter = 0;
    }
  }
}, skillsinterval);

let togglestatelang;
languagediv.addEventListener("click", () => {
  console.log("clicked");
  if (!togglestatelang) {
    document.querySelector(".sect1 > .more").classList.add("unhid");
    document.querySelector(".sect1").classList.add("toggled");
    document.queryS;
    togglestatelang = true;
  } else {
    document.querySelector(".sect1 > .more").classList.remove("unhid");
    document.querySelector(".sect1").classList.remove("toggled");
    togglestatelang = false;
  }
});

let togglestatetool;
toolsdiv.addEventListener("click", () => {
  console.log("clicked");
  if (!togglestatetool) {
    document.querySelector(".sect2 > .more").classList.add("unhid");
    document.querySelector(".sect2").classList.add("toggled");
    togglestatetool = true;
  } else {
    document.querySelector(".sect2 > .more").classList.remove("unhid");
    document.querySelector(".sect2").classList.remove("toggled");
    togglestatetool = false;
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
