import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import ViewContext from "../context/ViewContext";
import { fetchRecipe } from "../util/api";
import Button from "./Button";

function RecipeDetail() {
  const { view, setView } = useContext(ViewContext);

  const { data, isLoading } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => fetchRecipe(view),
  });

  const handleBack = () => {
    setView("main");
  };

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No recipe found</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Button onClick={handleBack}>Back</Button>
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-700 mb-4">By {data.author}</p>
      <img src={data.image} alt={data.title} className="w-full h-auto mb-4" />
      <p className="mb-4">{data.description}</p>
      <p className="font-semibold">Likes: {data.likes}</p>
      <p className="text-gray-500">
        Created At: {new Date(data.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}

export default RecipeDetail;
