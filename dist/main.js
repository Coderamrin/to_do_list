/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nlet dom = (() => {\r\n   let addProjectBtn = document.querySelector(\".addProject\");\r\n   let addTaskBtn = document.querySelector(\".addTask\");\r\n   let inputForm = document.querySelector(\".form\");\r\n   let addName = document.querySelector(\".add\");\r\n   let cancel = document.querySelector(\".cancel\");\r\n   let formField = document.querySelector(\".formField\");\r\n\r\n   let projects = document.querySelector(\".projects\");\r\n\r\n   return {\r\n   \taddProjectBtn,\r\n   \taddTaskBtn,\r\n   \tinputForm,\r\n   \tformField,\r\n   \taddName,\r\n   \tprojects,\r\n   };\r\n\r\n})();\r\n\r\nfunction getName() {\r\n\r\n}\r\n\r\nlet addProject = (() => {\r\n\r\n\tfunction add() {\r\n\t\tlet name = dom.formField.value;\r\n\t\tlet projectContainer = document.createElement(\"div\");\r\n\t\tlet projectName = document.createElement(\"p\");\r\n\t\tlet removeBtn = document.createElement(\"p\");\r\n\t\tprojectName.textContent = name;\r\n\t\tremoveBtn.textContent = \"X\";\r\n\r\n\t\tprojectContainer.appendChild(projectName);\r\n\t\tprojectContainer.appendChild(removeBtn);\r\n\r\n\t\tdom.projects.appendChild(projectContainer);\r\n\t\tprojectContainer.classList.add(\"projectsContainer\");\r\n\r\n\t\tdom.inputForm.classList.add(\"removeForm\");\r\n\t\tdom.formField.value = \"\";\r\n\r\n\t\tremoveBtn.addEventListener(\"click\", () => {\r\n\t\t\tdom.projects.removeChild(projectContainer);\r\n\t\t});\r\n\r\n\t\tprojectContainer.addEventListener(\"click\", () => {projectContainer.classList.add(\"active\");\r\n\t\t\t\r\n\t\t});\r\n\t\t\r\n\t}\r\n\r\n\tdom.addProjectBtn.addEventListener(\"click\", () => {\r\n\t\tdom.inputForm.classList.remove(\"removeForm\"); \r\n\r\n\t\tdom.addName.addEventListener(\"click\", add);\r\n\t});\r\n\r\n})();\r\n\r\nlet addTask = (() => {\r\n\r\n})();\r\n\r\n \n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;