import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <button
      className="bg-transparent hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
