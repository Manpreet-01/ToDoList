// make resusable code (module)

// module.exports = getDate;   // return the function reference so we can call in other file when need by add ()

// to export multi function

module.exports.getDate = function (){
	
	var today = new Date();
	const currDay = today.getDay();

	// var day = ""
	
	// if(currDay === 0){day = "Sun";}
	// if(currDay === 1){day = "Mon";}
	// if(currDay === 2){day = "Tues";}
	// if(currDay === 3){day = "Wednes";}
	// if(currDay === 4){day = "Thurs";}
	// if(currDay === 5){day = "Fri";}
	// if(currDay === 6){day = "Satur";}
	// if(currDay >= 7){console.log("curr day is " + currDay);}
	
	
	var options = {
		weekday:"long",
		day:"numeric",
		month:"long",
		
	};
	
	var day = today.toLocaleDateString("en-US", options);
	
	return day ;
};



module.exports.getDay = function (){
	
	var today = new Date();
	const currDay = today.getDay();

	if(currDay >= 7){console.log("curr day is " + currDay);}
	
	
	var options = {
		weekday:"long",
	};
	
	var day = today.toLocaleDateString("en-US", options);
	
	return day ;
};