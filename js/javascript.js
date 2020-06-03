const PROGRAMS = [
	{
		id: "program-1",
		program_title: "PAID INTERNSHIPS",
		program_description: "description of paid internships",
	},
	{
		id: "program-2",
		program_title: "STUDY ABROAD",
		program_description: "description of studying abroad",

	},
	{
		id: "program-3",
		program_title: "WORK ABROAD",
		program_description:  "description of working abroad",
	},
	{
		id: "program-4",
		program_title: "VOLUNTEERING",
		program_description: "description of working abroad",
	}

 ];

/* Dynamic Display of HTML */

/* Creates the HTML required for display each course information */
function createProgramHTML(program) {
	let programHTML = $("<article>");


	let title = $("<h3>" + program.program_title + "</h3>");
	programHTML.append(title);


	let description = $("<p>" + program.program_description + "</p>");
	programHTML.append(description);

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

});



