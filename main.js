

document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.lenght == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div id="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        
        <button class="delete">
        <i class="far fa-trash-all"></i>
        </button>
        </div>
        `
    }
};

const current_tasks = document.querySelectorAll(".delete");
for(const i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.removeChild();
    }
}