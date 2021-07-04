import NumberFormat from 'react-number-format';
import { ChangeEvent, SetStateAction, Dispatch } from 'react';
import { FormikProps, FormikValues } from 'formik';

import { ProductTypesQuery, ProductTypeModel, LocationsListQuery } from '~/graphql/graphql';

interface itemList {
  key: string;
  label: string;
  component: string;
  path: string;
  sections?: Array<{
    label: string;
    component: string;
    path: string;
  }>;
}

export interface DiscountFieldProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
export interface NavigationTabProps {
  indicatorColor?: 'primary' | 'secondary';
  textColor?: 'primary' | 'secondary' | 'inherit';
  items: Array<itemList>;
}

export interface ControlledPannelProps {
  items: Array<itemList>;
}

export interface ProductSearchBarProps {
  productTypeId?: string;
  productModelId?: string;
  locationId?: string;
  start?: Date;
  end?: Date;
}

export interface ProductModelSelectorProps {
  isOpen: boolean;
  onCloseButtonClick: () => void;
  productTypesList: ProductTypesQuery['productTypes'];
  selectedProductType: ProductTypeModel;
  onProductTypeSelection: (productType: ProductTypesQuery['productTypes'][0]) => void;
  onProductModelSelection: (productModel: ProductTypesQuery['productTypes'][0]['productModel'][0]) => void;
}

export interface LocationModel {
  city: string;
  dieselPrice: number;
  gasolinePrice: number;
  id: string;
  name: string;
  postalCode: string;
  street: string;
  telephone: string;
}

export interface ProductModalSelectorProps {
  locations: LocationsListQuery['locations'];
  selectSearchLocation: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, location: LocationModel) => void;
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  endDate: Date;
  setEndDate: Dispatch<SetStateAction<Date>>;
  shouldDisableDate: (day: Date) => boolean;
  isOpen: boolean;
  onCloseButtonClick: () => void;
  productTypesList: ProductTypesQuery['productTypes'];
  selectedProductType: ProductTypeModel;
  onProductTypeSelection: (productType: ProductTypesQuery['productTypes'][0]) => void;
  onProductModelSelection: (productModel: ProductTypesQuery['productTypes'][0]['productModel'][0]) => void;
  selectedProductModel: ProductTypesQuery['productTypes'][0]['productModel'][0];
  selectedLocation: LocationModel;
  onSubmit: () => void;
}

export interface ConfirmationDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  open: boolean;
  content: string;
}

export interface FileDragAndDropProps {
  name?: string;
  type?: string;
  className?: string;
  handleOnDrop: (data: File[], name: string, type: string) => void;
}

export interface DocumentCategoryProps {
  id: string;
  key: string;
}

export interface FileUploadProps {
  handleFileUploadBtnClick?: () => void;
  isFileUploadBtnDisabled?: boolean;
  handleDocumentCategoryChange: (event: ChangeEvent<{ name?: string; value: unknown }>) => void;
  handleFileUpdate: (data: File[], name: string, type: string) => void;
  selectedCategory: string;
  categories: {
    [id: string]: DocumentCategoryProps;
  };
}
export interface ServicesListProps extends FormikProps<FormikValues> {
  index: number;
  service: {
    id: string;
    name: string;
    pricingStructure: string;
    checked: boolean;
    default: boolean;
    description?: string;
    price?: number;
  };
  disableInput?: boolean;
  onCheckboxChange: () => void;
  onInputChange: (e?: ChangeEvent<HTMLInputElement>) => void;
}
