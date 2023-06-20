$(document).ready(function () {


var currentDate = dayjs().format("dddd MMMM DD") ;
$("#currentDay").text(currentDate);
var currentTime =dayjs().format("HH");

  $(".saveBtn").on("click", function () {
        console.log(this);
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');
        console.log(time);
      
        localStorage.setItem(time, value);
      });
     


for (var i = 9; i < 17; i++) {
  var thisHr = localStorage.getItem('hour-' + i)
  if (thisHr) {
    console.log(thisHr);
  }
}

function setColors() {


  console.log(currentTime);
  $(".time-block").each(function () {
    var time = $(this).attr("id");
    time = time.replace("hour-", "");

    if (currentTime < time) {
      $(this).addClass("past").removeClass("present future");
    } else if (currentTime > time) {
      $(this).addClass("future").removeClass("present past");
    } else {
      $(this).addClass("present").removeClass("past future");
    }
  });
}
setColors();



function userSched() {
  var s1 = localStorage.getItem("hour-9");
  $("#hour-9").children(".description").text(s1);

  var s2 = localStorage.getItem("hour-10");
  $("#hour-10").children(".description").text(s2);

  var s3 = localStorage.getItem("hour-11");
  $("#hour-11").children(".description").text(s3);

  var s4 = localStorage.getItem("hour-12");
  $("#hour-12").children(".description").text(s4);

  var s5 = localStorage.getItem("hour-13");
  $("#hour-13").children(".description").text(s5);

  var s6 = localStorage.getItem("hour-14");
  $("#hour-14").children(".description").text(s6);

  var s7 = localStorage.getItem("hour-15");
  $("#hour-15").children(".description").text(s7);

  var s8 = localStorage.getItem("hour-16");
  $("#hour-16").children(".description").text(s8);

  var s9 = localStorage.getItem("hour-17");
  $("#hour-17").children(".description").text(s9);
}


userSched();
});

