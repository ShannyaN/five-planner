// TODO: Add code to display the current date in the header of the page.
document.querySelector("#currentDay").textContent = "Today, " + dayjs().format('dddd, MMMM D, YYYY')
var hr = dayjs().format('H');
var idn = [];
var currentID;
var ids = [];
console.log(hr);
assign();

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
function assign(){
  console.log("Assign started.")
  for (var x=9; x < 19;x++) {
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

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
for (var y = 9;y<19;y++){
  nn = "hour-" + y;
  console.log(nn)
  ids.push(nn)
}

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
var writeID = function() {
  console.log(this.id)
  currentID = this.id;
  currentEl=document.getElementById(currentID);
  console.log(currentEl);
  plannedCon = currentEl.childNodes[3].value;
  window.localStorage.setItem(currentID,plannedCon)
}

for (var i=0; i<ids.length;i++){
 document.getElementById(ids[i]).onclick = writeID;}
var txtArea =  document.querySelectorAll(".description")
  console.log(txtArea)
var saveButts = document.querySelectorAll(".saveBtn");

for (var r=0; r<saveButts.length;r++){
  saveButts[r].addEventListener("click",function(event){
    writeID();
  })
}