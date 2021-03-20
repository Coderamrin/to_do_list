
let dom = (() => {
   let addProjectBtn = document.querySelector(".addProject");
   let addTaskBtn = document.querySelector(".addTask");
   let inputForm = document.querySelector(".form");
   let add = document.querySelector(".add");
   let cancel = document.querySelector(".cancel");
   let formField = document.querySelector(".formField");

   let projects = document.querySelector(".projects");

   return {
	addProjectBtn,
	addTaskBtn,
	inputForm,
	formField,
	add,
	cancel,
	projects,
   };

})();

let addProject = (() => {  

	function add() {
		let name = dom.formField.value;

		if (name == "") {
			return;
		}

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

		projectContainer.addEventListener("click", () => {
			projectContainer.classList.add("active");
			
		});

	}

	function cancel() {
		dom.inputForm.classList.add("removeForm");
		dom.formField.value = ""; 
	}

	dom.addProjectBtn.addEventListener("click", () => {
		dom.inputForm.classList.remove("removeForm"); 

		dom.add.removeEventListener("click", addTask.add);
		dom.add.addEventListener("click",  add);
		dom.cancel.addEventListener("click", cancel);
	});

	return {
		add,
	}
})(); 



let addTask = (() => { 
	function add() {
		let name = dom.formField.value;

		if (name == "") {
			return;
		}

		let taskContainer = document.querySelector(".taskContainer");
		let task = document.createElement("div");
		let taskName = document.createElement("p");
		let dueDate = document.createElement("p");
		let checkbox = document.createElement("input");

		taskName.textContent = name;
		dueDate.textContent = "22/1/2020";
		checkbox.setAttribute("type", "checkbox");
		checkbox.classList.add("checkbox");
		task.classList.add("task"); 
		dom.inputForm.classList.remove("removeForm"); 

		dom.formField.value = "";

		taskContainer.append(task);
		task.append(taskName, dueDate, checkbox);

		dom.inputForm.classList.add("removeForm");  
		
		}

	function cancel() {
		dom.inputForm.classList.add("removeForm");
		dom.formField.value = ""; 
	}

	dom.addTaskBtn.addEventListener("click", () => {
		dom.inputForm.classList.remove("removeForm"); 

		dom.add.removeEventListener("click", addProject.add);
		dom.add.addEventListener("click", add);
		dom.cancel.addEventListener("click", cancel);
	});   
 	
 	return {
 		add
 	}
})();
 
 