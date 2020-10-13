var wrapperEle = document.body.querySelector(".wrapper");
var personEle = document.body.querySelector(".person");
var counterEle = document.body.querySelector(".counter");
  var i = 0
  var counter = 0
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];



  

  

function writeSomething(name,age){
  var ele = document.createElement("div");
  ele.innerHTML=name+" "+age;
  document.body.appendChild(ele);
if (age>=40) (ele.style.color="red")
  
}
if (counter = 0)(i+1)
document.body.querySelector(".click").addEventListener("click", function(){
  writeSomething("Harry" ,25 );
});

document.body.querySelector(".click").addEventListener("click", function(){
  writeSomething("Larry" ,15 );
});

document.body.querySelector(".click").addEventListener("click", function(){
  writeSomething("Bert" ,45 );
});

document.body.querySelector(".click").addEventListener("click", function(){
  writeSomething("Jerry" ,35 );
});

document.body.querySelector(".click").addEventListener("click", function(){
  writeSomething("Berry" ,5 );
});

document.body.querySelector(".click").addEventListener("click", function(){
  writeSomething("Bart" ,55 );
});