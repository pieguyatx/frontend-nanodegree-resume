/*
This has JavaScript to build the resume.
 */

// Add name and title
var formattedName = HTMLheaderName.replace("%data%","Jonesy Jackrabbit");
var formattedRole = HTMLheaderRole.replace("%data%","Master of the Universe");
$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);
