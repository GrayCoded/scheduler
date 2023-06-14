$(document).ready(function () {
  $(".saveBtn").on("click", function () {
        console.log(this);
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');
        console.log(time);
       // var hour = .;

        localStorage.setItem(time, value);
      });
     
});

  

var currentTime = dayjs().format("dddd MMMM DD");
$("#currentDay").text(currentTime);


for (var i = 9; i < 17; i++) {
  var thisHr = localStorage.getItem('hour-' + i)
  if (thisHr) {
    console.log(thisHr);
  }
    
}



function setColors() {
  //var currentTime = hour();
  console.log(currentTime);
  $(".time-block").each(function () {
    var timeId = $(this).attr("id");
    console.log(currentTime > timeId);
    if (currentTime > timeId) {
      $(this).addClass("past");
    } else if (currentTime < timeId) {
      $(this).addClass("future").removeClass("past present");
    } else {
      $(this).addClass("present").removeClass("past future");
    }
  });
}


function userSched() {
  var s1 = localStorage.getItem("1");
  $("#hour-9").children(".description").text(s1);

  var s2 = localStorage.getItem("2");
  $("#hour-10").children(".description").text(s2);

  var s3 = localStorage.getItem("3");
  $("#hour-11").children(".description").text(s3);

  var s4 = localStorage.getItem("4");
  $("#hour-12").children(".description").text(s4);

  var s5 = localStorage.getItem("5");
  $("#hour-13").children(".description").text(s5);

  var s6 = localStorage.getItem("6");
  $("#hour-14").children(".description").text(s6);

  var s7 = localStorage.getItem("7");
  $("#hour-15").children(".description").text(s7);

  var s8 = localStorage.getItem("8");
  $("#hour-16").children(".description").text(s8);

  var s9 = localStorage.getItem("9");
  $("#hour-17").children(".description").text(s9);
}

setColors();
userSched();
