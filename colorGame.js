var colorArray=[];
var pickedColor;
var clickedColor;
var rgb=document.getElementById("RGB");
var jumbo=document.querySelector(".jumbotron");
var square= document.querySelectorAll(".square");
var easy=document.querySelector(".easy");
var medium=document.querySelector(".medium");
var hard=document.querySelector(".hard");
var resetBtn=document.querySelector(".reset");
var dis=document.getElementById("display");
var difficulty=6;

//Start
difficultyBar();
reset();

function pickAColor(arr){
  var c=Math.floor(Math.random()*arr.length);
  rgb.innerText=arr[c];
  pickedColor=arr[c];
  return arr[c];
}

function createColorArray(n,arr){
  for(var i=0;i<n;i++){
    arr.push(createColor());
    square[i].style.background=arr[i];
  }
}

function createColor(){
  var r,g,b;
  var s;
  r=Math.floor(Math.random()*256);
  b=Math.floor(Math.random()*256);
  g=Math.floor(Math.random()*256);
  s="rgb("+r+", "+g+", "+b+")";
  return s;
}

function addListeners(){
  for(var i=0;i<colorArray.length;i++){
    square[i].addEventListener("click",function(){
      clickedColor=this.style.background;
      if(pickedColor===clickedColor){
        recolor();
        dis.style.color="rgb(90, 255, 5)";
        dis.innerText="Correct!";
        resetBtn.innerText="Play again";

      }
      else{
        this.style.background="#232323";
        dis.style.color="red";
        document.getElementById("display").innerText="Try again";
      }
    });
  };
}

function removeClass(){
  easy.classList.remove("selected");
  medium.classList.remove("selected");
  hard.classList.remove("selected");
}

function difficultyBar(){
  medium.classList.add("selected");
  resetBtn.addEventListener("click",function(){
    reset();
  });
  easy.addEventListener("click",function(){
    difficulty=3;
    removeClass();
    easy.classList.add("selected");
    hide(4,9);
    reset();
  });
  medium.addEventListener("click",function(){
    difficulty=6;
    removeClass();
    medium.classList.add("selected");
    hide(7,9);
    show(4,6);
    reset();
  });
  hard.addEventListener("click",function(){
    difficulty=9;
    removeClass();
    hard.classList.add("selected");
    show(4,9);
    reset();
  });
}

function hide(s,e){
  for(var i=s-1;i<e;i++){
    square[i].style.display="none";
  }
}

function show(s,e){
  for(var i=s-1;i<e;i++){
    square[i].style.display="block";
  }
}

function recolor(){
  jumbo.style.background=clickedColor;
  document.querySelector("h1").style.background=clickedColor;
  for(var i=0;i<colorArray.length;i++){
    square[i].style.background=pickedColor;
  }
}

function reset(){
  colorArray=[];
  createColorArray(difficulty,colorArray);
  pickAColor(colorArray);
  addListeners();
  resetBtn.innerText="New colors";
  dis.innerText="";
  jumbo.style.background="steelblue";
  document.querySelector("h1").style.background="steelblue";
}
