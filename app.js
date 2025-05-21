let gameSeq= [];
let userSeq= [];

let btns=["yellow", "red", "purple", "green"];

let started= false;
let level= 0;
let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started==false){
       console.log("game is started");
       started= true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
       btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
       btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq= [];
   level++;
   h2.innerText= `Level ${level}`;
    
   let randIdx= Math.floor(Math.random() * 3);
    let randColor= btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML= `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    
   let btn= this;
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click", btnPress);
}

function reset(){
    started= false;
    gameSeq= [];
    userSeq= [];
    level= 0;
}







// let gameseq = [];
// let userseq = [];

// let start = false;
// let level = 0;

// document.addEventListener("keypress", function () {
//   if (!start) {
//     console.log("Game started");
//     start = true;
//     levelUp(); // You'll likely want to start the game sequence here
//   }
// });

// const buttons = document.querySelectorAll(".btn"); // Select all elements with the class "btn"

// buttons.forEach(button => {
//   button.addEventListener("click", function () {
//     console.log("Button clicked:", this.classList[1]); // Log the color (second class) of the clicked button
//     // You would also want to record the user's sequence here
//     userseq.push(this.classList[1]);
//     checkAnswer(userseq.length - 1); // You'll likely have a function to check the user's answer
//   });
// });

// function levelUp() {
//   userseq = [];
//   level++;
//   document.querySelector("h2").textContent = `Level ${level}`;

//   let randomColor = buttons[Math.floor(Math.random() * buttons.length)].classList[1];
//   gameseq.push(randomColor);
//   // You'll likely want to visually indicate the new color in the sequence
//   console.log("Game sequence:", gameseq);
// }

// function checkAnswer(idx) {
//   if (userseq[idx] === gameseq[idx]) {
//     if (userseq.length === gameseq.length) {
//       setTimeout(levelUp, 1000);
//     }
//   } else {
//     // Handle game over logic
//     console.log("Game Over! Score:", level - 1);
//     resetGame();
//   }
// }

// function resetGame() {
//   start = false;
//   gameseq = [];
//   userseq = [];
//   level = 0;
//   document.querySelector("h2").textContent = "Press any Key to start Game";
// }
