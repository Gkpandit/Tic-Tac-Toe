let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let msg3 = document.querySelector("#msg3");
let turnO = true;
let count = 0;

let x = 0;
let y = 0;

let winning_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

// msg.style.color = "red";


const resetGame = () =>{
    turnO = true;
    boxEnable();
    msgContainer.classList.add("hide");
    count = 0;
} 

boxes.forEach(box =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            // box.style.color = "red";
            turnO=false;
        }else{
            box.innerText = "X";
            // box.style.color = "yellow";
            turnO=true;
        }
        box.disabled = true;
        check_winner();
    })
})

const boxEnable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const boxDisable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

// const showwinner2 = (win) =>{
//     if(win==9){
//         msg.innerText = "Match is Draw";
//         msgContainer.classList.remove("hide");
//         boxDisable();
//     }
// }

const showWinner = (winner) =>{
    msg.innerText = `Congratulations Winner is ${winner}`;
    msg2.innerText = `X won ${x} times `;
    msg3.innerText = `O won ${y} times `;
    msgContainer.classList.remove("hide");
    boxDisable();
}

const check_winner = () =>{
    count++;
    for(let pattern of winning_pattern){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                if(pos1 == "X"){
                    x++;
                }else{
                    y++;
                }
                showWinner(pos1); 
            }
        }
    }
    console.log(count);
    if(count == 9){
        msg.innerText = "Match is Draw ";
        msgContainer.classList.remove("hide");
        boxDisable(); 
        count = 0;
    }
}

resetBtn.addEventListener("click",resetGame)
newGameBtn.addEventListener("click",resetGame)