
//var btn = document.getElementById("speechBTN");

document.addEventListener("click", record);

function record(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";


    recognition.onresult = function(event){
        console.log(event);
        
        var commands = event.results[0][0].transcript;


        console.log(commands);


        //var command = document.getElementById('speech');

        if(commands.toLowerCase() == 'play back in black'){ //play the song back in play
            console.log("playing back in black");
            window.open("https://www.youtube.com/watch?v=pAgnJDJN4VA");
        }

        if(commands.includes('search'||'Search')){ //google search anything
            var searchCommand = commands.substr(6);
                window.open('http://google.com/search?q='+searchCommand);
            }
        
        if(commands.includes('time'||'Time')){//getting the current time
            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var amPM;

            if(min < 10){
                min = '0'+min
            }else{
                min = min;
            }

            if(hour > 12){
                hour = hour - 12;
                amPM = 'pm'
            }
            else{
                amPM = 'am';
            }

            speechSynthesis.getVoices().forEach(function(voice) {
                console.log(voice.name, voice.default ? voice.default :'');
              });

            var time = 'The time is ' + hour +':' + min + ' ' + amPM;
/*
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[10]; 
            msg.volume = 1; // From 0 to 1
            msg.rate = 1; // From 0.1 to 10
            msg.pitch = 1; // From 0 to 2
            msg.text = time;
            msg.lang = 'en-US';
            speechSynthesis.speak(msg);*/

            window.speechSynthesis.speak(new SpeechSynthesisUtterance(time));

            console.log(time);
        }
        
    }
    recognition.start();
}
