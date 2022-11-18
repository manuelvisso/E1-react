import React, { useState } from "react";

export const FormComponent = () => {
  const [form, setForm] = useState({
    task: "",
  });

  const { task } = form;

  const handleInputChange = ({ target }) => {
    const { name } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <form action="submit">
        <label htmlFor="task">
          <input
            type="text"
            name="task"
            id="task-input"
            value={task}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Agregar tarea</button>
        <button type="submit">Eliminar lista</button>
      </form>
    </>
  );
};
