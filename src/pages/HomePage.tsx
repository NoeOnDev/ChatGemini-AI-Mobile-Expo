import React from "react";
import ThemeToggle from "../components/atoms/ThemeToggle";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;
