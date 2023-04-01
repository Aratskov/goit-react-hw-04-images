import { useState } from "react";
import { Input, Form, BtnSearch } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");

    if (value.trim() === "") return;
    onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="Search images and photos"
      />

      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
};
