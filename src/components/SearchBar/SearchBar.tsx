import toast, { Toaster } from "react-hot-toast";
import React from "react";
import { SearchBarProps } from "../../types/ui.types";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = (formData.get("inputValue") as string).trim();

    if (!inputValue) {
      toast.error("Введіть значення");
      return;
    }

    onSearch(inputValue);
    event.currentTarget.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="inputValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
