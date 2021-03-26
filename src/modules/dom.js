let dom = (() => {
	let tabs = document.querySelectorAll(".tab");
	let addProject = document.querySelector(".addProject");
	let addTask = document.querySelector(".addTask");
	let form = document.querySelector(".form");
	let formField = document.querySelector(".formField");
	let projectNF = document.querySelector(".projectNF"); 
	let add = document.querySelector(".add");
	let cancel = document.querySelector(".cancel");

	let date = () => {
		let dateObj = new Date();
		let month = dateObj.getUTCMonth() + 1;
		let day = dateObj.getUTCDate();
		let year = dateObj.getUTCFullYear();

		return day + "/" + month + "/" + year;
	}

	return {
		addTask,
		addProject,
		form,
		formField,
		add,
		cancel,
		date, 
		tabs,
		projectNF,
	}

})();

export { dom };