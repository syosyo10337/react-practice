import { useState, useEffect } from "react";
import { 
  Center, 
  Box, 
  CheckboxGroup, 
  Text,
  Input,
  Button,
  Flex, 
} from "@chakra-ui/react";
import axios from "axios";

import Task from "./components/Task";
import './App.css';

const END_POINT = "http://localhost:3001/tasks"
function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  console.log(tasks)

  const fetch = async () => {
    const res = await axios.get(END_POINT
    );
    setTasks(res.data);
  };
  
  const createTask = async () => {
    await axios.post(END_POINT, {name: name, is_done: false});
    setName("");
    fetch();
  }

  const deleteTask = async (id) => {
    await axios.delete(`${END_POINT}/${id}`);
    setName("");
    fetch();
  }
  
  useEffect(() => {
    fetch();
  },[]);

  const toggleIsDone = async (index, id) => {
    const isDone = tasks[index].is_done;
    await axios.put(`${END_POINT}/${id}`, {
      is_done: !isDone,
    });
    fetch();
  };

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" as="b">
              タスク一覧
            </Text>
          </Box>
          <Flex mb="24px">
            <Input
              placeholder="追加するタスクを入力"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Box ml="16px">
              <Button colorScheme="teal" onClick={createTask}>
                タスクを作成
              </Button>
            </Box>
          </Flex>
          <CheckboxGroup>
            {tasks.map((task, index)=> {
              return (
                <Task
                key={task.name}
                id={task.id}
                index={index}
                name={task.name}
                isDone={task.is_done}
                toggleIsDone={toggleIsDone}
                deleteTask={deleteTask}
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
