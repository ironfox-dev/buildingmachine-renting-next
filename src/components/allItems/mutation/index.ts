import axios from 'axios';

import { getCookie } from '~/utils/cookie';
import { DocumentUploadTypes } from '~/shared/enums';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}graphql`;

const createDocumentProductMutation = (variables) => ({
  query: `mutation ($file: Upload!, $documentProduct: DocumentProductCreateDto!) {
    createDocumentProduct(file: $file, documentProduct: $documentProduct) {
      id
    }
  }`,
  variables: {
    documentProduct: {
      documentCategory: variables.documentCategory,
      product: variables.relatedEntityId,
      user: variables.user,
    },
  },
});

const createDocumentProductModelMutation = (variables) => ({
  query: `mutation ($file: Upload!, $documentProductModel: DocumentProductModelCreateDto!) {
    createDocumentProductModel(file: $file, documentProductModel: $documentProductModel) {
      id
    }
  }`,
  variables: {
    documentProductModel: {
      documentCategoryId: variables.documentCategory,
      productModelId: variables.relatedEntityId || '',
      userId: variables.user,
    },
  },
});

export const uploadFileRequest = async (type: DocumentUploadTypes, variables) => {
  let manualMutation;

  if (type === DocumentUploadTypes.Product) {
    manualMutation = createDocumentProductMutation(variables);
  } else if (type === DocumentUploadTypes.ProductModel) {
    manualMutation = createDocumentProductModelMutation(variables);
  }

  const mappedFiles = {
    0: ['variables.file'],
  };

  const formDataObj = new FormData();
  formDataObj.append('operations', JSON.stringify(manualMutation));
  formDataObj.append('map', JSON.stringify(mappedFiles));
  formDataObj.append('0', variables.file, variables.name);

  const token = getCookie('flexcavoToken');

  return await axios.post(API_BASE_URL, formDataObj, {
    headers: {
      contentType: 'multipart/form-data',
      authorization: token ? `Bearer ${token}` : '',
    },
  });
};
