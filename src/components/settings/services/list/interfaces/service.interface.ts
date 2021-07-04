export interface ServiceItem {
  name: string;
  description: string;
  pricing: string;
  isDefault: boolean;
}

export interface ServiceItemComponent {
  serviceItem: ServiceItem;
  handleServiceEdit: () => void;
}
