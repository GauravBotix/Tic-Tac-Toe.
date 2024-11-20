let boxes = document.querySelectorAll(".btn");
let msg = document.querySelector(".msg");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let turn0 = true;
let count = 0;

let winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [1, 4, 7], [2, 4, 6], [2, 5, 8], [6, 7, 8]];

const showWinner = (player) => {
    msg.innerText = `Congratulation  Player ${player} you are the winner.`;
    msgContainer.classList.remove("hide");
    disable();
};
const disable = () => {
    boxes.forEach(box => {
        box.disabled = true;
        });
}
const enable = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
}
const resetGame = () => {
    turn0 = true;
    count = 0;
    enable();
    msgContainer.classList.add("hide");
};
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        count++;
        box.disabled = true;
        let win=checkWinner();

        if(count == 9 && !win){
            draw();
        }
    });
});
 const checkWinner = () => {
    for (let patterns of winPatterns) {
        let a = boxes[patterns[0]].innerText;
        let b = boxes[patterns[1]].innerText;
        let c = boxes[patterns[2]].innerText;
        if (a != "" && b != "" && c != "") {
            if (a === b && b === c) {
                showWinner(a);
                return true;
            }
        }  
     }
   
}
const draw = () => {
    msg.innerText = `Sorry  player "X" and player "0" there's a draw.`;
    msgContainer.classList.remove("hide");
    disable();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


