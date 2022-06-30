import { ImgExtensaoEnum } from "./enums/ImgExtensaoEnum";

export interface IImagem {
  Id: string;
  Base64: string;
  extensao: ImgExtensaoEnum;
}
