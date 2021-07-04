import React from 'react';
import { ProductModel } from '~/graphql/graphql';

export interface Document {
  id: string;
  name: string;
  documentCategory: string;
  uploadedAt: string;
  user?: string;
  mimeType?: string;
  path: string;
}

export interface ListItemComponent {
  isEditMode: boolean;
  document: Document;
  handlePreviewClick: (id: string) => void;
  handleOnDeleteItem: (id: string) => void;
  handleOnUpdateItem: (id: string, name: string) => void;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  classes: Record<string, unknown>;
}

export type BlockDataModel = {
  documentCategory: string;
  id?: string;
  name?: string;
  relatedEntityId: string;
  user: string;
  type?: string;
  file: File[];
};

export type CreateProductDataModel = {
  documentCategory: string;
  name: string;
  relatedEntityId: string;
  user: string;
  file: File;
};

export type UpdateProductDataModel = {
  id: string;
  documentCategory: string;
  name: string;
  product: string;
  user: string;
  file: File;
};

type Location = {
  id: string;
  name: string;
};

export type InfoCellComponent = {
  title?: string;
  label?: string;
  value?: string | number;
  isEditable?: boolean;
  onChange?: (option: { id: string | boolean | number; name: string } | string) => void;
  onBlur?: () => void;
  error?: string;
  isNumber?: boolean;
  options?: {
    id: string | number;
    name: string;
  }[];
  select?: boolean;
  selectedItemId?: string | boolean | number;
};

export type Product = {
  bglKeyFigure?: string;
  bglNumber?: string;
  category: string;
  diggingDepth?: string;
  enginePower?: string;
  height?: string;
  length?: string;
  maxReach?: string;
  weight?: string;
  width?: string;
  productionYear: number;
  serialNumber: string;
  name: string;
  purchasePrice?: number;
  deposit?: number;
  leasingRate?: number;
  interest?: number;
  residualValue?: number;
  instruction?: string;
  workClothing?: string;
  notes?: string;
  owner?: string;
  location?: Location;
  unitSerialNumber?: number;
};

export type InfoCardComponent = {
  children: React.ReactElement | React.ReactElement[];
  title?: string;
  isEditable?: boolean;
  isEdited?: boolean;
  onActivateEditMode?: () => void;
  onConfirmEdit?: () => void;
  onCancelEdit?: () => void;
};

export type InfoLineComponent = {
  children: React.ReactElement[];
};

export interface ProductInformationFormError {
  productionYear?: string;
  serialNumber?: string;
  notes?: string;
  purchasePrice?: string;
  deposit?: string;
  leasingRate?: string;
  interest?: string;
  residualValue?: string;
  instruction?: string;
  unitSerialNumber?: string;
}

export interface ProductTracking {
  defaultCenter: {
    lat: number;
    lng: number;
  };
  last24Hours: number;
  workingHours: {
    date: string;
    operatingHours: number;
    idleHours: number;
  }[];
  product: {
    __typename?: 'ProductModel';
  } & Pick<
    ProductModel,
    | 'id'
    | 'operatingHours'
    | 'idleHours'
    | 'locationLatitude'
    | 'locationLongitude'
    | 'locationTimestamp'
    | 'locationFormattedAddress'
  >;
}
export type ProductData = {
  __typename?: 'ProductModel';
} & Pick<
  ProductModel,
  | 'id'
  | 'operatingHours'
  | 'idleHours'
  | 'locationLatitude'
  | 'locationLongitude'
  | 'locationTimestamp'
  | 'locationFormattedAddress'
  | 'unitInfo'
  | 'unitExtendedInfo'
>;

export interface GeneralTabProps {
  sections: Array<{
    label: string;
    component: string;
    path: string;
  }>;
}

export interface SectionProps {
  title: string;
  isEditable: boolean;
  onEditMode: () => void;
  children: React.ReactElement;
}
