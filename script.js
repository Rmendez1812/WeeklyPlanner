// GLOBAL VARIABLES
var currentDay = $("#currentDay");
var time = document.querySelectorAll(".time-block");
console.log(time);
var descript = document.getElementsByClassName("description");
var saveBt = document.getElementsByClassName("saveBtn").item(0);


function displayTime() {
  var todaysDate = dayjs().format("dddd, MMM DD, YYYY");
  currentDay.text(todaysDate);
}
displayTime();


for (let index = 0; index < time.length; index++) {
  const timeBlock = time[index];

  var blockHour = timeBlock.getAttribute("id").substr(5, 6);
  console.log(blockHour);

  if (blockHour < dayjs().format("H")) {
    console.log("past");
    timeBlock.classList.add("past");
  } else if (blockHour == dayjs().format("H")) {
    console.log("present");
    timeBlock.classList.add("present");
  } else {
    console.log("future");
    timeBlock.classList.add("future");
  }
}



time.item(0).addEventListener("click", function () {
  console.log(this.innerHTML);
});

$(document).ready(function () {
  $(".saveBtn").click(function () {

    var timeBlockId = $(this).parent().attr("id");

    var text = $(this).siblings("textarea").val();
    // key is timeBlockID and value is text
    localStorage.setItem(timeBlockId, text);
  });
});

$(document).ready(function () {

  $(".time-block").each(function () {

    var timeBlockId = $(this).attr("id");

    var storedText = localStorage.getItem(timeBlockId);
    $(this).children("textarea").val(storedText);
  });
});
