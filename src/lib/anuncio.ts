import { gql } from "@apollo/client";

export const GET_ANUNCIOS_QUERY = gql`
  query {
    anuncios {
      id
      tituloAnuncio
      base64Capa
      altImgCapa
    }
  }
`;

export const CREATE_ANUNCIO_MUTATION = gql`
  mutation CreateAnuncio(
    $tituloAnuncio: String!
    $descricaoAnuncio: String!
    $dataNascimento: String!
    $castrado: Boolean!
    $vacinado: Boolean!
    $base64Capa: String!
    $altImgCapa: String!
  ) {
    createAnuncio(
      data: {
        tituloAnuncio: $tituloAnuncio
        descricaoAnuncio: $descricaoAnuncio
        dataNascimento: $dataNascimento
        castrado: $castrado
        vacinado: $vacinado
        base64Capa: $base64Capa
        altImgCapa: $altImgCapa
      }
    ) {
      id
    }
  }
`;

export const PUBLISH_ANUNCIO_MUTATION = gql`
  mutation PublishAnuncio($id: ID!) {
    publishAnuncio(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;
