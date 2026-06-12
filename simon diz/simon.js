const red=
document.getElementById("red");

const green=
document.getElementById("green");

const blue=
document.getElementById("blue");

const yellow=
document.getElementById("yellow");

const lista = ["red", "green", "blue", "yellow"];

const currentColors = [];
const resultado= document.querySelector('.resultado-erro')

let currentLength = 1;


function getRandomColor() {
    for(let i = 0; i < currentLength; i++){
        const randomIndex = Math.floor(Math.random() * lista.length);
    currentColors.push(lista[randomIndex]);
        

    }
}
function delay(){
    return new Promise(resolve=> setTimeout(resolve,1000));
}
 async function playSequence() {
    console.log(currentColors);

    for(currentColor of currentColors){
        if(currentColor === "red"){
            red.style.boxShadow= "0 0 20px red";
      }
        if(currentColor === "green"){
            green.style.boxShadow= "0 0 20px green";
        }
        if(currentColor === "blue"){
            blue.style.boxShadow= "0 0 20px blue";
        }
        if(currentColor === "yellow"){
            yellow.style.boxShadow= "0 0 20px yellow";
        }
        await delay();
        red.style.boxShadow= "none";
        green.style.boxShadow= "none";
        blue.style.boxShadow= "none";
        yellow.style.boxShadow= "none";


    }
 }
 getRandomColor();
 playSequence()

 let clicked=[];
 


 red.addEventListener('click', async () =>{
    clicked.push("red");
    red.style.boxShadow="0 0 20px red";
    await delay();
    red.style.boxShadow= "none";
    validate();
 })
 green.addEventListener('click', async () =>{
    clicked.push("green");
    green.style.boxShadow="0 0 20px green";
    await delay();
    green.style.boxShadow= "none";
    validate();

 })
 blue.addEventListener('click', async () =>{
    clicked.push("blue");
    blue.style.boxShadow="0 0 20px blue";
    await delay();
    blue.style.boxShadow= "none";
    validate();
    

 })
 yellow.addEventListener('click', async() =>{
    clicked.push("yellow");
    yellow.style.boxShadow="0 0 20px yellow";
    await delay();
    yellow.style.boxShadow= "none";
    validate();

    
 })

 function validate(){
    for( let i = 0; i<= clicked.length -1; i++){
        if(clicked[i]!= currentColors[i]){
            resultado.textContent="Você Morreu!";
            return;
        }}
        resultado.textContent="Você acertou!";
        clicked=[];
        currentColors=[];
        currentLength+=1;
        getRandomColor();
        playSequence();

 } 
 



  
 
