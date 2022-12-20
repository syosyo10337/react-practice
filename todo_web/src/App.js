import logo from './logo.svg';
import './App.css';
import Task from "./components/Task";

const tasks = [
  { id: 1, content: "買い物"},
  { id: 2, content: "ランニング"},
  { id: 3, content: "プログラミング学習"},
]
function App() {
  return (
    <> 
      <h1>タスク一覧</h1>
      <div>
        {tasks.map(task => {
          return (
            <div key={task.id}>
              <Task name={task.content}/>     
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
