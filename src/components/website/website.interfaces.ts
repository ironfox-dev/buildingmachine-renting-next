import { ProductTypesQuery } from '~/graphql/graphql';

export interface ContactFormInterface {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface CategoriesListProps {
  productTypes: ProductTypesQuery['productTypes'];
  onProductTypeSelect: (productTypeId: string) => void;
}

export interface ModelsListProps {
  productType: ProductTypesQuery['productTypes'][0];
  onProductModelSelect: (productModelId: string) => void;
}

export interface RentItem {
  key: string;
  machineType: string;
  modelName: string;
  machineWeightClass: string;
  image: string;
  price: number;
  accessories?: string[];
  priceNotAvailable?: boolean;
}
