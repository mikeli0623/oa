export const fetchAllRecipes = async () => {
  const res = await fetch("http://127.0.0.1:8000/recipes/");
  return res.json();
};

export const fetchTopRecipes = async () => {
  const res = await fetch("http://127.0.0.1:8000/recipes/?top=true");
  return res.json();
};

export const fetchRecipe = async (id) => {
  const res = await fetch(`http://127.0.0.1:8000/recipes/${id}`);
  return res.json();
};
