import Header from "./components/Header";
import Carousel from "./components/Carousel";
import RecipeList from "./components/RecipeList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ViewProvider } from "./context/ViewContext";
import RecipeDetail from "./components/RecipeDetail";

const queryClient = new QueryClient();

function App() {
  const [view, setView] = useState("main");

  const viewValue = { view, setView };

  return (
    <QueryClientProvider client={queryClient}>
      <ViewProvider value={viewValue}>
        <div className="flex flex-col min-h-screen">
          <Header />

          {view === "main" ? (
            <>
              <section className="container mx-auto px-4 my-8">
                <Carousel />
              </section>

              <section className="container mx-auto px-4 my-8 flex-grow">
                <RecipeList />
              </section>
            </>
          ) : (
            <section className="flex-grow">
              <RecipeDetail />
            </section>
          )}

          <footer className="bg-gray-800 text-white p-4 text-center">
            &copy; {new Date().getFullYear()} Food Blog. All rights reserved.
          </footer>
        </div>
      </ViewProvider>
    </QueryClientProvider>
  );
}

export default App;
