import React from 'react';
import { FormikProps, FormikValues } from 'formik';
import {
  LocationsListQuery,
  OrderPriceQuery,
  ProductAttachmentsQuery,
  ProductModelByFilterQuery,
} from '~/graphql/graphql';
import { DiscountCode } from '~/components/settings/discountCodes/discount.interface';
import { ApolloError } from '@apollo/client';

interface PersonalData {
  companyName: string;
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: number;
  phoneNumber: number | string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  projectAddress: string;
  projectZipCode: string;
  projectCity: string;
  projectCountry: string;
  skipRegistration: boolean;
  password: string;
  deliveryMethod?: string;
  pickupTime?: string;
  returnTime?: string;
}

export interface ProductInfoCardProps {
  productModel: ProductModelByFilterQuery['productModels'][0];
}

export interface CheckoutCardProps {
  productModel: ProductModelByFilterQuery['productModels'][0] | ProductAttachmentsQuery['product']['productModel'];
  children: React.ReactElement;
}

export interface MachineInfoProps {
  productModel: ProductModelByFilterQuery['productModels'][0] | ProductAttachmentsQuery['product']['productModel'];
}

export interface ProductPricesProps {
  product: ProductModelByFilterQuery['productModels'][0]['products'][0];
}

export interface ProductAttributeProps {
  label: string;
  value: string;
  unit: string;
}

export interface OrderFormProps {
  locations: LocationsListQuery['locations'];
  orderPriceData: OrderPriceQuery;
  error: ApolloError;
  loadingPriceData: boolean;
  isProductsAvailable: boolean;
  startDate: Date;
  endDate: Date;
  location: string;
  handleStartDateChange: (date: Date) => void;
  handleEndDateChange: (date: Date) => void;
  handleLocationChange: (id: string) => void;
  handleSubmit: () => void;
}

export interface AttachmentsCardProps {
  services: ProductAttachmentsQuery['product']['services'];
  selectedServiceIds: [string];
  handleServiceSelect: (serviceId: string) => void;
  handleServiceUnselect: (serviceId: string) => void;
  standardAttachments: [string];
  bundles: ProductAttachmentsQuery['product']['productModel']['productModelBundles'];
  selectedBundlesIds: [string];
  businessDays: number;
  handleBundlesSelect: (serviceId: string) => void;
  handleBundlesUnselect: (serviceId: string) => void;
  productModelKey: string;
}

export interface ExtraItemProps {
  title: string;
  description: string;
  price: string;
  pricingStructure: string;
  selected: boolean;
  handleSelect: () => void;
  handleUnselect: () => void;
}

export interface AttachmentsListProps {
  startDate: Date;
  endDate: Date;
  location: string;
  standardAttachments: [string];
  orderPriceData: OrderPriceQuery;
  services: ProductAttachmentsQuery['product']['services'];
  bundles: ProductAttachmentsQuery['product']['productModel']['productModelBundles'];
  handleSubmit?: () => void;
  enableAddDiscount?: boolean;
}

export interface StandardAttachmentsProps {
  attachments: [string];
  title?: string;
  bordered?: boolean;
}

export interface PersonalDataFormProps {
  children: React.ReactElement;
  handleFormSubmit: (values: FormikValues) => void;
  fields: PersonalData;
  isRegistration?: boolean;
}

export interface AddressFormProps extends FormikProps<FormikValues> {
  addressFieldName: string;
  zipCodeFieldName: string;
  cityFieldName: string;
  countryFieldName: string;
}

export interface DeliveryFormProps {
  location: string;
  startDate: Date;
  endDate: Date;
  deliveryMethod: string;
  handleDeliveryMethodChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  pickupTime: Date;
  pickupTimeHint: string;
  isPickupTimeInvalid: boolean;
  handlePickupTimeChange: (date: Date) => void;
  returnTime: Date;
  returnTimeHint: string;
  isReturnTimeInvalid: boolean;
  handleReturnTimeChange: (date: Date) => void;
}

export interface OrderSummaryProps {
  personalData: PersonalData;
  location: string;
  startDate: Date;
  endDate: Date;
}

export interface OrderConfirmationCardProps {
  product: ProductAttachmentsQuery['product'];
  orderPriceData: OrderPriceQuery;
  handleSubmit: () => void;
  isSubmitting: boolean;
}

export interface AddDiscountProps {
  handleHidding: (status: boolean) => void;
  onDiscountChange: (discount: DiscountCode) => void;
}

export interface PriceBreakdownProps {
  orderSubTotal: number;
  discount: DiscountCode;
  onDiscountChange: (discountCode: DiscountCode) => void;
}
