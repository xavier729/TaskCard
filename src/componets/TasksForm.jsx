import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export function TasksForm() {
  const [title, setTitle] = useState("");
  const [modulo, setModulo] = useState("");
  const {createTasks} = useContext(TaskContext);
  
  const handleChange = (e) => {
    e.preventDefault();

    createTasks({
      title,
      modulo,
    });
    setModulo("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
     <form onSubmit={handleChange} className="bg-slate-800 p-10 mb-4">
     <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input placeholder="tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        autoFocus
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      
      <textarea
        placeholder="modulo"
        onChange={(e) => {
          setModulo(e.target.value);
        }}
        value={modulo}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-700 px-3 py-1 text-white hover:bg-indigo-400">Guardar</button>
    </form>
    </div>
  );
}
