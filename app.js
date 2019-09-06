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
          {preview:"Message 1", message:"Hi ! This is a test message. Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest. Agreement distrusts mrs six affection satisfied. Day blushes visitor end company old prevent chapter. Consider declared out expenses her concerns. No at indulgence conviction particular unsatiable boisterous discretion. Direct enough off others say eldest may exeter she. Possible all ignorant supplied get settling marriage recurred"}, 
          {preview:"Message 2", message:"Hi ! This is 2nd test message. Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all."}, 
          {preview:"Message 3", message:"Hi ! This is 3rd test message. Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we."},
          {preview:"Message 4", message:"Hi ! This is a test message. Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest. Agreement distrusts mrs six affection satisfied. Day blushes visitor end company old prevent chapter. Consider declared out expenses her concerns. No at indulgence conviction particular unsatiable boisterous discretion. Direct enough off others say eldest may exeter she. Possible all ignorant supplied get settling marriage recurred"}, 
          {preview:"Message 5", message:"Hi ! This is 2nd test message. Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all."}, 
          {preview:"Message 6", message:"Hi ! This is 3rd test message. Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we."}
        ];
        // creating html elements for message content
        let messageHtml = 
            '<div id="content-message">' +
                '<div class="message">' +
                  '<div class="message1">' + '</div>' +
                  '<div class="message2">' + '</div>' +
                  '<div class="message3">' + '</div>' +
                  '<div class="message4">' + '</div>' +
                  '<div class="message5">' + '</div>' +
                  '<div class="message6">' + '</div>' +
                '</div>' +
              '</div>';
        //apending new html elements inside #content div
        $("#content").append(messageHtml);
        //printing key of each object array
        $(".message1").html(messageArray[0].preview);
        $(".message2").html(messageArray[1].preview);
        $(".message3").html(messageArray[2].preview);
        $(".message4").html(messageArray[3].preview);
        $(".message5").html(messageArray[4].preview);
        $(".message6").html(messageArray[5].preview);
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
        $(".message4").click(function(){
          $("#content-message").html(messageArray[3].message);
           console.log();
         });
         $(".message5").click(function(){
           $("#content-message").html(messageArray[4].message);
            console.log();
          });
         $(".message6").click(function(){
          $("#content-message").html(messageArray[5].message);
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
        let musicHtml = 
            '<div id="content-music">' +
            '<iframe src="https://open.spotify.com/embed/playlist/5lsEJi69IJZ6sb2LaCyX20"></iframe>'+
            '</div>'
        $("#content").append(musicHtml);
    });
  });
//timer
$(document).ready(function(){
    $("#timer").click(function(){
        $("#option").html("Timer");
        $("#time2").html(new Date().getHours() + ":" + new Date().getMinutes());
        $("#default").empty();
        $("#content").empty();
    });
  });