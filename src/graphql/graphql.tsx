import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** JSONObject custom scalar type */
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccountUpdateDto = {
  addressId: Scalars['String'];
  city: Scalars['String'];
  companyId: Scalars['String'];
  companyName: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  postalCode: Scalars['String'];
  street: Scalars['String'];
  userId: Scalars['String'];
};

export type AddressModel = {
  __typename?: 'AddressModel';
  city: Scalars['String'];
  companyId: CompanyModel;
  country: Scalars['String'];
  id: Scalars['ID'];
  postalCode: Scalars['String'];
  street: Scalars['String'];
};

export type BglDataDto = {
  bglNumber: Scalars['String'];
  description: Array<BglDataKeyDto>;
  parameters: Array<BglDataKeyDto>;
  shortName: Scalars['String'];
  values: Array<BglDataKeyDto>;
  version: Scalars['Float'];
};

export type BglDataKeyDto = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type BglDataModel = {
  __typename?: 'BglDataModel';
  bglNumber: Scalars['String'];
  description: Scalars['JSONObject'];
  id: Scalars['ID'];
  parameters: Scalars['JSONObject'];
  shortName: Scalars['String'];
  values: Scalars['JSONObject'];
  version: Scalars['Float'];
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  name: Scalars['String'];
};

export type CompanyModel = {
  __typename?: 'CompanyModel';
  addresses: Array<AddressModel>;
  discount: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  users: Array<UserModel>;
};

export type CurveModel = {
  __typename?: 'CurveModel';
  name: Scalars['String'];
  observation: Scalars['Float'];
  points: Array<PointModel>;
  quality?: Maybe<Scalars['String']>;
};

export type CustomerUpdateDto = {
  addressId: Scalars['String'];
  city: Scalars['String'];
  companyId: Scalars['String'];
  companyName: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  street: Scalars['String'];
  userId: Scalars['String'];
};

export type DataModel = {
  __typename?: 'DataModel';
  age_in_months: Scalars['Float'];
  country: Scalars['String'];
  currency: Scalars['String'];
  found_on_year: Scalars['Float'];
  id: Scalars['String'];
  operating_hours?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  serial_number: Scalars['String'];
};

