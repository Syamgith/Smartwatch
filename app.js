// smartwatch app
// printing time and day
var day = new Date();
var n = day.getDay();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];
//document.getElementById("time").innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
$("#time").html(new Date().getHours() + ":" + new Date().getMinutes());
//document.getElementById("day").innerHTML = week[n];
$("#day").html(week[n]);
let home = $('#default');
//messages
$(document).ready(function(){
    $("#message").click(function(){
        $("#option").html("Messages");
        $("#time2").html(new Date().getHours() + ":" + new Date().getMinutes());
        $("#content").empty();

        let messageArray = [
          {preview:"🔵 Message 1", message:"Hi ! This is a test message. Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest."}, 
          {preview:"🔵 Message 2", message:"Hi ! This is 2nd test message. Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly."}, 
          {preview:"🔵 Message 3", message:"Hi ! This is 3rd test message. Believing neglected so so allowance existence departure in. In design active temper be uneasy."},
          {preview:"🔵 Message 4", message:"Hi ! This is 4th test message. Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest."}, 
          {preview:"🔵 Message 5", message:"Hi ! This is 5th test message. Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly."}
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
        //$(".message6").html(messageArray[5].preview);
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
        //$("#default").empty();
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
        //$("#default").empty();
        $("#content").empty();
        let timerHtml = '<div id="content-timer">' +
        '<h2><time>00:00:00</time></h2>' +
        '<div class="timerswitch"><span id="start">Start</span><span id="stop">Stop</span><span id="reset">Reset</span></div>';
        $("#content").append(timerHtml);
        //timer
        let h2 = document.getElementsByTagName('h2')[0],
          start = document.getElementById('start'),
          stop = document.getElementById('stop'),
          clear = document.getElementById('reset'),
          seconds = 0, minutes = 0, hours = 0,
          t;

        function add() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            
            h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

            timer();
        }
        function timer() {
            t = setTimeout(add, 1000);
        }
        timer();


        //Start button 
        start.onclick = timer;

        //Stop button
        stop.onclick = function() {
            clearTimeout(t);
        }

        //Reset button
        reset.onclick = function() {
            h2.textContent = "00:00:00";
            seconds = 0; minutes = 0; hours = 0;
        }
    });
  });
  //Home
  $(document).ready(function(){
    $(".rectangle1").click(function(){
        $("#content").empty();
        $("#content").append(home);
    });
  });