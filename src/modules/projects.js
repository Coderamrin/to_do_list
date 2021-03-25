
class Project {
	constructor (name) {
		this.name = name;
	}

	createProject() {
		let projects = document.querySelector(".projects");
		let projectContainer = document.createElement("div");
		let projectName = document.createElement("h3");
		let removeProject = document.createElement("p");

		projectContainer.classList.add("projectContainer");
		removeProject.classList.add("removeProject");

		projectName.textContent = this.name;
		removeProject.textContent = "x";

		projectContainer.classList.add("project"); 
		removeProject.classList.add("removeProject");

		projectContainer.append(projectName, removeProject);
		projects.append(projectContainer);

		removeProject.addEventListener("click", ()=> {
			projects.removeChild(projectContainer);
		});
	}
 
}

export {Project};