export type DataSheetModel = {
  __typename?: 'DataSheetModel';
  language: Array<Scalars['String']>;
  region: Scalars['String'];
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type DefaultImage = {
  __typename?: 'DefaultImage';
  source: Scalars['String'];
  url: Scalars['String'];
};

export type DiscountCreateDto = {
  code: Scalars['String'];
  currency: Scalars['String'];
  isActive: Scalars['Boolean'];
  type: Scalars['String'];
  value: Scalars['Float'];
};

export type DiscountModel = {
  __typename?: 'DiscountModel';
  code: Scalars['String'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  type: Scalars['String'];
  value: Scalars['Float'];
};

export type DiscountSuccessDto = {
  __typename?: 'DiscountSuccessDto';
  discount: Scalars['Float'];
};

export type DiscountUpdateDto = {
  companyId: Scalars['String'];
  discount: Scalars['Float'];
};

export type DocumentCategoryModel = {
  __typename?: 'DocumentCategoryModel';
  id: Scalars['ID'];
  key: Scalars['String'];
};

export type DocumentModel = {
  __typename?: 'DocumentModel';
  createdBy: UserModel;
  documentCategory: DocumentCategoryModel;
  extension: Scalars['String'];
  id: Scalars['ID'];
  location: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  uploadedAt: Scalars['String'];
};

export type DocumentProductCreateDto = {
  documentCategory: Scalars['String'];
  product: Scalars['String'];
  user: Scalars['String'];
};

export type DocumentProductModelCreateDto = {
  documentCategoryId: Scalars['String'];
  productModelId: Scalars['String'];
  userId: Scalars['String'];
};

export type DocumentProductModelQueryDto = {
  productModelId: Scalars['String'];
  userId: Scalars['String'];
};

export type DocumentProductModelUpdateDto = {
  documentCategoryId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DocumentProductQueryDto = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type DocumentProductUpdateDto = {
  documentCategory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ExtendSaleOrderDto = {
  bundleIds?: Maybe<Array<Scalars['String']>>;
  endDate: Scalars['DateTime'];
  orderId: Scalars['String'];
  productId: Scalars['String'];
  serviceIds?: Maybe<Array<Scalars['String']>>;
  startDate: Scalars['DateTime'];
};

export type FilteredProductsModel = {
  __typename?: 'FilteredProductsModel';
  filteredProducts: Array<ProductModel>;
  totalCount: Scalars['Float'];
};

export type ImageModel = {
  __typename?: 'ImageModel';
  source: Scalars['String'];
  url: Scalars['String'];
};


export type LecturaModel = {
  __typename?: 'LecturaModel';
  model: LecturaModelModel;
  regressor: LecturaRegressorModel;
};

export type LecturaModelModel = {
  __typename?: 'LecturaModelModel';
  category: CategoryModel;
  dataSheetCnt: Scalars['Float'];
  dataSheets: Array<DataSheetModel>;
  defaultImg: DefaultImage;
  firstYear: Scalars['Float'];
  id: Scalars['Float'];
  images: Array<ImageModel>;
  inProduction: Scalars['Boolean'];
  lastYear: Scalars['Float'];
  manufacturer: ManufacturerModel;
  modelName: Scalars['String'];
  specs: Array<SpecModel>;
  standardEquipment: Scalars['String'];
};

export type LecturaRegressorModel = {
  __typename?: 'LecturaRegressorModel';
  curves: Array<CurveModel>;
  data: Array<DataModel>;
};

export type LocationCreateDto = {
  city: Scalars['String'];
  dieselPrice?: Maybe<Scalars['Float']>;
  gasolinePrice?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  postalCode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  telephone: Scalars['String'];
};

export type LocationGroupDto = {
  name?: Maybe<Scalars['String']>;
  responsiblePersonId: Scalars['String'];
};

export type LocationGroupModel = {
  __typename?: 'LocationGroupModel';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  responsiblePerson: PersonModel;
};

export type LocationModel = {
  __typename?: 'LocationModel';
  city: Scalars['String'];
  dieselPrice?: Maybe<Scalars['Float']>;
  gasolinePrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  operatingHour: Array<OperatingHourModel>;
  postalCode: Scalars['String'];
  street: Scalars['String'];
  telephone: Scalars['String'];
};

export type MaintenanceAgreementDto = {
  costPerOperatingHours: Scalars['Float'];
  maintenanceProviderId: Scalars['String'];
  maxOperatingHours: Scalars['Float'];
  maxOperatingTime: Scalars['Float'];
  productId: Scalars['String'];
};

export type MaintenanceAgreementModel = {
  __typename?: 'MaintenanceAgreementModel';
  costPerOperatingHours: Scalars['Float'];
  id: Scalars['ID'];
  maintenanceProvider: MaintenanceProviderModel;
  maxOperatingHours: Scalars['Float'];
  maxOperatingTime: Scalars['Float'];
  product: ProductModel;
};

export type MaintenanceDto = {
  description: Scalars['String'];
  intervalHours?: Maybe<Scalars['Float']>;
};

export type MaintenanceHistoryDto = {
  completedOn: Scalars['DateTime'];
  maintenanceId: Scalars['String'];
  productId: Scalars['String'];
};

export type MaintenanceHistoryModel = {
  __typename?: 'MaintenanceHistoryModel';
  completedOn: Scalars['DateTime'];
  id: Scalars['ID'];
  maintenance: MaintenanceModel;
  product: ProductModel;
};

export type MaintenanceModel = {
  __typename?: 'MaintenanceModel';
  description: Scalars['String'];
  id: Scalars['ID'];
  intervalHours?: Maybe<Scalars['Float']>;
};

export type MaintenanceProviderDto = {
  country: Scalars['String'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
  street: Scalars['String'];
  streetNumber?: Maybe<Scalars['Float']>;
};

export type MaintenanceProviderModel = {
  __typename?: 'MaintenanceProviderModel';
  country: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  postalCode: Scalars['String'];
  street: Scalars['String'];
  streetNumber?: Maybe<Scalars['Float']>;
};

export type ManufacturerModel = {
  __typename?: 'ManufacturerModel';
  id: Scalars['String'];
  logoFile: Scalars['String'];
  name: Scalars['String'];
};

export type ModelAdditionalFieldDto = {
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBglData: BglDataModel;
  createDiscount: DiscountModel;
  createDocumentProduct: DocumentModel;
  createDocumentProductModel: DocumentModel;
  createLocationGroup: LocationGroupModel;
  createMaintenance: MaintenanceModel;
  createMaintenanceAgreement: MaintenanceAgreementModel;
  createMaintenanceHistory: MaintenanceHistoryModel;
  createMaintenanceProvider: MaintenanceProviderModel;
  createOrder: SalesOrderModel;
  createOwner: ProductOwnerModel;
  createPerson: PersonModel;
  createProduct: ProductModel;
  createProductBglData: Array<ProductBglDataModel>;
  createProductModel: ProductModelModel;
  createProductServices: Array<ProductServiceModel>;
  createProductType: ProductTypeModel;
  createServiceTemplate: ServiceTemplateModel;
  createTelematicsProvider: TelematicsProviderModel;
  createTelematicsTariff: TelematiksTariffModel;
  createUser: UserLoggedinDto;
  createVendor: ProductVendorModel;
  deleteBglData: Scalars['Boolean'];
  deleteDiscount: SimpleUpdateDto;
  deleteDocumentProduct: DocumentModel;
  deleteProductService: ProductServiceModel;
  deleteProductServices: Array<Scalars['String']>;
  deleteServiceTemplate: Scalars['Boolean'];
  extendOrderPeriod: SalesOrderModel;
  loginUser: UserLoggedinDto;
  orderStatusUpdate: SalesOrderModel;
  requestResetPassword: SimpleUpdateDto;
  resendVerificationEmail: UserResendVerificationDto;
  resetPassword: SimpleUpdateDto;
  saveLocation: LocationModel;
  setCustomerDiscount: DiscountSuccessDto;
  updateAccount: SimpleUpdateDto;
  updateBglData: BglDataModel;
  updateCustomer: SimpleUpdateDto;
  updateDiscountStatus: SimpleUpdateDto;
  updateDocumentProduct: DocumentModel;
  updateDocumentProductModel: DocumentModel;
  updateLocation: LocationModel;
  updateOrderServices: SalesOrderModel;
  updateProduct: ProductModel;
  updateProductBglData: Array<ProductBglDataModel>;
  updateProductService: ProductServiceModel;
  updateServiceTemplate: ServiceTemplateModel;
  validateDiscountCode: DiscountModel;
  verifyEmail: SimpleUpdateDto;
  verifyResetPassword: SimpleUpdateDto;
};


export type MutationCreateBglDataArgs = {
  bglDataDto: BglDataDto;
};


export type MutationCreateDiscountArgs = {
  discount: DiscountCreateDto;
};


export type MutationCreateDocumentProductArgs = {
  documentProduct: DocumentProductCreateDto;
  file: Scalars['Upload'];
};


export type MutationCreateDocumentProductModelArgs = {
  documentProductModel: DocumentProductModelCreateDto;
  file: Scalars['Upload'];
};


export type MutationCreateLocationGroupArgs = {
  locationGroup: LocationGroupDto;
};


export type MutationCreateMaintenanceArgs = {
  maintenance: MaintenanceDto;
};


export type MutationCreateMaintenanceAgreementArgs = {
  maintenanceAgreement: MaintenanceAgreementDto;
};


export type MutationCreateMaintenanceHistoryArgs = {
  maintenanceHistory: MaintenanceHistoryDto;
};


export type MutationCreateMaintenanceProviderArgs = {
  maintenanceProvider: MaintenanceProviderDto;
};


export type MutationCreateOrderArgs = {
  order: SalesOrderDto;
};


export type MutationCreateOwnerArgs = {
  owner: ProductOwnerDto;
};


export type MutationCreatePersonArgs = {
  person: PersonDto;
};


export type MutationCreateProductArgs = {
  product: ProductDto;
  productServices?: Maybe<Array<ProductServiceDto>>;
};


export type MutationCreateProductBglDataArgs = {
  productBglDataInput: Array<ProductBglDataDto>;
  productId: Scalars['ID'];
};


export type MutationCreateProductModelArgs = {
  productModel: ProductModelDto;
};


export type MutationCreateProductServicesArgs = {
  productId: Scalars['String'];
  productServices: Array<ProductServiceDto>;
};


export type MutationCreateProductTypeArgs = {
  productType: ProductTypeDto;
};


export type MutationCreateServiceTemplateArgs = {
  serviceTemplateDto: ServiceTemplateCreateDto;
};


export type MutationCreateTelematicsProviderArgs = {
  telematicsProvider: TelematicsProviderDto;
};


export type MutationCreateTelematicsTariffArgs = {
  telematicsTariff: TelematicsTariffDto;
};


export type MutationCreateUserArgs = {
  user: UserCreateDto;
};


export type MutationCreateVendorArgs = {
  vendor: ProductVendorDto;
};


export type MutationDeleteBglDataArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDiscountArgs = {
  discountId: Scalars['ID'];
};


export type MutationDeleteDocumentProductArgs = {
  documentId: Scalars['String'];
  productId: Scalars['String'];
};


export type MutationDeleteProductServiceArgs = {
  id: Scalars['String'];
};


export type MutationDeleteProductServicesArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationDeleteServiceTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationExtendOrderPeriodArgs = {
  order: ExtendSaleOrderDto;
};


export type MutationLoginUserArgs = {
  user: UserLoginDto;
};


export type MutationOrderStatusUpdateArgs = {
  orderStatusUpdateInput: OrderStatusUpdateDto;
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  user: UserResetPasswordDto;
};


export type MutationSaveLocationArgs = {
  locationInput: LocationCreateDto;
  operatingHourInput?: Maybe<Array<OperatingHoursCreateDto>>;
};


export type MutationSetCustomerDiscountArgs = {
  discountData: DiscountUpdateDto;
};


export type MutationUpdateAccountArgs = {
  account: AccountUpdateDto;
};


export type MutationUpdateBglDataArgs = {
  bglDataDto: BglDataDto;
  id: Scalars['ID'];
};


export type MutationUpdateCustomerArgs = {
  customer: CustomerUpdateDto;
};


export type MutationUpdateDiscountStatusArgs = {
  discountId: Scalars['ID'];
  isActive: Scalars['Boolean'];
};


export type MutationUpdateDocumentProductArgs = {
  documentProduct?: Maybe<DocumentProductUpdateDto>;
  id: Scalars['String'];
};


export type MutationUpdateDocumentProductModelArgs = {
  documentProduct?: Maybe<DocumentProductModelUpdateDto>;
  id: Scalars['String'];
};


export type MutationUpdateLocationArgs = {
  id: Scalars['ID'];
  locationInput: LocationCreateDto;
  operatingHourInput: Array<OperatingHoursCreateDto>;
};


export type MutationUpdateOrderServicesArgs = {
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
  services: Array<UpdateOrderItemServicesDto>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['String'];
  product?: Maybe<ProductUpdateDto>;
};


export type MutationUpdateProductBglDataArgs = {
  productBglDataInput: Array<ProductBglDataDto>;
  productId: Scalars['ID'];
};


export type MutationUpdateProductServiceArgs = {
  id: Scalars['String'];
  service?: Maybe<ServiceUpdateDto>;
};


export type MutationUpdateServiceTemplateArgs = {
  id: Scalars['ID'];
  serviceTemplateDto: ServiceTemplateUpdateDto;
};


export type MutationValidateDiscountCodeArgs = {
  discountCode: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};


export type MutationVerifyResetPasswordArgs = {
  token: Scalars['String'];
};

export type OperatingHourModel = {
  __typename?: 'OperatingHourModel';
  endTime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  startTime?: Maybe<Scalars['String']>;
  weekDay: Scalars['String'];
};

export type OperatingHoursCreateDto = {
  endTime?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  weekDay: Scalars['String'];
};

export type OrderPriceModel = {
  __typename?: 'OrderPriceModel';
  attachmentsPrices: Array<ProductPriceModel>;
  businessDays: Scalars['Float'];
  days: Scalars['Float'];
  discount: DiscountModel;
  discountedAmount: Scalars['Float'];
  discountedSubTotal: Scalars['Float'];
  orderPrice: Scalars['Float'];
  orderSubTotal: Scalars['Float'];
  orderVat: Scalars['Float'];
  productPrice: ProductPriceModel;
  servicesPrices: Array<ServicePriceModel>;
};

export type OrderProductsAvailabilityCalendarModel = {
  __typename?: 'OrderProductsAvailabilityCalendarModel';
  date: Scalars['DateTime'];
  isAvailable: Scalars['Boolean'];
};

export type OrderStatusUpdateDto = {
  orderId: Scalars['String'];
  status: Scalars['String'];
};

export type PeriodModel = {
  __typename?: 'PeriodModel';
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type PersonDto = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type PersonModel = {
  __typename?: 'PersonModel';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};

export type PointModel = {
  __typename?: 'PointModel';
  age: Scalars['Float'];
  highCI: Scalars['Float'];
  lowCI: Scalars['Float'];
  prediction: Scalars['Float'];
};

export type ProductAvailabilityCalendarDayModel = {
  __typename?: 'ProductAvailabilityCalendarDayModel';
  date: Scalars['DateTime'];
  slots?: Maybe<Array<PeriodModel>>;
  type: Scalars['String'];
};

export type ProductAvailabilityCalendarModel = {
  __typename?: 'ProductAvailabilityCalendarModel';
  days: Array<ProductAvailabilityCalendarDayModel>;
  productId: Scalars['ID'];
};

export type ProductAvailabilityModel = {
  __typename?: 'ProductAvailabilityModel';
  isAvailable: Scalars['Boolean'];
  productId: Scalars['ID'];
};

export type ProductAvailabilityStatusModel = {
  __typename?: 'ProductAvailabilityStatusModel';
  nextAvailableDate: Scalars['DateTime'];
  nextReservationStart?: Maybe<Scalars['DateTime']>;
  status: Scalars['String'];
};

export type ProductAvailableSlotsModel = {
  __typename?: 'ProductAvailableSlotsModel';
  availableSlots: Array<PeriodModel>;
  productId: Scalars['ID'];
};

export type ProductBglDataDto = {
  bglDataId: Scalars['String'];
  bglNumberType: Scalars['String'];
};

export type ProductBglDataModel = {
  __typename?: 'ProductBglDataModel';
  bglData: BglDataModel;
  bglNumberType: Scalars['String'];
  id: Scalars['ID'];
  product: ProductModel;
};

export type ProductDto = {
  accountingDeviceType?: Maybe<Scalars['String']>;
  billingType?: Maybe<Scalars['String']>;
  calculateWeekend?: Maybe<Scalars['Boolean']>;
  commissionedAt?: Maybe<Scalars['DateTime']>;
  costCenter?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  deposit?: Maybe<Scalars['Float']>;
  driverId?: Maybe<Scalars['String']>;
  externalMachineIdentifier?: Maybe<Scalars['String']>;
  instruction?: Maybe<Scalars['String']>;
  interest?: Maybe<Scalars['Float']>;
  isLeased?: Maybe<Scalars['Boolean']>;
  isRented?: Maybe<Scalars['Boolean']>;
  leasingEnd?: Maybe<Scalars['DateTime']>;
  leasingRate?: Maybe<Scalars['Float']>;
  leasingStart?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  locationGroupId?: Maybe<Scalars['String']>;
  machineOperatorChecklist?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['DateTime']>;
  otherTests?: Maybe<Scalars['String']>;
  priceDaily?: Maybe<Scalars['Float']>;
  priceMonthly?: Maybe<Scalars['Float']>;
  priceWeekly?: Maybe<Scalars['Float']>;
  productionYear: Scalars['Float'];
  productLeadTime?: Maybe<Scalars['Float']>;
  productModelId: Scalars['String'];
  productOwnerId: Scalars['String'];
  productVendorId?: Maybe<Scalars['String']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  rentalEnd?: Maybe<Scalars['DateTime']>;
  rentalPaymentPeriod?: Maybe<Scalars['String']>;
  rentalPurchaseOption?: Maybe<Scalars['String']>;
  rentalRate?: Maybe<Scalars['Float']>;
  rentalStart?: Maybe<Scalars['DateTime']>;
  residualValue?: Maybe<Scalars['Float']>;
  serialNumber: Scalars['String'];
  serviceTime?: Maybe<Scalars['Float']>;
  spareParts?: Maybe<Scalars['String']>;
  technicalNotes?: Maybe<Scalars['String']>;
  telematicsTariffId?: Maybe<Scalars['String']>;
  transportDimensions?: Maybe<Scalars['String']>;
  unitSerialNumber?: Maybe<Scalars['Float']>;
  vin?: Maybe<Scalars['String']>;
  workClothing?: Maybe<Scalars['String']>;
};

export type ProductManufacturerModel = {
  __typename?: 'ProductManufacturerModel';
  abbreviation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProductModel = {
  __typename?: 'ProductModel';
  accountingDeviceType?: Maybe<Scalars['String']>;
  availability: ProductAvailabilityStatusModel;
  billingType?: Maybe<Scalars['String']>;
  calculateWeekend: Scalars['Boolean'];
  commissionedAt?: Maybe<Scalars['DateTime']>;
  costCenter?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  deposit?: Maybe<Scalars['Float']>;
  documents: Array<DocumentModel>;
  drivers?: Maybe<Array<PersonModel>>;
  externalMachineIdentifier?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  idleHours?: Maybe<Scalars['Float']>;
  instruction?: Maybe<Scalars['String']>;
  interest?: Maybe<Scalars['Float']>;
  isLeased?: Maybe<Scalars['Boolean']>;
  isRented?: Maybe<Scalars['Boolean']>;
  leasingEnd?: Maybe<Scalars['DateTime']>;
  leasingRate?: Maybe<Scalars['Float']>;
  leasingStart?: Maybe<Scalars['DateTime']>;
  location?: Maybe<LocationModel>;
  locationFormattedAddress?: Maybe<Scalars['String']>;
  locationGroup?: Maybe<LocationGroupModel>;
  locationLatitude?: Maybe<Scalars['Float']>;
  locationLongitude?: Maybe<Scalars['Float']>;
  locationTimestamp?: Maybe<Scalars['DateTime']>;
  machineOperatorChecklist?: Maybe<Scalars['String']>;
  maintenanceAgreements?: Maybe<Array<MaintenanceAgreementModel>>;
  maintenanceHistories?: Maybe<Array<MaintenanceHistoryModel>>;
  nickname?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  operatingHours?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['DateTime']>;
  otherTests?: Maybe<Scalars['String']>;
  priceDaily?: Maybe<Scalars['Float']>;
  priceMonthly?: Maybe<Scalars['Float']>;
  priceWeekly?: Maybe<Scalars['Float']>;
  productionYear: Scalars['Float'];
  productLeadTime?: Maybe<Scalars['Float']>;
  productModel: ProductModelModel;
  productOwner: ProductOwnerModel;
  productVendor?: Maybe<ProductVendorModel>;
  purchasePrice?: Maybe<Scalars['Float']>;
  rentalEnd?: Maybe<Scalars['DateTime']>;
  rentalPaymentPeriod?: Maybe<Scalars['String']>;
  rentalPurchaseOption?: Maybe<Scalars['String']>;
  rentalRate?: Maybe<Scalars['Float']>;
  rentalStart?: Maybe<Scalars['DateTime']>;
  residualValue?: Maybe<Scalars['Float']>;
  serialNumber: Scalars['String'];
  services: Array<ProductServiceModel>;
  serviceTime?: Maybe<Scalars['Float']>;
  spareParts?: Maybe<Scalars['String']>;
  technicalNotes?: Maybe<Scalars['String']>;
  telematicsTariff?: Maybe<TelematiksTariffModel>;
  transportDimensions?: Maybe<Scalars['String']>;
  unitExtendedInfo?: Maybe<Scalars['JSONObject']>;
  unitInfo?: Maybe<Scalars['JSONObject']>;
  unitSerialNumber?: Maybe<Scalars['Float']>;
  vin?: Maybe<Scalars['String']>;
  workClothing?: Maybe<Scalars['String']>;
  yearsInCommission?: Maybe<Scalars['Float']>;
  yearsSinceConstruction: Scalars['Float'];
};


export type ProductModelAvailabilityArgs = {
  fromDate: Scalars['DateTime'];
};


export type ProductModelDocumentsArgs = {
  category?: Maybe<Scalars['String']>;
};

export type ProductModelBundleModel = {
  __typename?: 'ProductModelBundleModel';
  attributes: Scalars['JSONObject'];
  hasVin: Scalars['Boolean'];
  id: Scalars['ID'];
  manufacturer: ProductManufacturerModel;
  name: Scalars['String'];
  products: Array<ProductModel>;
  type: ProductTypeModel;
};

export type ProductModelDto = {
  accessory_1?: Maybe<Scalars['String']>;
  accessory_2?: Maybe<Scalars['String']>;
  accessory_3?: Maybe<Scalars['String']>;
  accessory_4?: Maybe<Scalars['String']>;
  accessory_5?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<ModelAdditionalFieldDto>>;
  bglNumber: Scalars['String'];
  hasVin: Scalars['Boolean'];
  height: Scalars['Float'];
  keyParameterName: Scalars['String'];
  keyParameterValue: Scalars['Float'];
  lecturaId: Scalars['Float'];
  length: Scalars['Float'];
  manufacturerId: Scalars['String'];
  model: Scalars['String'];
  modelLeadTime: Scalars['Float'];
  typeId: Scalars['String'];
  weight: Scalars['Float'];
  width: Scalars['Float'];
};

export type ProductModelFilterDto = {
  hasVin?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modelLeadTime?: Maybe<Scalars['Float']>;
};

export type ProductModelModel = {
  __typename?: 'ProductModelModel';
  attributes: Scalars['JSONObject'];
  documents: Array<DocumentModel>;
  hasVin: Scalars['Boolean'];
  id: Scalars['ID'];
  key: Scalars['String'];
  lecturaId?: Maybe<Scalars['Float']>;
  lecturaModel?: Maybe<Scalars['String']>;
  manufacturer: ProductManufacturerModel;
  modelLeadTime?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  productModelBundles: Array<ProductModelBundleModel>;
  products: Array<ProductModel>;
  type: ProductTypeModel;
};


export type ProductModelModelProductsArgs = {
  endTime?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['ID']>;
  ownerId?: Maybe<Scalars['ID']>;
  startTime?: Maybe<Scalars['DateTime']>;
};

export type ProductOwnerDto = {
  name: Scalars['String'];
};

export type ProductOwnerModel = {
  __typename?: 'ProductOwnerModel';
  id: Scalars['ID'];
  isFlexcavo: Scalars['Boolean'];
  name: Scalars['String'];
};

export type ProductPriceModel = {
  __typename?: 'ProductPriceModel';
  id: Scalars['ID'];
  pricePerDay: Scalars['Float'];
  productPriceDaily: Scalars['Float'];
  productPriceMonthly: Scalars['Float'];
  productPriceWeekly: Scalars['Float'];
  totalPrice: Scalars['Float'];
};

export type ProductServiceDto = {
  price: Scalars['Float'];
  serviceTemplate: Scalars['String'];
};

export type ProductServiceModel = {
  __typename?: 'ProductServiceModel';
  id: Scalars['ID'];
  price: Scalars['String'];
  productId: Scalars['String'];
  serviceTemplate: ServiceTemplateModel;
  serviceTemplateId: Scalars['String'];
};

export type ProductTrackingModel = {
  __typename?: 'ProductTrackingModel';
  id: Scalars['String'];
  last24Hours?: Maybe<Scalars['Float']>;
  locationFormattedAddress?: Maybe<Scalars['String']>;
  locationLatitude?: Maybe<Scalars['Float']>;
  locationLongitude?: Maybe<Scalars['Float']>;
  product: ProductModel;
  unitSerialNumber: Scalars['String'];
  workingHours: Array<ProductWorkingHourModel>;
};

export type ProductTypeAttributeModel = {
  __typename?: 'ProductTypeAttributeModel';
  id: Scalars['ID'];
  isRequired: Scalars['Boolean'];
  key: Scalars['String'];
  maxLength?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  type: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
};

export type ProductTypeDto = {
  characteristics?: Maybe<Scalars['JSONObject']>;
  name: Scalars['String'];
};

export type ProductTypeModel = {
  __typename?: 'ProductTypeModel';
  attributes?: Maybe<Array<ProductTypeAttributeModel>>;
  characteristics?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  productModel: Array<ProductModelModel>;
};


export type ProductTypeModelProductModelArgs = {
  productModelId?: Maybe<Scalars['ID']>;
};

export type ProductUpdateDto = {
  accountingDeviceType?: Maybe<Scalars['String']>;
  billingType?: Maybe<Scalars['String']>;
  calculateWeekend?: Maybe<Scalars['Boolean']>;
  commissionedAt?: Maybe<Scalars['DateTime']>;
  costCenter?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  deposit?: Maybe<Scalars['Float']>;
  driverId?: Maybe<Scalars['String']>;
  externalMachineIdentifier?: Maybe<Scalars['String']>;
  instruction?: Maybe<Scalars['String']>;
  interest?: Maybe<Scalars['Float']>;
  isLeased?: Maybe<Scalars['Boolean']>;
  isRented?: Maybe<Scalars['Boolean']>;
  leasingEnd?: Maybe<Scalars['DateTime']>;
  leasingRate?: Maybe<Scalars['Float']>;
  leasingStart?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  locationGroupId?: Maybe<Scalars['String']>;
  machineOperatorChecklist?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['DateTime']>;
  otherTests?: Maybe<Scalars['String']>;
  priceDaily?: Maybe<Scalars['Float']>;
  priceMonthly?: Maybe<Scalars['Float']>;
  priceWeekly?: Maybe<Scalars['Float']>;
  productionYear?: Maybe<Scalars['Float']>;
  productLeadTime?: Maybe<Scalars['Float']>;
  productModelId?: Maybe<Scalars['String']>;
  productOwnerId?: Maybe<Scalars['String']>;
  productVendorId?: Maybe<Scalars['String']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  rentalEnd?: Maybe<Scalars['DateTime']>;
  rentalPaymentPeriod?: Maybe<Scalars['String']>;
  rentalPurchaseOption?: Maybe<Scalars['String']>;
  rentalRate?: Maybe<Scalars['Float']>;
  rentalStart?: Maybe<Scalars['DateTime']>;
  residualValue?: Maybe<Scalars['Float']>;
  serialNumber?: Maybe<Scalars['String']>;
  serviceTime?: Maybe<Scalars['Float']>;
  spareParts?: Maybe<Scalars['String']>;
  technicalNotes?: Maybe<Scalars['String']>;
  telematicsTariffId?: Maybe<Scalars['String']>;
  transportDimensions?: Maybe<Scalars['String']>;
  unitSerialNumber?: Maybe<Scalars['Float']>;
  vin?: Maybe<Scalars['String']>;
  workClothing?: Maybe<Scalars['String']>;
};

export type ProductVendorDto = {
  name: Scalars['String'];
};

export type ProductVendorModel = {
  __typename?: 'ProductVendorModel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProductWorkingHourModel = {
  __typename?: 'ProductWorkingHourModel';
  date: Scalars['String'];
  idleHours: Scalars['Float'];
  operatingHours: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  bglData: BglDataModel;
  bglDatas: Array<BglDataModel>;
  checkUser: UserModel;
  customer: CompanyModel;
  documentCategory: Array<DocumentCategoryModel>;
  documentProductModels: Array<DocumentModel>;
  documentProducts: Array<DocumentModel>;
  extendedOrderPrice: OrderPriceModel;
  getAccount: CompanyModel;
  listCustomers: Array<CompanyModel>;
  listDiscounts: Array<DiscountModel>;
  loadLecturaData: LecturaModel;
  location: LocationModel;
  locationGroups: Array<LocationGroupModel>;
  locations: Array<LocationModel>;
  maintenanceAgreements: Array<MaintenanceAgreementModel>;
  maintenanceHistories: Array<MaintenanceHistoryModel>;
  maintenanceProviders: Array<MaintenanceProviderModel>;
  maintenances: Array<MaintenanceModel>;
  order: SalesOrderModel;
  orderItemsReservationTime: Array<ReservationTimeModel>;
  orderPrice: OrderPriceModel;
  orderProductsAvailabilityCalendar: Array<OrderProductsAvailabilityCalendarModel>;
  orders: Array<SalesOrderModel>;
  persons: Array<PersonModel>;
  product: ProductModel;
  productBglData: Array<ProductBglDataModel>;
  productManufacturers: Array<ProductManufacturerModel>;
  productModels: Array<ProductModelModel>;
  productOwners: Array<ProductOwnerModel>;
  products: Array<ProductModel>;
  productsAvailability: Array<ProductAvailabilityModel>;
  productsAvailabilityCalendar: Array<ProductAvailabilityCalendarModel>;
  productsAvailableSlots: Array<ProductAvailableSlotsModel>;
  productsFiltered: FilteredProductsModel;
  productTracking: ProductTrackingModel;
  productTypes: Array<ProductTypeModel>;
  productVendors: Array<ProductVendorModel>;
  serviceTemplate: ServiceTemplateModel;
  serviceTemplates: Array<ServiceTemplateModel>;
  telematicsProviders: Array<TelematicsProviderModel>;
  telematicsTariffs: Array<TelematiksTariffModel>;
  user: UserModel;
};


export type QueryBglDataArgs = {
  id: Scalars['ID'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryDocumentProductModelsArgs = {
  query: DocumentProductModelQueryDto;
};


export type QueryDocumentProductsArgs = {
  query: DocumentProductQueryDto;
};


export type QueryExtendedOrderPriceArgs = {
  endDate: Scalars['DateTime'];
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
  startDate: Scalars['DateTime'];
};


export type QueryLoadLecturaDataArgs = {
  productId: Scalars['ID'];
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderItemsReservationTimeArgs = {
  endDate: Scalars['DateTime'];
  productIds: Array<Scalars['ID']>;
  startDate: Scalars['DateTime'];
};


export type QueryOrderPriceArgs = {
  attachmentIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  endDate: Scalars['DateTime'];
  productId: Scalars['ID'];
  serviceIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  startDate: Scalars['DateTime'];
};


export type QueryOrderProductsAvailabilityCalendarArgs = {
  endMonth: Scalars['DateTime'];
  orderEndDate: Scalars['DateTime'];
  productIds: Array<Scalars['ID']>;
  startMonth: Scalars['DateTime'];
};


export type QueryOrdersArgs = {
  filters?: Maybe<SalesOrderQueryFiltersDto>;
  searchText?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductBglDataArgs = {
  productId: Scalars['ID'];
};


export type QueryProductManufacturersArgs = {
  search: Scalars['String'];
};


export type QueryProductModelsArgs = {
  filter?: Maybe<ProductModelFilterDto>;
};


export type QueryProductsAvailabilityArgs = {
  endDate: Scalars['DateTime'];
  productIds: Array<Scalars['ID']>;
  startDate: Scalars['DateTime'];
};


export type QueryProductsAvailabilityCalendarArgs = {
  endMonth: Scalars['DateTime'];
  productIds: Array<Scalars['ID']>;
  startMonth: Scalars['DateTime'];
};


export type QueryProductsAvailableSlotsArgs = {
  endDate: Scalars['DateTime'];
  productIds: Array<Scalars['ID']>;
  skipValidation?: Maybe<Scalars['Boolean']>;
  startDate: Scalars['DateTime'];
};


export type QueryProductsFilteredArgs = {
  locations?: Maybe<Array<Scalars['String']>>;
  query: SearchQueryParameterDto;
};


export type QueryProductTrackingArgs = {
  endDate?: Maybe<Scalars['String']>;
  productId: Scalars['ID'];
  startDate?: Maybe<Scalars['String']>;
};


export type QueryProductTypesArgs = {
  productTypeId?: Maybe<Scalars['ID']>;
};


export type QueryServiceTemplateArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


export type QueryServiceTemplatesArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type ReservationTimeModel = {
  __typename?: 'ReservationTimeModel';
  end: Scalars['DateTime'];
  productId: Scalars['ID'];
  start: Scalars['DateTime'];
};

export type RoleModel = {
  __typename?: 'RoleModel';
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  privileges: Array<Scalars['String']>;
  users: Array<UserModel>;
};

export type SalesOrderAddressDto = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  zipCode: Scalars['String'];
};

export type SalesOrderAddressModel = {
  __typename?: 'SalesOrderAddressModel';
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  type: Scalars['String'];
  zipCode: Scalars['String'];
};

export type SalesOrderDto = {
  bundleIds?: Maybe<Array<Scalars['String']>>;
  channel: Scalars['String'];
  companyName: Scalars['String'];
  deliveryMethod: Scalars['String'];
  discountCode?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  endDate: Scalars['DateTime'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  personalAddress: SalesOrderAddressDto;
  phoneCode: Scalars['Float'];
  phoneNumber: Scalars['Float'];
  productId: Scalars['String'];
  projectAddress: SalesOrderAddressDto;
  serviceIds?: Maybe<Array<Scalars['String']>>;
  startDate: Scalars['DateTime'];
};

export type SalesOrderItemModel = {
  __typename?: 'SalesOrderItemModel';
  days: Scalars['Float'];
  id: Scalars['ID'];
  parentSalesOrderItem?: Maybe<SalesOrderItemModel>;
  pricePerDay: Scalars['Float'];
  product: ProductModel;
  productId: Scalars['String'];
  productManufacturer: Scalars['String'];
  productModel: Scalars['String'];
  productType: Scalars['String'];
  reservationEnd: Scalars['DateTime'];
  reservationStart: Scalars['DateTime'];
  salesOrderItemServices: Array<SalesOrderItemServiceModel>;
  taxPercentage: Scalars['Float'];
  totalPrice: Scalars['Float'];
};

export type SalesOrderItemServiceModel = {
  __typename?: 'SalesOrderItemServiceModel';
  days: Scalars['Float'];
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  pricingStructure: Scalars['String'];
  productServiceId: Scalars['String'];
  serviceName: Scalars['String'];
  taxPercentage: Scalars['Float'];
  totalPrice: Scalars['Float'];
};

export type SalesOrderModel = {
  __typename?: 'SalesOrderModel';
  businessDays: Scalars['Float'];
  channel: Scalars['String'];
  companyName: Scalars['String'];
  days: Scalars['Float'];
  deliveryMethod: Scalars['String'];
  email: Scalars['String'];
  endDate: Scalars['DateTime'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  orderId: Scalars['Float'];
  phoneCode: Scalars['Float'];
  phoneNumber: Scalars['String'];
  price: Scalars['Float'];
  salesOrderAddresses: Array<SalesOrderAddressModel>;
  salesOrderItems: Array<SalesOrderItemModel>;
  startDate: Scalars['DateTime'];
  status: Scalars['String'];
  subTotal: Scalars['Float'];
  taxPercentage: Scalars['Float'];
  vat: Scalars['Float'];
};

export type SalesOrderQueryFiltersDto = {
  channel?: Maybe<Scalars['String']>;
  companyName?: Maybe<Array<Scalars['String']>>;
  endDate?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Array<Scalars['String']>>;
  lastName?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Array<Scalars['String']>>;
  startDate?: Maybe<Scalars['DateTime']>;
};

export type SearchQueryParameterDto = {
  limit: Scalars['Float'];
  offset: Scalars['Float'];
  order: Scalars['String'];
  order_column: Scalars['String'];
  search: Scalars['String'];
};

export type ServicePriceModel = {
  __typename?: 'ServicePriceModel';
  id: Scalars['ID'];
  price: Scalars['Float'];
  pricingStructure: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type ServiceTemplateCreateDto = {
  default: Scalars['Boolean'];
  includingWeekend: Scalars['Boolean'];
  locales: Array<ServiceTemplateLocalizedDto>;
  pricingStructure: Scalars['String'];
};

export type ServiceTemplateLocalizedDto = {
  description: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type ServiceTemplateModel = {
  __typename?: 'ServiceTemplateModel';
  default: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
  includingWeekend: Scalars['Boolean'];
  name: Scalars['String'];
  pricingStructure: Scalars['String'];
};

export type ServiceTemplateUpdateDto = {
  default?: Maybe<Scalars['Boolean']>;
  includingWeekend?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<ServiceTemplateLocalizedDto>>;
  pricingStructure?: Maybe<Scalars['String']>;
};

export type ServiceUpdateDto = {
  price: Scalars['Float'];
};

export type SimpleUpdateDto = {
  __typename?: 'SimpleUpdateDto';
  isSuccessful: Scalars['Boolean'];
};

export type SpecModel = {
  __typename?: 'SpecModel';
  name: Scalars['String'];
  unit: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type TelematicsProviderDto = {
  name?: Maybe<Scalars['String']>;
};

export type TelematicsProviderModel = {
  __typename?: 'TelematicsProviderModel';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type TelematicsTariffDto = {
  monthlyCost?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  telematicsProviderId?: Maybe<Scalars['String']>;
  termMonths?: Maybe<Scalars['Float']>;
};

export type TelematiksTariffModel = {
  __typename?: 'TelematiksTariffModel';
  id: Scalars['ID'];
  monthlyCost?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  telematicsProvider?: Maybe<TelematicsProviderModel>;
  termMonths?: Maybe<Scalars['Float']>;
};

export type UpdateOrderItemServicesDto = {
  price: Scalars['Float'];
  serviceId: Scalars['String'];
};


export type UserCreateDto = {
  city: Scalars['String'];
  companyName: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  gender: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  position: Scalars['String'];
  postalCode: Scalars['String'];
  street: Scalars['String'];
};

export type UserLoggedinDto = {
  __typename?: 'UserLoggedinDto';
  companyId: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  isEmailVerified: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type UserLoginDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserModel = {
  __typename?: 'UserModel';
  company: CompanyModel;
  email: Scalars['String'];
  firstname: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  isEmailVerified: Scalars['Boolean'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  position: Scalars['String'];
  resetPasswordToken?: Maybe<Scalars['String']>;
  resetPasswordTokenExp?: Maybe<Scalars['DateTime']>;
  role: RoleModel;
};

export type UserResendVerificationDto = {
  __typename?: 'UserResendVerificationDto';
  alreadyVerified: Scalars['Boolean'];
  emailSent: Scalars['Boolean'];
};

export type UserResetPasswordDto = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type CreateProductServicesMutationVariables = Exact<{
  productId: Scalars['String'];
  productServices: Array<ProductServiceDto> | ProductServiceDto;
}>;


export type CreateProductServicesMutation = (
  { __typename?: 'Mutation' }
  & { createProductServices: Array<(
    { __typename?: 'ProductServiceModel' }
    & Pick<ProductServiceModel, 'id'>
  )> }
);

export type DeleteDocumentProductMutationVariables = Exact<{
  productId: Scalars['String'];
  documentId: Scalars['String'];
}>;


export type DeleteDocumentProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteDocumentProduct: (
    { __typename?: 'DocumentModel' }
    & Pick<DocumentModel, 'id'>
  ) }
);

export type DeleteProductServiceMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProductServiceMutation = (
  { __typename?: 'Mutation' }
  & { deleteProductService: (
    { __typename?: 'ProductServiceModel' }
    & Pick<ProductServiceModel, 'id'>
  ) }
);

export type DeleteProductServicesMutationVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteProductServicesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProductServices'>
);

export type DocumentCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentCategoryQuery = (
  { __typename?: 'Query' }
  & { documentCategory: Array<(
    { __typename?: 'DocumentCategoryModel' }
    & Pick<DocumentCategoryModel, 'id' | 'key'>
  )> }
);

export type DocumentProductsQueryVariables = Exact<{
  query: DocumentProductQueryDto;
}>;


export type DocumentProductsQuery = (
  { __typename?: 'Query' }
  & { documentProducts: Array<(
    { __typename?: 'DocumentModel' }
    & Pick<DocumentModel, 'id' | 'name' | 'uploadedAt' | 'extension' | 'path' | 'location'>
    & { documentCategory: (
      { __typename?: 'DocumentCategoryModel' }
      & Pick<DocumentCategoryModel, 'id' | 'key'>
    ) }
  )> }
);

export type LoadLecturaDataQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type LoadLecturaDataQuery = (
  { __typename?: 'Query' }
  & { loadLecturaData: (
    { __typename?: 'LecturaModel' }
    & { model: (
      { __typename?: 'LecturaModelModel' }
      & Pick<LecturaModelModel, 'id' | 'modelName' | 'dataSheetCnt' | 'firstYear' | 'lastYear' | 'inProduction' | 'standardEquipment'>
      & { manufacturer: (
        { __typename?: 'ManufacturerModel' }
        & Pick<ManufacturerModel, 'id' | 'logoFile' | 'name'>
      ), category: (
        { __typename?: 'CategoryModel' }
        & Pick<CategoryModel, 'name'>
      ), defaultImg: (
        { __typename?: 'DefaultImage' }
        & Pick<DefaultImage, 'source' | 'url'>
      ), images: Array<(
        { __typename?: 'ImageModel' }
        & Pick<ImageModel, 'source' | 'url'>
      )>, specs: Array<(
        { __typename?: 'SpecModel' }
        & Pick<SpecModel, 'name' | 'value' | 'unit'>
      )>, dataSheets: Array<(
        { __typename?: 'DataSheetModel' }
        & Pick<DataSheetModel, 'region' | 'url' | 'language' | 'type'>
      )> }
    ), regressor: (
      { __typename?: 'LecturaRegressorModel' }
      & { data: Array<(
        { __typename?: 'DataModel' }
        & Pick<DataModel, 'id' | 'price' | 'currency' | 'operating_hours' | 'found_on_year' | 'serial_number' | 'country' | 'age_in_months'>
      )>, curves: Array<(
        { __typename?: 'CurveModel' }
        & Pick<CurveModel, 'observation' | 'name' | 'quality'>
        & { points: Array<(
          { __typename?: 'PointModel' }
          & Pick<PointModel, 'age' | 'prediction' | 'lowCI' | 'highCI'>
        )> }
      )> }
    ) }
  ) }
);

export type ProductTrackingQueryVariables = Exact<{
  productId: Scalars['ID'];
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
}>;


export type ProductTrackingQuery = (
  { __typename?: 'Query' }
  & { productTracking: (
    { __typename?: 'ProductTrackingModel' }
    & Pick<ProductTrackingModel, 'id' | 'unitSerialNumber' | 'last24Hours'>
    & { product: (
      { __typename?: 'ProductModel' }
      & Pick<ProductModel, 'id' | 'operatingHours' | 'idleHours' | 'locationLatitude' | 'locationLongitude' | 'locationTimestamp' | 'locationFormattedAddress' | 'unitInfo' | 'unitExtendedInfo'>
      & { productModel: (
        { __typename?: 'ProductModelModel' }
        & Pick<ProductModelModel, 'id' | 'name'>
        & { type: (
          { __typename?: 'ProductTypeModel' }
          & Pick<ProductTypeModel, 'name'>
        ) }
      ) }
    ), workingHours: Array<(
      { __typename?: 'ProductWorkingHourModel' }
      & Pick<ProductWorkingHourModel, 'idleHours' | 'operatingHours' | 'date'>
    )> }
  ) }
);

export type GetProductBglDataQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type GetProductBglDataQuery = (
  { __typename?: 'Query' }
  & { productBglData: Array<(
    { __typename?: 'ProductBglDataModel' }
    & Pick<ProductBglDataModel, 'id' | 'bglNumberType'>
    & { bglData: (
      { __typename?: 'BglDataModel' }
      & Pick<BglDataModel, 'id' | 'bglNumber' | 'shortName' | 'version' | 'description' | 'parameters' | 'values'>
    ) }
  )> }
);

export type ProductInformationFragment = (
  { __typename?: 'ProductModel' }
  & Pick<ProductModel, 'id' | 'serialNumber' | 'productionYear' | 'priceDaily' | 'priceWeekly' | 'priceMonthly' | 'purchasePrice' | 'deposit' | 'leasingRate' | 'interest' | 'residualValue' | 'instruction' | 'workClothing' | 'notes'>
  & { productModel: (
    { __typename?: 'ProductModelModel' }
    & Pick<ProductModelModel, 'name' | 'attributes'>
    & { type: (
      { __typename?: 'ProductTypeModel' }
      & Pick<ProductTypeModel, 'name'>
      & { attributes?: Maybe<Array<(
        { __typename?: 'ProductTypeAttributeModel' }
        & Pick<ProductTypeAttributeModel, 'key' | 'unit'>
      )>> }
    ), manufacturer: (
      { __typename?: 'ProductManufacturerModel' }
      & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
    ) }
  ), productOwner: (
    { __typename?: 'ProductOwnerModel' }
    & Pick<ProductOwnerModel, 'name' | 'isFlexcavo'>
  ), location?: Maybe<(
    { __typename?: 'LocationModel' }
    & Pick<LocationModel, 'name' | 'street' | 'city'>
  )> }
);

export type ProductsModelsQueryVariables = Exact<{
  id: Scalars['ID'];
  fromDate: Scalars['DateTime'];
}>;


export type ProductsModelsQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'ProductModel' }
    & { productModel: (
      { __typename?: 'ProductModelModel' }
      & Pick<ProductModelModel, 'name'>
      & { type: (
        { __typename?: 'ProductTypeModel' }
        & Pick<ProductTypeModel, 'name'>
      ), manufacturer: (
        { __typename?: 'ProductManufacturerModel' }
        & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
      ) }
    ), productOwner: (
      { __typename?: 'ProductOwnerModel' }
      & Pick<ProductOwnerModel, 'name' | 'isFlexcavo'>
    ), availability: (
      { __typename?: 'ProductAvailabilityStatusModel' }
      & Pick<ProductAvailabilityStatusModel, 'status' | 'nextReservationStart' | 'nextAvailableDate'>
    ) }
  ) }
);

export type UpdateDocumentMutationVariables = Exact<{
  id: Scalars['String'];
  documentProduct: DocumentProductUpdateDto;
}>;


export type UpdateDocumentMutation = (
  { __typename?: 'Mutation' }
  & { updateDocumentProduct: (
    { __typename?: 'DocumentModel' }
    & Pick<DocumentModel, 'id' | 'name'>
  ) }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['String'];
  product: ProductUpdateDto;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct: (
    { __typename?: 'ProductModel' }
    & ProductInformationFragment
  ) }
);

export type UpdateProductServiceMutationVariables = Exact<{
  id: Scalars['String'];
  service: ServiceUpdateDto;
}>;


export type UpdateProductServiceMutation = (
  { __typename?: 'Mutation' }
  & { updateProductService: (
    { __typename?: 'ProductServiceModel' }
    & Pick<ProductServiceModel, 'id'>
  ) }
);

export type VerifyResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { verifyResetPassword: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type CheckUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckUserQuery = (
  { __typename?: 'Query' }
  & { checkUser: (
    { __typename?: 'UserModel' }
    & Pick<UserModel, 'email' | 'isEmailVerified'>
  ) }
);

export type LoginMutationVariables = Exact<{
  user: UserLoginDto;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'UserLoggedinDto' }
    & Pick<UserLoggedinDto, 'token' | 'email' | 'isEmailVerified' | 'id'>
  ) }
);

export type RegistrationMutationVariables = Exact<{
  user: UserCreateDto;
}>;


export type RegistrationMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'UserLoggedinDto' }
    & Pick<UserLoggedinDto, 'email'>
  ) }
);

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { requestResetPassword: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type ResendVerificationEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResendVerificationEmailMutation = (
  { __typename?: 'Mutation' }
  & { resendVerificationEmail: (
    { __typename?: 'UserResendVerificationDto' }
    & Pick<UserResendVerificationDto, 'alreadyVerified' | 'emailSent'>
  ) }
);

export type ResetPasswordMutationVariables = Exact<{
  user: UserResetPasswordDto;
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & { verifyEmail: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type CustomerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CustomerQuery = (
  { __typename?: 'Query' }
  & { customer: (
    { __typename?: 'CompanyModel' }
    & Pick<CompanyModel, 'id' | 'name' | 'discount'>
    & { users: Array<(
      { __typename?: 'UserModel' }
      & Pick<UserModel, 'id' | 'email' | 'firstname' | 'lastname' | 'isEmailVerified' | 'phone' | 'phoneCode'>
    )>, addresses: Array<(
      { __typename?: 'AddressModel' }
      & Pick<AddressModel, 'id' | 'street' | 'city' | 'postalCode' | 'country'>
    )> }
  ) }
);

export type ListCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCustomersQuery = (
  { __typename?: 'Query' }
  & { listCustomers: Array<(
    { __typename?: 'CompanyModel' }
    & Pick<CompanyModel, 'id' | 'name'>
    & { users: Array<(
      { __typename?: 'UserModel' }
      & Pick<UserModel, 'email' | 'firstname' | 'lastname' | 'isEmailVerified'>
    )>, addresses: Array<(
      { __typename?: 'AddressModel' }
      & Pick<AddressModel, 'street' | 'city' | 'postalCode'>
    )> }
  )> }
);

export type SetCustomerDiscountMutationVariables = Exact<{
  discountData: DiscountUpdateDto;
}>;


export type SetCustomerDiscountMutation = (
  { __typename?: 'Mutation' }
  & { setCustomerDiscount: (
    { __typename?: 'DiscountSuccessDto' }
    & Pick<DiscountSuccessDto, 'discount'>
  ) }
);

export type UpdateCustomerMutationVariables = Exact<{
  customer: CustomerUpdateDto;
}>;


export type UpdateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomer: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type LocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LocationQuery = (
  { __typename?: 'Query' }
  & { location: (
    { __typename?: 'LocationModel' }
    & Pick<LocationModel, 'id' | 'city' | 'dieselPrice' | 'gasolinePrice' | 'name' | 'postalCode' | 'street' | 'telephone'>
    & { operatingHour: Array<(
      { __typename?: 'OperatingHourModel' }
      & Pick<OperatingHourModel, 'id' | 'weekDay' | 'startTime' | 'endTime'>
    )> }
  ) }
);

export type SaveLocationMutationVariables = Exact<{
  locationInput: LocationCreateDto;
  operatingHourInput: Array<OperatingHoursCreateDto> | OperatingHoursCreateDto;
}>;


export type SaveLocationMutation = (
  { __typename?: 'Mutation' }
  & { saveLocation: (
    { __typename?: 'LocationModel' }
    & Pick<LocationModel, 'id'>
    & { operatingHour: Array<(
      { __typename?: 'OperatingHourModel' }
      & Pick<OperatingHourModel, 'weekDay' | 'startTime' | 'endTime'>
    )> }
  ) }
);

export type UpdateLocationMutationVariables = Exact<{
  id: Scalars['ID'];
  locationInput: LocationCreateDto;
  operatingHourInput: Array<OperatingHoursCreateDto> | OperatingHoursCreateDto;
}>;


export type UpdateLocationMutation = (
  { __typename?: 'Mutation' }
  & { updateLocation: (
    { __typename?: 'LocationModel' }
    & Pick<LocationModel, 'id'>
    & { operatingHour: Array<(
      { __typename?: 'OperatingHourModel' }
      & Pick<OperatingHourModel, 'weekDay' | 'startTime' | 'endTime'>
    )> }
  ) }
);

export type CreateOrderMutationVariables = Exact<{
  order: SalesOrderDto;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder: (
    { __typename?: 'SalesOrderModel' }
    & Pick<SalesOrderModel, 'id'>
  ) }
);

export type LocationsListQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsListQuery = (
  { __typename?: 'Query' }
  & { locations: Array<(
    { __typename?: 'LocationModel' }
    & Pick<LocationModel, 'id' | 'city' | 'dieselPrice' | 'gasolinePrice' | 'name' | 'postalCode' | 'street' | 'telephone'>
  )> }
);

export type OrderPriceQueryVariables = Exact<{
  productId: Scalars['ID'];
  attachmentIds?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  serviceIds?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
}>;


export type OrderPriceQuery = (
  { __typename?: 'Query' }
  & { orderPrice: (
    { __typename?: 'OrderPriceModel' }
    & Pick<OrderPriceModel, 'days' | 'businessDays' | 'orderPrice' | 'orderSubTotal' | 'orderVat'>
    & { productPrice: (
      { __typename?: 'ProductPriceModel' }
      & Pick<ProductPriceModel, 'id' | 'pricePerDay' | 'totalPrice'>
    ), attachmentsPrices: Array<(
      { __typename?: 'ProductPriceModel' }
      & Pick<ProductPriceModel, 'id' | 'pricePerDay' | 'totalPrice'>
    )>, servicesPrices: Array<(
      { __typename?: 'ServicePriceModel' }
      & Pick<ServicePriceModel, 'id' | 'price' | 'pricingStructure' | 'totalPrice'>
    )> }
  ) }
);

export type ProductAttachmentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductAttachmentsQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'ProductModel' }
    & Pick<ProductModel, 'id'>
    & { productModel: (
      { __typename?: 'ProductModelModel' }
      & Pick<ProductModelModel, 'name' | 'attributes' | 'key'>
      & { type: (
        { __typename?: 'ProductTypeModel' }
        & Pick<ProductTypeModel, 'name'>
      ), manufacturer: (
        { __typename?: 'ProductManufacturerModel' }
        & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
      ), productModelBundles: Array<(
        { __typename?: 'ProductModelBundleModel' }
        & Pick<ProductModelBundleModel, 'id' | 'name' | 'attributes'>
        & { type: (
          { __typename?: 'ProductTypeModel' }
          & Pick<ProductTypeModel, 'name'>
        ), manufacturer: (
          { __typename?: 'ProductManufacturerModel' }
          & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
        ), products: Array<(
          { __typename?: 'ProductModel' }
          & Pick<ProductModel, 'id' | 'priceDaily' | 'priceWeekly' | 'priceMonthly'>
          & { location?: Maybe<(
            { __typename?: 'LocationModel' }
            & Pick<LocationModel, 'id'>
          )> }
        )> }
      )>, documents: Array<(
        { __typename?: 'DocumentModel' }
        & Pick<DocumentModel, 'id' | 'name' | 'extension' | 'mimeType' | 'path' | 'location'>
        & { documentCategory: (
          { __typename?: 'DocumentCategoryModel' }
          & Pick<DocumentCategoryModel, 'id' | 'key'>
        ) }
      )> }
    ), services: Array<(
      { __typename?: 'ProductServiceModel' }
      & Pick<ProductServiceModel, 'id' | 'price'>
      & { serviceTemplate: (
        { __typename?: 'ServiceTemplateModel' }
        & Pick<ServiceTemplateModel, 'id' | 'name' | 'description' | 'pricingStructure'>
      ) }
    )>, location?: Maybe<(
      { __typename?: 'LocationModel' }
      & Pick<LocationModel, 'id' | 'name'>
      & { operatingHour: Array<(
        { __typename?: 'OperatingHourModel' }
        & Pick<OperatingHourModel, 'startTime' | 'endTime' | 'weekDay'>
      )> }
    )> }
  ) }
);

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'ProductModel' }
    & Pick<ProductModel, 'id' | 'serialNumber' | 'productionYear' | 'priceDaily' | 'priceWeekly' | 'priceMonthly' | 'purchasePrice' | 'deposit' | 'leasingRate' | 'interest' | 'residualValue' | 'instruction' | 'workClothing' | 'notes' | 'unitSerialNumber'>
    & { productModel: (
      { __typename?: 'ProductModelModel' }
      & Pick<ProductModelModel, 'lecturaId' | 'lecturaModel' | 'name' | 'attributes' | 'key'>
      & { type: (
        { __typename?: 'ProductTypeModel' }
        & Pick<ProductTypeModel, 'name'>
        & { attributes?: Maybe<Array<(
          { __typename?: 'ProductTypeAttributeModel' }
          & Pick<ProductTypeAttributeModel, 'key' | 'unit'>
        )>> }
      ), manufacturer: (
        { __typename?: 'ProductManufacturerModel' }
        & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
      ) }
    ), productOwner: (
      { __typename?: 'ProductOwnerModel' }
      & Pick<ProductOwnerModel, 'name' | 'isFlexcavo'>
    ), location?: Maybe<(
      { __typename?: 'LocationModel' }
      & Pick<LocationModel, 'id' | 'name' | 'street' | 'city'>
    )> }
  ) }
);

