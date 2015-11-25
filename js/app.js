//Wait for the DOM elements to load before executing
	$(document).ready(function(){
   	 //Prevent submit button from refreshing the page
	});


//Get user's input and store it in the variable called city
	$('#submit-btn').click(function(){
		event.preventDefault();
	city = $('#city-type').val();
	

//Conditional to evaluate and compare user input to known values

//Condition and intstruction for what to do if user value equals the New York values

	if(city == "NYC" || city == "New York City" || city == "New York"){

		$('body').attr("class", "nyc");
	}

//Condition and intstruction for what to do if user value equals the Los Angeles values

	else if(city == "LA" || city == "Los Angeles" || city == "LAX"){

		$('body').attr("class", "la");
	}

//Condition and intstruction for what to do if user value equals the Sydney values

	else if(city == "Syd" || city == "SYD" || city == "Sydney"){

		$('body').attr("class", "sydney");
	}

//Condition and intstruction for what to do if user value equals the Austin values

	else if(city == "Austin" || city == "ATX" || city == "AUS"){

		$('body').attr("class", "austin");
	}

//Condition and intstruction for what to do if user value equals the San Francisco

	else if (city == "SF" || city == "San Francisco" || city == "Bay Area"){

		$('body').attr("class", "sf");
	}
	});
