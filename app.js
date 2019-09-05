// printing time and day
var day = new Date();
var n = day.getDay();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];
//document.getElementById("time").innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
$("#time").html(new Date().getHours() + ":" + new Date().getMinutes());
//document.getElementById("day").innerHTML = week[n];
$("#day").html(week[n]);

//messages
$(document).ready(function(){
    $("#message").click(function(){
        $("#option").html("Messages");
        $("#time2").html(new Date().getHours() + ":" + new Date().getMinutes());
        $("#default").remove();
    });
  });
//music
$(document).ready(function(){
    $("#music").click(function(){
        $("#option").html("Music");
        $("#time2").html(new Date().getHours() + ":" + new Date().getMinutes());
        $("#default").remove();
    });
  });
//timer
$(document).ready(function(){
    $("#timer").click(function(){
        $("#option").html("Timer");
        $("#time2").html(new Date().getHours() + ":" + new Date().getMinutes());
        $("#default").remove();
    });
  });