export type ValidateDiscountCodeMutationVariables = Exact<{
  discountCode: Scalars['String'];
}>;


export type ValidateDiscountCodeMutation = (
  { __typename?: 'Mutation' }
  & { validateDiscountCode: (
    { __typename?: 'DiscountModel' }
    & Pick<DiscountModel, 'id' | 'type' | 'code' | 'value' | 'currency' | 'isActive'>
  ) }
);

export type CreateOwnerMutationVariables = Exact<{
  owner: ProductOwnerDto;
}>;


export type CreateOwnerMutation = (
  { __typename?: 'Mutation' }
  & { createOwner: (
    { __typename?: 'ProductOwnerModel' }
    & Pick<ProductOwnerModel, 'id' | 'name'>
  ) }
);

export type CreateProductMutationVariables = Exact<{
  product: ProductDto;
  productServices: Array<ProductServiceDto> | ProductServiceDto;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'ProductModel' }
    & Pick<ProductModel, 'id'>
  ) }
);

export type ProductManufacturersQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type ProductManufacturersQuery = (
  { __typename?: 'Query' }
  & { productManufacturers: Array<(
    { __typename?: 'ProductManufacturerModel' }
    & Pick<ProductManufacturerModel, 'id' | 'name' | 'abbreviation'>
  )> }
);

