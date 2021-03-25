import { Task } from './modules/tasks.js';
import { Project } from './modules/projects.js';
import { dom } from './modules/dom.js';

let dd = new Task("dd");
let ff = new Project("ff");
 
 
dd.createTask();
ff.createProject();