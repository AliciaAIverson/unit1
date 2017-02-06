//This is Module 3 for Geog575, Spring 2017/////////////////////
//Author: Alicia Iverson
//Date: 1.31.17
//Purpose 1: Geocode the MegaCities.csvPreview the documentView in a new window file included in the module files. Place a geocoded version of the CSV into the data folder of your unit-1 website directory from Module 2.
//Purpose 2: Convert your geocoded MegaCities.csv file into a KML file and a GeoJSON file. Include both files in the data folder.
//Purpose 3: Add a function to your main.js file (called from intialize()) that loads your GeoJSON file into the DOM and prints it to the console. Include a second console.log() statement showing that the data cannot be accessed outside of the callback function. Your result in the browser should look similar to Figure 3.3View in a new window. Comment your work.
//Purpose 4: Download the debug_ajax.jsView in a new window file included in the module files. Copy and paste its contents into your main.js file after the existing script, then add function calls and debug it to make it work with the rest of your script. You may remove unnecessary components of the script to make it logical. Add comments explaining what the script is doing at each step. 

////////////////////////////////////////////////////////////////


//initialize function called when the script loads
function initialize(){
	//defining function
	cities();
	//defining function--> commented out because using consolidated jQueryAjax function in its place
	//jsAjax();
	//jQueryAjax();
	//defining functions
	debugAjax();
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
		

//here declaring function names
addColumns(cityPop);
addEvents();
//jQueryAjax();

};

//function to add a "cityPop" column to the table and populate it
//function functionName(variable){
function addColumns(cityPop){

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
				

  		} else if (cityPop[i-1].population < 500000){
  			citySize = 'Medium';
				
  		} else {
  			citySize = 'Large';
				
  		};
		//append the city size to the table
  		$(this).append('<td>' + citySize + '</td>');
  	};
  });
};

//function to add a mouseover event to the table
//mouseover = user moves the mouse over an HTML element and something happens
function addEvents(){

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

	//message(alert) that will populate
	alert('Hey, you clicked me!');
	};

	//add the event listener. See example 3.9 Module 2.3.4.
	$('table').on('click', clickme);

};

//AJAX main purpose: load data asynchronously with rest of script
//Called "debugAjax" because debugging script from lab and incorporating it to the above script.
//Function to load GeoJson table
function debugAjax(){
	//check success with console.log statement
	console.log('debugAjax')
	$.getJSON("data/MegaCities.geojson", debugCallback);
};

//Get data and put into callback function
function debugCallback(data){
	
	//check success with console.log statement
	console.log (data)
	//create and format as heading level 3 label 
	var htmlString = "<h3>GeoJSON data:</h3>";
	//append GeoJson data to the htmlString heading
	htmlString += JSON.stringify(data);
	//using mydiv formatting, append the heading and data to the display
	$("#mydiv").append("<p>" + htmlString + "</p>");
};

//check failure with console.log statement outside of callback function
//console.log(data)


//call the initialize function when the document has loaded
$(document).ready(initialize);
