import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
