var brand = prompt("What is your favorite brand of wearable technology projects?");
var likeit = prompt("On a scale of 1 to 100, how much do you like it?");
var numInput = parseInt(likeit);




var intI;

for (intI = 1; intI <= numInput; intI++) {

 document.writeln(brand + ' ');

}


document.getElementById("Output").writeln(brand);