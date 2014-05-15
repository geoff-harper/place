// JavaScript Document

window.onload = init;

var signUpForm;	//global variable for form

function init() {
	
	document.querySelector("#signUpBtn").onclick = checkForm;	//assign onclick to registration button
	
	signUpForm = document.querySelector("#signUpForm");   //assign form to variable
	
	//assign validation functions to fields
	signUpForm.fullName.onblur = checkName;
	signUpForm.email.onblur = checkEmail;
	signUpForm.street1.onblur = checkStreet1;
	signUpForm.street2.onblur = checkStreet2;
	signUpForm.city.onblur = checkCity;
	signUpForm.postalZip.onblur = checkPostalZip;
	signUpForm.country.onchange = getRegion;
	signUpForm.legal.onclick = checkLegal;
}

function checkName() {
	
	var textFieldContent = signUpForm.fullName.value;		//grab text that was input to field
	textFieldContent = trim(textFieldContent);			//trim it
	
	if(textFieldContent.length > 0) {			//if field has any text
		signUpForm.fullName.parentNode.querySelector(".validation").src = "images/check.png";		//reveal checkmark png
		signUpForm.fullName.parentNode.parentNode.querySelector(".errorMessage").style.display = "none";		//hide error message
		signUpForm.fullName.parentNode.style.border = "1px #A0A0A0 solid";		//standard border
		
		signUpForm.fullName.className = "textField2";		//remove error class
				
	} else {		//field has no text
		signUpForm.fullName.parentNode.querySelector(".validation").src = "images/x.png";		//reveal X png
		signUpForm.fullName.parentNode.parentNode.querySelector(".errorMessage").style.display = "block";	//show error message
		signUpForm.fullName.parentNode.style.border = "#ce2423 solid 1px";			//red border
		
		this.className = "textField2 error";		//add error class
	}
}

function checkEmail() {		//refer to checkName() for functionality description
	
	var textFieldContent = signUpForm.email.value;
	textFieldContent = trim(textFieldContent);
	
	if(textFieldContent.length > 0) {
		signUpForm.email.parentNode.querySelector(".validation").src = "images/check.png";
		signUpForm.email.parentNode.parentNode.querySelector(".errorMessage").style.display = "none";
		signUpForm.email.parentNode.style.border = "1px #A0A0A0 solid";
		
		signUpForm.email.className = "textField2";
				
	} else {
		signUpForm.email.parentNode.querySelector(".validation").src = "images/x.png";
		signUpForm.email.parentNode.parentNode.querySelector(".errorMessage").style.display = "block";
		signUpForm.email.parentNode.style.border = "#ce2423 solid 1px";
		
		this.className = "textField2 error";
	}
}

function checkStreet1() {	//refer to checkName() for functionality description
	
	var textFieldContent = signUpForm.street1.value;
	textFieldContent = trim(textFieldContent);
	
	if(textFieldContent.length > 0) {
		signUpForm.street1.parentNode.querySelector(".validation").src = "images/check.png";
		signUpForm.street1.parentNode.parentNode.querySelector(".errorMessage").style.display = "none";
		signUpForm.street1.parentNode.style.border = "1px #A0A0A0 solid";
		
		signUpForm.street1.className = "textField2";
				
	} else {
		signUpForm.street1.parentNode.querySelector(".validation").src = "images/x.png";
		signUpForm.street1.parentNode.parentNode.querySelector(".errorMessage").style.display = "block";
		signUpForm.street1.parentNode.style.border = "#ce2423 solid 1px";
		
		this.className = "textField2 error";
	}
}

function checkStreet2() {
	
}

function checkCity() {	//refer to checkName() for functionality description
	
	var textFieldContent = signUpForm.city.value;
	textFieldContent = trim(textFieldContent);
	
	if(textFieldContent.length > 0) {
		signUpForm.city.parentNode.querySelector(".validation").src = "images/check.png";
		signUpForm.city.parentNode.parentNode.querySelector(".errorMessage").style.display = "none";
		signUpForm.city.parentNode.style.border = "1px #A0A0A0 solid";
		
		signUpForm.city.className = "textField2";
				
	} else {
		signUpForm.city.parentNode.querySelector(".validation").src = "images/x.png";
		signUpForm.city.parentNode.parentNode.querySelector(".errorMessage").style.display = "block";
		signUpForm.city.parentNode.style.border = "#ce2423 solid 1px";
		
		signUpForm.city.className = "textField2 error";
	}
}

function checkPostalZip() {		//refer to checkName() for functionality description
	
	var textFieldContent = signUpForm.postalZip.value;
	textFieldContent = trim(textFieldContent);
	
	if(textFieldContent.length > 0) {
		signUpForm.postalZip.parentNode.querySelector(".validation").src = "images/check.png";
		signUpForm.postalZip.parentNode.parentNode.querySelector(".errorMessage").style.display = "none";
		signUpForm.postalZip.parentNode.style.border = "1px #A0A0A0 solid";
		
		signUpForm.postalZip.className = "textField2";
				
	} else {
		signUpForm.postalZip.parentNode.querySelector(".validation").src = "images/x.png";
		signUpForm.postalZip.parentNode.parentNode.querySelector(".errorMessage").style.display = "block";
		signUpForm.postalZip.parentNode.style.border = "#ce2423 solid 1px";
		
		signUpForm.postalZip.className = "textField2 error";
	}
}

function checkCountry() {		//refer to checkName() for functionality description

	if(signUpForm.country.value == "X") {		//if no country is selected
		signUpForm.country.parentNode.style.border = "#ce2423 solid 1px";
		signUpForm.stateProvince.parentNode.style.border = "#ce2423 solid 1px";	
		signUpForm.country.className = "textField3 error";
		
	} else {
		signUpForm.country.parentNode.style.border = "1px #A0A0A0 solid";
		signUpForm.stateProvince.parentNode.style.border = "1px #A0A0A0 solid";	
		signUpForm.country.className = "textField3";
	}
}

function getRegion() {
	
	var codeType = document.querySelector("#regionalCode");		//Changes error message based on location
	
	if(this.value == "CA") { 		//if Canada is selected
		var selected = canada; 		//selected country variable
		codeType.innerHTML = "Enter your postal code";	//use postal
	}
	if(this.value == "US") { 		//if USA is selected
		var selected = usa;			//selected country variable
		codeType.innerHTML = "Enter your zip code";	//use zip
	}
	if(this.value == "AU") { 		//if Australia is selected
		var selected = australia;	//selected country variable
		codeType.innerHTML = "Enter your postal code"; 	//use postal
	}
	
	var regionOptions = document.querySelectorAll("#stateProvince option");		//States and provinces currently being displayed
	
	for(var i=0;i<regionOptions.length;i++) {
		regionOptions[i].parentNode.removeChild(regionOptions[i]);		//remove all states and provinces currently being displayed
	}
	
	for (var j=0;j<selected.length;j++) {
		var name = selected[j].split(":");		//split array value at the ":"
		var option = document.createElement("option");	//create a dropdown option
		option.value = name[0];		//assign the value to the option
		option.text = name[1];		//assign the name to the option
		document.querySelector("#stateProvince").appendChild(option);	//add it to the page
	}
	
	checkCountry();		//adjust CSS appropriately
}

function checkForm() {
	
	//check all fields for text/dropdown values
	checkName();
	checkEmail();
	checkStreet1();
	checkCity();
	checkPostalZip();
	checkCountry();
	
	var errors = document.querySelectorAll(".error");
	
	if(errors.length > 0) {		//if there are any errors don't submit
		return false;		
	}
}






