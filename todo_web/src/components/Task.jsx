import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Task = ({ id, index, name, isDone, toggleIsDone, deleteTask}) => {
  return (
    <Flex mb="16px" justifyContent="space-between" alignItems="center">
      <Checkbox 
        colorScheme="blue" 
        size="lg" 
        isChecked={isDone}
        onChange={() => toggleIsDone(index, id)}>
        <Text>{name}</Text>
      </Checkbox>
      <CloseIcon onClick={() => deleteTask(id)} />
    </Flex>

  )
}


export default Task;