export type ProductFragment = (
  { __typename?: 'ProductModel' }
  & Pick<ProductModel, 'id' | 'serialNumber' | 'productionYear'>
  & { productModel: (
    { __typename?: 'ProductModelModel' }
    & Pick<ProductModelModel, 'name'>
    & { type: (
      { __typename?: 'ProductTypeModel' }
      & Pick<ProductTypeModel, 'name'>
    ), manufacturer: (
      { __typename?: 'ProductManufacturerModel' }
      & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
    ) }
  ), productOwner: (
    { __typename?: 'ProductOwnerModel' }
    & Pick<ProductOwnerModel, 'name'>
  ) }
);

export type ProductModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductModelsQuery = (
  { __typename?: 'Query' }
  & { productModels: Array<(
    { __typename?: 'ProductModelModel' }
    & Pick<ProductModelModel, 'id' | 'name' | 'hasVin' | 'attributes' | 'lecturaModel' | 'lecturaId'>
    & { documents: Array<(
      { __typename?: 'DocumentModel' }
      & Pick<DocumentModel, 'id' | 'name' | 'extension' | 'mimeType' | 'path' | 'location'>
      & { documentCategory: (
        { __typename?: 'DocumentCategoryModel' }
        & Pick<DocumentCategoryModel, 'key'>
      ) }
    )>, manufacturer: (
      { __typename?: 'ProductManufacturerModel' }
      & Pick<ProductManufacturerModel, 'id' | 'name' | 'abbreviation'>
    ), type: (
      { __typename?: 'ProductTypeModel' }
      & Pick<ProductTypeModel, 'id' | 'name'>
      & { attributes?: Maybe<Array<(
        { __typename?: 'ProductTypeAttributeModel' }
        & Pick<ProductTypeAttributeModel, 'id' | 'key' | 'name' | 'isRequired' | 'type' | 'unit' | 'minValue' | 'maxValue' | 'maxLength'>
      )>> }
    ), productModelBundles: Array<(
      { __typename?: 'ProductModelBundleModel' }
      & Pick<ProductModelBundleModel, 'id' | 'name'>
      & { manufacturer: (
        { __typename?: 'ProductManufacturerModel' }
        & Pick<ProductManufacturerModel, 'id' | 'name'>
      ), type: (
        { __typename?: 'ProductTypeModel' }
        & Pick<ProductTypeModel, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type ProductOwnerFragment = (
  { __typename?: 'ProductOwnerModel' }
  & Pick<ProductOwnerModel, 'id' | 'name' | 'isFlexcavo'>
);

export type ProductOwnersQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductOwnersQuery = (
  { __typename?: 'Query' }
  & { productOwners: Array<(
    { __typename?: 'ProductOwnerModel' }
    & Pick<ProductOwnerModel, 'id' | 'name' | 'isFlexcavo'>
  )> }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'ProductModel' }
    & Pick<ProductModel, 'id' | 'serialNumber' | 'productionYear'>
    & { productModel: (
      { __typename?: 'ProductModelModel' }
      & Pick<ProductModelModel, 'lecturaId' | 'lecturaModel' | 'name' | 'key'>
      & { type: (
        { __typename?: 'ProductTypeModel' }
        & Pick<ProductTypeModel, 'name'>
      ), manufacturer: (
        { __typename?: 'ProductManufacturerModel' }
        & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
      ) }
    ), productOwner: (
      { __typename?: 'ProductOwnerModel' }
      & Pick<ProductOwnerModel, 'name' | 'isFlexcavo'>
    ) }
  )> }
);

export type CreateProductModelMutationVariables = Exact<{
  productModel: ProductModelDto;
}>;


export type CreateProductModelMutation = (
  { __typename?: 'Mutation' }
  & { createProductModel: (
    { __typename?: 'ProductModelModel' }
    & Pick<ProductModelModel, 'id'>
  ) }
);

export type ExtendedOrderPriceQueryVariables = Exact<{
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
}>;


export type ExtendedOrderPriceQuery = (
  { __typename?: 'Query' }
  & { extendedOrderPrice: (
    { __typename?: 'OrderPriceModel' }
    & Pick<OrderPriceModel, 'days' | 'businessDays' | 'orderPrice' | 'orderSubTotal' | 'orderVat'>
    & { productPrice: (
      { __typename?: 'ProductPriceModel' }
      & Pick<ProductPriceModel, 'id' | 'pricePerDay' | 'totalPrice'>
    ), attachmentsPrices: Array<(
      { __typename?: 'ProductPriceModel' }
      & Pick<ProductPriceModel, 'id' | 'pricePerDay' | 'totalPrice'>
    )>, servicesPrices: Array<(
      { __typename?: 'ServicePriceModel' }
      & Pick<ServicePriceModel, 'id' | 'price' | 'pricingStructure' | 'totalPrice'>
    )> }
  ) }
);

export type ExtendOrderPeriodMutationVariables = Exact<{
  order: ExtendSaleOrderDto;
}>;


export type ExtendOrderPeriodMutation = (
  { __typename?: 'Mutation' }
  & { extendOrderPeriod: (
    { __typename?: 'SalesOrderModel' }
    & Pick<SalesOrderModel, 'id'>
  ) }
);

export type OrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderQuery = (
  { __typename?: 'Query' }
  & { order: (
    { __typename?: 'SalesOrderModel' }
    & Pick<SalesOrderModel, 'id' | 'firstName' | 'lastName' | 'email' | 'companyName' | 'orderId' | 'location' | 'price' | 'subTotal' | 'vat' | 'channel' | 'startDate' | 'endDate' | 'deliveryMethod' | 'status'>
    & { salesOrderItems: Array<(
      { __typename?: 'SalesOrderItemModel' }
      & Pick<SalesOrderItemModel, 'id' | 'days' | 'pricePerDay' | 'productModel' | 'productType' | 'productManufacturer' | 'totalPrice'>
      & { salesOrderItemServices: Array<(
        { __typename?: 'SalesOrderItemServiceModel' }
        & Pick<SalesOrderItemServiceModel, 'id' | 'serviceName' | 'price' | 'totalPrice' | 'pricingStructure' | 'productServiceId'>
      )>, product: (
        { __typename?: 'ProductModel' }
        & Pick<ProductModel, 'id'>
        & { services: Array<(
          { __typename?: 'ProductServiceModel' }
          & Pick<ProductServiceModel, 'id' | 'price'>
          & { serviceTemplate: (
            { __typename?: 'ServiceTemplateModel' }
            & Pick<ServiceTemplateModel, 'id' | 'name' | 'pricingStructure' | 'default'>
          ) }
        )>, productModel: (
          { __typename?: 'ProductModelModel' }
          & Pick<ProductModelModel, 'id' | 'attributes' | 'name'>
          & { manufacturer: (
            { __typename?: 'ProductManufacturerModel' }
            & Pick<ProductManufacturerModel, 'id' | 'name' | 'abbreviation'>
          ), type: (
            { __typename?: 'ProductTypeModel' }
            & Pick<ProductTypeModel, 'name'>
          ) }
        ), location?: Maybe<(
          { __typename?: 'LocationModel' }
          & Pick<LocationModel, 'id' | 'name'>
          & { operatingHour: Array<(
            { __typename?: 'OperatingHourModel' }
            & Pick<OperatingHourModel, 'startTime' | 'endTime' | 'weekDay'>
          )> }
        )> }
      ), parentSalesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemModel' }
        & Pick<SalesOrderItemModel, 'id'>
      )> }
    )>, salesOrderAddresses: Array<(
      { __typename?: 'SalesOrderAddressModel' }
      & Pick<SalesOrderAddressModel, 'id' | 'address' | 'city' | 'type'>
    )> }
  ) }
);

export type OrderProductsAvailabilityCalendarQueryVariables = Exact<{
  endMonth: Scalars['DateTime'];
  orderEndDate: Scalars['DateTime'];
  productIds: Array<Scalars['ID']> | Scalars['ID'];
  startMonth: Scalars['DateTime'];
}>;


export type OrderProductsAvailabilityCalendarQuery = (
  { __typename?: 'Query' }
  & { orderProductsAvailabilityCalendar: Array<(
    { __typename?: 'OrderProductsAvailabilityCalendarModel' }
    & Pick<OrderProductsAvailabilityCalendarModel, 'date' | 'isAvailable'>
  )> }
);

export type OrdersQueryVariables = Exact<{
  filters?: Maybe<SalesOrderQueryFiltersDto>;
  searchText?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
}>;


export type OrdersQuery = (
  { __typename?: 'Query' }
  & { orders: Array<(
    { __typename?: 'SalesOrderModel' }
    & Pick<SalesOrderModel, 'id' | 'firstName' | 'lastName' | 'orderId' | 'location' | 'price' | 'channel' | 'startDate' | 'endDate' | 'status'>
    & { salesOrderAddresses: Array<(
      { __typename?: 'SalesOrderAddressModel' }
      & Pick<SalesOrderAddressModel, 'id' | 'address' | 'city' | 'type'>
    )>, salesOrderItems: Array<(
      { __typename?: 'SalesOrderItemModel' }
      & Pick<SalesOrderItemModel, 'productModel' | 'productType' | 'productManufacturer'>
      & { parentSalesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemModel' }
        & Pick<SalesOrderItemModel, 'id'>
      )> }
    )> }
  )> }
);

export type ProductsAvailabilityCalendarQueryVariables = Exact<{
  startMonth: Scalars['DateTime'];
  endMonth: Scalars['DateTime'];
  productIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type ProductsAvailabilityCalendarQuery = (
  { __typename?: 'Query' }
  & { productsAvailabilityCalendar: Array<(
    { __typename?: 'ProductAvailabilityCalendarModel' }
    & Pick<ProductAvailabilityCalendarModel, 'productId'>
    & { days: Array<(
      { __typename?: 'ProductAvailabilityCalendarDayModel' }
      & Pick<ProductAvailabilityCalendarDayModel, 'date' | 'type'>
      & { slots?: Maybe<Array<(
        { __typename?: 'PeriodModel' }
        & Pick<PeriodModel, 'start' | 'end'>
      )>> }
    )> }
  )> }
);

export type UpdateOrderItemServicesMutationVariables = Exact<{
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
  services: Array<UpdateOrderItemServicesDto> | UpdateOrderItemServicesDto;
}>;


export type UpdateOrderItemServicesMutation = (
  { __typename?: 'Mutation' }
  & { updateOrderServices: (
    { __typename?: 'SalesOrderModel' }
    & Pick<SalesOrderModel, 'id' | 'price'>
  ) }
);

export type OrderStatusUpdateMutationVariables = Exact<{
  orderStatusUpdateInput: OrderStatusUpdateDto;
}>;


export type OrderStatusUpdateMutation = (
  { __typename?: 'Mutation' }
  & { orderStatusUpdate: (
    { __typename?: 'SalesOrderModel' }
    & Pick<SalesOrderModel, 'id'>
  ) }
);

export type AccountInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountInfoQuery = (
  { __typename?: 'Query' }
  & { getAccount: (
    { __typename?: 'CompanyModel' }
    & Pick<CompanyModel, 'id' | 'name'>
    & { users: Array<(
      { __typename?: 'UserModel' }
      & Pick<UserModel, 'id' | 'email' | 'firstname' | 'lastname' | 'position' | 'gender' | 'phone' | 'phoneCode'>
    )>, addresses: Array<(
      { __typename?: 'AddressModel' }
      & Pick<AddressModel, 'id' | 'street' | 'city' | 'postalCode' | 'country'>
    )> }
  ) }
);

export type UpdateAccountMutationVariables = Exact<{
  account: AccountUpdateDto;
}>;


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type CreateDiscountMutationVariables = Exact<{
  discount: DiscountCreateDto;
}>;


export type CreateDiscountMutation = (
  { __typename?: 'Mutation' }
  & { createDiscount: (
    { __typename?: 'DiscountModel' }
    & Pick<DiscountModel, 'id' | 'code' | 'type' | 'value' | 'currency' | 'isActive'>
  ) }
);

export type DeleteDiscountMutationVariables = Exact<{
  discountId: Scalars['ID'];
}>;


export type DeleteDiscountMutation = (
  { __typename?: 'Mutation' }
  & { deleteDiscount: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type ListDiscountsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDiscountsQuery = (
  { __typename?: 'Query' }
  & { listDiscounts: Array<(
    { __typename?: 'DiscountModel' }
    & Pick<DiscountModel, 'id' | 'code' | 'type' | 'value' | 'currency' | 'isActive'>
  )> }
);

export type UpdateDiscountStatusMutationVariables = Exact<{
  discountId: Scalars['ID'];
  isActive: Scalars['Boolean'];
}>;


export type UpdateDiscountStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateDiscountStatus: (
    { __typename?: 'SimpleUpdateDto' }
    & Pick<SimpleUpdateDto, 'isSuccessful'>
  ) }
);

export type DeleteServiceTemplateMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteServiceTemplateMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteServiceTemplate'>
);

export type SaveServiceTemplateMutationVariables = Exact<{
  serviceTemplateInput: ServiceTemplateCreateDto;
}>;


export type SaveServiceTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createServiceTemplate: (
    { __typename?: 'ServiceTemplateModel' }
    & Pick<ServiceTemplateModel, 'id'>
  ) }
);

export type UpdateServiceTemplateMutationVariables = Exact<{
  id: Scalars['ID'];
  serviceTemplateInput: ServiceTemplateUpdateDto;
}>;


export type UpdateServiceTemplateMutation = (
  { __typename?: 'Mutation' }
  & { updateServiceTemplate: (
    { __typename?: 'ServiceTemplateModel' }
    & Pick<ServiceTemplateModel, 'id'>
  ) }
);

export type ServiceTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServiceTemplatesQuery = (
  { __typename?: 'Query' }
  & { serviceTemplates: Array<(
    { __typename?: 'ServiceTemplateModel' }
    & Pick<ServiceTemplateModel, 'id' | 'name' | 'pricingStructure' | 'default' | 'description' | 'includingWeekend'>
  )> }
);

export type ProductModelByFilterQueryVariables = Exact<{
  filter: ProductModelFilterDto;
  locationId?: Maybe<Scalars['ID']>;
  ownerId?: Maybe<Scalars['ID']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
}>;


export type ProductModelByFilterQuery = (
  { __typename?: 'Query' }
  & { productModels: Array<(
    { __typename?: 'ProductModelModel' }
    & Pick<ProductModelModel, 'id' | 'lecturaId' | 'lecturaModel' | 'name' | 'attributes' | 'key'>
    & { type: (
      { __typename?: 'ProductTypeModel' }
      & Pick<ProductTypeModel, 'name'>
      & { attributes?: Maybe<Array<(
        { __typename?: 'ProductTypeAttributeModel' }
        & Pick<ProductTypeAttributeModel, 'key' | 'unit'>
      )>> }
    ), manufacturer: (
      { __typename?: 'ProductManufacturerModel' }
      & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
    ), products: Array<(
      { __typename?: 'ProductModel' }
      & Pick<ProductModel, 'id' | 'serialNumber' | 'priceMonthly' | 'priceWeekly' | 'priceDaily'>
      & { location?: Maybe<(
        { __typename?: 'LocationModel' }
        & Pick<LocationModel, 'id' | 'name'>
      )> }
    )>, documents: Array<(
      { __typename?: 'DocumentModel' }
      & Pick<DocumentModel, 'id' | 'name' | 'extension' | 'mimeType' | 'path' | 'location'>
      & { documentCategory: (
        { __typename?: 'DocumentCategoryModel' }
        & Pick<DocumentCategoryModel, 'id' | 'key'>
      ) }
    )> }
  )> }
);

export type ProductTypesQueryVariables = Exact<{
  productTypeId?: Maybe<Scalars['ID']>;
  productModelId?: Maybe<Scalars['ID']>;
  locationId?: Maybe<Scalars['ID']>;
  ownerId?: Maybe<Scalars['ID']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
}>;


