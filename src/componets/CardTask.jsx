import {useContext} from "react";
import { TaskContext } from "../Context/TaskContext";

function CardTask({ task }){
  const {deleteTask} = useContext(TaskContext)

  
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <h3 className="text-gray-400 text-sm">{task.modulo}</h3>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-950" onClick={()=>{deleteTask(task.id)}}>borrar</button>
    </div>
    
  );
}

export default CardTask;
