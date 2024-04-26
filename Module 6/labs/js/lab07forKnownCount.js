/*
	This is the JavaScript code for
	"Lab 7: While Lab with Known Count"
	File: /unit6/labs/lab07forKnownCount.html
*/
function displaySevenTimesTable() {
  // Variable defined
  var factor = 7;
  
  // For loop initialized
  for (var count = 1; count <= 20; count++) {
    product = factor * count;
    document.write(factor + " x " + count + " = " + product + "\n");
    // Writes the table for multiples of 7 until it reaches 20.
  }
}
// Call function to display factor table
displaySevenTimesTable();