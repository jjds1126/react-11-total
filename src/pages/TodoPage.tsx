import {useState} from "react";

function TodoPage() {
    const [todo, setTodo] = useState('')
    type Todo = {
        id: number
        text: string
        completed: boolean
    }
    const [list, setList] = useState<Todo[]>([])
    const addTodo = () => {
        if (todo.trim() === '') return

        setList([...list, {
            id: Date.now(),
            text: todo,
            completed: false,
        }])
        setTodo('')
    }
    const deleteTodo = (index: number) => {
        setList(list.filter((_, i) => i !== index))
    }
    const toggleTodo = (id: number) => {
        setList(
            list.map((item) =>
                item.id === id
                ? {...item, completed: !item.completed }
                    : item
            )
        )
    }
    return(
        <div>
            <h1>Todo List</h1>
            <p>할 일을 관리하는 페이지입니다</p>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            {/*-------------------  추가   -------------------*/}
            <button onClick={addTodo}>
                추가
            </button>
            {/*-----------------  입력창        ---------------*/}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <input
                        type="checkbox"
                        checked={item.completed}
                        onClick={() => toggleTodo(item.id)}
                        />
                        <span
                            style={{
                                textDecoration: item.completed ? 'line-through' : 'none',
                                opacity: item.completed ? 0.5 : 1,
                            }}
                            >
                        {item.text}
                            </span>
                    <button onClick={() => deleteTodo(index)}>
                        삭제
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoPage