const currentyeararabic = new Date().getFullYear();
const copyrighttext = document.getElementById("currentyear");
const hellodiv = document.querySelector(".hello");
const currentyearroman = toRoman(currentyeararabic);
const skills = ["javascript", "typescript", "html", "css", "python", "java"];
const tools = ["firefox", "vs code", "git", "github", "zsh", "bash", "linux"];
let toolcounter = 0;
let skillcounter = 0;

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
  document.querySelector(".sect2 > h2").innerHTML = tools[toolcounter];
  skillcounter++;
  toolcounter++;
  if (skillcounter == 6) {
    skillcounter = 0;
  }
  if (toolcounter == 7) {
    toolcounter = 0;
  }
}, 500);

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
