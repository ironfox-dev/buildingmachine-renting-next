import React, { useCallback, useState, useEffect, useRef, ReactElement } from 'react';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import { isExtractableFile } from 'apollo-upload-client';
import { FileDragAndDropProps } from '../interfaces';
import Grid from '@material-ui/core/Grid';
import useStyles from './documentUpload.styles';

const FileDragAndDrop = ({
  name,
  type,
  handleOnDrop,
  className
}: FileDragAndDropProps): ReactElement => {
  const classes = useStyles();
  const dropAreaRef = useRef();
  const [fileName, setFileName] = useState<string>('');
  const [fileType, setFileType] = useState<string>('');

  const onDrop = useCallback(
    (acceptedFiles) => {
      const loadFilesAsync = async () => {
        try {
          await Promise.all(
            acceptedFiles.map((file) => {
              new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onabort = () => reject(new Error('file reading was aborted'));
                reader.onerror = () => reject(new Error('file reading has failed'));
                // reader.onload = () => {}
                reader.onloadend = function (event) {
                  if (!isExtractableFile(file)) reject(new Error('file not handled'));
                  resolve(null);
                };
                reader.readAsArrayBuffer(file);
              });
            })
          );
        } catch (error) {
          console.error(error);
        }

        const allNames = acceptedFiles.map((data) => data.name).join(', ');
        const allTypes = acceptedFiles.map((data) => data.type).join(', ');
        const joinedNames = [fileName, allNames].join(', ');
        const joinedTypes = [fileType, allTypes].join(', ');

        if (fileName && fileType) {
          setFileName(joinedNames);
          setFileType(joinedTypes);
          handleOnDrop(acceptedFiles, joinedNames, joinedNames);
        } else {
          setFileName(allNames);
          setFileType(allTypes);
          handleOnDrop(acceptedFiles, allNames, allTypes);
        }
      };

      loadFilesAsync();
    },
    [fileName, fileType]
  );

  useEffect(() => {
    if (name) setFileName(name);
    if (type) setFileType(type);
  }, [name, type]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Grid className={clsx(className, classes.root)}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.dropArea}
        {...getRootProps()}
        id="drop-container"
        ref={dropAreaRef}
      >
        <input {...getInputProps()} />
        {isDragActive && <Grid className={classes.dragActive}>Drop your files here...</Grid>}
        {!fileName && !isDragActive && <Grid className={classes.plus}>+</Grid>}
        {fileName && !isDragActive && (
          <Grid className={classes.fileExist}>
            <span>{`File name: ${fileName}`}</span>
            <span>{`File type: ${fileType}`}</span>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default FileDragAndDrop;
