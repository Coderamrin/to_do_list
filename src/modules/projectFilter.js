import { dom } from './dom.js';

function showTask(category) {
	let tasks = document.querySelectorAll(".task");
	tasks.forEach((task) => {
		if (task.classList.contains(category)) {
			task.classList.remove("hide");
		}else {
			task.classList.add("hide"); 
		}
	});
}

function filterTab() {
	let tabs = document.querySelectorAll(".tab");
	tabs.forEach(tab => {
		tab.addEventListener("click",function() {
			tabs.forEach(t => t.classList.remove("active"));
			this.classList.add("active");

			if (tab.children.length > 1) {
				showTask(tab.firstChild.textContent);
			}else {
				showTask(tab.textContent);
			}
		});
	});
}

export {filterTab};
