let dom = (() => {
	let addProject = document.querySelector(".addProject");
	let addTask = document.querySelector(".addTask");

	let date = () => {
		let dateObj = new Date();
		let month = dateObj.getUTCMonth() + 1;
		let day = dateObj.getUTCDate();
		let year = dateObj.getUTCFullYear();

		return day + "/" + month + "/" + year;
	}

	function projectDom(name) {
		let projects = document.querySelector(".projects");
		let projectContainer = document.createElement("div");
		let projectName = document.createElement("h2");
		let removeProject = document.createElement("p");

		projectContainer.classList.add("projectContainer");
		removeProject.classList.add("removeProject");

		projectName.textContent = name;
		removeProject.textContent = "x";

		projectContainer.classList.add("project"); 
		removeProject.classList.add("removeProject");

		projectContainer.append(projectName, removeProject);
		projects.append(projectContainer);
	}

	function taskDom(name) {
		let taskContainer = document.querySelector(".taskContainer");
		let task = document.createElement("div");
		let taskName = document.createElement("h3");
		let dueDate = document.createElement("p");
		let checkBox = document.createElement("input");

		checkBox.setAttribute("type", "checkbox");
		task.classList.add("task");
		dueDate.classList.add("dueDate");
		checkBox.classList.add("checkbox");

		taskName.textContent = name;
		dueDate.textContent = date();
		task.append(taskName, dueDate, checkBox);
		taskContainer.append(task);
	}

	return {
		taskDom,
		projectDom,
		addTask,
		addProject,
	}

})();

dom.projectDom("Top");
dom.taskDom("hello");
export { dom };