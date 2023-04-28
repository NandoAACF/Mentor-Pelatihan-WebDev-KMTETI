import Button from "@/components/Button";
import { useState } from "react";

export default function Beranda() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: Date.now(), title, desc }]);
        setTitle("");
        setDesc("");

        if (edit) {
            setEdit(false);
        }
    };

    const handleEdit = (id) => {
        setEdit(true);
        todos.map((todo) => {
            if (todo.id == id) {
                setTitle(todo.title);
                setDesc(todo.desc);
                setTodos(todos.filter((todo) => todo.id !== id));
            }
        });
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleDeleteAll = () => {
        setTodos([]);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center m-[30px]">
                <h1 className="text-[30px] text-center font-bold">Todos</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center gap-[14px] mt-[15px]">
                    <div className="flex flex-row items-center justify-center gap-[14px]">
                        <h4 className="text-[20px]">Judul</h4>
                        <input
                            type="text"
                            className="ring-[2px] ring-inset ring-cyan-500 p-[5px] rounded-lg ml-[33px]"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            value={title}
                            id="title"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[14px]">
                        <h4 className="text-[20px]">Deskripsi</h4>
                        <input
                            type="text"
                            className="ring-[2px] ring-inset ring-cyan-500 p-[5px] rounded-lg"
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                            value={desc}
                            id="desc"
                        />
                    </div>
                    <Button type={edit ? "Edit" : "Add"} className="mx-auto mt-[2px]" />
                </form>

                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex flex-row items-start justify-between w-[500px] bg-slate-300 rounded-xl py-[10px] px-[20px] mt-[15px]"
                    >
                        <div className="flex flex-col items-start justift-start">
                            <h1 className="text-[20px]">{todo.title}</h1>
                            <h1 className="text-[16px]">{todo.desc}</h1>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[10px]">
                            <Button type="Edit" onClick={() => handleEdit(todo.id)} />
                            <Button type="Delete" onClick={() => handleDelete(todo.id)} />
                        </div>
                    </div>
                ))}

                <Button type="Delete All" onClick={() => handleDeleteAll()} />
            </div>
        </>
    );
}
