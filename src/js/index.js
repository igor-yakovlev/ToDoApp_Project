const doAddInput = document.querySelector('.todo__add-input');
const buttonInput = document.querySelector('#buttonAdd');
const outBlock = document.querySelector('.block');


function Task (input) {
    this.input = input;
    this.completed = false;
}

let tasks;

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

const updateLocal  = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}





const createTemplate = (task, index) => {
    return `
    <div class="todo__out-wrapper">
        <div class="todo__out-description">${task.input}</div>
        <button onclick='deleteTask(${index})' class="button button__del">Del</button>
    </div>
    `
    
}


completeHtml = () => {
    outBlock.innerHTML = '';
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            outBlock.innerHTML += createTemplate(item, index);
        });
    }
}

completeHtml();


buttonInput.addEventListener('click', () => {
    tasks.push(new Task(doAddInput.value));
    updateLocal();
    completeHtml();
    doAddInput.value = '';
});


const deleteTask = index => {
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        completeHtml();
    }, 500);
}

