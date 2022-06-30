import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meus-anuncios" element={<h1>Meus anuncios</h1>} />
      <Route path="/chat" element={<h1>Chat</h1>} />
      <Route path="/notificacao" element={<h1>Notificacao</h1>} />
    </Routes>
  );
};
