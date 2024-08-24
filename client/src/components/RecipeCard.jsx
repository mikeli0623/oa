import PropTypes from "prop-types";
import { useContext } from "react";
import ViewContext from "../context/ViewContext";

const RecipeCard = ({ recipe }) => {
  const { setView } = useContext(ViewContext);

  const handleClick = (id) => {
    setView(id);
  };

  return (
    <div
      className="border rounded p-4 shadow cursor-pointer"
      onClick={() => {
        handleClick(recipe.id);
      }}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-32 object-cover rounded"
      />
      <h3 className="mt-2 text-xl font-bold">{recipe.title}</h3>
      <p className="text-gray-600">By {recipe.author}</p>
      <p className="mt-2 text-sm text-gray-700">{recipe.description}</p>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
