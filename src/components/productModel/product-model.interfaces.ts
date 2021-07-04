import React from 'react';
import { Scalars, ProductManufacturerModel } from '~/graphql/graphql';

export interface ProductModel {
  id: Scalars['ID'];
  manufacturer: ProductManufacturerModel;
  name: Scalars['String'];
  attributes: Scalars['JSONObject'];
  type: {
    id: Scalars['ID'];
    name: Scalars['String'];
  };
}

export interface ModelSelectProps {
  models: ProductModel[];
  selectedModel: Scalars['ID'] | Array<Scalars['ID']>;
  modelChangeHandler: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  isMultiple?: boolean;
  isFullWidth?: boolean;
}

export interface ModelAttributesProps {
  attributes: Scalars['JSONObject'];
}

export interface TypeAttributesFormProps {
  attributes: Scalars['JSONObject'];
  formSubmitHandler: (e?: React.FormEvent<HTMLFormElement>) => void;
}

export interface ModelBundledProps {
  modelBundles: Partial<ProductModel>[];
}

export interface Manufacturer {
  id: string;
  name: string;
  abbreviation: string;
}

export interface CreateProductModelForm {
  typeId: string;
  manufacturerId: string;
  model: string;
  width: number;
  length: number;
  height: number;
  weight: number;
  bglNumber: string;
  hasVin: boolean;
  modelLeadTime: number;
  keyParameterName: string;
  keyParameterValue: number;
  lecturaId: string;
  accessory_1: string;
  accessory_2: string;
  accessory_3: string;
  accessory_4: string;
  accessory_5: string;
  additionalFields: AdditionalField[];
}

export interface AdditionalField {
  type: 'string' | 'number' | 'boolean'; // type is the string equivalent of these types
  name: string;
  value: string;
}
