import React from 'react';
import Form from './form';
import { UpsertTypes } from '../helpers/interfaces';

const Upsert = ({ data, isModalOpen, handleModalClose }: UpsertTypes): React.ReactElement => {
  return <Form data={data} isModalOpen={isModalOpen} handleModalClose={handleModalClose} />;
};

export default Upsert;
