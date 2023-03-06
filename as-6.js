let userinput = document.querySelector("#user")
console.log(userinput)
let computerinput = document.querySelector("#computer")
let btnstart = document.querySelector("#start")
let computerscore = 0
let userscore = 0;
//for(i=0;i<3;i++){
btnstart.addEventListener("click",function(){
   
    userchoice =  prompt("do u select rock ,paper or scissor?")
    console.log(userchoice)
let computerchoice = Math.random()
if(computerchoice < 0.34 ){
    computerchoice ="rock"
}
else if(computerchoice<=0.67){
    computerchoice = "paper"
}
else{
    computerchoice = "scissor"
}
console.log(computerchoice)
    if(userchoice === computerchoice){
    }
    else if(userchoice === "rock"){
        if(computerchoice === "scissor"){
            userscore++
        }
        else if(computerchoice === "paper"){
            computerscore++
        }
       
    }
    else if(userchoice ==="paper"){
        if(computerchoice === "scissor"){
           computerscore++
        }
        else if(computerchoice=== "rock"){
           userscore++
        }
        
    }
   else if(userchoice === "scissor"){
        if(computerchoice === "paper"){
            userscore++
        }
        else if(computerchoice === "rock"){
          computerscore++
        }
    }
    userinput.setAttribute("placeholder",userscore)
    computerinput.setAttribute("placeholder",computerscore) 
    console.log(userscore)
    console.log(computerscore)  
    
if(computerscore<userscore){
    alert ("Congratulation! you won the game")
 }
 else if(computerscore>userscore){
     alert("you lose the game")
 }

})

//alert("click start button to start the game")

 /* else if(computerscore==userscore){
    prompt("its tie try another time")
 } */
/* userinput.setAttribute("placeholder",userscore)
        computerinput.setAttribute("placeholder",computerscore) */

//}















/* btndanger.addEventListener("click",function(){
    let userchoice = Math.random()
    let computerchoice = Math.random()
    computerChoice(computerchoice)
    inputChoice(userchoice)
 console.log(userchoice)
 console.log(computerchoice)

})
btnsuccess.addEventListener("click",function(){
    let userchoice = Math.random()
    let computerchoice = Math.random()
    computerChoice(computerchoice)
    inputChoice(userchoice)
 console.log(userchoice)
 console.log(computerchoice)

})
btnwarning.addEventListener("click",function(){
    let userchoice = Math.random()
    let computerchoice = Math.random()
    computerChoice(computerchoice)
    inputChoice(userchoice)
 console.log(userchoice)
 console.log(computerchoice)
})

function computerChoice(computerchoice){
    if(computerchoice < 0.34 ){
        computerchoice ="rock"
    }
    else if(computerchoice<=67){
        computerchoice = "paper"
    }
    else{
        computerchoice = "scissor"
    }
}
function inputChoice(userchoice){
    if(userchoice < 0.34 ){
        userchoice ="rock"
    }
    else if(userchoice<=67){
        userchoice = "paper"
    }
    else{
        userchoice = "scissor"
    }
}
function compare(userchoice,computerChoice){
    if(userchoice===computerChoic)
}

 */