export type ProductTypesQuery = (
  { __typename?: 'Query' }
  & { productTypes: Array<(
    { __typename?: 'ProductTypeModel' }
    & Pick<ProductTypeModel, 'id' | 'name'>
    & { productModel: Array<(
      { __typename?: 'ProductModelModel' }
      & Pick<ProductModelModel, 'id' | 'name' | 'attributes' | 'key' | 'hasVin'>
      & { manufacturer: (
        { __typename?: 'ProductManufacturerModel' }
        & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
      ), products: Array<(
        { __typename?: 'ProductModel' }
        & Pick<ProductModel, 'id' | 'serialNumber' | 'priceMonthly'>
        & { location?: Maybe<(
          { __typename?: 'LocationModel' }
          & Pick<LocationModel, 'id' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type ProductsAvailabilityQueryVariables = Exact<{
  fromDate: Scalars['DateTime'];
}>;


export type ProductsAvailabilityQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'ProductModel' }
    & Pick<ProductModel, 'id'>
    & { availability: (
      { __typename?: 'ProductAvailabilityStatusModel' }
      & Pick<ProductAvailabilityStatusModel, 'status' | 'nextAvailableDate' | 'nextReservationStart'>
    ) }
  )> }
);

export type ProductsFilteredQueryVariables = Exact<{
  query: SearchQueryParameterDto;
  locations?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ProductsFilteredQuery = (
  { __typename?: 'Query' }
  & { productsFiltered: (
    { __typename?: 'FilteredProductsModel' }
    & Pick<FilteredProductsModel, 'totalCount'>
    & { filteredProducts: Array<(
      { __typename?: 'ProductModel' }
      & Pick<ProductModel, 'id' | 'serialNumber' | 'productionYear'>
      & { location?: Maybe<(
        { __typename?: 'LocationModel' }
        & Pick<LocationModel, 'id' | 'name' | 'city' | 'street'>
      )>, productModel: (
        { __typename?: 'ProductModelModel' }
        & Pick<ProductModelModel, 'name'>
        & { type: (
          { __typename?: 'ProductTypeModel' }
          & Pick<ProductTypeModel, 'name'>
        ), manufacturer: (
          { __typename?: 'ProductManufacturerModel' }
          & Pick<ProductManufacturerModel, 'name' | 'abbreviation'>
        ) }
      ), productOwner: (
        { __typename?: 'ProductOwnerModel' }
        & Pick<ProductOwnerModel, 'name' | 'isFlexcavo'>
      ) }
    )> }
  ) }
);

export type RentalInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RentalInfoQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'ProductModel' }
    & Pick<ProductModel, 'id' | 'priceDaily' | 'priceWeekly' | 'priceMonthly' | 'productLeadTime' | 'serviceTime' | 'calculateWeekend'>
    & { productModel: (
      { __typename?: 'ProductModelModel' }
      & Pick<ProductModelModel, 'modelLeadTime'>
      & { productModelBundles: Array<(
        { __typename?: 'ProductModelBundleModel' }
        & Pick<ProductModelBundleModel, 'id' | 'name'>
        & { type: (
          { __typename?: 'ProductTypeModel' }
          & Pick<ProductTypeModel, 'id' | 'name'>
        ), manufacturer: (
          { __typename?: 'ProductManufacturerModel' }
          & Pick<ProductManufacturerModel, 'id' | 'name'>
        ) }
      )> }
    ), services: Array<(
      { __typename?: 'ProductServiceModel' }
      & Pick<ProductServiceModel, 'id' | 'price'>
      & { serviceTemplate: (
        { __typename?: 'ServiceTemplateModel' }
        & Pick<ServiceTemplateModel, 'id' | 'name' | 'description' | 'pricingStructure'>
      ) }
    )> }
  ) }
);

export const ProductInformationFragmentDoc = gql`
    fragment productInformation on ProductModel {
  id
  serialNumber
  productionYear
  priceDaily
  priceWeekly
  priceMonthly
  productModel {
    name
    attributes
    type {
      name
      attributes {
        key
        unit
      }
    }
    manufacturer {
      name
      abbreviation
    }
  }
  productOwner {
    name
    isFlexcavo
  }
  location {
    name
    street
    city
  }
  purchasePrice
  deposit
  leasingRate
  interest
  residualValue
  instruction
  workClothing
  notes
}
    `;
export const ProductFragmentDoc = gql`
    fragment product on ProductModel {
  id
  serialNumber
  productionYear
  productModel {
    name
    type {
      name
    }
    manufacturer {
      name
      abbreviation
    }
  }
  productOwner {
    name
  }
}
    `;
export const ProductOwnerFragmentDoc = gql`
    fragment productOwner on ProductOwnerModel {
  id
  name
  isFlexcavo
}
    `;
export const CreateProductServicesDocument = gql`
    mutation createProductServices($productId: String!, $productServices: [ProductServiceDto!]!) {
  createProductServices(productId: $productId, productServices: $productServices) {
    id
  }
}
    `;
export type CreateProductServicesMutationFn = Apollo.MutationFunction<CreateProductServicesMutation, CreateProductServicesMutationVariables>;

/**
 * __useCreateProductServicesMutation__
 *
 * To run a mutation, you first call `useCreateProductServicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductServicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductServicesMutation, { data, loading, error }] = useCreateProductServicesMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      productServices: // value for 'productServices'
 *   },
 * });
 */
export function useCreateProductServicesMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductServicesMutation, CreateProductServicesMutationVariables>) {
        return Apollo.useMutation<CreateProductServicesMutation, CreateProductServicesMutationVariables>(CreateProductServicesDocument, baseOptions);
      }
export type CreateProductServicesMutationHookResult = ReturnType<typeof useCreateProductServicesMutation>;
export type CreateProductServicesMutationResult = Apollo.MutationResult<CreateProductServicesMutation>;
export type CreateProductServicesMutationOptions = Apollo.BaseMutationOptions<CreateProductServicesMutation, CreateProductServicesMutationVariables>;
export const DeleteDocumentProductDocument = gql`
    mutation deleteDocumentProduct($productId: String!, $documentId: String!) {
  deleteDocumentProduct(productId: $productId, documentId: $documentId) {
    id
  }
}
    `;
export type DeleteDocumentProductMutationFn = Apollo.MutationFunction<DeleteDocumentProductMutation, DeleteDocumentProductMutationVariables>;

/**
 * __useDeleteDocumentProductMutation__
 *
 * To run a mutation, you first call `useDeleteDocumentProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDocumentProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDocumentProductMutation, { data, loading, error }] = useDeleteDocumentProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      documentId: // value for 'documentId'
 *   },
 * });
 */
export function useDeleteDocumentProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDocumentProductMutation, DeleteDocumentProductMutationVariables>) {
        return Apollo.useMutation<DeleteDocumentProductMutation, DeleteDocumentProductMutationVariables>(DeleteDocumentProductDocument, baseOptions);
      }
export type DeleteDocumentProductMutationHookResult = ReturnType<typeof useDeleteDocumentProductMutation>;
export type DeleteDocumentProductMutationResult = Apollo.MutationResult<DeleteDocumentProductMutation>;
export type DeleteDocumentProductMutationOptions = Apollo.BaseMutationOptions<DeleteDocumentProductMutation, DeleteDocumentProductMutationVariables>;
export const DeleteProductServiceDocument = gql`
    mutation deleteProductService($id: String!) {
  deleteProductService(id: $id) {
    id
  }
}
    `;
export type DeleteProductServiceMutationFn = Apollo.MutationFunction<DeleteProductServiceMutation, DeleteProductServiceMutationVariables>;

/**
 * __useDeleteProductServiceMutation__
 *
 * To run a mutation, you first call `useDeleteProductServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductServiceMutation, { data, loading, error }] = useDeleteProductServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductServiceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductServiceMutation, DeleteProductServiceMutationVariables>) {
        return Apollo.useMutation<DeleteProductServiceMutation, DeleteProductServiceMutationVariables>(DeleteProductServiceDocument, baseOptions);
      }
export type DeleteProductServiceMutationHookResult = ReturnType<typeof useDeleteProductServiceMutation>;
export type DeleteProductServiceMutationResult = Apollo.MutationResult<DeleteProductServiceMutation>;
export type DeleteProductServiceMutationOptions = Apollo.BaseMutationOptions<DeleteProductServiceMutation, DeleteProductServiceMutationVariables>;
export const DeleteProductServicesDocument = gql`
    mutation deleteProductServices($ids: [String!]!) {
  deleteProductServices(ids: $ids)
}
    `;
export type DeleteProductServicesMutationFn = Apollo.MutationFunction<DeleteProductServicesMutation, DeleteProductServicesMutationVariables>;

/**
 * __useDeleteProductServicesMutation__
 *
 * To run a mutation, you first call `useDeleteProductServicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductServicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductServicesMutation, { data, loading, error }] = useDeleteProductServicesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteProductServicesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductServicesMutation, DeleteProductServicesMutationVariables>) {
        return Apollo.useMutation<DeleteProductServicesMutation, DeleteProductServicesMutationVariables>(DeleteProductServicesDocument, baseOptions);
      }
export type DeleteProductServicesMutationHookResult = ReturnType<typeof useDeleteProductServicesMutation>;
export type DeleteProductServicesMutationResult = Apollo.MutationResult<DeleteProductServicesMutation>;
export type DeleteProductServicesMutationOptions = Apollo.BaseMutationOptions<DeleteProductServicesMutation, DeleteProductServicesMutationVariables>;
export const DocumentCategoryDocument = gql`
    query DocumentCategory {
  documentCategory {
    id
    key
  }
}
    `;

/**
 * __useDocumentCategoryQuery__
 *
 * To run a query within a React component, call `useDocumentCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useDocumentCategoryQuery(baseOptions?: Apollo.QueryHookOptions<DocumentCategoryQuery, DocumentCategoryQueryVariables>) {
        return Apollo.useQuery<DocumentCategoryQuery, DocumentCategoryQueryVariables>(DocumentCategoryDocument, baseOptions);
      }
export function useDocumentCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DocumentCategoryQuery, DocumentCategoryQueryVariables>) {
          return Apollo.useLazyQuery<DocumentCategoryQuery, DocumentCategoryQueryVariables>(DocumentCategoryDocument, baseOptions);
        }
export type DocumentCategoryQueryHookResult = ReturnType<typeof useDocumentCategoryQuery>;
export type DocumentCategoryLazyQueryHookResult = ReturnType<typeof useDocumentCategoryLazyQuery>;
export type DocumentCategoryQueryResult = Apollo.QueryResult<DocumentCategoryQuery, DocumentCategoryQueryVariables>;
export const DocumentProductsDocument = gql`
    query documentProducts($query: DocumentProductQueryDto!) {
  documentProducts(query: $query) {
    id
    name
    uploadedAt
    extension
    path
    location
    documentCategory {
      id
      key
    }
  }
}
    `;

/**
 * __useDocumentProductsQuery__
 *
 * To run a query within a React component, call `useDocumentProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentProductsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useDocumentProductsQuery(baseOptions: Apollo.QueryHookOptions<DocumentProductsQuery, DocumentProductsQueryVariables>) {
        return Apollo.useQuery<DocumentProductsQuery, DocumentProductsQueryVariables>(DocumentProductsDocument, baseOptions);
      }
export function useDocumentProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DocumentProductsQuery, DocumentProductsQueryVariables>) {
          return Apollo.useLazyQuery<DocumentProductsQuery, DocumentProductsQueryVariables>(DocumentProductsDocument, baseOptions);
        }
export type DocumentProductsQueryHookResult = ReturnType<typeof useDocumentProductsQuery>;
export type DocumentProductsLazyQueryHookResult = ReturnType<typeof useDocumentProductsLazyQuery>;
export type DocumentProductsQueryResult = Apollo.QueryResult<DocumentProductsQuery, DocumentProductsQueryVariables>;
export const LoadLecturaDataDocument = gql`
    query loadLecturaData($productId: ID!) {
  loadLecturaData(productId: $productId) {
    model {
      id
      modelName
      dataSheetCnt
      firstYear
      lastYear
      inProduction
      standardEquipment
      manufacturer {
        id
        logoFile
        name
      }
      category {
        name
      }
      defaultImg {
        source
        url
      }
      images {
        source
        url
      }
      specs {
        name
        value
        unit
      }
      dataSheets {
        region
        url
        language
        type
      }
    }
    regressor {
      data {
        id
        price
        currency
        operating_hours
        found_on_year
        serial_number
        country
        age_in_months
      }
      curves {
        observation
        name
        quality
        points {
          age
          prediction
          lowCI
          highCI
        }
      }
    }
  }
}
    `;

/**
 * __useLoadLecturaDataQuery__
 *
 * To run a query within a React component, call `useLoadLecturaDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadLecturaDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadLecturaDataQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useLoadLecturaDataQuery(baseOptions: Apollo.QueryHookOptions<LoadLecturaDataQuery, LoadLecturaDataQueryVariables>) {
        return Apollo.useQuery<LoadLecturaDataQuery, LoadLecturaDataQueryVariables>(LoadLecturaDataDocument, baseOptions);
      }
export function useLoadLecturaDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadLecturaDataQuery, LoadLecturaDataQueryVariables>) {
          return Apollo.useLazyQuery<LoadLecturaDataQuery, LoadLecturaDataQueryVariables>(LoadLecturaDataDocument, baseOptions);
        }
export type LoadLecturaDataQueryHookResult = ReturnType<typeof useLoadLecturaDataQuery>;
export type LoadLecturaDataLazyQueryHookResult = ReturnType<typeof useLoadLecturaDataLazyQuery>;
export type LoadLecturaDataQueryResult = Apollo.QueryResult<LoadLecturaDataQuery, LoadLecturaDataQueryVariables>;
export const ProductTrackingDocument = gql`
    query ProductTracking($productId: ID!, $startDate: String, $endDate: String) {
  productTracking(productId: $productId, startDate: $startDate, endDate: $endDate) {
    id
    unitSerialNumber
    last24Hours
    product {
      id
      productModel {
        id
        name
        type {
          name
        }
      }
      operatingHours
      idleHours
      locationLatitude
      locationLongitude
      locationTimestamp
      locationFormattedAddress
      unitInfo
      unitExtendedInfo
    }
    workingHours {
      idleHours
      operatingHours
      date
    }
  }
}
    `;

/**
 * __useProductTrackingQuery__
 *
 * To run a query within a React component, call `useProductTrackingQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductTrackingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductTrackingQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useProductTrackingQuery(baseOptions: Apollo.QueryHookOptions<ProductTrackingQuery, ProductTrackingQueryVariables>) {
        return Apollo.useQuery<ProductTrackingQuery, ProductTrackingQueryVariables>(ProductTrackingDocument, baseOptions);
      }
export function useProductTrackingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductTrackingQuery, ProductTrackingQueryVariables>) {
          return Apollo.useLazyQuery<ProductTrackingQuery, ProductTrackingQueryVariables>(ProductTrackingDocument, baseOptions);
        }
export type ProductTrackingQueryHookResult = ReturnType<typeof useProductTrackingQuery>;
export type ProductTrackingLazyQueryHookResult = ReturnType<typeof useProductTrackingLazyQuery>;
export type ProductTrackingQueryResult = Apollo.QueryResult<ProductTrackingQuery, ProductTrackingQueryVariables>;
export const GetProductBglDataDocument = gql`
    query GetProductBglData($productId: ID!) {
  productBglData(productId: $productId) {
    id
    bglNumberType
    bglData {
      id
      bglNumber
      shortName
      version
      description
      parameters
      values
    }
  }
}
    `;

/**
 * __useGetProductBglDataQuery__
 *
 * To run a query within a React component, call `useGetProductBglDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBglDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBglDataQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductBglDataQuery(baseOptions: Apollo.QueryHookOptions<GetProductBglDataQuery, GetProductBglDataQueryVariables>) {
        return Apollo.useQuery<GetProductBglDataQuery, GetProductBglDataQueryVariables>(GetProductBglDataDocument, baseOptions);
      }
export function useGetProductBglDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductBglDataQuery, GetProductBglDataQueryVariables>) {
          return Apollo.useLazyQuery<GetProductBglDataQuery, GetProductBglDataQueryVariables>(GetProductBglDataDocument, baseOptions);
        }
export type GetProductBglDataQueryHookResult = ReturnType<typeof useGetProductBglDataQuery>;
export type GetProductBglDataLazyQueryHookResult = ReturnType<typeof useGetProductBglDataLazyQuery>;
export type GetProductBglDataQueryResult = Apollo.QueryResult<GetProductBglDataQuery, GetProductBglDataQueryVariables>;
export const ProductsModelsDocument = gql`
    query productsModels($id: ID!, $fromDate: DateTime!) {
  product(id: $id) {
    productModel {
      name
      type {
        name
      }
      manufacturer {
        name
        abbreviation
      }
    }
    productOwner {
      name
      isFlexcavo
    }
    availability(fromDate: $fromDate) {
      status
      nextReservationStart
      nextAvailableDate
    }
  }
}
    `;

/**
 * __useProductsModelsQuery__
 *
 * To run a query within a React component, call `useProductsModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsModelsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      fromDate: // value for 'fromDate'
 *   },
 * });
 */
export function useProductsModelsQuery(baseOptions: Apollo.QueryHookOptions<ProductsModelsQuery, ProductsModelsQueryVariables>) {
        return Apollo.useQuery<ProductsModelsQuery, ProductsModelsQueryVariables>(ProductsModelsDocument, baseOptions);
      }
export function useProductsModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsModelsQuery, ProductsModelsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsModelsQuery, ProductsModelsQueryVariables>(ProductsModelsDocument, baseOptions);
        }
export type ProductsModelsQueryHookResult = ReturnType<typeof useProductsModelsQuery>;
export type ProductsModelsLazyQueryHookResult = ReturnType<typeof useProductsModelsLazyQuery>;
export type ProductsModelsQueryResult = Apollo.QueryResult<ProductsModelsQuery, ProductsModelsQueryVariables>;
export const UpdateDocumentDocument = gql`
    mutation updateDocument($id: String!, $documentProduct: DocumentProductUpdateDto!) {
  updateDocumentProduct(id: $id, documentProduct: $documentProduct) {
    id
    name
  }
}
    `;
export type UpdateDocumentMutationFn = Apollo.MutationFunction<UpdateDocumentMutation, UpdateDocumentMutationVariables>;

/**
 * __useUpdateDocumentMutation__
 *
 * To run a mutation, you first call `useUpdateDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDocumentMutation, { data, loading, error }] = useUpdateDocumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      documentProduct: // value for 'documentProduct'
 *   },
 * });
 */
export function useUpdateDocumentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDocumentMutation, UpdateDocumentMutationVariables>) {
        return Apollo.useMutation<UpdateDocumentMutation, UpdateDocumentMutationVariables>(UpdateDocumentDocument, baseOptions);
      }
export type UpdateDocumentMutationHookResult = ReturnType<typeof useUpdateDocumentMutation>;
export type UpdateDocumentMutationResult = Apollo.MutationResult<UpdateDocumentMutation>;
export type UpdateDocumentMutationOptions = Apollo.BaseMutationOptions<UpdateDocumentMutation, UpdateDocumentMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: String!, $product: ProductUpdateDto!) {
  updateProduct(id: $id, product: $product) {
    ...productInformation
  }
}
    ${ProductInformationFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      product: // value for 'product'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const UpdateProductServiceDocument = gql`
    mutation updateProductService($id: String!, $service: ServiceUpdateDto!) {
  updateProductService(id: $id, service: $service) {
    id
  }
}
    `;
export type UpdateProductServiceMutationFn = Apollo.MutationFunction<UpdateProductServiceMutation, UpdateProductServiceMutationVariables>;

/**
 * __useUpdateProductServiceMutation__
 *
 * To run a mutation, you first call `useUpdateProductServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductServiceMutation, { data, loading, error }] = useUpdateProductServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      service: // value for 'service'
 *   },
 * });
 */
