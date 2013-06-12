 var Word = function(){
	
	

  //$word;
  //$latin;
  
  this.validComb;
  
	
	
	

	 this.getCombination = function(rowIndex)
	{ 
	 var row = Array(); 
	 var randNum =	Math.floor(Math.random()*2);
			
			Combination = {
	word : Array("dog","cat"),
	latin : Array("ogday","atcay")
}
		row =	Combination.word[randNum].concat(Combination.latin[randNum]);
		return row;
		
	}

	 this.addComb = function(word,latin)
	{
	var addComb = true;
	
    word =	$.trim(word);
	latin = $.trim(latin);
	
	/*$query = "SELECT word,latin FROM Words";
	     $result =  mysql_query($query,$con);
	     
	     
	     while($row = mysql_fetch_array($result))
	           {
				
			if($row[0]==$word||$row[1]==$latin)
			    {
			     echo("Combination already exists.");
				 $addComb = false;	
				 break;
				}
				
				}
	
		if($addComb)
		   {
		$query = "INSERT INTO Words (word,latin) VALUES('$word','$latin')";
		mysql_query($query,$con) or die("Could not add combination");
		echo "combination added";
		   }
		*/
	}
	
		
	 this.validateComb = function(word,latin)
		{
	
	 
	 word = $.trim(word);
	 latin = $.trim(latin);
	 /*
	 word = str_split(word);
	 latin = str_split(latin);
	 
	 for($i=0; $i<strlen(latin);$i++)
	       {
			
		if($i==0&&$word[$i]==$latin[$i])
		   		{
			$validComb = false;
			return $validComb;
			
				}
				else if($i>0&&$i<strlen($latin)-4)
				     {
						
					if($word[$i]==$latin[$i])
					      $validComb = true;
						  
						  else
						    {
								$validComb = false;
								return $validComb; 
								
							}	
						
						
					}
					
					
					if($i>=strlen($latin)-4&&$i<strlen($latin))
					    {
							
							
							
						}	
			
			
		}
	 return validComb;
	 */
	}

	 this.getWordsNum = function()
	{
		
	/*	$query = "SELECT * FROM Words";
		$result = mysql_query($query,$con);
		$rowNum = mysql_num_rows($result);
		*/
		return 1;
		
	}

}
