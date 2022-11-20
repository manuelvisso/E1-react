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
    task: "aaa",
  });

  const inputRef = useRef();

  const { task } = form;

  const handleInputChange = ({ target }) => {
    const { task } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onClick = () => {
    console.log(inputRef);
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
          ref={inputRef}
        />

        <Button onClick={onClick}>Agregar Tarea</Button>
        <Button>Eliminar Lista</Button>
      </FormControl>
    </>
  );
};