export function useUpdateProductServiceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductServiceMutation, UpdateProductServiceMutationVariables>) {
        return Apollo.useMutation<UpdateProductServiceMutation, UpdateProductServiceMutationVariables>(UpdateProductServiceDocument, baseOptions);
      }
export type UpdateProductServiceMutationHookResult = ReturnType<typeof useUpdateProductServiceMutation>;
export type UpdateProductServiceMutationResult = Apollo.MutationResult<UpdateProductServiceMutation>;
export type UpdateProductServiceMutationOptions = Apollo.BaseMutationOptions<UpdateProductServiceMutation, UpdateProductServiceMutationVariables>;
export const VerifyResetPasswordDocument = gql`
    mutation VerifyResetPassword($token: String!) {
  verifyResetPassword(token: $token) {
    isSuccessful
  }
}
    `;
export type VerifyResetPasswordMutationFn = Apollo.MutationFunction<VerifyResetPasswordMutation, VerifyResetPasswordMutationVariables>;

/**
 * __useVerifyResetPasswordMutation__
 *
 * To run a mutation, you first call `useVerifyResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyResetPasswordMutation, { data, loading, error }] = useVerifyResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<VerifyResetPasswordMutation, VerifyResetPasswordMutationVariables>) {
        return Apollo.useMutation<VerifyResetPasswordMutation, VerifyResetPasswordMutationVariables>(VerifyResetPasswordDocument, baseOptions);
      }
export type VerifyResetPasswordMutationHookResult = ReturnType<typeof useVerifyResetPasswordMutation>;
export type VerifyResetPasswordMutationResult = Apollo.MutationResult<VerifyResetPasswordMutation>;
export type VerifyResetPasswordMutationOptions = Apollo.BaseMutationOptions<VerifyResetPasswordMutation, VerifyResetPasswordMutationVariables>;
export const CheckUserDocument = gql`
    query CheckUser {
  checkUser {
    email
    isEmailVerified
  }
}
    `;

/**
 * __useCheckUserQuery__
 *
 * To run a query within a React component, call `useCheckUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckUserQuery(baseOptions?: Apollo.QueryHookOptions<CheckUserQuery, CheckUserQueryVariables>) {
        return Apollo.useQuery<CheckUserQuery, CheckUserQueryVariables>(CheckUserDocument, baseOptions);
      }
export function useCheckUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUserQuery, CheckUserQueryVariables>) {
          return Apollo.useLazyQuery<CheckUserQuery, CheckUserQueryVariables>(CheckUserDocument, baseOptions);
        }
export type CheckUserQueryHookResult = ReturnType<typeof useCheckUserQuery>;
export type CheckUserLazyQueryHookResult = ReturnType<typeof useCheckUserLazyQuery>;
export type CheckUserQueryResult = Apollo.QueryResult<CheckUserQuery, CheckUserQueryVariables>;
export const LoginDocument = gql`
    mutation Login($user: UserLoginDto!) {
  loginUser(user: $user) {
    token
    email
    isEmailVerified
    id
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegistrationDocument = gql`
    mutation Registration($user: UserCreateDto!) {
  createUser(user: $user) {
    email
  }
}
    `;
export type RegistrationMutationFn = Apollo.MutationFunction<RegistrationMutation, RegistrationMutationVariables>;

/**
 * __useRegistrationMutation__
 *
 * To run a mutation, you first call `useRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationMutation, { data, loading, error }] = useRegistrationMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<RegistrationMutation, RegistrationMutationVariables>) {
        return Apollo.useMutation<RegistrationMutation, RegistrationMutationVariables>(RegistrationDocument, baseOptions);
      }
export type RegistrationMutationHookResult = ReturnType<typeof useRegistrationMutation>;
export type RegistrationMutationResult = Apollo.MutationResult<RegistrationMutation>;
export type RegistrationMutationOptions = Apollo.BaseMutationOptions<RegistrationMutation, RegistrationMutationVariables>;
export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    isSuccessful
  }
}
    `;
export type RequestResetPasswordMutationFn = Apollo.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        return Apollo.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, baseOptions);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = Apollo.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = Apollo.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ResendVerificationEmailDocument = gql`
    mutation ResendVerificationEmail($email: String!) {
  resendVerificationEmail(email: $email) {
    alreadyVerified
    emailSent
  }
}
    `;
export type ResendVerificationEmailMutationFn = Apollo.MutationFunction<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>;

/**
 * __useResendVerificationEmailMutation__
 *
 * To run a mutation, you first call `useResendVerificationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationEmailMutation, { data, loading, error }] = useResendVerificationEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResendVerificationEmailMutation(baseOptions?: Apollo.MutationHookOptions<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>) {
        return Apollo.useMutation<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>(ResendVerificationEmailDocument, baseOptions);
      }
export type ResendVerificationEmailMutationHookResult = ReturnType<typeof useResendVerificationEmailMutation>;
export type ResendVerificationEmailMutationResult = Apollo.MutationResult<ResendVerificationEmailMutation>;
export type ResendVerificationEmailMutationOptions = Apollo.BaseMutationOptions<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($user: UserResetPasswordDto!) {
  resetPassword(user: $user) {
    isSuccessful
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token) {
    isSuccessful
  }
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, baseOptions);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const CustomerDocument = gql`
    query customer($id: ID!) {
  customer(id: $id) {
    id
    name
    discount
    users {
      id
      email
      firstname
      lastname
      isEmailVerified
      phone
      phoneCode
    }
    addresses {
      id
      street
      city
      postalCode
      country
    }
  }
}
    `;

/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerQuery(baseOptions: Apollo.QueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
        return Apollo.useQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, baseOptions);
      }
export function useCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
          return Apollo.useLazyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, baseOptions);
        }
export type CustomerQueryHookResult = ReturnType<typeof useCustomerQuery>;
export type CustomerLazyQueryHookResult = ReturnType<typeof useCustomerLazyQuery>;
export type CustomerQueryResult = Apollo.QueryResult<CustomerQuery, CustomerQueryVariables>;
export const ListCustomersDocument = gql`
    query listCustomers {
  listCustomers {
    id
    name
    users {
      email
      firstname
      lastname
      isEmailVerified
    }
    addresses {
      street
      city
      postalCode
    }
  }
}
    `;

/**
 * __useListCustomersQuery__
 *
 * To run a query within a React component, call `useListCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCustomersQuery(baseOptions?: Apollo.QueryHookOptions<ListCustomersQuery, ListCustomersQueryVariables>) {
        return Apollo.useQuery<ListCustomersQuery, ListCustomersQueryVariables>(ListCustomersDocument, baseOptions);
      }
export function useListCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCustomersQuery, ListCustomersQueryVariables>) {
          return Apollo.useLazyQuery<ListCustomersQuery, ListCustomersQueryVariables>(ListCustomersDocument, baseOptions);
        }
export type ListCustomersQueryHookResult = ReturnType<typeof useListCustomersQuery>;
export type ListCustomersLazyQueryHookResult = ReturnType<typeof useListCustomersLazyQuery>;
export type ListCustomersQueryResult = Apollo.QueryResult<ListCustomersQuery, ListCustomersQueryVariables>;
export const SetCustomerDiscountDocument = gql`
    mutation setCustomerDiscount($discountData: DiscountUpdateDto!) {
  setCustomerDiscount(discountData: $discountData) {
    discount
  }
}
    `;
export type SetCustomerDiscountMutationFn = Apollo.MutationFunction<SetCustomerDiscountMutation, SetCustomerDiscountMutationVariables>;

/**
 * __useSetCustomerDiscountMutation__
 *
 * To run a mutation, you first call `useSetCustomerDiscountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCustomerDiscountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCustomerDiscountMutation, { data, loading, error }] = useSetCustomerDiscountMutation({
 *   variables: {
 *      discountData: // value for 'discountData'
 *   },
 * });
 */
export function useSetCustomerDiscountMutation(baseOptions?: Apollo.MutationHookOptions<SetCustomerDiscountMutation, SetCustomerDiscountMutationVariables>) {
        return Apollo.useMutation<SetCustomerDiscountMutation, SetCustomerDiscountMutationVariables>(SetCustomerDiscountDocument, baseOptions);
      }
export type SetCustomerDiscountMutationHookResult = ReturnType<typeof useSetCustomerDiscountMutation>;
export type SetCustomerDiscountMutationResult = Apollo.MutationResult<SetCustomerDiscountMutation>;
export type SetCustomerDiscountMutationOptions = Apollo.BaseMutationOptions<SetCustomerDiscountMutation, SetCustomerDiscountMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($customer: CustomerUpdateDto!) {
  updateCustomer(customer: $customer) {
    isSuccessful
  }
}
    `;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      customer: // value for 'customer'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
        return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, baseOptions);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const LocationDocument = gql`
    query Location($id: ID!) {
  location(id: $id) {
    id
    city
    dieselPrice
    gasolinePrice
    name
    operatingHour {
      id
      weekDay
      startTime
      endTime
    }
    postalCode
    street
    telephone
  }
}
    `;

/**
 * __useLocationQuery__
 *
 * To run a query within a React component, call `useLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLocationQuery(baseOptions: Apollo.QueryHookOptions<LocationQuery, LocationQueryVariables>) {
        return Apollo.useQuery<LocationQuery, LocationQueryVariables>(LocationDocument, baseOptions);
      }
export function useLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationQuery, LocationQueryVariables>) {
          return Apollo.useLazyQuery<LocationQuery, LocationQueryVariables>(LocationDocument, baseOptions);
        }
export type LocationQueryHookResult = ReturnType<typeof useLocationQuery>;
export type LocationLazyQueryHookResult = ReturnType<typeof useLocationLazyQuery>;
export type LocationQueryResult = Apollo.QueryResult<LocationQuery, LocationQueryVariables>;
export const SaveLocationDocument = gql`
    mutation SaveLocation($locationInput: LocationCreateDto!, $operatingHourInput: [OperatingHoursCreateDto!]!) {
  saveLocation(
    locationInput: $locationInput
    operatingHourInput: $operatingHourInput
  ) {
    id
    operatingHour {
      weekDay
      startTime
      endTime
    }
  }
}
    `;
export type SaveLocationMutationFn = Apollo.MutationFunction<SaveLocationMutation, SaveLocationMutationVariables>;

/**
 * __useSaveLocationMutation__
 *
 * To run a mutation, you first call `useSaveLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLocationMutation, { data, loading, error }] = useSaveLocationMutation({
 *   variables: {
 *      locationInput: // value for 'locationInput'
 *      operatingHourInput: // value for 'operatingHourInput'
 *   },
 * });
 */
export function useSaveLocationMutation(baseOptions?: Apollo.MutationHookOptions<SaveLocationMutation, SaveLocationMutationVariables>) {
        return Apollo.useMutation<SaveLocationMutation, SaveLocationMutationVariables>(SaveLocationDocument, baseOptions);
      }
export type SaveLocationMutationHookResult = ReturnType<typeof useSaveLocationMutation>;
export type SaveLocationMutationResult = Apollo.MutationResult<SaveLocationMutation>;
export type SaveLocationMutationOptions = Apollo.BaseMutationOptions<SaveLocationMutation, SaveLocationMutationVariables>;
export const UpdateLocationDocument = gql`
    mutation UpdateLocation($id: ID!, $locationInput: LocationCreateDto!, $operatingHourInput: [OperatingHoursCreateDto!]!) {
  updateLocation(
    id: $id
    locationInput: $locationInput
    operatingHourInput: $operatingHourInput
  ) {
    id
    operatingHour {
      weekDay
      startTime
      endTime
    }
  }
}
    `;
export type UpdateLocationMutationFn = Apollo.MutationFunction<UpdateLocationMutation, UpdateLocationMutationVariables>;

/**
 * __useUpdateLocationMutation__
 *
 * To run a mutation, you first call `useUpdateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationMutation, { data, loading, error }] = useUpdateLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      locationInput: // value for 'locationInput'
 *      operatingHourInput: // value for 'operatingHourInput'
 *   },
 * });
 */
export function useUpdateLocationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLocationMutation, UpdateLocationMutationVariables>) {
        return Apollo.useMutation<UpdateLocationMutation, UpdateLocationMutationVariables>(UpdateLocationDocument, baseOptions);
      }
