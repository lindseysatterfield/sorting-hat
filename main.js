const students = [];
const hogwartsHouses = [
	'Slytherin',
	'Ravenclaw',
	'Hufflepuff',
	'Gryffindor'
];
const voldemortsArmy = [];

const printToDom = (divId, textToPrint) => {
	const selectedDiv = document.querySelector(divId);
	selectedDiv.innerHTML = textToPrint;
};

// shows the form upon clicking the button
const showStudentForm = () => {
	let form = '';
	form += `<form class="text-center mb-2">
              <div class="form-group row d-flex justify-content-center mb-4">
                <div class="col-sm-10 w-auto">
                  <input type="text" class="form-control" id="inputName" placeholder="Wizard Name" required>
                </div>
              </div>
              <button type="submit" class="btn" style="width: 150px; background-color: #740001; color: white;"                  id="sort-input-btn">Sort Me!
              </button>
           </form>`;

	printToDom('#students-container', form);
	document.querySelector('form').addEventListener('submit', getStudentForm);
};

//gets the form from the student
const getStudentForm = (e) => {
	e.preventDefault();
	const name = document.querySelector('#inputName').value;
	const house = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
	const studentObj = {
		name,
		house
	};

	students.push(studentObj); //PUSHES STUDENT OBJECTS INTO THE STUDENTS ARRAY
	document.querySelector('form').reset();
	studentCard(students);
};

// makes a card for the student
const studentCard = (array) => {
	let domString = '';
	array.forEach((student, i) => {
		domString += `
                  <div class="card text-center m-1" style="width: 18rem; height: 180px;" id=${i}>
                    <div class="card-body p-2">
                      <h4 class="card-title">${student.name}</h4>
	                    <p class="lead card-text">${student.house}</p>
	                    <button type="button" class="btn btn-danger expel-btn" id="${i}">EXPEL</button>
	                  </div>
                  </div>`;
	});

	printToDom('#cards-container', domString);
};

// sends expelled students to voldemort's army
const hogwartsRejects = (array) => {
	let domString = '';
	array.forEach((reject, i) => {
		domString += `<div class="card text-center m-1" style="width: 18rem; height: 180px; background-color: #004101; color: white;" id=${i}>
                    <div class="card-body p-2">
                      <h4>Voldemort's Army</h4>
	                    <h4 class="card-title">${reject.name}</h4>
                      <p class="card-text" style="text-decoration: line-through;">${reject.house}</p>
                      <p class="card-text pb-1">${reject.name}, welcome to the dark side!</p>
	                  </div>
	                </div>`;
	});

	printToDom('#voldemort-container', domString);
};

// deletes the card and pushes them to a new array
const expelStudents = (e) => {
	const targetType = e.target.type;
	const targetId = e.target.id;

	if (targetType === 'button') {
		const studentReject = students.splice(targetId, 1);
		voldemortsArmy.push(...studentReject);
		hogwartsRejects(voldemortsArmy);
	}

	studentCard(students);
};

const buttonEvents = () => {
	document.querySelector('#sorting-btn').addEventListener('click', showStudentForm);
	document.querySelector('#cards-container').addEventListener('click', expelStudents);
};

const init = () => {
	buttonEvents();
};

init();
