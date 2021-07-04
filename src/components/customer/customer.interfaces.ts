export interface CustomerUpdateForm {
  companyName: string;
  firstname: string;
  lastname: string;
  email: string;
  street: string;
  city: string;
  postalCode: string;
  country: boolean;
  phone: string;
  phoneCode: boolean;
}

export interface CustomerOrder {
  orderReference: string;
  orderStatus: 'delivered' | 'canceled';
  machineModel: string;
  machineType: string;
  invoiceId: string;
  invoiceStatus: 'paid' | 'canceled';
  cost: number;
  street: string;
  city: string;
  startedOn: string;
  endedOn: string;
  rentalPark: string;
  channel: string;
}
