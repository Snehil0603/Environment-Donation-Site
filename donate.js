var namewrapper = document.querySelector(".card-name-wrapper");
var numwrapper = document.querySelector(".card-number");
var datewrapper = document.querySelector(".date-wrapper");
var btn=document.querySelector("#submit");
var element=document.querySelector("#dia");



const menuButton = document.getElementById("menuBarst");
const menuIcon = document.getElementById("menuIcont");
// const menuList = document.getElementById("menuList");

// Function toggles classes on menBars click
function mobileMenut() {
  menuIcon.classList.toggle("fa-x");
  menuIcon.classList.toggle("rotate");
  menuList.classList.toggle("inactive");
}


const $close = document.querySelector('.btn-close');

function closeDialog() {
  const $dialog = this.parentElement;
  $dialog.style.opacity = '0';
  setTimeout(function() {
    $dialog.style.display = 'none';
  }, 600);
}

function keyClose(e) {
  if(e.keyCode === 27) {
    closeDialog();
  }
}

$close.addEventListener('click', closeDialog, false);
document.addEventListener('keyup', keyClose);


btn.addEventListener("click", funct)
  
function funct(){

    console.log(element);
    element.classList.add("makeVisible");
    setTimeout(timer,3000);
  
}

function timer(){
    window.location.reload();
}

function numdeco()
{
  numwrapper.style.border = "2px solid white";
  numwrapper.style.background = "rgba(100, 100, 100, 0.5)";
}

function numnodeco()
{
  numwrapper.style.border = "none";
  numwrapper.style.background = "none";
}

function namedeco()
{
  namewrapper.style.border = "2px solid white";
  namewrapper.style.background = "rgba(100, 100, 100, 0.5)";
}

function namenodeco()
{
  namewrapper.style.border = "none";
  namewrapper.style.background = "none";
}

function expdeco()
{
  datewrapper.style.border = "2px solid white";
  datewrapper.style.background = "rgba(100, 100, 100, 0.5)";
}

function expnodeco()
{
  datewrapper.style.border = "none";
  datewrapper.style.background = "none";
}

//display user input onto card

function cardnum() {
  var divnum = document.querySelector("#p-card-number");
  var inputnum = document.querySelector("#input-number").value;
  
  var validinput = inputnum.substring(0, 15);
  divnum.innerHTML = validinput;
}

function cardname() {
  var divname = document.querySelector("#card-name");

  var inputname = document.querySelector("#input-name").value;

  var validinput = inputname.substring(0, 22);

  divname.innerHTML = validinput;
}
/*
function cardcvv() {
  var divcvv = document.querySelector("#card-cvv");

  var inputcvv = document.querySelector("#input-cvv").value;

  var validinput = inputcvv.substring(0, 3);
  
  divcvv.innerHTML = validinput;
  }
*/

function cardmonth() {
  var month = document.querySelector("#month").value;

  var monthdiv = document.querySelector("#card-month");

  if (month <= 12) {
    monthdiv.innerHTML = month;
  } else {
    monthdiv.innerHTML = "mm";
  }
}
function cardyear() {
  var year = document.querySelector("#year").value;

  var yeardiv = document.querySelector("#card-year");

  if (year.length == 4) {
    yeardiv.innerHTML = year;
  } else {
    yeardiv.innerHTML = "yy";
  }
}
