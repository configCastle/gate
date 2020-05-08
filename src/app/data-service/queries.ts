import gql from 'graphql-tag';

export const getServiceByIdQuery = gql`query service($id: Int!) {
  service(id: $id) {
    id
    name
    data
  }
}`;

export const getServicesQuery = gql`{
  services {
    id
    name
    data
  }
}`;

export const getFileByIdQuery = gql`query service($id: Int!) {
  file(id: $id) {
    id
    name
    configType
    data
  }
}`;

export const getFilesQuery = gql`{
  files {
    id
    name
    configType
    data
  }
}`;

export const createFileMutation = gql`
  mutation createFile($file: CreateFile!) {
    createFile(input: $file) {
      id,
      name,
      configType,
      data
    }
  }
`;

export const updateFileMutation = gql`
  mutation updateFile($file: UpdateFile!) {
    updateFile(input: $file) {
      id,
      name,
      configType,
      data
    }
  }
`;

export const deleteFileMutation = gql`
  mutation deleteFile($id: Int!) {
    deleteFile(id: $id) {
      id,
      name,
      data,
      configType
    }
  }
`;