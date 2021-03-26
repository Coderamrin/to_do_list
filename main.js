/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_projectFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projectFilter.js */ \"./src/modules/projectFilter.js\");\n\r\n\r\n\r\n \r\n\r\n(0,_modules_projectFilter_js__WEBPACK_IMPORTED_MODULE_3__.filterTab)(); \r\n\r\nfunction showFormCb() {\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.form.classList.remove(\"removeForm\");\r\n}\r\n\r\nfunction addprojectCb() {\r\n\tlet name = _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.formField.value;\r\n\tif (name !== \"\") {\r\n\t\tlet project = new _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.Project(name).createProject();\r\n\t\t(0,_modules_projectFilter_js__WEBPACK_IMPORTED_MODULE_3__.filterTab)();\r\n\t\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.form.classList.add(\"removeForm\");\r\n\t\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.formField.value = \"\";\r\n\t} \r\n}\r\n\r\nfunction addtaskCb() { \r\n\tlet name = _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.formField.value;\r\n\tlet projectNF = _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.projectNF.value;\r\n\tlet dueDate = _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.dueDate.value;\r\n\tif (projectNF == \"\") {\r\n\t\tprojectNF = \"default\";\r\n\t}\r\n\r\n\tif (dueDate == \"\") {\r\n\t\tdueDate = _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.date();\r\n\t}\r\n\r\n\tif ( name !== \"\" && projectNF !== \"\") {\r\n\t\tlet task = new _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__.Task(name, projectNF, dueDate).createTask(); \r\n\t\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.form.classList.add(\"removeForm\");\r\n\t\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.formField.value = \"\";\r\n\t\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.dueDate.value = \"\";\r\n\t\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.projectNF.value = \"\";\r\n\t} \r\n}\r\n \r\nfunction cancelCb() {\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.form.classList.add(\"removeForm\");\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.formField.value = \"\";\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.dueDate.value = \"\";\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.projectNF.value = \"\"; \r\n}\r\n\r\n\r\n_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.cancel.addEventListener(\"click\", cancelCb);\r\n \r\n_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.addProject.addEventListener(\"click\", () => {\r\n\tshowFormCb();\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.projectNF.classList.add(\"hide\");\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.dueDate.classList.add(\"hide\");\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.add.removeEventListener(\"click\", addtaskCb);\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.add.addEventListener(\"click\", addprojectCb); \r\n}); \r\n\r\n_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.addTask.addEventListener(\"click\", () => {\r\n\tshowFormCb(); \r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.projectNF.classList.remove(\"removeForm\");\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.add.removeEventListener(\"click\", addprojectCb);\r\n\t_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.add.addEventListener(\"click\", addtaskCb);\r\n});\r\n\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\nlet dom = (() => {\r\n\tlet tabs = document.querySelectorAll(\".tab\");\r\n\tlet addProject = document.querySelector(\".addProject\");\r\n\tlet addTask = document.querySelector(\".addTask\");\r\n\tlet form = document.querySelector(\".form\");\r\n\tlet formField = document.querySelector(\".formField\");\r\n\tlet dueDate = document.querySelector(\".dueDateF\");\r\n\tlet projectNF = document.querySelector(\".projectNF\"); \r\n\tlet add = document.querySelector(\".add\");\r\n\tlet cancel = document.querySelector(\".cancel\");\r\n\r\n\tlet date = () => {\r\n\t\tlet dateObj = new Date();\r\n\t\tlet month = dateObj.getUTCMonth() + 1;\r\n\t\tlet day = dateObj.getUTCDate();\r\n\t\tlet year = dateObj.getUTCFullYear();\r\n\r\n\t\treturn day + \"/\" + month + \"/\" + year;\r\n\t}\r\n\r\n\treturn {\r\n\t\taddTask,\r\n\t\taddProject,\r\n\t\tform,\r\n\t\tformField,\r\n\t\tadd,\r\n\t\tcancel,\r\n\t\tdate, \r\n\t\ttabs,\r\n\t\tprojectNF,\r\n\t\tdueDate,\r\n\t}\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/projectFilter.js":
/*!**************************************!*\
  !*** ./src/modules/projectFilter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterTab\": () => (/* binding */ filterTab)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/modules/dom.js\");\n\r\n\r\nfunction showTask(category) {\r\n\tlet tasks = document.querySelectorAll(\".task\");\r\n\ttasks.forEach((task) => {\r\n\t\tif (task.classList.contains(category)) {\r\n\t\t\ttask.classList.remove(\"hide\");\r\n\t\t}else {\r\n\t\t\ttask.classList.add(\"hide\"); \r\n\t\t}\r\n\t});\r\n}\r\n\r\nfunction filterTab() {\r\n\tlet tabs = document.querySelectorAll(\".tab\");\r\n\ttabs.forEach(tab => {\r\n\t\ttab.addEventListener(\"click\",function() {\r\n\t\t\ttabs.forEach(t => t.classList.remove(\"active\"));\r\n\t\t\tthis.classList.add(\"active\");\r\n\r\n\t\t\tif (tab.children.length > 1) {\r\n\t\t\t\tshowTask(tab.firstChild.textContent);\r\n\t\t\t}else {\r\n\t\t\t\tshowTask(tab.textContent);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/modules/projectFilter.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n\r\nclass Project {\r\n\tconstructor (name) {\r\n\t\tthis.name = name;\r\n\t}\r\n\r\n\tcreateProject() {\r\n\t\tlet projects = document.querySelector(\".projects\");\r\n\t\tlet projectContainer = document.createElement(\"div\");\r\n\t\tlet projectName = document.createElement(\"h4\"); \r\n\t\tlet removeProject = document.createElement(\"p\");\r\n\r\n\t\tprojectContainer.classList.add(\"projectContainer\");\r\n\t\tremoveProject.classList.add(\"removeProject\");\r\n\r\n\t\tprojectName.textContent = this.name;\r\n\t\tremoveProject.textContent = \"x\";\r\n\r\n\t\tprojectContainer.classList.add(\"tab\");\r\n\t\tprojectContainer.classList.add(\"project\"); \r\n\t\tremoveProject.classList.add(\"removeProject\");\r\n\r\n\t\tprojectContainer.append(projectName, removeProject);\r\n\t\tprojects.append(projectContainer);\r\n\r\n\r\n\t\tremoveProject.addEventListener(\"click\", ()=> {\r\n\t\t\tprojects.removeChild(projectContainer);\r\n\t\t});\r\n\t}\r\n \r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/modules/dom.js\");\n \r\n\r\nclass Task { \r\n\tconstructor (name, projectN, dueDate) {\r\n\t\tthis.name = name;\r\n\t\tthis.projectN = projectN;\r\n\t\tthis.dueDate = dueDate;\r\n\t}\r\n\r\n\tcreateTask() {\r\n\t\tlet taskContainer = document.querySelector(\".taskContainer\");\r\n\t\tlet task = document.createElement(\"div\");\r\n\t\tlet taskName = document.createElement(\"h3\");\r\n\t\tlet dueDate = document.createElement(\"p\");\r\n\t\tlet checkBox = document.createElement(\"input\");\r\n\t\tlet removeTask = document.createElement(\"p\");\r\n\r\n\t\tcheckBox.setAttribute(\"type\", \"checkbox\");\r\n\t\ttask.classList.add(\"task\");\r\n\t\tdueDate.classList.add(\"dueDate\");\r\n\t\tcheckBox.classList.add(\"checkbox\");\r\n\t\tremoveTask.classList.add(\"removeTask\");\r\n\t\ttask.classList.add(this.projectN);\r\n\r\n\t\ttaskName.textContent = this.name;\r\n\t\tremoveTask.textContent = \"x\";\r\n\t\tdueDate.textContent = this.dueDate;\r\n\t\ttask.append(taskName, dueDate, checkBox, removeTask);\r\n\t\ttaskContainer.append(task);\r\n\r\n\t\tremoveTask.addEventListener(\"click\", () => {\r\n\t\t\ttaskContainer.removeChild(task);  \r\n\t\t});\r\n\t}\r\n} \r\n \r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/modules/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;