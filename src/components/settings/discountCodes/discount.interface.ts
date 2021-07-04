export interface DiscountCode {
  id: string;
  code: string;
  type: string;
  value: number;
  currency: string;
  isActive: boolean;
}
