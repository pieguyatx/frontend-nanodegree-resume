/*
This has JavaScript to build the resume.
 */

 //Create object: bio
var bio = {
  "name": "Jonesy Jackrabbit",
  "role": "Master of the Universe",
  "contacts": {
    "mobile": "999-999-9999",
    "email": "jonesy@mastersoftheuniverse.com",
    "twitter": "@PBNJSammiches",
    "location": "Mt. Etna, Spain"
  },
  "pictureURL": "images/fry.jpg",
  "welcomeMessage": "Howdy, folks! Welcome to this swanky pad!"
};

// Add name and title
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);

// Add other bio info
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#header").append([formattedEmail]);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#header").append([formattedLocation]);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append([formattedWelcome]);

// Add photo
var formattedBiopic = HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append([formattedBiopic]);

// Add work & education
var work = {};
work.position = "Hacker";
work.employer = "Motorola";
work.years = "3";
work.city = "Sheboygen, WI";
var education = {};
education["name"] = "The University of Fenix";
education["years"] = "2000-2008";
education["city"] = "Antwerp, Belgie";
$("#header").append([work["position"]]);
$("#header").append([education.name]);
