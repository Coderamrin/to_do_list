import { Task } from './modules/tasks.js';
import { Project } from './modules/projects.js';
import { dom } from './modules/dom.js';
import { filterTab } from './modules/projectFilter.js'; 

filterTab(); 

function showFormCb() {
	dom.form.classList.remove("removeForm");
}

function addprojectCb() {
	let name = dom.formField.value;
	if (name !== "") {
		let project = new Project(name).createProject();
		filterTab();
		dom.form.classList.add("removeForm");
		dom.formField.value = "";
	} 
}

function addtaskCb() { 
	let name = dom.formField.value;
	let projectNF = dom.projectNF.value;
	let dueDate = dom.dueDate.value;
	if (projectNF == "") {
		projectNF = "default";
	}

	if (dueDate == "") {
		dueDate = dom.date();
	}

	if ( name !== "" && projectNF !== "") {
		let task = new Task(name, projectNF, dueDate).createTask(); 
		dom.form.classList.add("removeForm");
		dom.formField.value = "";
		dom.dueDate.value = "";
		dom.projectNF.value = "";
	} 
}
 
function cancelCb() {
	dom.form.classList.add("removeForm");
	dom.formField.value = "";
	dom.dueDate.value = "";
	dom.projectNF.value = ""; 
}


dom.cancel.addEventListener("click", cancelCb);
 
dom.addProject.addEventListener("click", () => {
	showFormCb();
	dom.projectNF.classList.add("hide");
	dom.dueDate.classList.add("hide");
	dom.add.removeEventListener("click", addtaskCb);
	dom.add.addEventListener("click", addprojectCb); 
}); 

dom.addTask.addEventListener("click", () => {
	showFormCb(); 
	dom.projectNF.classList.remove("removeForm");
	dom.add.removeEventListener("click", addprojectCb);
	dom.add.addEventListener("click", addtaskCb);
});
