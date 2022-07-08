import { Route, Routes } from "react-router-dom";
import { DetalhesAnuncio } from "../pages/home/DetalhesAnuncio";
import { Home } from "../pages/home/Home";
import { AddMeuAnuncio } from "../pages/meus-anuncios/AddMeuAnuncio";
import { DeleteMeuAnuncio } from "../pages/meus-anuncios/DeleteMeuAnuncio";
import { EditMeuAnuncio } from "../pages/meus-anuncios/EditMeuAnuncio";
import { MeusAnuncios } from "../pages/meus-anuncios/MeusAnuncios";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meus-anuncios" element={<MeusAnuncios />} />
      <Route path="/adicionar/meu-anuncio" element={<AddMeuAnuncio />} />
      <Route path="/editar/meu-anuncio/:Id" element={<EditMeuAnuncio />} />
      <Route path="/deletar/meu-anuncio/:Id" element={<DeleteMeuAnuncio />} />
      <Route path="/chat" element={<h1>Chat</h1>} />
      <Route path="/notificacao" element={<h1>Notificacao</h1>} />
      <Route path="/detalhes/:Id" element={<DetalhesAnuncio />} />
    </Routes>
  );
};
