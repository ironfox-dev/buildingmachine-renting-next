export interface RegistrationForm {
  companyName: string;
  firstname: string;
  lastname: string;
  email: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneCode: string;
  password: string;
  passwordAgain: string;
  position: string;
  acceptTerms: boolean;
  confirmIsCompany: boolean;
}

export interface ResetPasswordProps {
  token: string;
}
