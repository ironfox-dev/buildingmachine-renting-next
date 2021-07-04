import React, { ReactElement, useState } from 'react';
import { Button, Grid, MenuItem, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { DocumentCategoryModel } from '~/graphql/graphql';
import { FileUploadProps } from '../interfaces';
import FileDragAndDrop from './fileDragAndDrop';
import useStyles from './documentUpload.styles';

const DocumentUpload = ({
  handleFileUploadBtnClick,
  isFileUploadBtnDisabled,
  handleDocumentCategoryChange,
  handleFileUpdate,
  selectedCategory,
  categories,
}: FileUploadProps): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Grid container justify="space-between" alignItems="center" className={classes.documentUploadDropdownWrap}>
        <Select
          className={classes.documentUploadDropdown}
          labelId="select-label"
          value={selectedCategory}
          onChange={handleDocumentCategoryChange}
          autoWidth
          displayEmpty
        >
          <MenuItem value={''} disabled>
            {t('category')}
          </MenuItem>

          {Object.values(categories).map((category: DocumentCategoryModel) => {
            const { key, id } = category;

            return (
              <MenuItem key={id} value={id}>
                {t(`document:${key}`)}
              </MenuItem>
            );
          })}
        </Select>

        {handleFileUploadBtnClick && (
          <Button
            className={classes.documentUploadBtn}
            disabled={isFileUploadBtnDisabled}
            onClick={handleFileUploadBtnClick}
            variant="contained"
            color="primary"
          >
            {t('save')}
          </Button>
        )}
      </Grid>

      <FileDragAndDrop handleOnDrop={handleFileUpdate} />
    </>
  )
}

export default DocumentUpload;