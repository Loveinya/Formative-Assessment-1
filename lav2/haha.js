var nickname = "Bitch";
var height_in = "50.947";
var weight_kg = "66"

var height_ft = parseInt(height_in)/12;
var weight_lbs = parseInt(weight_kg)*2.20462;

alert("Name: " + nickname);
alert("Height: " + height_ft + "ft");
alert("Height: " + weight_lbs + "kg");

var firstname = prompt("Enter preferred first name: ");
var lastname = prompt("Enter prefered last name: ");
var birthYear = prompt("Enter the year you were born: ");


var age = 2023 - parseInt(birthYear);

if (confirm("Do you consent to share your personal information with our site? (sige na uwu)")){
	var response = "Hello " + firstname + " " + lastname + "! How does it feel to be like " + age + "?";
}
else {
	response = "";
	console.log("User does not wish to share his/her information.");
}