const state = {
    taskList: []
}

const taskContents = document.querySelector(".task_contents");
const taskModal = document.querySelector(".task__modal_body");
//console.log(task__modal_body)

const htmlTaskContent = ({id, url, title, description, type}) => `
<div class="col-md-6 col-lg-4 mt-3 id=${id} key=${id}">
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-primary" name=${id}>
            <i class="fa-solid fa-pencil"></i>
        </button>
        <button type="button" class="btn btn-outline-danger" name=${id}>
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    <div class="cardbody">
        ${ url ? `<img 
            src ="${url}" 
            alt ="card-img-top" 
            class="card-img-top"/>`
            :`<img 
            src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScujirQqIFjN5GuM1565_-DIX6OyU_96HzNBl_BAX8GL0JzMs8&s" 
            alt ="card-img-top" 
            class="card-img-top"/>`
        }
        <h4 class="card-title"> ${title}</h4>
        <p class="card-text">${descritpion}></p>
        <div class="tags d-flex flex-wrap">
        <span class="badge bg-primary m-1">${type}</span> 
        </div>
    </div>
    <div class="card-footer">
        <button type="button" 
        class="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#showTask">
        Open Task
        </button>
     </div>
  </div>
</div>
`
const htmlModalContent = ({id, url, title, description}) => {
 const date = new Date();
 return `
 <div id=${id}>
 ${
    url ? `<img 
    src = "${url}" 
    alt ="card-img-top" 
    class="img-fluid"/>`
    :`<img 
    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScujirQqIFjN5GuM1565_-DIX6OyU_96HzNBl_BAX8GL0JzMs8&s" 
    alt ="card-img-top" 
    class="img-fluid"/>`
}
<strong>Created on ${date.toDateString()}</strong>
<h2>${title}</h2>
<p>${description}</p>
 </div>
 `

}
const updateLocalStorage = () => {
    localStorage.setItem('task', JSON.stringify({
        tasks: state.taskList
    }))
}

const loadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.task);

    if(localStorageCopy) state.taskList = localStorageCopy.tasks;

    state.taskList.map((cardData)=> {
        taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardData))
    })
}


const handleSbmitBtn = (event) => {
    const id = `${Date.now()}`;
    const input = {
        url: document.getElementById('ImageURL').value,
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDescription').value,
        type: document.getElementById('tags').value,
    }

    if(input.title == "" || input.description == "" || input.type ==""){
        return alert("Pls fill out all the neceesary fields")
    }

    taskContents.insertAdjacentHTML("beforeend", htmlTaskContent({...input, id})
)

state.taskList.push({...input, id})
updateLocalStorage()

}



const openTask = (e) => {
    if(!e) e = window.event;

    const getTask = state.taskList.find(({id})=> id === e.target.id)
    taskModal.innerHTML = htmlModalContent(getTask)
}