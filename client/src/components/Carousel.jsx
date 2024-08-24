import { useQuery } from "@tanstack/react-query";
import { fetchTopRecipes } from "../util/api";
import { useContext } from "react";
import ViewContext from "../context/ViewContext";

const Carousel = () => {
  const { data } = useQuery({
    queryKey: ["allrecipes"],
    queryFn: fetchTopRecipes,
  });

  const { setView } = useContext(ViewContext);

  const handleClick = (id) => {
    setView(id);
  };

  return (
    <div className="carousel-container my-8">
      <h2 className="text-2xl font-semibold mb-4">Popular Recipes</h2>
      <div className="carousel flex overflow-x-scroll space-x-4">
        {data?.map((recipe) => (
          <div
            key={recipe.id}
            className="carousel-item flex-shrink-0 w-64 cursor-pointer"
            onClick={() => {
              handleClick(recipe.id);
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 text-lg">{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
