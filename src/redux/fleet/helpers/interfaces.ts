interface Location {
  id: string;
  name: string;
}

export interface ProductListProps {
  locations: Location[];
}

export interface ProductFilterProps {
  locations: Location[];
  handleCheckboxToggle: (field: string, id: string, checked: boolean) => void;
}

export interface MachineStatusInfo {
  marker: string;
  description: string;
}

export interface ProductAvailability {
  nextAvailableDate?: Date;
  nextReservationStart?: Date;
  status: string;
}

export interface ProductAvailabilityItem {
  availability: ProductAvailability;
  id: string;
}
