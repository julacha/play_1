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
let well = document.getElementById('done');
let wrong = document.getElementById('error');
let i=0;


oneBtn.onclick = function(){
   images[i].style.display = "none";
   if(i == 0){
      well.style.display = "block";
      }
   else if (i !== 0)
   {
      wrong.style.display = "block";
   }
}

twoBtn.onclick = function(){
   images[i].style.display = "none";
      if(i === 1){
         well.style.display = "block";
         }
    else if (i !== 1)
      {
         wrong.style.display = " block";
      }
   }
   
   
threeBtn.onclick = function(){
   images[i].style.display = "none";
      if(i === 2){
         well.style.display = "block";
         }
      else if (i !== 2)
      {
         wrong.style.display = " block";
      }
   }
   
 fourBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 3){
      well.style.display = "block";
   }
   else if (i !== 3)
      {
      wrong.style.display = " block";
      }
}     
 fourBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 3){
      well.style.display = "block";
      }
   else if (i !== 3)
      {
         wrong.style.display = " block";
      }
}     
fiveBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 4){
      well.style.display = "block";
      }
   else if (i !== 4)
      {
      wrong.style.display = " block";
      }
}        
sixBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 5){
      well.style.display = "block";
      }
   else if(i !== 5)
      {
         wrong.style.display = " block";
      }
}
sevenBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 6){
      well.style.display = "block";
      }
   else if(i !== 6)
      {
         wrong.style.display = " block";
      }
}
eightBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 7){
      well.style.display = "block";
      }
   else if(i !== 7)
      {
         wrong.style.display = " block";
      }
}
nineBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 8){
      well.style.display = "block";
      }
   else if(i !== 8)
      {
         wrong.style.display = " block";
      }
}
tenBtn.onclick = function(){
   images[i].style.display = "none";
   if(i === 9){
      well.style.display = "block";
      }
   else if(i !== 9)
      {
         wrong.style.display = " block";
      }
}
rightBtn.onclick = function(){
   images[i].style.display = "none";
   well.style.display = "none"; 
   wrong.style.display = "none";
   i++;
   images[i].style.display = "block";
} 

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