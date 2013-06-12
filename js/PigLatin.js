
	

var PigLatin = function(){
	
	 this.word;
	 this.latin;
	 this.hint;
	 this.answer="";
	 this.answerCorrect = false;
	 this.generated=1;
	 this.row = Array();
	 this.genName = "";
	 this.score = 25;
	 this.generatedComb;
	 this.wordsNum;
	 this.level = 1;
	 this.columnNum;
	 this.rowNum;
	 
	 
	 
	 
	 this.getAnswer = function(){
		return this.answer;
	}
	
	this.setAnswer = function(answer){
		this.answer = answer;
	}
	
	

	 this.shuffleGen = function(){
	
		if(this.generated==1)
		{
		   this.genName =  this.generateWord();
		}
		     else 
		     {
		    this.genName = this.generateLatin();
		      }
		     
		      
	     

	}

	  this.generateWord =  function(){
			var row = Array();
			try{
		this.getCombination();
		 }catch(ex){
			console.log(ex);
				
			}
	
		
		} 

	 this.generateLatin = function(){
		var row = Array();
		try{
		
		this.getCombination();
		 }catch(ex){
			console.log(ex);
			}
		
		
		return this.latin;
		
	}
			
  this.getCombination = function(){ 
	 var row = Array(); 
			try{
	    this.getWordsNum();
	    this.generatedComb = this.columnNum;
	    var tempWordNum = Math.floor(Math.random()*this.rowNum)
		var word = Combination.word[this.columnNum][tempWordNum];
		this.word = word;
		this.latin = this.convertWordToLatin(word);

		}catch(ex){
			console.log(ex);
		}
		
		
	}
	
	 this.getWordsNum = function(){
	           
	           this.columnNum = Math.floor(Math.random()*Combination.word.length);
		       this.rowNum = Combination.word[this.columnNum].length;
		
	        }



	 this.checkAnswer =  function(){
	        
			 
			 try{
	 
		if(this.generated==1)
		     this.checkWord();
		      
		      else if(this.generated==2)
		      this.checkLatin();
		         else
		            console.log("");
		       
		        }catch(ex){
			    console.log(ex);
			}
		       
		}
		    
			 this.checkWord = function(){
		
		      if(this.getAnswer()==this.latin)
		      {
		       
		       $("#answerNoti").html("Correct answer").css("color","teal");
	           $("#score").html(parseInt($("#score").html())+1);
				 
				 }
		         else
		         {
		          
		          
		          $("#answerNoti").html("Incorrect answer.").css("color","red");
	              $("#score").html(parseInt($("#score").html())-1);
		            
		            }
		
		
				}

	 this.checkLatin = function(){

		if(this.getAnswer()==this.word)
		{
		 $("#answerNoti").html("Correct answer").css("color","teal");
	     $("#score").html(parseInt($("#score").html())+1);
	         }
	         else{
	          
	          $("#answerNoti").html("Incorrect answer.").css("color","red");
	          $("#score").html(parseInt($("#score").html())-1);
	
	           }
	
}
	
	this.sortWord = function(word){
	   var arr1 = Array();
		for(var i=0;i<word.length;i++)
		{
			arr1[i] = word.charAt(i);
		}
		return arr1.sort();
		
	}
	
	this.reverseLatin = function(latin){
		
		var arr1 = Array();
		for(var i=0;i<latin.length;i++)
		{
			arr1[i] = latin.charAt(i);
		}
		return arr1.reverse();
		
	}
	
	this.getHint = function(){
		
		return Combination.hint[this.generatedComb];
		
	}
	
	this.convertWordToLatin = function(word){
		var tempWord = Array();
		var tempChar;
		try{
		for(var count=0;count<word.length;count++){
			tempWord[count] = word.charAt(count);
		}
		tempChar = tempWord.shift();
	    tempWord.push(tempChar+"ay");
		
		}catch(ex){
			console.log(ex);
		}
	tempWord = tempWord.toString();	
	for(var count=0;count<word.length;count++)
	tempWord = tempWord.replace(",","");
	tempWord = tempWord.trim();
	return tempWord;
	
		
	}

		this.toggleGenerated = function(){
			
			if(this.generated==1)
			   this.generated = 2;
			    else
			       this.generated = 1;
		}
		
		this.resetGame = function(){
			$("#answer").val(" ");
			$("#answerNoti").html(" ");
			$("#score").html("25");
			$("#hint").html("For your Web and Mobile Solutions, you can contact me on 078 464 6803.<br /> I am based in Durban, South Africa.");
			$("#newGame h3").html("Start Game");
	        $("#newGame p").html("Start a new Game.");
			
		}
	
	
	
}



