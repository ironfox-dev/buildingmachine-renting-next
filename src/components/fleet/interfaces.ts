export interface ServiceTemplate {
  id: string;
  name: string;
  pricingStructure: string;
  default: boolean;
  description: string;
}

export interface RentalData {
  id: string;
  services?: any[];
  attachments?: {
    id: string;
    name: string;
    value: string;
  }[];
  priceMonthly: string;
  priceWeekly: string;
  priceDaily: string;
  leadTime: number;
  serviceTime: number;
  calculateWeekend: boolean;
}

export interface RentalInfoComponent {
  data?: RentalData;
  loaded: boolean;
  services?: EditedServices;
  onCheckService: (id: any) => void;
  onChangeService: (id: any, value: any) => void;
  onStartServiceEdit: () => void;
  onStopServiceEdit: () => void;
  onSubmitServicesChange: () => void;
  onStartRentalInfoEdition: () => void;
  onChangeRentalInfo: (e: any) => (e: any) => void;
  onCancelRentalInfoEdition: () => void;
  isRentalInfoEdition: boolean;
  onEditRentalInfo: () => void;
  onCancelLeadServiceTimeEdition: () => void;
  onStartLeadServiceTimeEdition: () => void;
  isLeadServiceTimeEdition: boolean;
  locations: {
    id: string;
    name: string;
  }[];
}

export interface EditServicesModalComponent {
  isModalOpen: boolean;
  services: EditedServices;
  onCancel: () => void;
  onChangeService: (id: any, value: any) => void;
  onCheckService: (id: any) => void;
  onSubmit: () => void;
}

export interface EditedServices {
  [key: string]: {
    id: string;
    price?: number;
    checked: boolean;
    default: boolean;
    name: string;
    pricingStructure: string;
  };
}
