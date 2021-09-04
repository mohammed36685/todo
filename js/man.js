let addBtn = document.getElementById('addBtn')
let taskInput = document.getElementById('taskInput')
let noTasks = document.getElementById('noTasks')
let allTasks = document.getElementById('allTasks')
let valid = document.getElementById('valid')
let closeValidationMessage=document.querySelector('#valid .close')
let modal = document.getElementById ('modal');
let modalBtn = document.getElementById('modalBtn');
let showModal= ()=>{

modal.classList.toggle('block');
}
modalBtn.addEventListener('click', showModal)

let closeValidationMessageFunc = ( )=> {
valid.classList.toggle('none')

}
let noTasksShow=()=>{
if(allTasks.childElementCount > 0 ){
noTasks.classList.add('none')
}else{

    noTasks.classList.remove('none');

}

}
let addTask = () => {
  let taskData = taskInput.value
  if (
    taskData.trim() == '' ||
    taskInput.value.length < 3 ||
    taskInput.value.length > 20
  ) {
    closeValidationMessageFunc ();
  } else {
    noTasks.classList.add('none');
    allTasks.innerHTML += `
        <div class= " alert alert-info">
${taskData} <i class="  delete fas fa-trash-alt"></i>
    </div>`;
 taskInput.value ="";
 showModal();
}
allTasks.addEventListener('click' , function(e){
if(e.target.classList.contains('task')){
e.target.classList.add(check);
}

})
}

addBtn.addEventListener('click', addTask);
closeValidationMessage.addEventListener('click', closeValidationMessageFunc );



document.addEventListener('click' , (e) => {

    if(e.target.classList.contains('delete')) {
e.target.parentElement.remove();
}
noTasksShow();

})
