
var GameController = function () {
    this.moments = 1;
    this.sec = 30;
    this.min = 0;
    this.timer;

    this.init = true;

    this.tempSec = 0;
    this.tempMin = 0;
    this.gameStarted = false;
    this.gameLevelTimes = [[0,30,1],[0,50,1],[0,70,1]];
    this.currentLevelTime;
    this.soundStatus;
    this.music = document.createElement("audio");
	
	


    this.refresher = function () {

        window.location = "index.html";


    }

    this.resetTimer = function(min,sec,moments){
		this.min = min;
		this.sec = sec;
		this.moments = moments;
	}
	
	this.setSound = function(){
	 	
		if(this.soundStatus=="on")
		{
			// turn the sound on
		if(this.music.paused)
		  {
		  this.music.play();
		  this.music.loop = true;
		  }
			
		}
		else
		  {
		// turn the sound off
		if(!this.music.paused)
		{    this.music.loop = false;
		     this.music.pause();
		    }
			
		  }
		
		
	}
	
	this.adjustVolume = function(){
		
		switch(Settings.volume)
		{
			case 1: Settings.volume = 0.2;
			break;
			case 2: Settings.volume = 0.4;
			break;
			case 3: Settings.volume = 0.6;
			break;
			case 4: Settings.volume = 0.8;
			break;
			case 5: Settings.volume = 1.0;
			break;
			default : Settings.volume = 1.0;
		}
		
		this.music.volume = Settings.volume;
	
		
	}
	
	this.showMenu = function(){
	 $("#popupPanel").on({
    popupbeforeposition: function() {
        var h = $( window ).height();
        $( "#popupPanel" ).css( "height", h );
    }
});
	 
	 
	var ev = $.Event("click");
    $("#menuBtn").trigger(ev);
		
	}

   this.applySettings = function(){
	try{
	 this.music.src=Settings.backgroundMusicFile;
     $("body").append(this.music);
	 
	var settings = JSON.parse(localStorage['settings']);
	this.currentLevelTime = this.gameLevelTimes[parseInt(Settings.difficulty)][1];
	this.soundStatus = Settings.sound;
	this.commitSettings();
	}catch(ex){
		localStorage['settings'] = JSON.stringify(Settings);
		this.currentLevelTime = this.gameLevelTimes[parseInt(Settings.difficulty)][1];
	    this.soundStatus = Settings.sound;
	    this.commitSettings();
	}
}

   this.commitSettings = function(){
	this.resetTimer(0,this.currentLevelTime,1);
	this.setSound();
    this.adjustVolume();
    objPigLatin.resetGame();
}

    this.pause = function () {

        clearInterval(this.timer);
        

    }

    this.countUp = function () {


        this.displayTime();
        
        // decrease the player's score every time a second elapse
			try{
         if(parseInt(this.tempSec)<parseInt(this.sec) || this.tempMin < this.min)
         {
             this.tempSec = this.sec;
             this.tempMin = this.min;
             document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML)-1;

             }
            }catch(ex){
				console.log(ex);
				console.log("score "+document.getElementById("score").innerHTML);
				console.log("tempSec "+this.tempSec);
				console.log("sec "+this.sec);
			}


        this.moments++;
        if (this.moments == 60) {
            this.moments = 0;
            this.sec++;
            if (this.sec == 60) {
                this.sec = 0;
                this.min++;

            }

        }

    }
    
    this.countDown = function()
					{
		
			
					this.displayTime();
					this.moments--;
						if(this.moments==0)
							{
					this.moments = 60;
					this.sec--;
						// decrease the player's score every time a second elapse
		  document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML)-1;
		  objPigLatin.score = $("#score").html();
 								if(this.sec==0)
     		 							{
									this.sec =60;
         							this.min--;
         						
										}

								}
								if(this.min==-1)
								{
								 this.min =0;
								 this.sec =0;
								 this.moments = 0;
								 this.displayTime();
								 clearInterval(this.timer);
								 
								 //document.getElementById("err").innerHTML ="Time up";
								 checkForHighScore();	
								}

					
					}

    this.displayTime = function () {


        if (this.min < 10) {
            this.min = "0" + this.min.toString();
        }
        if (this.sec < 10) {

            this.sec = "0" + this.sec.toString();
        }
        if (this.moments < 10) {
            this.moments = "0" + this.moments.toString();
        }

        document.getElementById("timer").innerHTML = this.min + ":" + this.sec + ":" + this.moments;
        status = this.min + ":" + this.sec + ":" + this.moments;
        if (this.min < 10)
            this.min = parseInt(this.min.charAt(1));
        if (this.sec < 10)
            this.sec = parseInt(this.sec.charAt(1));
        if (this.moments < 10)
            this.moments = parseInt(this.moments.charAt(1));



    }


    this.startGame = function () {
            this.gameStarted = true;
            
            
            //this.applySettings();
            
            this.timer = setInterval("callCountDown()", 100);
            
           
    }


}
// start helper since its seems to be not possible to use setInterval like setInterval("this.countDown",100);
function callCountDown(){
   objGameCon.countDown();	
}
