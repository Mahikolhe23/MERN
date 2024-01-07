import React, { useState } from "react";

export function Todos() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await fetch("http://localhost:3000/todos", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            setTodos(json.todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };
    const completed = async (_id, title, description) => {
        const response = await fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                _id: _id,
                title: title,
                description: description
            }),
            headers: {
                "content-type": "application/json"
            }
        })
    }
    const tableCellStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    };

    const buttonStyle = {
        padding: 10,
        margin: 10,
    }
    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={tableCellStyle}>Id</th>
                        <th style={tableCellStyle}>Title</th>
                        <th style={tableCellStyle}>Description</th>
                        <th style={tableCellStyle}>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td style={tableCellStyle}>{todo._id}</td>
                            <td style={tableCellStyle}>{todo.title}</td>
                            <td style={tableCellStyle}>{todo.description}</td>
                            <td><button style={buttonStyle} onClick={() => completed(todo._id, todo.title, todo.description)}>Completed</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                style={buttonStyle}
                onClick={fetchTodos}>All ToDo's
            </button>
        </div>
    );
}
