import "../components/Todo.css"


function Todo({title, para}) {
    console.log(title)

  function deleteTodo() {
    console.log('ledite')
  }



    return (
        <div className="todo">
        <p>{ title}</p>
        <p>{para}</p>
        <span></span>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    )
};


export default Todo