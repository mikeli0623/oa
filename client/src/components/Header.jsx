const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <a href="/">
        <h1 className="text-xl font-bold">Food Blog</h1>
      </a>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Popular Recipes
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              All Recipes
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Submit Recipe
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
