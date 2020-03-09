let leftBtn = document.querySelector('#gallery .buttons-block .left-button');
let rightBtn = document.querySelector('#gallery .buttons-block .right-button');
let oneBtn = document.getElementById('num-1');
let twoBtn = document.getElementById('num-2');
let threeBtn = document.getElementById('num-3');
let fourBtn = document.getElementById('num-4');
let fiveBtn = document.getElementById('num-5');
let sixBtn = document.getElementById('num-6');
let sevenBtn = document.getElementById('num-7');
let eightBtn = document.getElementById('num-8');
let nineBtn = document.getElementById('num-9');
let tenBtn = document.getElementById('num-10');
let images = document.querySelectorAll('#gallery .slider .count');
let i=0;

oneBtn.onclick = function(){
   images[i].style.display = "none";
   i++;
   images[i].style.display = "block";
}


/* leftBtn.onclick = function(){
   images[i].style.display = "none";
   i++;
   images[i].style.display = "block";
}  */

/* function onClick(event){
console.log("Clicked Numbers");
console.log ("My id is", event.currentTarget.id);
console.log("My number is", event.currentTarget.id.slice(-1));

}

function addListeners(){
   var num = document.querySelectorAll('.numbers .cell');
  //console.log(num);
  for (let i=0; i<num.length; i++){
     const cl = num[i];
     //console.log("My id id",cl.id);
     cl.addEventListener("click", onClick);
  }
}

function main(){
   addListeners();
}

main(); */ 
/*  for (let i=0; i < images.length; i++){
   if(i == 0){
      document.write("super");
      }
   else (i !== 0)
   {
      document.write("try one more");
   }
} */