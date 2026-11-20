import Character from "../components/Character/Character";
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
        <div
            style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                minHeight: "90vh",
                padding: "0 20px",
                boxSizing: "border-box",
            }}
        >
            {/*-------------------------------------------*/}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "320px",
                    minWidth: "320px",
                    minHeight: "90vh",
                    marginTop: "20px",
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    padding: "10px",
                    borderRadius: "16px",
                    boxShadow: "0 4px 10px #080808",
                }}
            >
            <h1 style={{
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
                margin: "0",
                boxSizing: "border-box",
                padding: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px" ,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
            }}>
                Todo List</h1>

                {/*---------------------------------------------------------*/}
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    width: "100%",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}
                >
            <input

                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="오늘 할 일을 입력하세요"
                style={{
                    flex: 1,
                    padding: "8px 12px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    fontSize: "15px",
                    height: "40px",
                    boxSizing: "border-box",
                    outline: "none",
                }}
            />

            <button onClick={addTodo}
            style={{
                padding: "8px 16px",
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
            }}
            >
                추가
            </button>
            </div>
            <ul
                style={{
                    width: "100%",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                {list.map((item, index) => (
                    <li key={index}
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        width: "300%",
                        maxWidth: "300px",
                        padding: "15px",
                        boxSizing: "border-box",
                        marginBottom: "10px",
                        marginRight: "auto",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e7ed",
                        borderRadius: "12px",
                        boxShadow: "0 2px 5px #808080",
                        listStyle: "none",
                    }}>
                        <input
                        type="checkbox"
                        checked={item.completed}
                        onClick={() => toggleTodo(item.id)}
                        />
                        <span
                            style={{
                                textDecoration: item.completed ? 'line-through' : 'none',
                                opacity: item.completed ? 0.5 : 1,
                                flex: 1,
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
            {/*---------------이미지 삽입할꺼---------*/}
            <div
                style={{
                    flex: 1,
                    minWidth: 0,
                    minHeight: "90vh",
                    marginTop: "20px",
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 10px #080808",
                    boxSizing: "border-box",
                }}
            >
                <Character />    {/* <= div 사이 이거넣어애보임 */}
            </div>
        </div>
    )
}

export default TodoPage