/*
This has JavaScript to build the resume.
 */

// Script to add name
 $("#main").append(["Pius Wong"]);

// Testing variables
var awesomeThoughts = "I am Pius, and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log("awesomeThoughts: ",awesomeThoughts);
console.log("funThoughts: ", funThoughts);
 $("#main").append(["<hr>",funThoughts]);
