document.querySelector("#currentDay").textContent = "Today, " + dayjs().format('dddd, MMMM D, YYYY')
var hr = dayjs().format('H');
console.log(hr);
assign();
var idn = [];

//Assigns the class to each time block dependent on the current hour
function assign(){
  console.log("Assign started.")
  for (var x=9; x < 19;x++) {
  //var curr = ("hour-"+x).toString
  //console.log(curr);
  var identified=document.getElementById("hour-"+x)
  console.log(identified);
    if (x<hr){
      identified.classList.add("past")}
      else if (x==hr){
        identified.classList.add("present")}
        else{
          identified.classList.add("future")
        }
    }
  }


 /*identify();
  var id;
  function identify(){
    
  }*/
//  var x = document.getElementById("myLi").parentNode;
//alert(x.id);
/*var ids = [];
for (x=9;x<19;x++){
  nn = "hour-" + x;
  console.log(nn);
  ids.push(nn);}

var i=0;
function clicker (){
  ids[i].addEventListener("click",function(event){
    console.log(ids[i]);
    i++;
    if (i<ids.length){
      clicker();}})}*/
/*var timeBlocks = document.querySelector("#hour-10")
//function query () {
timeBlocks.addEventListener("click", function(event) {
    var props = event.target.id;
    console.log(props);
});

x=5;
*/
 /*var id;
$('body').on('click', '*', function() {

  id = $(this).attr('id');
  console.log(id); 
  console.log(id.split('-'))
});
console.log(id.split('-'))*/
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

var ids = [];
for (var y = 9;y<19;y++){
  nn = "hour-" + y;
  console.log(nn)
  ids.push(nn)
}

//buttListen();
/*
for (var y=0;y<ids.length;y++){
  ids[y] = document.querySelector("#"+ids[y])
  console.log(ids[i])}
//hour10 = document.querySelector("#hour-10")
//function query () {
/*timeBlocks.addEventListener("click", function(event) {
    var props = event.target.id;
    console.log(props);*/
   // var current;
/*var i=0;
function click (){
  ids[i].addEventListener("click",function(event){
    console.log(ids[i]);
    i++;
    if (i<ids.length){
      click();}})}*/

//console.log(x))


/*function buttListen(){
  console.log("hey")
  for (var i=0; i<ids.length;i++){
    console.log(curr);
    idn[i] = document.querySelector(ids[i]);
    console.log(idn[i])
    idn[i].addEventListener("click",function(event)){
}

function identify(){
  console.log(this.id)}*/
var currentID;
var writeID = function() {
  console.log(this.id)
  currentID = this.id;
  currentEl=document.getElementById(currentID);
  console.log(currentEl);
  plannedCon = currentEl.childNodes[3].value;
  window.localStorage.setItem(currentID,plannedCon)

    //document.getElementById(currentID).textContent)
}
for (var i=0; i<ids.length;i++){
 document.getElementById(ids[i]).onclick = writeID;}
  //document.getElementById(ids[0]).onclick = writeID*/

var txtArea =  document.querySelectorAll(".description")
  console.log(txtArea)
var saveButts = document.querySelectorAll(".saveBtn");
/*saveButts.onclick = yo();
function yo (){
  console.log("hey")
}
*/
for (var r=0; r<saveButts.length;r++){
  saveButts[r].addEventListener("click",function(event){
    writeID();
   
    //
  })
}