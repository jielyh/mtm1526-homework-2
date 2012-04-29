/*
	3 ways to get elements in your HTML
	- document.getElementbyId()
	- document.getElementbyTagName()
	- document.getElementbyIdClassName()
*/

var task = document.getElementById('task'); 
var list = document.getElementById('list');												  // Holds our <div> to move around
document.getElementById('addTask').addEventListener('click', function (ev) {
	
	if (task.value != '') { //if input field is not empt then do this
	var newTask = document.createElement('li'); //new variable, creating an li in the doc
	console.log(newTask);//tracking value
    newTask.innerHTML = task.value; //new task (li) in html file attached = value in task input field`
    list.appendChild(newTask); //grab 'newtask' and put it in the list li
	 }
	task.value = ''; //removing the 'value' in the task input box
	
	
}, false);


list.addEventListener('click', function (ev) {
  if (ev.target.className == 'done') {
    ev.target.className = '';
  } else {
    ev.target.className = 'done';
  }
}, false);