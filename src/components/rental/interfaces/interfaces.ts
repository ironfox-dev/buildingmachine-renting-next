import {
  SalesOrderItemServiceModel,
  SalesOrderModel,
  ProductServiceModel,
  ProductAttachmentsQuery,
  ExtendedOrderPriceQuery,
  SalesOrderItemModel,
} from '~/graphql/graphql';

export interface EditServicesProps {
  productServices: DeepPartial<ProductServiceModel[]>;
  itemServices: DeepPartial<SalesOrderItemServiceModel[]>;
  handleClose?: { (): void };
  productId: string;
  orderId: string;
}

export interface EditPeriodProps {
  // TODO: to add types here.
  startDate: any;
  endDate: any;
  orderItems: any;
  orderId?: string;
  orderTotal: number;
  onClose?: { (Boolean): void };
}

export interface EditPeriodViewProps extends EditPeriodProps {
  open: boolean;
  className: string;
}

export interface EditServicesViewProps extends EditServicesProps {
  open: boolean;
  className: string;
  onClose?: { (): void };
}

export interface SnackBar {
  isOpen: boolean;
  type: string;
  message: string;
}

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface RentalDetailHoc {
  order: DeepPartial<SalesOrderModel>;
  isLoading: boolean;
  Snackbar: () => JSX.Element;
  orderStatusUpdate(status: string): void;
}

export interface ExtendedPeriodProps {
  startDate: Date;
  endDate: Date;
  standardAttachments: [string];
  orderPriceData: ExtendedOrderPriceQuery;
  services: ProductAttachmentsQuery['product']['services'];
  bundles: SalesOrderItemModel[];
  parentOrderItem: SalesOrderItemModel;
}
