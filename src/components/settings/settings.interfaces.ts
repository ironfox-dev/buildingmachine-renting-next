export interface AccountInfoForm {
  isCompanyNameEditable: boolean;
  isFirstnameEditable: boolean;
  isLastnameEditable: boolean;
  isAddressEditable: boolean;
  isEmailEditable: boolean;
  isPositionEditable: boolean;
  isPasswordEditable: boolean;
  companyName: string;
  firstname: string;
  lastname: string;
  email: string;
  street: string;
  city: string;
  postalCode: string;
  password: string;
  passwordAgain: string;
  position: string;
}
