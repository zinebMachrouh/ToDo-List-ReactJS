const Todo = (props) => {
    const todoStyle = {
        opacity: props.todo.done ? 0.5 : 1,
    };
    return (  
        <div className="todo" style={todoStyle}>
            <div className="right">
                <input
                    type="checkbox"
                    checked={props.todo.done}
                    onChange={() => props.toggleTodo(props.todo.id)}
                />
                <span className={props.todo.done ? 'done' : ''}>{props.todo.text}</span>

            </div>
            <button onClick={() => props.removeTodo(props.todo.id)}><i class="bi bi-trash3"></i></button>
        </div>    );
}
 
export default Todo;