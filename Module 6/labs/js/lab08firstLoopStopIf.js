/*
  This is the JavaScript code for
  "Lab 08: Stopping Loops IF"
  File: /unit6/labs/lab08firstLoopStopIf.html
*/

function TotalNonZeroNumbers() {
  // Variables defined
  var userNumber = 1;
  var userNumberSum = 0;

  // Loop initialized
  while (userNumber !== 0) {
    userNumber = Number(prompt("Please enter a number greater than 0 (or type 0 to quit):"));
      // Prompt for userNumber and converts right away
    if (isNaN(userNumber)) {
      alert("Error: Please enter a valid number");
      continue;
    }
      // Throws an error if user enters a word
    document.write("Number entered: " + userNumber + "\n");
    if (userNumber > 0) {
      userNumberSum += userNumber;
    }
  }
  // Displays entered numbers on separate lines, adds to userNumberSum until they enter 0

  // Display total and say goodbye to the user once the loop ends
  document.write("Total of all numbers entered: " + userNumberSum + "\n");
  document.write("Good bye!");
}
TotalNonZeroNumbers();