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

const studentForm = () => {
	let form = '';
	form += `
      <form>
        <div class="form-group row">
          <label for="studentNames" class="col-sm-2 col-form-label">Students</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName" placeholder="Wizard Name" required>
            <button type="submit" class="btn btn-primary" id="sort-input-btn">Sort Me!</button>
          </div>
        </div>
      </form>`;

	printToDom('#students-container', form);
};

const buttonEvents = () => {
	document.querySelector('#sorting-btn').addEventListener('click', studentForm);
};

const init = () => {
	buttonEvents();
};

init();
