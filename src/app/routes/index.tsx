import { Route, Routes } from "react-router-dom";
import { App } from "../App";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};
