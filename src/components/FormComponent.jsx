import React, { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

export const FormComponent = () => {
  const [form, setForm] = useState({
    task: "",
  });

  const taskRef = useRef();

  const { task } = form;

  //   const task = taskRef.current.value;

  const handleInputChange = ({}) => {
    const { name } = taskRef.current.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onClick = () => {
    console.log(taskRef.current.value);
  };

  return (
    <>
      <FormControl>
        <FormLabel>Tarea</FormLabel>
        <Input
          type="text"
          value={task}
          name="task"
          onChange={handleInputChange}
          ref={taskRef}
        />

        <Button onClick={onClick}>Agregar Tarea</Button>
        <Button>Eliminar Lista</Button>
      </FormControl>
    </>
  );
};
