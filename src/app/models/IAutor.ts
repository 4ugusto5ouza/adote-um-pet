import { IAnuncio } from "./IAnuncio";

export interface IAutor {
  Id: string;
  Nome: string;
  Email: string;
  UrlFacebook: string;
  Telefone: string;
  Avatar: string;
  Anuncios: IAnuncio[];
}
