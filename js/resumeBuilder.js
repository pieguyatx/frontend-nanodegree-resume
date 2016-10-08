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
  "welcomeMessage": "Howdy, folks! Welcome to this swanky pad!",
  "skills": ["peacekeeping", "shoe-tying", "varmint-huntin'","yoga","sewin'","listlessness"]
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
var work = {
  "workplaces": [
      {
        "position": "Hacker",
        "employer": "Motorola",
        "years": "2 years",
        "city": "Sheboygen, WI",
        "description": "Fought clams weekly for sport."
      },
      {
        "position": "Fullback",
        "employer": "The University of Notre Dame",
        "years": "11 years",
        "city": "Notre Dame, WI",
        "description": "Taught elderly couples how to enjoy the Chinese language."
      },
      {
        "position": "Life Coach",
        "employer": "Tyson Foods",
        "years": "Too long",
        "city": "London, WI",
        "description": "Spammed spammers in retaliation for jaywalking."
      }
  ]
};

//$("#header").append([work["position"]]);


// Add more school information with JSON
var education = {
  "schools": [
    {
      "name": "The University of Fenix",
      "city": "Antwerp, Belgie",
      "degree": "BS",
      "major": "Fishing",
      "minor": "Basket Weaving",
      "year": 2003
    },
    {
      "name": "The School of Hard Knocks",
      "city": "Toronto, Canada",
      "degree": "MS",
      "major": "Environmental Engineering",
      "year": 2004
    }
  ],
  "onlinecourses": [
    {
      "title": "git",
      "school": "Udacity",
      "year": 2016
    },
    {
      "title": "JavaScript",
      "school": "Youdacity",
      "year": 2016
    }
  ]
};
//$("#header").append([education.schools[0].minor]);

// Create project object
var projects = {
  "robotics": [
    {
      "organization": "masters",
      "title": "Taking over small countries with robotic armies",
      "description": "Feeding cats when they're hungry, with robots."
    },
    {
      "organization": "bachelors",
      "title": "Freedom",
      "description": "Taking over small villages with robot bugs"
    }
  ],
  "improv": [
    {
      "organization": "Higgledy Pigleddy Labs",
      "title": "Improv and Engineering",
      "description": "Fun n' games, sonny."
    },
    {
      "organization": "Spots, Inc.",
      "title": "Musical Improv Singing and Dancing",
      "description": "Did you ever wonder what you wanted to be when you grew up?  Did you?  I did.  And boy, when I grew up, I grew up good.  Believe you me."
    },
    {
      "organization": "Berklee School of Music",
      "title": "Improvisational Oboe",
      "description": "My buddy Sheila Burkenstien says 'hey'"
    }
  ]
};

// Add skills
if(bio.skills.length > 0){
  $("#header").append([HTMLskillsStart]);
  for (let i=0; i<bio.skills.length; i++){
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append([formattedSkill]);
  }
}

// Add jobs (using for..in, to avoid counting elements)
function displayWork(){
  for(var job=0; job<work.workplaces.length; job++){
    //console.log(work.workplaces[job])
    $("#workExperience").append([HTMLworkStart]);
    if (work.workplaces[job].hasOwnProperty("employer")){
      var formattedJob = HTMLworkEmployer.replace("%data%",work.workplaces[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.workplaces[job].position);
      var input = formattedJob + formattedTitle;
      $(".work-entry:last").append(input);
      var formattedDate = HTMLworkDates.replace("%data%",work.workplaces[job].years);
      $(".work-entry:last").append(formattedDate);
      var formattedCity = HTMLworkLocation.replace("%data%",work.workplaces[job].city);
      $(".work-entry:last").append(formattedCity);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.workplaces[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

// Invoke code to show work.
displayWork();

// Internationalize button
$("#main").append(internationalizeButton);
function inName(name){
  name = name.split(" ");
  name[1] = name[1].toUpperCase();
  name = name[0] + " " + name[1];
  //console.log(name);
  bio.name = name;
  return name;
}

// Add projects to resume.
// Encapsulate a function inside the projects object (a method) to display projects
projects.display = function(){
  for(var category in projects){
    for(var proj in projects[category]){
      $("#projects").append(HTMLprojectStart);
      var formatted = HTMLprojectTitle.replace("%data%",projects[category][proj].title);
      $(".project-entry").append(formatted);
      formatted = HTMLprojectDates.replace("%data%",projects[category][proj].organization);
      $(".project-entry").append(formatted);
      formatted = HTMLprojectDescription.replace("%data%",projects[category][proj].description);
      $(".project-entry").append(formatted);
      //console.log(projects.robotics[proj]);
    };
  };
}

projects.display();