export type UpdateLocationMutationHookResult = ReturnType<typeof useUpdateLocationMutation>;
export type UpdateLocationMutationResult = Apollo.MutationResult<UpdateLocationMutation>;
export type UpdateLocationMutationOptions = Apollo.BaseMutationOptions<UpdateLocationMutation, UpdateLocationMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($order: SalesOrderDto!) {
  createOrder(order: $order) {
    id
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const LocationsListDocument = gql`
    query LocationsList {
  locations {
    id
    city
    dieselPrice
    gasolinePrice
    name
    postalCode
    street
    telephone
  }
}
    `;

/**
 * __useLocationsListQuery__
 *
 * To run a query within a React component, call `useLocationsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocationsListQuery(baseOptions?: Apollo.QueryHookOptions<LocationsListQuery, LocationsListQueryVariables>) {
        return Apollo.useQuery<LocationsListQuery, LocationsListQueryVariables>(LocationsListDocument, baseOptions);
      }
export function useLocationsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsListQuery, LocationsListQueryVariables>) {
          return Apollo.useLazyQuery<LocationsListQuery, LocationsListQueryVariables>(LocationsListDocument, baseOptions);
        }
export type LocationsListQueryHookResult = ReturnType<typeof useLocationsListQuery>;
export type LocationsListLazyQueryHookResult = ReturnType<typeof useLocationsListLazyQuery>;
export type LocationsListQueryResult = Apollo.QueryResult<LocationsListQuery, LocationsListQueryVariables>;
export const OrderPriceDocument = gql`
    query OrderPrice($productId: ID!, $attachmentIds: [ID!], $serviceIds: [ID!], $startDate: DateTime!, $endDate: DateTime!) {
  orderPrice(
    productId: $productId
    attachmentIds: $attachmentIds
    serviceIds: $serviceIds
    startDate: $startDate
    endDate: $endDate
  ) {
    days
    businessDays
    orderPrice
    orderSubTotal
    orderVat
    productPrice {
      id
      pricePerDay
      totalPrice
    }
    attachmentsPrices {
      id
      pricePerDay
      totalPrice
    }
    servicesPrices {
      id
      price
      pricingStructure
      totalPrice
    }
  }
}
    `;

/**
 * __useOrderPriceQuery__
 *
 * To run a query within a React component, call `useOrderPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderPriceQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      attachmentIds: // value for 'attachmentIds'
 *      serviceIds: // value for 'serviceIds'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useOrderPriceQuery(baseOptions: Apollo.QueryHookOptions<OrderPriceQuery, OrderPriceQueryVariables>) {
        return Apollo.useQuery<OrderPriceQuery, OrderPriceQueryVariables>(OrderPriceDocument, baseOptions);
      }
export function useOrderPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderPriceQuery, OrderPriceQueryVariables>) {
          return Apollo.useLazyQuery<OrderPriceQuery, OrderPriceQueryVariables>(OrderPriceDocument, baseOptions);
        }
export type OrderPriceQueryHookResult = ReturnType<typeof useOrderPriceQuery>;
export type OrderPriceLazyQueryHookResult = ReturnType<typeof useOrderPriceLazyQuery>;
export type OrderPriceQueryResult = Apollo.QueryResult<OrderPriceQuery, OrderPriceQueryVariables>;
export const ProductAttachmentsDocument = gql`
    query ProductAttachments($id: ID!) {
  product(id: $id) {
    id
    productModel {
      name
      attributes
      key
      type {
        name
      }
      manufacturer {
        name
        abbreviation
      }
      productModelBundles {
        id
        name
        attributes
        type {
          name
        }
        manufacturer {
          name
          abbreviation
        }
        products {
          id
          priceDaily
          priceWeekly
          priceMonthly
          location {
            id
          }
        }
      }
      documents {
        id
        name
        extension
        mimeType
        path
        location
        documentCategory {
          id
          key
        }
      }
    }
    services {
      id
      price
      serviceTemplate {
        id
        name
        description
        pricingStructure
      }
    }
    location {
      id
      name
      operatingHour {
        startTime
        endTime
        weekDay
      }
    }
  }
}
    `;

/**
 * __useProductAttachmentsQuery__
 *
 * To run a query within a React component, call `useProductAttachmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductAttachmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductAttachmentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductAttachmentsQuery(baseOptions: Apollo.QueryHookOptions<ProductAttachmentsQuery, ProductAttachmentsQueryVariables>) {
        return Apollo.useQuery<ProductAttachmentsQuery, ProductAttachmentsQueryVariables>(ProductAttachmentsDocument, baseOptions);
      }
export function useProductAttachmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductAttachmentsQuery, ProductAttachmentsQueryVariables>) {
          return Apollo.useLazyQuery<ProductAttachmentsQuery, ProductAttachmentsQueryVariables>(ProductAttachmentsDocument, baseOptions);
        }
export type ProductAttachmentsQueryHookResult = ReturnType<typeof useProductAttachmentsQuery>;
export type ProductAttachmentsLazyQueryHookResult = ReturnType<typeof useProductAttachmentsLazyQuery>;
export type ProductAttachmentsQueryResult = Apollo.QueryResult<ProductAttachmentsQuery, ProductAttachmentsQueryVariables>;
export const ProductDocument = gql`
    query Product($id: ID!) {
  product(id: $id) {
    id
    serialNumber
    productionYear
    priceDaily
    priceWeekly
    priceMonthly
    productModel {
      lecturaId
      lecturaModel
      name
      attributes
      key
      type {
        name
        attributes {
          key
          unit
        }
      }
      manufacturer {
        name
        abbreviation
      }
    }
    productOwner {
      name
      isFlexcavo
    }
    location {
      id
      name
      street
      city
    }
    purchasePrice
    deposit
    leasingRate
    interest
    residualValue
    instruction
    workClothing
    notes
    unitSerialNumber
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ValidateDiscountCodeDocument = gql`
    mutation ValidateDiscountCode($discountCode: String!) {
  validateDiscountCode(discountCode: $discountCode) {
    id
    type
    code
    value
    currency
    isActive
  }
}
    `;
export type ValidateDiscountCodeMutationFn = Apollo.MutationFunction<ValidateDiscountCodeMutation, ValidateDiscountCodeMutationVariables>;

/**
 * __useValidateDiscountCodeMutation__
 *
 * To run a mutation, you first call `useValidateDiscountCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateDiscountCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateDiscountCodeMutation, { data, loading, error }] = useValidateDiscountCodeMutation({
 *   variables: {
 *      discountCode: // value for 'discountCode'
 *   },
 * });
 */
export function useValidateDiscountCodeMutation(baseOptions?: Apollo.MutationHookOptions<ValidateDiscountCodeMutation, ValidateDiscountCodeMutationVariables>) {
        return Apollo.useMutation<ValidateDiscountCodeMutation, ValidateDiscountCodeMutationVariables>(ValidateDiscountCodeDocument, baseOptions);
      }
export type ValidateDiscountCodeMutationHookResult = ReturnType<typeof useValidateDiscountCodeMutation>;
export type ValidateDiscountCodeMutationResult = Apollo.MutationResult<ValidateDiscountCodeMutation>;
export type ValidateDiscountCodeMutationOptions = Apollo.BaseMutationOptions<ValidateDiscountCodeMutation, ValidateDiscountCodeMutationVariables>;
export const CreateOwnerDocument = gql`
    mutation CreateOwner($owner: ProductOwnerDto!) {
  createOwner(owner: $owner) {
    id
    name
  }
}
    `;
export type CreateOwnerMutationFn = Apollo.MutationFunction<CreateOwnerMutation, CreateOwnerMutationVariables>;

/**
 * __useCreateOwnerMutation__
 *
 * To run a mutation, you first call `useCreateOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOwnerMutation, { data, loading, error }] = useCreateOwnerMutation({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCreateOwnerMutation(baseOptions?: Apollo.MutationHookOptions<CreateOwnerMutation, CreateOwnerMutationVariables>) {
        return Apollo.useMutation<CreateOwnerMutation, CreateOwnerMutationVariables>(CreateOwnerDocument, baseOptions);
      }
export type CreateOwnerMutationHookResult = ReturnType<typeof useCreateOwnerMutation>;
export type CreateOwnerMutationResult = Apollo.MutationResult<CreateOwnerMutation>;
export type CreateOwnerMutationOptions = Apollo.BaseMutationOptions<CreateOwnerMutation, CreateOwnerMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($product: ProductDto!, $productServices: [ProductServiceDto!]!) {
  createProduct(product: $product, productServices: $productServices) {
    id
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *      productServices: // value for 'productServices'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const ProductManufacturersDocument = gql`
    query productManufacturers($search: String!) {
  productManufacturers(search: $search) {
    id
    name
    abbreviation
  }
}
    `;

/**
 * __useProductManufacturersQuery__
 *
 * To run a query within a React component, call `useProductManufacturersQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductManufacturersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductManufacturersQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useProductManufacturersQuery(baseOptions: Apollo.QueryHookOptions<ProductManufacturersQuery, ProductManufacturersQueryVariables>) {
        return Apollo.useQuery<ProductManufacturersQuery, ProductManufacturersQueryVariables>(ProductManufacturersDocument, baseOptions);
      }
export function useProductManufacturersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductManufacturersQuery, ProductManufacturersQueryVariables>) {
          return Apollo.useLazyQuery<ProductManufacturersQuery, ProductManufacturersQueryVariables>(ProductManufacturersDocument, baseOptions);
        }
export type ProductManufacturersQueryHookResult = ReturnType<typeof useProductManufacturersQuery>;
export type ProductManufacturersLazyQueryHookResult = ReturnType<typeof useProductManufacturersLazyQuery>;
export type ProductManufacturersQueryResult = Apollo.QueryResult<ProductManufacturersQuery, ProductManufacturersQueryVariables>;
export const ProductModelsDocument = gql`
    query ProductModels {
  productModels {
    id
    name
    hasVin
    attributes
    lecturaModel
    lecturaId
    documents {
      id
      name
      extension
      mimeType
      path
      location
      documentCategory {
        key
      }
    }
    manufacturer {
      id
      name
      abbreviation
    }
    type {
      id
      name
      attributes {
        id
        key
        name
        isRequired
        type
        unit
        minValue
        maxValue
        maxLength
      }
    }
    productModelBundles {
      id
      name
      manufacturer {
        id
        name
      }
      type {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useProductModelsQuery__
 *
 * To run a query within a React component, call `useProductModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductModelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductModelsQuery(baseOptions?: Apollo.QueryHookOptions<ProductModelsQuery, ProductModelsQueryVariables>) {
        return Apollo.useQuery<ProductModelsQuery, ProductModelsQueryVariables>(ProductModelsDocument, baseOptions);
      }
export function useProductModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductModelsQuery, ProductModelsQueryVariables>) {
          return Apollo.useLazyQuery<ProductModelsQuery, ProductModelsQueryVariables>(ProductModelsDocument, baseOptions);
        }
export type ProductModelsQueryHookResult = ReturnType<typeof useProductModelsQuery>;
export type ProductModelsLazyQueryHookResult = ReturnType<typeof useProductModelsLazyQuery>;
export type ProductModelsQueryResult = Apollo.QueryResult<ProductModelsQuery, ProductModelsQueryVariables>;
export const ProductOwnersDocument = gql`
    query ProductOwners {
  productOwners {
    id
    name
    isFlexcavo
  }
}
    `;

/**
 * __useProductOwnersQuery__
 *
 * To run a query within a React component, call `useProductOwnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductOwnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductOwnersQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductOwnersQuery(baseOptions?: Apollo.QueryHookOptions<ProductOwnersQuery, ProductOwnersQueryVariables>) {
        return Apollo.useQuery<ProductOwnersQuery, ProductOwnersQueryVariables>(ProductOwnersDocument, baseOptions);
      }
export function useProductOwnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductOwnersQuery, ProductOwnersQueryVariables>) {
          return Apollo.useLazyQuery<ProductOwnersQuery, ProductOwnersQueryVariables>(ProductOwnersDocument, baseOptions);
        }
export type ProductOwnersQueryHookResult = ReturnType<typeof useProductOwnersQuery>;
export type ProductOwnersLazyQueryHookResult = ReturnType<typeof useProductOwnersLazyQuery>;
export type ProductOwnersQueryResult = Apollo.QueryResult<ProductOwnersQuery, ProductOwnersQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    id
    serialNumber
    productionYear
    productModel {
      lecturaId
      lecturaModel
      name
      key
      type {
        name
      }
      manufacturer {
        name
        abbreviation
      }
    }
    productOwner {
      name
      isFlexcavo
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const CreateProductModelDocument = gql`
    mutation createProductModel($productModel: ProductModelDto!) {
  createProductModel(productModel: $productModel) {
    id
  }
}
    `;
export type CreateProductModelMutationFn = Apollo.MutationFunction<CreateProductModelMutation, CreateProductModelMutationVariables>;

/**
 * __useCreateProductModelMutation__
 *
 * To run a mutation, you first call `useCreateProductModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductModelMutation, { data, loading, error }] = useCreateProductModelMutation({
 *   variables: {
 *      productModel: // value for 'productModel'
 *   },
 * });
 */
export function useCreateProductModelMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductModelMutation, CreateProductModelMutationVariables>) {
        return Apollo.useMutation<CreateProductModelMutation, CreateProductModelMutationVariables>(CreateProductModelDocument, baseOptions);
      }
export type CreateProductModelMutationHookResult = ReturnType<typeof useCreateProductModelMutation>;
export type CreateProductModelMutationResult = Apollo.MutationResult<CreateProductModelMutation>;
export type CreateProductModelMutationOptions = Apollo.BaseMutationOptions<CreateProductModelMutation, CreateProductModelMutationVariables>;
export const ExtendedOrderPriceDocument = gql`
    query extendedOrderPrice($orderId: ID!, $productId: ID!, $startDate: DateTime!, $endDate: DateTime!) {
  extendedOrderPrice(
    orderId: $orderId
    productId: $productId
    startDate: $startDate
    endDate: $endDate
  ) {
    days
    businessDays
    orderPrice
    orderSubTotal
    orderVat
    productPrice {
      id
      pricePerDay
      totalPrice
    }
    attachmentsPrices {
      id
      pricePerDay
      totalPrice
    }
    servicesPrices {
      id
      price
      pricingStructure
      totalPrice
    }
  }
}
    `;

/**
 * __useExtendedOrderPriceQuery__
 *
 * To run a query within a React component, call `useExtendedOrderPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useExtendedOrderPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExtendedOrderPriceQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      productId: // value for 'productId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useExtendedOrderPriceQuery(baseOptions: Apollo.QueryHookOptions<ExtendedOrderPriceQuery, ExtendedOrderPriceQueryVariables>) {
        return Apollo.useQuery<ExtendedOrderPriceQuery, ExtendedOrderPriceQueryVariables>(ExtendedOrderPriceDocument, baseOptions);
      }
export function useExtendedOrderPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExtendedOrderPriceQuery, ExtendedOrderPriceQueryVariables>) {
          return Apollo.useLazyQuery<ExtendedOrderPriceQuery, ExtendedOrderPriceQueryVariables>(ExtendedOrderPriceDocument, baseOptions);
        }
export type ExtendedOrderPriceQueryHookResult = ReturnType<typeof useExtendedOrderPriceQuery>;
export type ExtendedOrderPriceLazyQueryHookResult = ReturnType<typeof useExtendedOrderPriceLazyQuery>;
export type ExtendedOrderPriceQueryResult = Apollo.QueryResult<ExtendedOrderPriceQuery, ExtendedOrderPriceQueryVariables>;
export const ExtendOrderPeriodDocument = gql`
    mutation ExtendOrderPeriod($order: ExtendSaleOrderDto!) {
  extendOrderPeriod(order: $order) {
    id
  }
}
    `;
export type ExtendOrderPeriodMutationFn = Apollo.MutationFunction<ExtendOrderPeriodMutation, ExtendOrderPeriodMutationVariables>;

/**
 * __useExtendOrderPeriodMutation__
 *
 * To run a mutation, you first call `useExtendOrderPeriodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExtendOrderPeriodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [extendOrderPeriodMutation, { data, loading, error }] = useExtendOrderPeriodMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useExtendOrderPeriodMutation(baseOptions?: Apollo.MutationHookOptions<ExtendOrderPeriodMutation, ExtendOrderPeriodMutationVariables>) {
        return Apollo.useMutation<ExtendOrderPeriodMutation, ExtendOrderPeriodMutationVariables>(ExtendOrderPeriodDocument, baseOptions);
      }
export type ExtendOrderPeriodMutationHookResult = ReturnType<typeof useExtendOrderPeriodMutation>;
export type ExtendOrderPeriodMutationResult = Apollo.MutationResult<ExtendOrderPeriodMutation>;
export type ExtendOrderPeriodMutationOptions = Apollo.BaseMutationOptions<ExtendOrderPeriodMutation, ExtendOrderPeriodMutationVariables>;
export const OrderDocument = gql`
    query Order($id: ID!) {
  order(id: $id) {
    id
    firstName
    lastName
    email
    companyName
    orderId
    location
    price
    subTotal
    vat
    channel
    startDate
    endDate
    deliveryMethod
    status
    salesOrderItems {
      id
      days
      pricePerDay
      productModel
      productType
      productManufacturer
      totalPrice
      pricePerDay
      salesOrderItemServices {
        id
        serviceName
        price
        totalPrice
        pricingStructure
        productServiceId
      }
      product {
        id
        services {
          id
          price
          serviceTemplate {
            id
            name
            pricingStructure
            default
          }
        }
        productModel {
          id
          attributes
          name
          manufacturer {
            id
            name
            abbreviation
          }
          type {
            name
          }
        }
        location {
          id
          name
          operatingHour {
            startTime
            endTime
            weekDay
          }
        }
      }
      parentSalesOrderItem {
        id
      }
    }
    salesOrderAddresses {
      id
      address
      city
      type
    }
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const OrderProductsAvailabilityCalendarDocument = gql`
    query orderProductsAvailabilityCalendar($endMonth: DateTime!, $orderEndDate: DateTime!, $productIds: [ID!]!, $startMonth: DateTime!) {
  orderProductsAvailabilityCalendar(
    productIds: $productIds
    startMonth: $startMonth
    endMonth: $endMonth
    orderEndDate: $orderEndDate
  ) {
    date
    isAvailable
  }
}
    `;

/**
 * __useOrderProductsAvailabilityCalendarQuery__
 *
 * To run a query within a React component, call `useOrderProductsAvailabilityCalendarQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderProductsAvailabilityCalendarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderProductsAvailabilityCalendarQuery({
 *   variables: {
 *      endMonth: // value for 'endMonth'
 *      orderEndDate: // value for 'orderEndDate'
 *      productIds: // value for 'productIds'
 *      startMonth: // value for 'startMonth'
 *   },
 * });
 */
export function useOrderProductsAvailabilityCalendarQuery(baseOptions: Apollo.QueryHookOptions<OrderProductsAvailabilityCalendarQuery, OrderProductsAvailabilityCalendarQueryVariables>) {
        return Apollo.useQuery<OrderProductsAvailabilityCalendarQuery, OrderProductsAvailabilityCalendarQueryVariables>(OrderProductsAvailabilityCalendarDocument, baseOptions);
      }
export function useOrderProductsAvailabilityCalendarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderProductsAvailabilityCalendarQuery, OrderProductsAvailabilityCalendarQueryVariables>) {
          return Apollo.useLazyQuery<OrderProductsAvailabilityCalendarQuery, OrderProductsAvailabilityCalendarQueryVariables>(OrderProductsAvailabilityCalendarDocument, baseOptions);
        }
export type OrderProductsAvailabilityCalendarQueryHookResult = ReturnType<typeof useOrderProductsAvailabilityCalendarQuery>;
export type OrderProductsAvailabilityCalendarLazyQueryHookResult = ReturnType<typeof useOrderProductsAvailabilityCalendarLazyQuery>;
export type OrderProductsAvailabilityCalendarQueryResult = Apollo.QueryResult<OrderProductsAvailabilityCalendarQuery, OrderProductsAvailabilityCalendarQueryVariables>;
export const OrdersDocument = gql`
    query Orders($filters: SalesOrderQueryFiltersDto, $searchText: String, $skip: Float, $take: Float) {
  orders(filters: $filters, searchText: $searchText, skip: $skip, take: $take) {
    id
    firstName
    lastName
    orderId
    location
    price
    channel
    startDate
    endDate
    status
    salesOrderAddresses {
      id
      address
      city
      type
    }
    salesOrderItems {
      productModel
      productType
      productManufacturer
      parentSalesOrderItem {
        id
      }
    }
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      searchText: // value for 'searchText'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const ProductsAvailabilityCalendarDocument = gql`
    query ProductsAvailabilityCalendar($startMonth: DateTime!, $endMonth: DateTime!, $productIds: [ID!]!) {
  productsAvailabilityCalendar(
    productIds: $productIds
    startMonth: $startMonth
    endMonth: $endMonth
  ) {
    productId
    days {
      date
      slots {
        start
        end
      }
      type
    }
  }
}
    `;

/**
 * __useProductsAvailabilityCalendarQuery__
 *
 * To run a query within a React component, call `useProductsAvailabilityCalendarQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsAvailabilityCalendarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsAvailabilityCalendarQuery({
 *   variables: {
 *      startMonth: // value for 'startMonth'
 *      endMonth: // value for 'endMonth'
 *      productIds: // value for 'productIds'
 *   },
 * });
 */
export function useProductsAvailabilityCalendarQuery(baseOptions: Apollo.QueryHookOptions<ProductsAvailabilityCalendarQuery, ProductsAvailabilityCalendarQueryVariables>) {
        return Apollo.useQuery<ProductsAvailabilityCalendarQuery, ProductsAvailabilityCalendarQueryVariables>(ProductsAvailabilityCalendarDocument, baseOptions);
      }
export function useProductsAvailabilityCalendarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsAvailabilityCalendarQuery, ProductsAvailabilityCalendarQueryVariables>) {
          return Apollo.useLazyQuery<ProductsAvailabilityCalendarQuery, ProductsAvailabilityCalendarQueryVariables>(ProductsAvailabilityCalendarDocument, baseOptions);
        }
export type ProductsAvailabilityCalendarQueryHookResult = ReturnType<typeof useProductsAvailabilityCalendarQuery>;
export type ProductsAvailabilityCalendarLazyQueryHookResult = ReturnType<typeof useProductsAvailabilityCalendarLazyQuery>;
export type ProductsAvailabilityCalendarQueryResult = Apollo.QueryResult<ProductsAvailabilityCalendarQuery, ProductsAvailabilityCalendarQueryVariables>;
export const UpdateOrderItemServicesDocument = gql`
    mutation UpdateOrderItemServices($orderId: ID!, $productId: ID!, $services: [UpdateOrderItemServicesDto!]!) {
  updateOrderServices(
    orderId: $orderId
    productId: $productId
    services: $services
  ) {
    id
    price
  }
}
    `;
export type UpdateOrderItemServicesMutationFn = Apollo.MutationFunction<UpdateOrderItemServicesMutation, UpdateOrderItemServicesMutationVariables>;

/**
 * __useUpdateOrderItemServicesMutation__
 *
 * To run a mutation, you first call `useUpdateOrderItemServicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderItemServicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderItemServicesMutation, { data, loading, error }] = useUpdateOrderItemServicesMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      productId: // value for 'productId'
 *      services: // value for 'services'
 *   },
 * });
 */
export function useUpdateOrderItemServicesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderItemServicesMutation, UpdateOrderItemServicesMutationVariables>) {
        return Apollo.useMutation<UpdateOrderItemServicesMutation, UpdateOrderItemServicesMutationVariables>(UpdateOrderItemServicesDocument, baseOptions);
      }
export type UpdateOrderItemServicesMutationHookResult = ReturnType<typeof useUpdateOrderItemServicesMutation>;
export type UpdateOrderItemServicesMutationResult = Apollo.MutationResult<UpdateOrderItemServicesMutation>;
export type UpdateOrderItemServicesMutationOptions = Apollo.BaseMutationOptions<UpdateOrderItemServicesMutation, UpdateOrderItemServicesMutationVariables>;
export const OrderStatusUpdateDocument = gql`
    mutation orderStatusUpdate($orderStatusUpdateInput: OrderStatusUpdateDto!) {
  orderStatusUpdate(orderStatusUpdateInput: $orderStatusUpdateInput) {
    id
  }
}
    `;
export type OrderStatusUpdateMutationFn = Apollo.MutationFunction<OrderStatusUpdateMutation, OrderStatusUpdateMutationVariables>;

/**
 * __useOrderStatusUpdateMutation__
 *
 * To run a mutation, you first call `useOrderStatusUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderStatusUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderStatusUpdateMutation, { data, loading, error }] = useOrderStatusUpdateMutation({
 *   variables: {
 *      orderStatusUpdateInput: // value for 'orderStatusUpdateInput'
 *   },
 * });
 */
export function useOrderStatusUpdateMutation(baseOptions?: Apollo.MutationHookOptions<OrderStatusUpdateMutation, OrderStatusUpdateMutationVariables>) {
        return Apollo.useMutation<OrderStatusUpdateMutation, OrderStatusUpdateMutationVariables>(OrderStatusUpdateDocument, baseOptions);
      }
export type OrderStatusUpdateMutationHookResult = ReturnType<typeof useOrderStatusUpdateMutation>;
export type OrderStatusUpdateMutationResult = Apollo.MutationResult<OrderStatusUpdateMutation>;
export type OrderStatusUpdateMutationOptions = Apollo.BaseMutationOptions<OrderStatusUpdateMutation, OrderStatusUpdateMutationVariables>;
export const AccountInfoDocument = gql`
    query AccountInfo {
  getAccount {
    id
    name
    users {
      id
      email
      firstname
      lastname
      position
      gender
      phone
      phoneCode
    }
    addresses {
      id
      street
      city
      postalCode
      country
    }
  }
}
    `;

