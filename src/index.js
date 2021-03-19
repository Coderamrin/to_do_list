
let dom = (() => {
   let addProjectBtn = document.querySelector(".addProject");
   let addTaskBtn = document.querySelector(".addTask");
   let inputForm = document.querySelector(".form");
   let addName = document.querySelector(".add");
   let cancel = document.querySelector(".cancel");
   let formField = document.querySelector(".formField");

   let projects = document.querySelector(".projects");

   return {
   	addProjectBtn,
   	addTaskBtn,
   	inputForm,
   	formField,
   	addName,
   	projects,
   };

})();

function getName() {

}

let addProject = (() => {

	function add() {
		let name = dom.formField.value;
		let projectContainer = document.createElement("div");
		let projectName = document.createElement("p");
		let removeBtn = document.createElement("p");
		projectName.textContent = name;
		removeBtn.textContent = "X";

		projectContainer.appendChild(projectName);
		projectContainer.appendChild(removeBtn);

		dom.projects.appendChild(projectContainer);
		projectContainer.classList.add("projectsContainer");

		dom.inputForm.classList.add("removeForm");
		dom.formField.value = "";

		removeBtn.addEventListener("click", () => {
			dom.projects.removeChild(projectContainer);
		});

		projectContainer.addEventListener("click", () => {projectContainer.classList.add("active");
			
		});
		
	}

	dom.addProjectBtn.addEventListener("click", () => {
		dom.inputForm.classList.remove("removeForm"); 

		dom.addName.addEventListener("click", add);
	});

})();

let addTask = (() => {

})();

 