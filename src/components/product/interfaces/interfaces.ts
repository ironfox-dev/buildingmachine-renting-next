import React from 'react';
import {
  ProductOwnerModel,
  ProductsQuery,
  ProductModelModel,
  ProductTypesQuery,
  ProductTypeModel,
} from '~/graphql/graphql';
import { FormikConfig, FormikProps, FormikValues } from 'formik';
import { BlockDataModel } from '../../allItems/interfaces';

type ShallowProductModel = Partial<ProductModelModel>;

interface Location {
  id: string;
  name: string;
}

interface ServiceTemplate {
  id: string;
  name: string;
  pricingStructure: string;
  checked: boolean;
  default: boolean;
  description: string;
  price: number;
}

export interface OwnerSelectProps {
  selectedOwner: ProductOwnerModel;
  ownersList: ProductOwnerModel[];
  ownerChangeHandler: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  ownerCreationHandler: (name: string) => Promise<void>;
}

export interface ProductFormProps extends FormikProps<FormikValues> {
  locations: Location[];
  model: ShallowProductModel;
  owner: ProductOwnerModel;
  serviceTemplates: ServiceTemplate[];
  documents: {
    [key: string]: BlockDataModel;
  };
  setDocuments: (BlockDataModel) => void;
}

export interface ProductInputProps extends FormikProps<FormikValues> {
  isNumber?: boolean;
  name: string;
  label: string;
  isSelect?: boolean;
  children?: React.ReactElement[];
  InputProps?: {
    [key: string]: React.ReactElement;
  };
  isMultiline?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: boolean;
  value?: string | boolean | number;
  required?: boolean;
}

export interface ProductListProps {
  products: ProductsQuery;
}

export interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  owners: ProductOwnerModel[];
  locations: Location[];
  services: ServiceTemplate[];
  formSubmitHandler: FormikConfig<unknown>['onSubmit'];
  productModel: ShallowProductModel;
  productType: ProductTypeModel;
  productTypes: ProductTypesQuery['productTypes'];
  handleModelChange: (model: ProductTypesQuery['productTypes'][0]['productModel'][0] | null) => void;
  handleTypeChange: (productType: ProductTypesQuery['productTypes'][0] | null) => void;
  handleOwnerChange: (name: string) => void;
}

export interface ProductModalHeaderProps {
  abbreviation: string;
  name: string;
  type: string;
  isSelectMode: boolean;
  typeName: string;
}

export interface ProductModalFooterProps {
  activeStep: number;
  stepsLength: number;
  isSelectMode: boolean;
  closeModal: () => void;
  handleBack: () => void;
  handleNext: () => void;
  handleCreateMachine: () => void;
  handleSubmit: () => void;
}

export interface ProductModalBaseDataProps extends FormikProps<FormikValues> {
  hasVin: boolean;
  locations: Location[];
}

export interface ProductModalCommercialDataProps extends FormikProps<FormikValues> {
  owners: ProductOwnerModel[];
  handleOwnerChange: (name: string) => void;
}

export interface ProductSelectionProps {
  productTypes: ProductTypesQuery['productTypes'];
  productModel: ShallowProductModel;
  productType: ProductTypeModel;
  handleModelChange: (model: ProductTypesQuery['productTypes'][0]['productModel'][0] | null) => void;
  handleTypeChange: (productType: ProductTypesQuery['productTypes'][0] | null) => void;
}
