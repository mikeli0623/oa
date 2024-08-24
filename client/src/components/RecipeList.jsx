import RecipeCard from "./RecipeCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "../util/api";

const RecipeList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchAllRecipes,
  });

  if (isLoading) {
    return <div className="text-center">Loading recipes...</div>;
  }

  return (
    <div className="recipe-list my-8">
      <h2 className="text-2xl font-semibold mb-4">All Popular Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
