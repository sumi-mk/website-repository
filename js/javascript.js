const PROGRAMS = [
	{
		id: "program-1",
		program_title: "PAID INTERNSHIPS",
		program_intro: "Our internship opportunities come from around the world!" + 
		 " If you are a university student looking for a way to gain experiences and get paid while doing so, you've come to the right place!",
		program_description: "<br>We offer internships to 10 different countries, all varying in different fields. These fields include business, science, education and arts. " +
		"Internships involve working for an organisation/company and earning an income while you do! With our internship opportunities, you will learn valuable skills for the workplace."
	},
	{
		id: "program-2",
		program_title: "STUDY ABROAD",
		program_intro: "Study abroad for a semester or two! We offer education exchanges to many different universities.",
		program_description: "<br>Study exchanges are offered in two different forms, to 10 different countries!" +
		"<h4> SEMESTER EXCHANGES </h4> These are study exchanges only for the duration of one semester. You can gain valuable skills by completing similar university courses, but overseas instead!" +
		"<h4> SUMMER SCHOOL EXCHANGES </h4> These study exchanges involve studying over the summer at the university of your choice. You can complete one or two courses overseas while working alongside a variety of people."
	},
	{
		id: "program-3",
		program_title: "WORK ABROAD",
		program_intro:  "Work abroad in a part-time position of your choice, wherever you would like to.",
		program_description: "<br>We have various part time positions for students wishing to switch up their regular work routine. The organisations we can connect you to can be in either the science, business or education sector."
	},
	{
		id: "program-4",
		program_title: "VOLUNTEERING",
		program_intro: "Gain experience and learn from others through our volunteering exchanges.",
		program_description: "<br> Volunteering is a valuable way to gain experience and give back to the community while you do it. It adds depth to your CV and shows the help you are willing to give others!" +
		" We offer a vast amount of organisations that are run by volunteers, who would be grateful for your help."
	}

 ];

/* Dynamic Display of HTML */

/* Creates the HTML required for display each course information */
function createProgramHTML(program) {
	let programHTML = $('<article class = "showmore" id = "' + program.id + '">');

	let title = $('<h3 id = "programs">' + program.program_title + "</h3>");
	programHTML.append(title);

	
	let intro = $('<div>' + program.program_intro + '</div>')
	programHTML.append(intro)
	
	let description = $('<span class="more">' + program.program_description + '</span>')
	programHTML.append(description)
		
	let dots = $('<span class="dots">...</span>')
	programHTML.append(dots)
	
	
	let showMore = $('<a>Learn More</a>')
	programHTML.append(showMore)
	
	let line = $('<hr class="hr1">')
	programHTML.append(line)	
	
	return programHTML;
}



function displayPrograms(programs) {
	let programsList = $("#programsList");

	programsList.empty();
	for(let program of programs) {
		let programHTML = createProgramHTML(program);
		programsList.append(programHTML);
	}
}



$(document).ready(function(){
	let mainPrograms = [PROGRAMS[0], PROGRAMS[1], PROGRAMS[2], PROGRAMS[3]];
	
	
	displayPrograms(mainPrograms);
	$("#searchText").on("keyup", search)
	
	document.querySelectorAll(".showmore").forEach(function (p) {
  	p.querySelector("a").addEventListener("click", function () {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show") ? "Show Less" : "Learn More";
    

  });
});
	//BONUS JAVASCRIPT FEATURE - SMOOTH SCROLLING (for navbar)
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();

		let matches = [];
		for(let program of PROGRAMS) {
		
		let progTitle = program.program_title.toLowerCase();
		if(progTitle.includes(query)) {
			
			matches.push(program);
			}
		}
	displayPrograms(matches);
		
		
}











