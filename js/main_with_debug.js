//This is Module 2 for Geog575, Spring 2017/////////////////////
//Author: Alicia Iverson
//Date: 1.31.17
//Purpose 1: Copy boilerplate web directory and rename the copy unit-1. Download the latest version of jQuery, add it to the directory's lib folder, and add a link to it in the index.html file.
//Purpose 2: Look up the populations of at least four cities using an internet search engine. Add script to your main.js file that uses jQuery to create a table of these cities and their populations.
//Purpose 3: Download main_with_debug.js... Debug the script and add comments to explain what the script is doing at each step.

////////////////////////////////////////////////////////////////

//initialize function called when the script loads
function initialize(){
	console.log("intialize");
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Sacramento',
			population: 466488
		},
		{
			city: 'Arcata',
			population: 17231
		},
		{
			city: 'South Lake Tahoe',
			population: 21403
		},
		{
			city: 'Magna',
			population: 26505
		}
	];

	//append the table element to the div
	//"method chaining with dot syntax using the $ alias for jQuery. See Module 2.3.2
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
		console.log("success")

	//here declaring function names
  addColumns(cityPop);
  addEvents();
};

//function to add a "cityPop" column to the table and populate it
//function functionName(variable){
function addColumns(cityPop){
console.log(cityPop)

  $('tr').each(function(i){
		//conditional statement
  	if (i == 0){
			//add the "City Size" column to the header row
  		$(this).append('<th>City Size</th>');
  	} else {
			//declaring the variable citySize
  		var citySize;
			//conditional statement to assign size to according to population and append in table.
  		if (cityPop[i-1].population < 100000){
  			citySize = 'Small';
				console.log(citySize);

  		} else if (cityPop[i-1].population < 500000){
  			citySize = 'Medium';
				console.log(citySize);

  		} else {
  			citySize = 'Large';
				console.log(citySize);
  		};
			//append the city size to the table
  		$(this).append('<td>' + citySize + '</td>');
  	};
  });
};

//function to add a mouseover event to the table
//mouseover = user moves the mouse over an HTML element and something happens
function addEvents(){
//console.log(addEvents)

	$('table').mouseover(function(i){

		var color = "rgb(";

		/*for (statement 1; statement 2; statement 3)
					{code block to be executed
			}
			Statement 1 sets a variable before the loop starts (var i = 0).
				Normally you will use statement 1 to initialize the variable used in the loop (i = 0).
				Optional.
			Statement 2 defines the condition for the loop to run (i must be less than 3).
				Often statement 2 is used to evaluate the condition of the initial variable.
				Also optional.
				If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.
				If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser.
			Statement 3 increases a value (i++) each time the code block in the loop has been executed.
				Often statement 3 increments the value of the initial variable.
				Also optional.*/

		//loop to add colors for the mouseover function
		//i < 3 accesses the length property outside the loop reducing activity w/in loop making it run faster.
		for (var i=0; i<3; i++){

			//Math.round(x) returns the value of x rounded to its nearest integer
			//Math.random() returns a random number between 0(inclusive) and 1(exclusive)
			var random = Math.round(Math.random() * 255);

			color += random;
			//conditional statement used to generate multiple random CSS colors for display
			if (i<2){
				color += ",";
			} else {
				color += ")";
		};
	//change the text color
	//console.log('color', color)
	$(this).css('color', color);
	};
});

//function to display a message (alert) when user clicks the table
function clickme(){
//console.log(clickme)

	//message(alert) that will populate
	alert('Hey, you clicked me!');
	};

	//add the event listener. See example 3.9 Module 2.3.4.
	$('table').on('click', clickme);

}

//call the initialize function when the document has loaded
$(document).ready(initialize);
