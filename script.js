console.log("Welcome to Match-Stick Game");

const left = document.getElementById("left");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const form = document.forms.form;
const button = document.getElementById("button");

let html = "";
let matchstick = 0;
let turn = 0;

if (localStorage.getItem("a")) {
  matchstick = localStorage.getItem("a");
} else {
  localStorage.setItem("a", 21);
  matchstick = localStorage.getItem("a");
}

if (localStorage.getItem("b")) {
  turn = localStorage.getItem("b");
} else {
  localStorage.setItem("b", 1);
  turn = localStorage.getItem("b");
}

text2.innerText = `Player ${parseInt(turn) % 2 ? 1 : 2}`;

const displayMatch = (matches) => {
  for (let i = 0; i < matches; i++) {
    html = html + `<img src="/stick.png" />`;
  }
  left.innerHTML = html;
};
displayMatch(matchstick);

button.addEventListener("click", () => {
  let formdata = new FormData(form);
  const removeMatches = formdata.get("removeMatches");
  if (removeMatches <= 4 && removeMatches >= 1) {
    if (matchstick > 1 && matchstick - removeMatches >= 1) {
      matchstick = matchstick - removeMatches;
      localStorage.setItem("a", matchstick);
      turn = parseInt(turn) + 1;
      localStorage.setItem("b", turn);
    }
  }
});
if (matchstick == 1) {
  localStorage.setItem("a", 21);
  matchstick = localStorage.getItem("a");
  text.innerText = `Player ${!(turn % 2) ? 1 : 2} Wins`;
  localStorage.setItem("b", 1);
  turn = localStorage.getItem("b");
  setTimeout(() => {
    text2.innerText = `Player ${parseInt(turn) % 2 ? 1 : 2}`;
    text.innerText = "Welcome to MatchStick Game";
    displayMatch(matchstick);
  }, 5000);
}

if (matchstick < 1) {
  localStorage.setItem("a", 21);
  matchstick = localStorage.getItem("a");
  displayMatch(matchstick);
}
