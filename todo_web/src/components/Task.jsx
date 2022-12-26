import { Checkbox, Box, Text } from "@chakra-ui/react";

const Task = ({ index, name, isDone, toggleIsDone}) => {
  return (
    <Box mb="16px">
      <Checkbox 
      colorScheme="blue" 
      size="lg" 
      isChecked={isDone}
      onChange={() => toggleIsDone(index)}>
        <Text>{name}</Text>
      </Checkbox>
    </Box>

  )
}


export default Task;