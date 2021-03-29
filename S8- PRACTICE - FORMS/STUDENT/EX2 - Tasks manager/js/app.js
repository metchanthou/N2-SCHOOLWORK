function addTask(event) {
  // --------- TO HELP YOU --------------------------
  // 1- Prevent default to avoid to refresh the page
  // TODO
  event.preventDefault();
  // 2- Get the form inputs  information
  // TODO
  let getName=document.getElementById('taskId');
  let getDate =document.getElementById('date');
  let getColor =document.getElementById('color');
  // 3- Check if task text, color, date are defined :
  //    If not defined, display a warnning        "You must fill all inputs"
  // TODO
  if (getName.value==='' || getDate.value ===''){
    alert('You must fill all inputs')
    return false;
  }else{
  // 4 - If defined:
  // 4-1- Create a span for the taks name
  //    - class = "task-name"
  let new_Name =document.createElement('span');
  new_Name.classList.add('task-name');
  new_Name.textContent =getName.value;
  
  // TODO
  // 4-2- Create a span for the taks date
  //    - class = "task-date"
  let new_Date =document.createElement('span');
  new_Date.classList.add('task-date');
  new_Date.textContent =getDate.value;

  // TODO
  // 4-3- Create a p containing the 2 spans
  // TODO
  let new_P =document.createElement('p');
  new_P.appendChild(new_Name);
  new_P.appendChild(new_Date);
  

  // 4-4- the P background color is the selected color - the text is back
  // TODO
  let result =document.querySelector('.dashboard');
  result.appendChild(new_P);
  result.style.background =getColor.value;
  return true;
}
  
  
}


// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);
