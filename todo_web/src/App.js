import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";
import { useState } from "react";

import logo from './logo.svg';
import './App.css';
import Task from "./components/Task";


const initialTasks = [
  { 
    id: 1, 
    content: "買い物", 
    isDone: false,
  },
  { 
    id: 2, 
    content: "ランニング", 
    isDone: false,
  },
  { 
    id: 3, 
    content: "プログラミング学習", 
    isDone: false,
  },
]
function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleIsDone = (index) => {
    const tasksCopy = [ ...tasks];
    const newIsDone = tasksCopy[index].isDone;
    tasksCopy[index].isDone = !newIsDone;
    setTasks(tasksCopy);

  }

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" as="b">
              タスク一覧
            </Text>
          </Box>
          <CheckboxGroup>
            {tasks.map((task, index)=> {
              return (
                <Task 
                key={task.id}
                index={index}
                name={task.content}
                isDone={task.isDone}
                toggleIsDone={toggleIsDone}
                />
                )
              })}
          </CheckboxGroup>
        </Box>
      </Center>
    </Box>
  );
}

export default App;
