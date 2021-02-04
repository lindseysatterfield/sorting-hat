const students = [];
const hogwartsHouses = [
	'Slytherin',
	'Ravenclaw',
	'Hufflepuff',
	'Gryffindor'
];

const printToDom = (divId, textToPrint) => {
	const selectedDiv = document.querySelector(divId);
	selectedDiv.innerHTML = textToPrint;
};

const showStudentForm = () => {
	let form = '';
	form += `
      <form>
        <div class="form-group row">
          <label for="studentNames" class="col-sm-2 col-form-label">Students</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName" placeholder="Wizard Name" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" id="sort-input-btn">Sort Me!</button>
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
	console.log(students);
};

// makes a card for the student
const studentCard = (array) => {
	let domString = '';
	array.forEach((student, i) => {
		domString += `<div class="card" style="width: 18rem;" id=${i}>
	                  <div class="card-body">
	                    <h5 class="card-title">${student.name}</h5>
	                    <p class="card-text">${student.house}</p>
	                    <button type="button" class="btn btn-danger expel-btn" id="${i}">EXPEL</button>
	                  </div>
	                </div>`;
	});

	printToDom('#cards-container', domString);
};

// deletes the card
const expelStudents = (e) => {
	const targetType = e.target.type;
	const targetId = e.target.id;

	if (targetType === 'button') {
		students.splice(targetId, 1);
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
