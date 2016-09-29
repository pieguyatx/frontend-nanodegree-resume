/*
This has JavaScript to build the resume.
 */

// Add name
var formattedName = HTMLheaderName.replace("%data%","Jonesy Jackrabbit");
$("#header").append([formattedName]);
// Add title
var formattedRole = HTMLheaderRole.replace("%data%","Master of the Universe");
$("#header").append([formattedRole]);