/**
 * __useAccountInfoQuery__
 *
 * To run a query within a React component, call `useAccountInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountInfoQuery(baseOptions?: Apollo.QueryHookOptions<AccountInfoQuery, AccountInfoQueryVariables>) {
        return Apollo.useQuery<AccountInfoQuery, AccountInfoQueryVariables>(AccountInfoDocument, baseOptions);
      }
export function useAccountInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountInfoQuery, AccountInfoQueryVariables>) {
          return Apollo.useLazyQuery<AccountInfoQuery, AccountInfoQueryVariables>(AccountInfoDocument, baseOptions);
        }
export type AccountInfoQueryHookResult = ReturnType<typeof useAccountInfoQuery>;
export type AccountInfoLazyQueryHookResult = ReturnType<typeof useAccountInfoLazyQuery>;
export type AccountInfoQueryResult = Apollo.QueryResult<AccountInfoQuery, AccountInfoQueryVariables>;
export const UpdateAccountDocument = gql`
    mutation updateAccount($account: AccountUpdateDto!) {
  updateAccount(account: $account) {
    isSuccessful
  }
}
    `;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, baseOptions);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const CreateDiscountDocument = gql`
    mutation createDiscount($discount: DiscountCreateDto!) {
  createDiscount(discount: $discount) {
    id
    code
    type
    value
    currency
    isActive
  }
}
    `;
export type CreateDiscountMutationFn = Apollo.MutationFunction<CreateDiscountMutation, CreateDiscountMutationVariables>;

/**
 * __useCreateDiscountMutation__
 *
 * To run a mutation, you first call `useCreateDiscountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDiscountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDiscountMutation, { data, loading, error }] = useCreateDiscountMutation({
 *   variables: {
 *      discount: // value for 'discount'
 *   },
 * });
 */
export function useCreateDiscountMutation(baseOptions?: Apollo.MutationHookOptions<CreateDiscountMutation, CreateDiscountMutationVariables>) {
        return Apollo.useMutation<CreateDiscountMutation, CreateDiscountMutationVariables>(CreateDiscountDocument, baseOptions);
      }
export type CreateDiscountMutationHookResult = ReturnType<typeof useCreateDiscountMutation>;
export type CreateDiscountMutationResult = Apollo.MutationResult<CreateDiscountMutation>;
export type CreateDiscountMutationOptions = Apollo.BaseMutationOptions<CreateDiscountMutation, CreateDiscountMutationVariables>;
export const DeleteDiscountDocument = gql`
    mutation deleteDiscount($discountId: ID!) {
  deleteDiscount(discountId: $discountId) {
    isSuccessful
  }
}
    `;
export type DeleteDiscountMutationFn = Apollo.MutationFunction<DeleteDiscountMutation, DeleteDiscountMutationVariables>;

/**
 * __useDeleteDiscountMutation__
 *
 * To run a mutation, you first call `useDeleteDiscountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDiscountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDiscountMutation, { data, loading, error }] = useDeleteDiscountMutation({
 *   variables: {
 *      discountId: // value for 'discountId'
 *   },
 * });
 */
export function useDeleteDiscountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDiscountMutation, DeleteDiscountMutationVariables>) {
        return Apollo.useMutation<DeleteDiscountMutation, DeleteDiscountMutationVariables>(DeleteDiscountDocument, baseOptions);
      }
export type DeleteDiscountMutationHookResult = ReturnType<typeof useDeleteDiscountMutation>;
export type DeleteDiscountMutationResult = Apollo.MutationResult<DeleteDiscountMutation>;
export type DeleteDiscountMutationOptions = Apollo.BaseMutationOptions<DeleteDiscountMutation, DeleteDiscountMutationVariables>;
export const ListDiscountsDocument = gql`
    query listDiscounts {
  listDiscounts {
    id
    code
    type
    value
    currency
    isActive
  }
}
    `;

/**
 * __useListDiscountsQuery__
 *
 * To run a query within a React component, call `useListDiscountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDiscountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDiscountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDiscountsQuery(baseOptions?: Apollo.QueryHookOptions<ListDiscountsQuery, ListDiscountsQueryVariables>) {
        return Apollo.useQuery<ListDiscountsQuery, ListDiscountsQueryVariables>(ListDiscountsDocument, baseOptions);
      }
export function useListDiscountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDiscountsQuery, ListDiscountsQueryVariables>) {
          return Apollo.useLazyQuery<ListDiscountsQuery, ListDiscountsQueryVariables>(ListDiscountsDocument, baseOptions);
        }
export type ListDiscountsQueryHookResult = ReturnType<typeof useListDiscountsQuery>;
export type ListDiscountsLazyQueryHookResult = ReturnType<typeof useListDiscountsLazyQuery>;
export type ListDiscountsQueryResult = Apollo.QueryResult<ListDiscountsQuery, ListDiscountsQueryVariables>;
export const UpdateDiscountStatusDocument = gql`
    mutation updateDiscountStatus($discountId: ID!, $isActive: Boolean!) {
  updateDiscountStatus(discountId: $discountId, isActive: $isActive) {
    isSuccessful
  }
}
    `;
export type UpdateDiscountStatusMutationFn = Apollo.MutationFunction<UpdateDiscountStatusMutation, UpdateDiscountStatusMutationVariables>;

/**
 * __useUpdateDiscountStatusMutation__
 *
 * To run a mutation, you first call `useUpdateDiscountStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDiscountStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDiscountStatusMutation, { data, loading, error }] = useUpdateDiscountStatusMutation({
 *   variables: {
 *      discountId: // value for 'discountId'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useUpdateDiscountStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDiscountStatusMutation, UpdateDiscountStatusMutationVariables>) {
        return Apollo.useMutation<UpdateDiscountStatusMutation, UpdateDiscountStatusMutationVariables>(UpdateDiscountStatusDocument, baseOptions);
      }
export type UpdateDiscountStatusMutationHookResult = ReturnType<typeof useUpdateDiscountStatusMutation>;
export type UpdateDiscountStatusMutationResult = Apollo.MutationResult<UpdateDiscountStatusMutation>;
export type UpdateDiscountStatusMutationOptions = Apollo.BaseMutationOptions<UpdateDiscountStatusMutation, UpdateDiscountStatusMutationVariables>;
export const DeleteServiceTemplateDocument = gql`
    mutation deleteServiceTemplate($id: ID!) {
  deleteServiceTemplate(id: $id)
}
    `;
export type DeleteServiceTemplateMutationFn = Apollo.MutationFunction<DeleteServiceTemplateMutation, DeleteServiceTemplateMutationVariables>;

/**
 * __useDeleteServiceTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteServiceTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceTemplateMutation, { data, loading, error }] = useDeleteServiceTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteServiceTemplateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteServiceTemplateMutation, DeleteServiceTemplateMutationVariables>) {
        return Apollo.useMutation<DeleteServiceTemplateMutation, DeleteServiceTemplateMutationVariables>(DeleteServiceTemplateDocument, baseOptions);
      }
export type DeleteServiceTemplateMutationHookResult = ReturnType<typeof useDeleteServiceTemplateMutation>;
export type DeleteServiceTemplateMutationResult = Apollo.MutationResult<DeleteServiceTemplateMutation>;
export type DeleteServiceTemplateMutationOptions = Apollo.BaseMutationOptions<DeleteServiceTemplateMutation, DeleteServiceTemplateMutationVariables>;
export const SaveServiceTemplateDocument = gql`
    mutation SaveServiceTemplate($serviceTemplateInput: ServiceTemplateCreateDto!) {
  createServiceTemplate(serviceTemplateDto: $serviceTemplateInput) {
    id
  }
}
    `;
export type SaveServiceTemplateMutationFn = Apollo.MutationFunction<SaveServiceTemplateMutation, SaveServiceTemplateMutationVariables>;

/**
 * __useSaveServiceTemplateMutation__
 *
 * To run a mutation, you first call `useSaveServiceTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveServiceTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveServiceTemplateMutation, { data, loading, error }] = useSaveServiceTemplateMutation({
 *   variables: {
 *      serviceTemplateInput: // value for 'serviceTemplateInput'
 *   },
 * });
 */
export function useSaveServiceTemplateMutation(baseOptions?: Apollo.MutationHookOptions<SaveServiceTemplateMutation, SaveServiceTemplateMutationVariables>) {
        return Apollo.useMutation<SaveServiceTemplateMutation, SaveServiceTemplateMutationVariables>(SaveServiceTemplateDocument, baseOptions);
      }
export type SaveServiceTemplateMutationHookResult = ReturnType<typeof useSaveServiceTemplateMutation>;
export type SaveServiceTemplateMutationResult = Apollo.MutationResult<SaveServiceTemplateMutation>;
export type SaveServiceTemplateMutationOptions = Apollo.BaseMutationOptions<SaveServiceTemplateMutation, SaveServiceTemplateMutationVariables>;
export const UpdateServiceTemplateDocument = gql`
    mutation UpdateServiceTemplate($id: ID!, $serviceTemplateInput: ServiceTemplateUpdateDto!) {
  updateServiceTemplate(id: $id, serviceTemplateDto: $serviceTemplateInput) {
    id
  }
}
    `;
export type UpdateServiceTemplateMutationFn = Apollo.MutationFunction<UpdateServiceTemplateMutation, UpdateServiceTemplateMutationVariables>;

/**
 * __useUpdateServiceTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateServiceTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceTemplateMutation, { data, loading, error }] = useUpdateServiceTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      serviceTemplateInput: // value for 'serviceTemplateInput'
 *   },
 * });
 */
export function useUpdateServiceTemplateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateServiceTemplateMutation, UpdateServiceTemplateMutationVariables>) {
        return Apollo.useMutation<UpdateServiceTemplateMutation, UpdateServiceTemplateMutationVariables>(UpdateServiceTemplateDocument, baseOptions);
      }
export type UpdateServiceTemplateMutationHookResult = ReturnType<typeof useUpdateServiceTemplateMutation>;
export type UpdateServiceTemplateMutationResult = Apollo.MutationResult<UpdateServiceTemplateMutation>;
export type UpdateServiceTemplateMutationOptions = Apollo.BaseMutationOptions<UpdateServiceTemplateMutation, UpdateServiceTemplateMutationVariables>;
export const ServiceTemplatesDocument = gql`
    query ServiceTemplates {
  serviceTemplates {
    id
    name
    pricingStructure
    default
    description
    includingWeekend
  }
}
    `;

/**
 * __useServiceTemplatesQuery__
 *
 * To run a query within a React component, call `useServiceTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useServiceTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<ServiceTemplatesQuery, ServiceTemplatesQueryVariables>) {
        return Apollo.useQuery<ServiceTemplatesQuery, ServiceTemplatesQueryVariables>(ServiceTemplatesDocument, baseOptions);
      }
export function useServiceTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceTemplatesQuery, ServiceTemplatesQueryVariables>) {
          return Apollo.useLazyQuery<ServiceTemplatesQuery, ServiceTemplatesQueryVariables>(ServiceTemplatesDocument, baseOptions);
        }
export type ServiceTemplatesQueryHookResult = ReturnType<typeof useServiceTemplatesQuery>;
export type ServiceTemplatesLazyQueryHookResult = ReturnType<typeof useServiceTemplatesLazyQuery>;
export type ServiceTemplatesQueryResult = Apollo.QueryResult<ServiceTemplatesQuery, ServiceTemplatesQueryVariables>;
export const ProductModelByFilterDocument = gql`
    query ProductModelByFilter($filter: ProductModelFilterDto!, $locationId: ID, $ownerId: ID, $startTime: DateTime, $endTime: DateTime) {
  productModels(filter: $filter) {
    id
    lecturaId
    lecturaModel
    name
    attributes
    key
    type {
      name
      attributes {
        key
        unit
      }
    }
    manufacturer {
      name
      abbreviation
    }
    products(
      locationId: $locationId
      ownerId: $ownerId
      startTime: $startTime
      endTime: $endTime
    ) {
      id
      serialNumber
      priceMonthly
      priceWeekly
      priceDaily
      location {
        id
        name
      }
    }
    documents {
      id
      name
      extension
      mimeType
      path
      location
      documentCategory {
        id
        key
      }
    }
  }
}
    `;

/**
 * __useProductModelByFilterQuery__
 *
 * To run a query within a React component, call `useProductModelByFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductModelByFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductModelByFilterQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      locationId: // value for 'locationId'
 *      ownerId: // value for 'ownerId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *   },
 * });
 */
export function useProductModelByFilterQuery(baseOptions: Apollo.QueryHookOptions<ProductModelByFilterQuery, ProductModelByFilterQueryVariables>) {
        return Apollo.useQuery<ProductModelByFilterQuery, ProductModelByFilterQueryVariables>(ProductModelByFilterDocument, baseOptions);
      }
export function useProductModelByFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductModelByFilterQuery, ProductModelByFilterQueryVariables>) {
          return Apollo.useLazyQuery<ProductModelByFilterQuery, ProductModelByFilterQueryVariables>(ProductModelByFilterDocument, baseOptions);
        }
export type ProductModelByFilterQueryHookResult = ReturnType<typeof useProductModelByFilterQuery>;
export type ProductModelByFilterLazyQueryHookResult = ReturnType<typeof useProductModelByFilterLazyQuery>;
export type ProductModelByFilterQueryResult = Apollo.QueryResult<ProductModelByFilterQuery, ProductModelByFilterQueryVariables>;
export const ProductTypesDocument = gql`
    query ProductTypes($productTypeId: ID, $productModelId: ID, $locationId: ID, $ownerId: ID, $startTime: DateTime, $endTime: DateTime) {
  productTypes(productTypeId: $productTypeId) {
    id
    name
    productModel(productModelId: $productModelId) {
      id
      name
      attributes
      key
      hasVin
      manufacturer {
        name
        abbreviation
      }
      products(
        locationId: $locationId
        ownerId: $ownerId
        startTime: $startTime
        endTime: $endTime
      ) {
        id
        serialNumber
        priceMonthly
        location {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useProductTypesQuery__
 *
 * To run a query within a React component, call `useProductTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductTypesQuery({
 *   variables: {
 *      productTypeId: // value for 'productTypeId'
 *      productModelId: // value for 'productModelId'
 *      locationId: // value for 'locationId'
 *      ownerId: // value for 'ownerId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *   },
 * });
 */
export function useProductTypesQuery(baseOptions?: Apollo.QueryHookOptions<ProductTypesQuery, ProductTypesQueryVariables>) {
        return Apollo.useQuery<ProductTypesQuery, ProductTypesQueryVariables>(ProductTypesDocument, baseOptions);
      }
export function useProductTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductTypesQuery, ProductTypesQueryVariables>) {
          return Apollo.useLazyQuery<ProductTypesQuery, ProductTypesQueryVariables>(ProductTypesDocument, baseOptions);
        }
export type ProductTypesQueryHookResult = ReturnType<typeof useProductTypesQuery>;
export type ProductTypesLazyQueryHookResult = ReturnType<typeof useProductTypesLazyQuery>;
export type ProductTypesQueryResult = Apollo.QueryResult<ProductTypesQuery, ProductTypesQueryVariables>;
export const ProductsAvailabilityDocument = gql`
    query productsAvailability($fromDate: DateTime!) {
  products {
    id
    availability(fromDate: $fromDate) {
      status
      nextAvailableDate
      nextReservationStart
    }
  }
}
    `;

/**
 * __useProductsAvailabilityQuery__
 *
 * To run a query within a React component, call `useProductsAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsAvailabilityQuery({
 *   variables: {
 *      fromDate: // value for 'fromDate'
 *   },
 * });
 */
export function useProductsAvailabilityQuery(baseOptions: Apollo.QueryHookOptions<ProductsAvailabilityQuery, ProductsAvailabilityQueryVariables>) {
        return Apollo.useQuery<ProductsAvailabilityQuery, ProductsAvailabilityQueryVariables>(ProductsAvailabilityDocument, baseOptions);
      }
export function useProductsAvailabilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsAvailabilityQuery, ProductsAvailabilityQueryVariables>) {
          return Apollo.useLazyQuery<ProductsAvailabilityQuery, ProductsAvailabilityQueryVariables>(ProductsAvailabilityDocument, baseOptions);
        }
export type ProductsAvailabilityQueryHookResult = ReturnType<typeof useProductsAvailabilityQuery>;
export type ProductsAvailabilityLazyQueryHookResult = ReturnType<typeof useProductsAvailabilityLazyQuery>;
export type ProductsAvailabilityQueryResult = Apollo.QueryResult<ProductsAvailabilityQuery, ProductsAvailabilityQueryVariables>;
export const ProductsFilteredDocument = gql`
    query productsFiltered($query: SearchQueryParameterDto!, $locations: [String!]) {
  productsFiltered(query: $query, locations: $locations) {
    filteredProducts {
      id
      serialNumber
      productionYear
      location {
        id
        name
        city
        street
      }
      productModel {
        name
        type {
          name
        }
        manufacturer {
          name
          abbreviation
        }
      }
      productOwner {
        name
        isFlexcavo
      }
    }
    totalCount
  }
}
    `;

/**
 * __useProductsFilteredQuery__
 *
 * To run a query within a React component, call `useProductsFilteredQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsFilteredQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsFilteredQuery({
 *   variables: {
 *      query: // value for 'query'
 *      locations: // value for 'locations'
 *   },
 * });
 */
export function useProductsFilteredQuery(baseOptions: Apollo.QueryHookOptions<ProductsFilteredQuery, ProductsFilteredQueryVariables>) {
        return Apollo.useQuery<ProductsFilteredQuery, ProductsFilteredQueryVariables>(ProductsFilteredDocument, baseOptions);
      }
export function useProductsFilteredLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsFilteredQuery, ProductsFilteredQueryVariables>) {
          return Apollo.useLazyQuery<ProductsFilteredQuery, ProductsFilteredQueryVariables>(ProductsFilteredDocument, baseOptions);
        }
export type ProductsFilteredQueryHookResult = ReturnType<typeof useProductsFilteredQuery>;
export type ProductsFilteredLazyQueryHookResult = ReturnType<typeof useProductsFilteredLazyQuery>;
export type ProductsFilteredQueryResult = Apollo.QueryResult<ProductsFilteredQuery, ProductsFilteredQueryVariables>;
export const RentalInfoDocument = gql`
    query RentalInfo($id: ID!) {
  product(id: $id) {
    id
    priceDaily
    priceWeekly
    priceMonthly
    productModel {
      productModelBundles {
        id
        name
        type {
          id
          name
        }
        manufacturer {
          id
          name
        }
      }
      modelLeadTime
    }
    services {
      id
      price
      serviceTemplate {
        id
        name
        description
        pricingStructure
      }
    }
    productLeadTime
    serviceTime
    calculateWeekend
  }
}
    `;

/**
 * __useRentalInfoQuery__
 *
 * To run a query within a React component, call `useRentalInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useRentalInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRentalInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRentalInfoQuery(baseOptions: Apollo.QueryHookOptions<RentalInfoQuery, RentalInfoQueryVariables>) {
        return Apollo.useQuery<RentalInfoQuery, RentalInfoQueryVariables>(RentalInfoDocument, baseOptions);
      }
export function useRentalInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RentalInfoQuery, RentalInfoQueryVariables>) {
          return Apollo.useLazyQuery<RentalInfoQuery, RentalInfoQueryVariables>(RentalInfoDocument, baseOptions);
        }
export type RentalInfoQueryHookResult = ReturnType<typeof useRentalInfoQuery>;
export type RentalInfoLazyQueryHookResult = ReturnType<typeof useRentalInfoLazyQuery>;
export type RentalInfoQueryResult = Apollo.QueryResult<RentalInfoQuery, RentalInfoQueryVariables>;