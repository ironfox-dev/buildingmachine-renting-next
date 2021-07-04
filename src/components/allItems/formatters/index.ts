import { BlockDataModel, CreateProductDataModel } from '../interfaces';

export const formatFiles = (data: BlockDataModel): CreateProductDataModel[] => {
  return data.file.map((fileData: File) => ({
    file: fileData,
    name: fileData.name,
    documentCategory: data.documentCategory,
    relatedEntityId: data.relatedEntityId,
    user: data.user,
  }));
};
