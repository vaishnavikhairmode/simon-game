let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "blue", "green"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("started");
    start = true;
    levelup();
  }
});

// function gameflash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 250);
// }

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  //randommmm
  let randominx = Math.floor(Math.random() * 4);
  let randomclr = btns[randominx]; //here colour are passing but the colours are class
  let randombtn = document.querySelector(`.${randomclr}`);
  gameseq.push(randomclr);
  console.log(gameseq);
  gameflash(randombtn);
}

function checkans(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 200);
    }
  } else {
    // h2.innerHTML = `Game Over!<b>${level}</b><br> Press any key to start`;
    h2.innerHTML = `Game Over!<b>${level}</b><br> Press any key to start`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);
  let usercolour = btn.getAttribute("id");
  userseq.push(usercolour);
  checkans(userseq.length - 1);
}
// let allbtns = document.querySelectorAll(".btn");
// for (btn of allbtns) {
//   btn.addEventListener("click", btnpress);
// }
function reset() {
  start = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
function gameflash(btn) {
  btn.classList.add("gameflash");
  setTimeout(() => {
    btn.classList.remove("gameflash");
  }, 250);
}

let allbtns = document.querySelectorAll(".btn"); // FIXED
for (let btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
