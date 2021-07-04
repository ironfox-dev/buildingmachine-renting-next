import React, { useState, useEffect, useCallback } from 'react';
import { keyBy, isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import MaterialTable from 'material-table';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

import {
  useDocumentProductsLazyQuery,
  useDocumentCategoryQuery,
  useDeleteDocumentProductMutation,
  useUpdateDocumentMutation
} from '~/graphql/graphql';
import useStyles from './documentList.styles';
import { DocumentUpload } from '~/shared/index';
import { TableIcons } from '~/components/icon/Table';
import { formatFiles } from '../formatters';
import { uploadFileRequest } from '../mutation';
import { Document } from '../interfaces';
import { DocumentUploadTypes } from '~/shared/enums';

const DocumentList = (): React.ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();
  const [formedDocuments, setDocuments] = useState([]);
  const [categories, setCategories] = useState({});
  const [getDocuments, { data: documents, refetch: documentsRefetch }] = useDocumentProductsLazyQuery();
  const { data: categoriesData } = useDocumentCategoryQuery();
  const [deleteDocument] = useDeleteDocumentProductMutation();
  const [updateDocument] = useUpdateDocumentMutation();
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState('');
  const [userId] = useState(localStorage.getItem('userId'));

  const { id: currentProductId } = router.query;

  const queryToGetDocuments = {
    query: { productId: currentProductId as string, userId },
  };

  useEffect(() => {
    if (documents && categoriesData) {
      const loadedDocuments = documents.documentProducts.map(documentProduct => ({
        ...documentProduct,
        documentCategory: documentProduct.documentCategory.key,
        date: new Date(+documentProduct.uploadedAt).toDateString(),
      }));

      setDocuments(loadedDocuments);
    }
  }, [documents, categoriesData]);

  useEffect(() => {
    if (categoriesData) {
      setCategories(keyBy(categoriesData.documentCategory, 'id'));
    }
  }, [categoriesData]);

  useEffect(() => {
    (() => {
      if (currentProductId && getDocuments && userId) {
        getDocuments({
          variables: queryToGetDocuments,
        });
      }
    })();
  }, [currentProductId, userId]);

  const handleUploadFileUpdate = (data) => {
    setFiles((prevFiles) => [...prevFiles, ...data]);
  };

  const onClickUpdatesSave = useCallback(
    async (changes) => {
      if (isEmpty(changes)) {
        return;
      }

      await Promise.all(
        Object.values(changes).map(({ newData }) =>
          updateDocument({
            variables: {
              id: newData.id,
              documentProduct: { name: newData.name }
            }
          })
        )
      );

      await documentsRefetch(queryToGetDocuments);
    },
    [documentsRefetch]
  );

  const handleOnDeleteItem = async (productId, documentId) => {
    await deleteDocument({ variables: { productId, documentId } });
    await documentsRefetch(queryToGetDocuments);
  };

  const handleFileUploadClick = async () => {
    const formattedDocuments = formatFiles({
      file: files,
      relatedEntityId: currentProductId as string,
      user: userId,
      documentCategory: category,
    });

    try {
      await Promise.all(formattedDocuments.map(document => uploadFileRequest(DocumentUploadTypes.Product, document)));
      await documentsRefetch(queryToGetDocuments);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  return (
    <Grid container spacing={2}>
      <MaterialTable
        title={t('fleet:documents')}
        icons={TableIcons}
        data={formedDocuments}
        columns={[
          { title: t('fleet:name_document'), field: 'name', editable: 'always' },
          { title: t('fleet:category'), field: 'documentCategory', editable: 'never' },
          { title: t('fleet:name_creator'), field: 'nameCreator' },
          { title: t('fleet:upload_date'), field: 'date', editable: 'never' },
          {
            title: '',
            field: 'previewFile',
            editable: 'never',
            render: (rowData: Document) => (
              <Button
                className={classes.previewFile}
                onClick={() => {
                  // @TODO "FLEX-129" add support for path and S3
                  window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}document/${rowData.id}`, '_blank');
                }}
              >
                {t('fleet:look_at')}
              </Button>
            ),
            width: 160,
          },
          {
            title: '',
            field: 'deleteFile',
            editable: 'never',
            render: (rowData) => (
              <IconButton onClick={() => handleOnDeleteItem(currentProductId, rowData.id)}>
                <DeleteOutlineIcon />
              </IconButton>
            ),
            width: 25,
            grouping: false,
            sorting: false,
            filtering: false,
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          search: false,
          paging: false,
        }}
        editable={{
          onBulkUpdate: onClickUpdatesSave,
        }}
        style={{
          width: '100%',
        }}
      />

      <Grid className={classes.fileDropSection} item sm={4} xs={12}>
        <h2>Upload new files</h2>

        <DocumentUpload
          handleFileUploadBtnClick={handleFileUploadClick}
          isFileUploadBtnDisabled={!files.length || !category}
          handleDocumentCategoryChange={handleCategoryChange}
          handleFileUpdate={handleUploadFileUpdate}
          selectedCategory={category}
          categories={categories}
        />
      </Grid>
    </Grid>
  );
};

export default DocumentList;
