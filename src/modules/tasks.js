import {dom} from './dom.js'; 

class Task { 
	constructor (name) {
		this.name = name;
	}

	createTask() {
		let taskContainer = document.querySelector(".taskContainer");
		let task = document.createElement("div");
		let taskName = document.createElement("h3");
		let dueDate = document.createElement("p");
		let checkBox = document.createElement("input");

		checkBox.setAttribute("type", "checkbox");
		task.classList.add("task");
		dueDate.classList.add("dueDate");
		checkBox.classList.add("checkbox");

		taskName.textContent = this.name;
		dueDate.textContent = dom.date();
		task.append(taskName, dueDate, checkBox);
		taskContainer.append(task);
	}
} 
 
export { Task };
