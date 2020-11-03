let inp = document.querySelector("#area");
let out = document.querySelector("#count");

let counter = 0

inp.addEventListener('change',()=>{
  let trimmed = inp.value.trim();
  if(trimmed==""){
    out.innerText = "start typing"
  }
  else{
    let regex = /([A-Z]|)\w+/g;
    let counter = trimmed.match(regex).length
    out.innerText = `Number of words : ${counter}`
  }
})