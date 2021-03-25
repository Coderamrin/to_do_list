import { Task } from './modules/tasks.js';
import { Project } from './modules/projects.js';
import { dom } from './modules/dom.js'; 

function showFormCb() {
	dom.form.classList.remove("removeForm");
}

function addprojectCb() {
	let name = dom.formField.value;
	let project = new Project(name).createProject();
	dom.form.classList.add("removeForm");
	dom.formField.value = "";
}

function addtaskCb(argument) {
	let name = dom.formField.value;
	let task = new Task(name).createTask(); 
	dom.form.classList.add("removeForm");
	dom.formField.value = "";
}
 
function cancelCb() {
	dom.form.classList.add("removeForm");
	dom.formField.value = "";
}


dom.cancel.addEventListener("click", cancelCb);

dom.addTask.addEventListener("click", () => {
	showFormCb();
	dom.add.removeEventListener("click", addprojectCb);
	dom.add.addEventListener("click", addtaskCb);
}); 

dom.addProject.addEventListener("click", () => {
	showFormCb();
	dom.add.removeEventListener("click", addtaskCb);
	dom.add.addEventListener("click", addprojectCb); 
});



