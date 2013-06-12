

var Leaderboard = function () {
    this.scores = Array();
    this.names = Array();
    this.highScore = 0;
    this.numberOfScores = 0;
    this.tempIndex = -1;
    this.tempScore = -1;

    this.init = function () {

        try {
            this.getScores();
            this.getNames();
            this.getHighScore();
            this.getNumberOfScores();
        } catch(ex){

            console.log(ex + " in init()");
        }


    }

    this.getScores = function () {
        try {
            this.scores = JSON.parse(localStorage['scores']);
            

        }
        catch(ex){
            this.scores = Array(0,0,0,0,0);
            localStorage['scores'] = JSON.stringify(this.scores);


        }

    }

    this.getNames = function () {

        try {
            this.names = JSON.parse(localStorage['names']);
           
        }
        catch(ex){
            this.names = Array("Teddy Roxpin","Ritz Raynolds","Hannibal King","Iman Omari","Sir Michael Rocks");
            localStorage['names'] = JSON.stringify(this.names);
        }


    }

    this.getHighScore = function () {
        try {
            $.each(this.scores, function (index, value) {
                if (this.highScore < this)
                    this.highScore = this;

            });
        } catch(ex){
            console.log(ex + " in getHighScore()");
        }
    }

    this.getNumberOfScores = function () {

        this.numberOfScores = this.scores.length;
    }

    this.checkForHighScore = function (score) {


        try {
            $.each(this.scores,function(index,value) {
                if (score > value)
                    this.tempIndex = i;
                    
					});

            
            if (this.tempIndex != -1) {
                this.tempScore = score;
                var eventClick = $.Event('click');
                $("#highscoredialog").trigger(eventClick);

            }
            else
               $.mobile.changePage("#finishdialog");
        } catch (ex) {
            console.log(ex + " in checkHighScore()");
        }

    }

    this.setHighScore = function (name) {
        try {
         console.log("tempIndex "+this.tempIndex);
            this.names[this.tempIndex] = name;
            this.scores[this.tempIndex] = this.tempScore;

            localStorage['scores'] = JSON.stringify(this.scores);
            localStorage['names'] = JSON.stringify(this.names);

            this.tempIndex = -1;
            this.tempScore = -1;
        } catch (ex) {
            console.log(ex + " in setHighScore()");
        }

    }

    this.displayLeaderboard = function () {
           
        try {
            $("#leaderb").html("<center>");
            $("#leaderb").append("<div class'ui-grid-b'>");
            $("#leaderb").append("<div><span class'ui-block-a'>Name</span><span class='ui-block-b'>Number</span></div>");
            var count = 1;
			$.each(this.names, function (value, index) {
                $("#leaderb").append("<div><span class'ui-block-a'>" + index + "</span><span class='ui-block-b'>" + count + "</span></div>");

				count++;



            });
            $("#leaderb").append("</div>");
            $("#leaderb").append("</center>");

        } catch (ex) {
            console.log(ex + " in displayLeaderboard()");
        }
    }


}

