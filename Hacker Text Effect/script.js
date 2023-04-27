const header = document.getElementById("glitch");
var finalText = header.innerText;

function hack(){
    var alphabets = ' 1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    var iteration = 0;

    var myInterval = setInterval(
        function() {
            var randomText = '';
            for(i=0; i<finalText.length; i++){
            // generates appropriate randomText per iteration...
                if(i<iteration){
                    randomText+= finalText[i];
                }
                else{
                    randomText+= alphabets[Math.floor(Math.random()*(alphabets.length-1))];
                }
            }

            header.innerText = randomText;
            
            if(iteration == finalText.length) clearInterval(myInterval);
            iteration++;
        }

    ,100);
};

header.addEventListener('mouseover',hack);

