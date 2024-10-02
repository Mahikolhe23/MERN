import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return <div>
        <input type="text" placeholder="Title" style={{
            padding: 10,
            margin: 10
        }} onChange={function (e) {
            setTitle(e.target.value)
        }} /> <br />
        <input type="text" placeholder="description" style={{
            padding: 10,
            margin: 10
        }} onChange={function (e) {
            setDescription(e.target.value)
        }} /> <br />

        <button style={{
            padding: 10,
            margin: 10
        }}
            onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(
                    async function (res) {
                        const json = await res.json();
                    }
                )
            }}
        >Add a todo</button>
    </div>
}