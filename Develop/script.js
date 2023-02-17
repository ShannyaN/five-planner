// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
document.querySelector("#currentDay").textContent = "Today, " + dayjs().format('dddd, MMMM D, YYYY')
//var hr = dayjs().format('h');
hr=1;
if (hr<12){
  hr=hr+12;
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//};
var times=[];
var ids = [];
for (x=9;x<19;x++){
  nn = "hour-" + x;
  console.log(nn);
  times.push(x);
  ids.push(nn)
}
console.log(times);
function sel(y) {
  ids[y] = document.querySelector("#"+ids[y]);
  console.log(ids[y])
  ids[y].addEventListener("click",function(event){
    //identification = this.id;
    console.log(this.id);})}
  
for (var l =0;l<ids.length;l++){
  sel(l);
  console.log(ids[l].id)
}

var block;
var bk;
if (8<hr<19) {
for (var b=0;b<ids.length;b++){
    //found = times.indexOf(hr);
    hey = document.getElementById(ids[1]);
    console.log(hey)
    block = document.getElementById(ids[b]);
    console.log(block)
    bk = times[b];
    console.log(bk);
    if (hr == bk) {
      block.classList.add("present");
    } else if (hr > bk) {
      block.classList.add("past");
   } else {
    block.classList.add("future");
    }  

}}
else if (hr<9) {
  for (var b=0;b<ids.length;b++){
  block = document.getElementById(ids[b]);
  block.classList.add("future");
  }
} else{
  for (var b=0;b<ids.length;b++){
    block = document.getElementById(ids[b]);
    block.classList.add("past");
}}
