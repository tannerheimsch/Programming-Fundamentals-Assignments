/*
  This is the JavaScript code for
  "Lab 09: Arrays"
  File: /unit6/labs/lab10firstLoopStopIf.html
*/
function StudentEmailGenerator() {
  // Non-loop variables and empty arrays defined
  var generatorDone = false;
  var totalRecords = 0;
  var studentUsernameList = []; // Empty array for student usernames
  var studentEmailList = [];    // Empty array for student emails

  // Initialize username loop
  while (!generatorDone) {
    var studentUsername = prompt("Enter a student username (i.e. jsmith), type 'done' once you are finished.");
    if (studentUsername === "done") {
      if (studentUsernameList.length === 0) { 
        alert("Please enter at least one username.");
        // Make sure user enters at least one username
      } else {
      generatorDone = true;
        // Set boolean flag to true if user enters "done"
      }
    } else if (studentUsername.indexOf(" ") !== -1) {
      alert("Username cannot contain spaces. Please try again."); 
        // Make sure user does not enter any spaces
    } else {
      studentUsernameList.push(studentUsername);  
        // Add the students username to the end of the studentUsernameList array
    }
  }
  // Convert studentUsername to studentEmail, add studentEmail to end of studentEmailList array
  for (var index = 0; index < studentUsernameList.length; index++) {
    var studentEmail = studentUsernameList[index] + "@student.cvtc.edu";
    studentEmailList.push(studentEmail);
  }
  // Get the total number of records from the studentUsernameList array
  totalRecords = studentUsernameList.length;

  // Display outputs
  if (totalRecords === 1) {
    document.write("You entered 1 username. Here is the email address:\n\n");
  } else {
    document.write("You entered " + totalRecords + " usernames. Here are the email addresses:\n\n");
  }
  document.write(studentEmailList.join("\n"));
}
StudentEmailGenerator();