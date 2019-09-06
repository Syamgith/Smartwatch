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
        $("#content").empty();

        let messageArray = [
          {preview:"Text message 1", message:"Hi ! This is a test message"}, 
          {preview:"Text message 2", message:"Hi ! This is 2nd test message"}, 
          {preview:"Text message 3", message:"Hi ! This is 3rd test message"}
        ];
        // creating html elements for message content
        let messageHtml = 
            '<div id="content-message">' +
                '<div class="message">' +
                  '<div class="message1">' + '</div>' +
                  '<div class="message2">' + '</div>' +
                  '<div class="message3">' + '</div>' +
                '</div>' +
              '</div>';
        //apending new html elements inside #content div
        $("#content").append(messageHtml);
        //printing key of each object array
        $(".message1").html(messageArray[0].preview);
        $(".message2").html(messageArray[1].preview);
        $(".message3").html(messageArray[2].preview);
        //function when message is clicked
        $(".message1").click(function(){
         $("#content-message").html(messageArray[0].message);
          console.log();
        });
        $(".message2").click(function(){
          $("#content-message").html(messageArray[1].message);
           console.log();
         });
        $(".message3").click(function(){
         $("#content-message").html(messageArray[2].message);
          console.log();
        });
    });
  });
//music
$(document).ready(function(){
    $("#music").click(function(){
        $("#option").html("Music");
        $("#time2").html(new Date().getHours() + ":" + new Date().getMinutes());
        $("#default").empty();
        $("#content").empty();
    });
  });
//timer
$(document).ready(function(){
    $("#timer").click(function(){
        $("#option").html("Timer");
        $("#time2").html(new Date().getHours() + ":" + new Date().getMinutes());
        $("#default").empty();
        $("#content").html(" ");
    });
  });