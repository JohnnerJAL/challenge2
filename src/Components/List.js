import React from "react";
import "./Styles/List.css";

function List() {

  
  //const form = document.getElementById('form'); /****/
  const input = document.getElementById('input');
  const todosUL = document.getElementById('todos');
  
  
  /*¡?¡?¡*/
  const todos = JSON.parse(localStorage.getItem('todos'));

  if(todos) {
    todos.forEach(todo => handleSubmit(todo))
  }
  
  
  
  // form.addEventListener('submit', (e) => {
    //     e.preventDefault()
    
    //     handleSubmit()
    // })



const [state, setstate] = React.useState("");

const handleChange = (e) => {
  console.log(e.target.value)

  setstate({
    [e.target.name] : e.target.value
  })

}


function handleSubmit(e) {

  e.preventDefault();

  let todoText = state.element;
  console.log(todoText)

  // if(e) {
  //   todoText = e.text
  // } different of null?????????


  if(todoText) {

      const listItem = document.createElement('li');
      console.log(listItem)
      // if(e && e.completed) {
      //   listItem.classList.add('completed')
      //   console.log("ok")
      // }

      if(state.element) {
        listItem.classList.add('completed')
        console.log("ok")
      }

      listItem.innerText = todoText;
/*
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed')
            updateLS()
        }) 

        listItem.addEventListener('contextmenu', (e) => {
            //e.preventDefault()

            listItem.remove()
            updateLS()
        }) 
*/
        todosUL.appendChild(listItem)

        //input.value = ''

        //updateLS()
    }


}

function updateLS() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(listItem => {
        todos.push({
            text: listItem.innerText,
            completed: listItem.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}




  return (
    <React.Fragment>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="element"
          onChange={handleChange}
          classlist="input" id="input"
          placeholder="Enter your todo"
          autoComplete="off"
        />
        <ul classlist="todos" id="todos"></ul>
      </form>
      <small>Left click to toggle completed. Right click to delete todo</small>
    </React.Fragment>
  )
}

export default List;