import { TaskList } from "./componets/TaskList";
import { TasksForm } from "./componets/TasksForm";

function App() {
  return (
    <main className="bg-zinc-800 h-screen">
      <div className="container mx-auto p-10">
      <TasksForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
