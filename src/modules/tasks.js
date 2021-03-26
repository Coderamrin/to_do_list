import {dom} from './dom.js'; 

class Task { 
	constructor (name, projectN) {
		this.name = name;
		this.projectN = projectN;
	}

	createTask() {
		let taskContainer = document.querySelector(".taskContainer");
		let task = document.createElement("div");
		let taskName = document.createElement("h3");
		let dueDate = document.createElement("p");
		let checkBox = document.createElement("input");
		let removeTask = document.createElement("p");

		checkBox.setAttribute("type", "checkbox");
		task.classList.add("task");
		dueDate.classList.add("dueDate");
		checkBox.classList.add("checkbox");
		removeTask.classList.add("removeTask");
		task.classList.add(this.projectN);

		taskName.textContent = this.name;
		removeTask.textContent = "x";
		dueDate.textContent = `${dom.date()} + `;
		task.append(taskName, dueDate, checkBox, removeTask);
		taskContainer.append(task);

		removeTask.addEventListener("click", () => {
			taskContainer.removeChild(task);  
		});
	}
} 
 
export { Task };
