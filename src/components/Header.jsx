import { useState } from "react";
const Header = (props) => {
    const [newTodo, setNewTodo] = useState('')

    const handleAddTodo = () => {
        props.addTodo(newTodo);
        setNewTodo('');
    };
    return (
        <header>
            <h2>Todos : {props.count}</h2>
            <div className="add">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="button" onClick={() => handleAddTodo()}><i class="bi bi-plus-lg"></i></button>
            </div>
        </header>
    );
}

export default Header;