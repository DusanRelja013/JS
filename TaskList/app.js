// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');// ul
const clearBtn = document.querySelector('.clear-tasks');//all btn
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load all event listeners
loadEventListeners(); // prvo sam napravio i pozvao f-ju koja ce pozivati sve EL

// function for load all event listener
function loadEventListeners() {
  //ovaj event smo dodali poslednji, a dodali smo ga da bi nam task koji smo sacuvali u ls ostao vidljiv u taskList
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // add task event
  form.addEventListener('submit', addTask);//prvi EL koji dodajem, dodajem na formu i on ce dodavati taskove, f-ja addTask

  //remove task event
  taskList.addEventListener('click', removeTask);//drugi event koji dodajemo, njime cemo brisati task po task

  //clear task event
  clearBtn.addEventListener('click', clearTasks);//treci event, btn brisemo sve evente

  //filter tasks event
  filter.addEventListener('keyup', filterTasks);//cetvrti event,trazimo taskove kroz filter
}

// get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
      //create li element
  const li = document.createElement('li');
  //add class to li
  li.className = 'collection-item';
  //create a text node and append to li
  li.appendChild(document.createTextNode(task));
  // create new link element 
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);

  //append li to ul
  taskList.appendChild(li);
  });
}


// add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add Task!')
  }

  //create li element
  const li = document.createElement('li');
  //add class to li
  li.className = 'collection-item';
  //create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element 
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);

  //append li to ul
  taskList.appendChild(li);

  // Poslednja stvar koju smo uradili, dodali smo task u local storage
  // add to LS
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = '';

  e.preventDefault();
}

// store task fucntion the last staff
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      // remove from ls
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}


// remove from ls
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}



//Clear Tasks
function clearTasks() {
  //taskList.innerHTML = ''; // Prvi nacin

  // drugi nacin - brzi nacin
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  };

  // clear tasks from ls
  clearTasksFromLocalStorage();
}


// Clear tasks from ls
function clearTasksFromLocalStorage() {
  localStorage.clear()
}



//Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  //querySelectorAll vraca nodeList i zato mozemo da koristimo forEach
  //querySelector/getElementByClassList/getElementById vracaju html collection koju moramo da konvertujemo u array(niz) i tek onda mozemo da koristimo forEach
  document.querySelectorAll('.collection-item').forEach(
    function (task) {
      const item = task.firstChild.textContent;

      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none'
      }
    });
};