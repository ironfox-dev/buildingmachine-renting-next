import React from 'react';

export default interface Location {
  id: string;
  name: string;
  dieselPrice: number | string;
  gasolinePrice: number | string;
  city: string;
  street: string;
  telephone: string;
  postalCode: string;
}

export interface SnackBar {
  isOpen: boolean;
  type: string;
  message: string;
}

export interface FormContainerProps {
  snackbar: SnackBar;
  setSnackbar: React.Dispatch<SnackBar>;
}

export interface FormValues extends Location {
  weeklyOperatingHours: OperatingHours[];
}

export interface OperatingHours {
  weekDay: string;
  startTime: string;
  endTime: string;
  open: boolean;
}
