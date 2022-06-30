import { CorEnum } from "./enums/CorEnum";
import { IAutor } from "./IAutor";
import { IImagem } from "./IImagem";

export interface IAnuncio {
  Id: string;
  IdAutor: string;
  Autor: IAutor;
  Titulo: string;
  Descricao: string;
  Capa: string;
  DataNasc: Date;
  CorPredominante: CorEnum;
  Vacinado: boolean;
  Castrado: boolean;
  Imagens: IImagem[];
  Interessados: string[]; //IdsUsuarios
}
