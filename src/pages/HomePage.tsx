import React from "react";
import Button from "../components/atoms/Button";
import ThemeToggle from "../components/atoms/ThemeToggle";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <ThemeToggle />
      <Button>Click me</Button>
    </div>
  );
};

export default HomePage;
