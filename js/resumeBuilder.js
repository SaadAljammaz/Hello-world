var bio = {
	name: "Saad Aljammaz",
    role: "Student",
    contacts: {
    	mobile: "0541145033",
        email: "aljammaz.s@gmail.com",
        github: "https://github.com/SaadAljammaz",
    	location: "Riyadh"
    },
      welcomeMessage: "Hi, I am saad aljammaz.",
      skills: ["Programming","handsome","awesome"],
      biopic: "images/fry.jpg",
      display: function(){
	      	var formattedName = HTMLheaderName.replace("%data%",bio.name);
			var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

			var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
			var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
			var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
			var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);


			var formattedimage = HTMLbioPic.replace("%data%",bio.biopic);
			var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	      	$("#header").append(formattedName);
			$("#header").append(formattedRole);

			$("#header").append(formattedimage);
			$("#header").append(formattedwelcomeMsg);

			if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			var formattedskills;
			var i = 0;
			bio.skills.forEach(function(element){
				formattedskills = HTMLskills.replace("%data%",bio.skills[i++]);
			$("#header").append(formattedskills);
			});
		
			$("#topContacts, #footerContacts").append(formattedmobile);
			$("#topContacts, #footerContacts").append(formattedemail);
			$("#topContacts, #footerContacts").append(formattedgithub);
			$("#topContacts, #footerContacts").append(formattedlocation);
		}
	}
};

var education = {
	"schools": [{
			"name": "King Saud University",
			"location": "Riyadh",
			"degree": "Excellent",
			"majors": ["Computer scince","cool things"],
			"dates": "2014-2019"
		},
		{
			"name": "Al rugi",
			"location": "Riyadh",
			"degree": "Excellent",
			"majors": ["scince"],
			"dates": "2011-2014"
		}
	],
	"onlineCourses": [{
		"title": "Front-End",
		"school": "Udacity",
		"dates": "2017-2018",
		"url": "https://classroom.udacity.com"
	}],
	display: function(){
		$("#education").append(HTMLschoolStart);
		for (var i = 0; i < education.schools.length; i++) {
			var school = education.schools[i];

			var formattedschoolName = HTMLschoolName.replace("%data%",school.name);
			$(".education-entry:last").append(formattedschoolName);

			var formattedschoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
			$(".education-entry:last").append(formattedschoolDegree);

			var formattedschoolDates = HTMLschoolDates.replace("%data%",school.dates);
			$(".education-entry:last").append(formattedschoolDates);

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%",school.location);
			$(".education-entry:last").append(formattedschoolLocation);

			var formattedschoolMajor = HTMLschoolMajor.replace("%data%",school.majors);
			$(".education-entry:last").append(formattedschoolMajor);
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var i = 0; i < education.onlineCourses.length; i++) {
			var onlineCourse = education.onlineCourses[i];

			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
			$(".education-entry:last").append(formattedonlineTitle);

			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
			$(".education-entry:last").append(formattedonlineSchool);

			var formattedonlineDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
			$(".education-entry:last").append(formattedonlineDates);

			var formattedonlineURL = HTMLonlineURL.replace("%data%",onlineCourse.url);
			$(".education-entry:last").append(formattedonlineURL);
		}
	}
};



var work = {
	"jobs": [{
			"employer": "Abdullah aljammaz",
			"title": "Manager",
			"location": "Riyadh",
			"dates": "2009-20012",
			"description": "All the four legs of an elephant are as huge as thick pillars of a huge building. It has two big ears which go on moving to and fro like a big fan. Its eyes are small. It has a short tail but its trunk is long. It is a wonderful thing. It can pick up even a small needle with its help. The elephant has long white tusks. The elephant is perhaps the strongest animal in the world. It is very costly too."
		},
		{
			"employer": "Ahmed aljammaz",
			"title": "Student",
			"location": "King Saud University",
			"dates": "20012",
			"description": "Elephants live in herds. They eat small twigs, straw and wild fruits. A pet elephant also eats bananas, bread and sugarcane’s. Elephants are pure vegetarians. They are very useful for all. They are used in falling trees, lifting logs, pushing them into rivers. In olden time kings and dukes used to keep elephants for wars and battles. In circus also elephants play very important roles."
		}
	],
	display: function(){
		$("#workExperience").append(HTMLworkStart);
		for(var e in work.jobs){

			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[e].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[e].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[e].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[e].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[e].description);
			$(".work-entry:last").append(formattedDescription);

		}
	}
};

var projects = {
	"projects": [{
			"title": "Artificial intelligence",
			"dates": "2017",
			"description": "There is a Robot in a maze that have Blocks(Robot cannot walk through ) , Holes , Treasure(Goal)  and charging station.The idea is guiding the Robot to reach the Goal by using algorithms such as Breadth First Search , A* and Hill-climbing.Assuming that the robot has a battery and it must be not dead to moving around in the maze.The robot can recharge the battery when it is on a charging station.Initially the battery will be equal to the number of rows + number of columns",
			"images": ["images/the.maze.png", "images/robot-13.jpg"]
		},
		{
			"title": "dataBase",
			"dates": "2015",
			"description": "managing dataBase for cars Company",
			"images": ["images/dataBase.png","images/all.car.logos.gif"]
		}
	],
	display: function(){
		$("#projects").append(HTMLprojectStart);
		for(var e in projects.projects){
		
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[e].title);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[e].dates);
		$(".project-entry:last").append(formattedprojectDates); 

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[e].description);
		$(".project-entry:last").append(formattedprojectDescription); 

		var formattedprojectImage;
		var i = 0;
		for(var element in projects.projects[e].images){
			formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[e].images[element]);
		$(".project-entry:last").append(formattedprojectImage);
		}

		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);