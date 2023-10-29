let gamesequence=[]; 
let usersequence=[];
let buttons=["red","green","blue","greenyellow"];
let gamestarted=false;
let level=0;
document.addEventListener("keypress",function(){
 if(gamestarted==false){
    console.log("game is start");
    gamestarted=true;
    
    levelup();
 }
});

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function () {
    btn.classList.remove("flash");
},250);
};

function levelup(){
    usersequence=[];
    level++;
   
    let h2=document.querySelector("h2");
    h2.innerText=`level=${level}`;
    let randomindex=Math.floor(Math.random()*3);
    let randomcolor=buttons[randomindex];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gamesequence.push(randomcolor);
    console.log(`gamesequence = ${gamesequence}`);
    gameflash(randombtn);
};
function checkans(idx){
    
    if(usersequence[idx]===gamesequence[idx]){
       if(usersequence.length===gamesequence.length) {
       setTimeout(levelup,1000);
       }
    }else{
        let h2=document.querySelector("h2");
        h2.innerHTML=`Game is over!  <b>Your score is (${level}).<b><br>Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white"
        },250);
        gamestarted=false;
        level=0;
        gamesequence=[]; 
        usersequence=[];
    };
}
function userflash(btn){
    btn.classList.add("userflash");
setTimeout(function () {
    btn.classList.remove("userflash");
},150);
 checkans(usersequence.length-1);
};


function userpress(){
    let btn=this;
    usercolor=btn.getAttribute("id");
    
    usersequence.push(usercolor);
   userflash(btn);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",userpress);
};