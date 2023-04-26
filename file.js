const boxes = document.getElementsByClassName("box")
const restart = document.querySelector(".restart")
const heading = document.querySelector(".head")
const newgame = document.querySelector(".new-game")
const winning = document.querySelector(".text")
const popup = document.querySelector(".popup")
const tingSound = new Audio('music/ting.mp3')
const gameOverSound = new Audio('music/gameover.mp3')
const boxArr = Array.from(boxes);
let turn = "X";
const changeTurn = ()=> turn === "X" ? turn = "O" : turn = "X";
let click =0;
const checkWins = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        let [element1, element2, element3] = [boxes[e[0]].innerHTML, boxes[e[1]].innerHTML, boxes[e[2]].innerHTML]
        if(element1 != "" && element2 != "" && element3 !=""){
            if(element1 === element2 && element2 === element3){
                popup.classList.remove("hide");
                changeTurn()
                winning.innerHTML = `${turn} Wins`
                gameOverSound.play()
            }
        }

    })
}

boxArr.forEach(e=>{
    e.addEventListener("click", ()=>{
        if(e.innerHTML === ""){
            e.innerHTML = turn;
            tingSound.play()
            turn = changeTurn()
            heading.innerHTML = `'${turn}' Turn`
            click += 1; 
            if(click === 9){
                popup.classList.remove("hide");
                winning.innerHTML = "Match draw";
                gameOverSound.play()
            }
            checkWins()
        }
    })
})

restart.addEventListener("click", (e)=>{
    popup.classList.add("hide")
    boxArr.forEach((e)=>{
        e.innerHTML = "";
        turn="X"
        heading.innerHTML = `'${turn}' Turn`
        click=0;
        gameOverSound.play()
        
    })
})
newgame.addEventListener("click", (e)=>{
    popup.classList.add("hide")
    boxArr.forEach((e)=>{
        e.innerHTML = "";
        turn= "X";
        heading.innerHTML = `'${turn}' Turn`
        click=0
    })
})