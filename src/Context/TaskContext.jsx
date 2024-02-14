import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvide(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTasks(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        modulo: task.modulo,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => taskId !== task.id));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
