
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
        ${ url && `<img src ="${url}" alt ="card-img-top" class="card-img-top"/>`
        }
        <h4 class="card-title"> ${title}</h4>
        <p class="card-text">${descritpion}></p>
        <div class="tags d-flex flex-wrap">
        <span class="badge bg-primary m-1">${type}</span> 
        </div>
    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
    url && `<img 
    src = "${url}" 
    alt ="card-img-top" 
    class="img-fluid"/>`
}
<strong>Created on ${date.toDateString()}</strong>
<h2>${title}</h2>
<p>${description}</p>
 </div>
 `

}
    
