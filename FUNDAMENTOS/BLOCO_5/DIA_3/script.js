function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function addDays () {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}

addDays ();

function buttonHolidays (buttonName) {
  let createButton = document.createElement('button');
  let buttonContainer = document.querySelector('.buttons-container');
  createButton.innerHTML = buttonName;
  createButton.id = 'btn-holiday';
  buttonContainer.appendChild(createButton);
}

buttonHolidays ('Feriados');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'pink';
  let setBorder = "10px solid purple"

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

function buttonFriday (buttonName) {
  let fridayButton = document.createElement('button');
  let buttonContainer = document.querySelector('.buttons-container');
  fridayButton.innerHTML = buttonName;
  fridayButton.id = 'btn-friday';
  buttonContainer.appendChild(fridayButton);
}

buttonFriday ("Sexta-feira");

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday')
  let newText = 'SEXTOU!'

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerText != newText) {
        getFridays[index].innerText = newText
      } else {
        getFridays[index].innerText = fridaysArray[index]
      }
    }
  })
};

displayFridays([4, 11, 18, 25]);

function dayMouseOver () {
  let getDays = document.querySelector('#days');
  
  getDays.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let getDays = document.querySelector('#days');

  getDays.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

function addTask (task) {
  let createTask = document.createElement('span');
  createTask.innerHTML = task;
  let getMyTasks = document.querySelector('.my-tasks');
  getMyTasks.appendChild(createTask);
}

addTask ('cozinhar');

function newTaskDiv (color) {
  let createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;
  let getMyTasks = document.querySelector('.my-tasks');
  getMyTasks.appendChild(createDiv);
};

newTaskDiv ('pink');

/*function selectTask () {
  let getTaskDiv = document.querySelector('.task');

  getTaskDiv.addEventListener('click', function () {
    if (getTaskDiv.className === 'task') {
      getTaskDiv.className = 'task-selected'
    } else {
      getTaskDiv.className = 'task'
    }
  })
};

selectTask(); */

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();