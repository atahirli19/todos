const users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')

let todos = users.find(user => user.name === currentUser).todos

function updateSite(){
    $('.todos').html('')

    for(let todo of todos){
        $('.todos').html($('.todos').html() + `<div class="todo">
        <div class="todo-content">
            <h2>${todo.title}</h2>
            <p>
                ${todo.text}
            </p>
        </div>
        <div class="options">
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Edit</button>
        </div>
    </div>`)
    }
    
}

updateSite()

    $('#addTodo').click(function(){
    $('.my-modal'). addClass('active')
    })
    $('#close').click (function(){
    $(' my-modal'). removeClass ('active')
    })
    $('#save-todo' ).click (function(){
    let newTodo ={
    id: Date.now(),
    title: $('input').val(),
    text: $('textarea').val()
    }
    todos.push(newTodo)
    users.find(user => user.name === currentUser).todos=todos
    localStorage.setItem('users',user)
    updateSite()
    $(' my-modal'). removeClass ('active')

})