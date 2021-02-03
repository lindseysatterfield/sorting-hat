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

const getStudentForm = (e) => {
	e.preventDefault();
	const name = document.querySelector('#inputName').value;
	const house = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
	const studentObj = {
		name,
		house
	};
	students.push(studentObj); //PUSHES STUDENT OBJECTS INTO THE STUDENTS ARRAY
	console.log(students);
	document.querySelector('form').reset();
	studentCard(students);
};

const studentCard = (array) => {
	let domString = '';
	for (let i = 0; i < array.length; i++) {
		domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${array[i].name}</h5>
                      <p class="card-text">${array[i].house}</p>
                      <button type="submit" class="btn btn-primary" id="expel-btn">EXPEL</button>
                    </div>
                  </div>`;
	}
	printToDom('#cards-container', domString);
};

const buttonEvents = () => {
	document.querySelector('#sorting-btn').addEventListener('click', showStudentForm);
};

const init = () => {
	buttonEvents();
};

init();
