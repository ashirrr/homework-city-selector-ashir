/**
 
 Javascript/jQuery Exercises: Variables, functions and operators!
 
 1) Answer the following questions and use the index.html in the same folder as a reference.
 2) Most questions require you to uncomment code prior to answering

 Note: This practice set gets progressively harder.
 Note: Remember to test each question by viewing your console in the developer tools before moving on. 
 
 */


//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.   

/**
 * Question 1: 
 * The following function should listen for when page is fully loaded.  HINT: It is not the word "page"
 */
 	/* Uncomment me and my end tag!

	$(replaceme).ready(function() {
		//Body of ready() event
		console.log("Page is fully loaded");
	}); 
	
	I am the ending comement tag! */


/**
 * Question 2:
 * Reference index.html and use the appropriate selector so that the submitFunction gets run when the Submit button is clicked
 */

  	/* Uncomment me and my end tag!

  	$('replaceme').click(submitFunction);

  	function submitFunction(){
  		event.preventDefault();
  		console.log('Submit function successfully envoked after submit button clicked')
  	}
  	*/

/**
 * Question 3:
 * Rename the following function and ensure it is called successfully when the submit button is clicked
 */

 	/* Uncomment me 
	$('#submit-btn').replaceMe();

  	function replaceMe(){
  		event.preventDefault();
  		console.log('New function successfully declared and used in the click() event handler')
  	}
  	*/

/**
 * Question 4:
 * Create new function names and prevent the default action from taking place when submit is clicked
 */

 	/* Uncomment me
	$('#submit-btn').click(replaceMe);
	  	
	  	function replaceMe(){
	  		event.replaceme(); 
	  		console.log('New function successfully declared, used in the click event handler, and default event prevented');
	  	}
	*/

/*
 * Question 5:
 * Rewrite the above as an anonymous callback function and prevent default event from occurring 
 * Reference: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
 */

 	/* Uncomment me
	$('#submit-btn').click(replaceme
		//Body of function
		event.replaceme() 
		console.log('New callback function successfully implemented!');
 	

	
	}); //end of the body of the callback function
	*/
		
	  

/**
 * Question 6:
 * Declare a variable called fahrenheit and assign it to the value of whatever is in the input field where users enter the fahrenheit temp
 */
  	
  	//uncomment me var fahrenheit = $('replaceme').val();


/**
 * Question 7:
 * Declare a variable called celsius and assign it to the conversion equation for fahrnheight to celsius:
 * Forumla http://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.htm
 */

 	//uncomment me var replaceme = (replaceme - replacme) * (replaceme);



/**
Question 8:

Now that we have the temperature in celsius, 
 
 a)ouput that value to the DOM by using nested selectors to select the <span> element in <div id="celsiusTemp"> and 
 b)replace its HTML with the value of the celsius temp
 */

 	//uncomment me $('replaceme span').html(replaceme);

//LOGICAL OPERATORS
/**
* Question 9: Use the following to alter the code to meet the required conditions. You will need to use: 
	- the variables you declared above
	- logical operators (<, >, <=, >=, &&, ||)
	- the attr() method and "class" attribute name
	- references to css rules declared in your style.css file  

*/

	/*
	Condition 1
	 if the celsius temperature is less than 0, change the background color to cyan 
	*/

		/* Uncomment me
		if(replace){
			$('body').attr('class', 'freezing');
		}
		*/
		
	
	/*
	Condition 2
	Otherwise, if the Celsisu temp is < 20, set background color to blue 
	
	read up on attr() http://api.jquery.com/attr/ 
	*/
		/* Uncomment me
		else if(replace){
			$('body')replaceme('class', 'cold');
		}
		*/

	/*
	Condition 3
	Otherwise, if the celsius temp is equal to or greater than 20 and (&&) 
	less than or equal to 30, change the background to yellow 
	*/

		/* Uncomment me
		else if (celsius >= 20 && replaceme <= replaceme){
			$('body').attr('replaceme', 'replaceme');
		}
		*/
	/*
	Condition 4
	Otherwise, if the celsius temp is greater than 30 and less than 40
	OR celsius is equal to 45, change background to green using the attr() method
	*/
		/* Uncomment me
		else if (celsius > replaceme && replacme < 40 || replacme == replaceme){ //Hint 113F = 45C
			$('body').replaceme('replaceme', 'replaceme');

		}
		*/
	//Condition 5
	//if none of the above conditions are met, set the background color to orange
		
		/* Uncomment me
		else{
			$('body').replaceme('replaceme', 'replaceme');
		}
		*/

/* 
SECTION 2
Part a) Comment out all of the above code above so it doesn't interfere with the next part
Part b) Use your answers from the above questions to get things working!  Open the index.html file in your browser and test different temperatures to make sure the logic is sound!
Hint: Use the console to debug! 
*/

$(document).ready(function() {
  
  //PUT YOUR ANSWER TO QUESTION 5 HERE, MAKE SURE TO PUT THE CLOSING TAGS AND THE RIGHT SPOT AT THE BOTTOM
  		
 	//Declare fahrenheit variable by placing your answer to #6 below


 	//Declare celsius variable and assign it to be the result of a mathematical formula to convert F to C
 	//By placing your answer to #7 below
	
 	//Update the DOM with your calculation by place your answer to #8 below

	//Change the background color based on various conditions by placing your 
	//Answers to the conditions in question #9 below
	
	//1 here

	//2 here
	
	//3 here
	
	//4 here

	//5 (default condition) here
		
    //Put the closing tags to question #5 below - e.g. });
	});

}); //end of document ready function






