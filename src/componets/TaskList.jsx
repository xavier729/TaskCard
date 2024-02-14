import CardTask from "./CardTask";
import {useContext} from "react";
import {TaskContext} from "../Context/TaskContext"


export function TaskList() {
 const {tasks} = useContext(TaskContext)
 
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">no hay datos</h1>;
  } else{

    return (
      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <CardTask task={task} key={task.id}  />
        ))}
      </div>
    );
  }

  
  
}



export default TaskList;
