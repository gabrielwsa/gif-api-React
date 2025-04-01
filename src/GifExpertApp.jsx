import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const handleAdd = (newCategory) => {   

    if (categories.map(category => category.toUpperCase()).includes(newCategory.toUpperCase())) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory = { (value) => handleAdd(value)} />

      <button hidden onClick={handleAdd}>Agregar</button>
        {
          categories.map((category) => ( <GifGrid key = {category} category = {category} />))
        }

    </>
  );
};