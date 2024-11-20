'use strict'

let inputField = document.querySelector("#input");
let outputField = document.querySelector("#output");
let btnEnDe = document.querySelector("#btnEnDe");
let btnAgain = document.querySelector("#btnAgain");

const encrypt = (text)=> {
    let lines = [];
    let segmentSize = Math.ceil(Math.sqrt(text.length));
    while(segmentSize*segmentSize!=text.length){
        text += " ";
    }
    for(let i = 0; i<text.length; i+=segmentSize){
        lines.push(text.substr(i, segmentSize));
    }

    let ret = "";

    for(let i = 0; i<segmentSize; i++){
        for(let j = 0; j<lines.length; j++){
            ret += lines[j][i];
        }
    }
    return ret;
}


btnEnDe.addEventListener("click", (e)=>{
    let text = inputField.value;
    inputField.setAttribute('disabled', true);
    inputField.value = encrypt(text);
    $(btnEnDe).fadeOut(1500, ()=>{
        $(btnAgain).fadeIn(1500);
    });
    
})

btnAgain.addEventListener("click", (e)=>{
    inputField.value = "";
    inputField.removeAttribute('disabled');
    $(btnAgain).fadeOut(1500, ()=>{
        $(btnEnDe).fadeIn(1500);
    });
})