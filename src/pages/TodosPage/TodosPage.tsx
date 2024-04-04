import { useEffect, useReducer, useRef } from "react";
import todoReducer from "../../reducers/todoReducer";

const TodosPage: React.FC = () => {
    const todoItemStyle = {
        width: "82%",
        display: "inline-block",
    };

    const defaultTodoList = [
        {
            id: '1',
            task: 'Default Task',
            isCompleted: false,
        },
        {
            id: '2',
            task: 'Task 2',
            isCompleted: true,
        }
    ]

    useEffect(() => {
        todoDispatch({
            type: "GET_TODOS",
            payload: defaultTodoList,
          });
    }, []);

    const todoInput = useRef<HTMLInputElement>(null);
    const [todoState, todoDispatch] = useReducer(todoReducer, defaultTodoList);

    const handleAddTask = () => {
        if(todoInput.current != null){
            todoDispatch({
                type: "ADD_TODO",
                payload: {
                    id: (new Date).toISOString(),
                    task: todoInput.current.value,
                    isCompleted: false,
                }
            })
        }
    };

    return (
        <div className="row">
            <h1>Todos</h1>

            <div className="col-md-6 offset-md-3">
                <h4>Listing Todos</h4>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Todo"
                        ref={todoInput}
                    />
                    <button className="btn btn-primary" type="button" onClick={handleAddTask}>
                        ADD
                    </button>
                </div>

                <ul className="list-group">
                    {todoState &&
                        todoState.map((todo) => {
                            return (
                                <li className="list-group-item" key={todo.id}>
                                    <span style={todoItemStyle}>{todo.task}</span>
                                    <span className="text-end">
                                        <button className="btn btn-sm btn-dark">Edit</button>{" "}
                                        <button className="btn btn-sm btn-dark">Delete</button>
                                    </span>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default TodosPage;
