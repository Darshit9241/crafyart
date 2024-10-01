export interface PackageData {
  id: number;
  package_name: string;
  desc: string;
  validity: number;
  currency: string;
  actual_price: string;
  price: number;
  has_offer: number;
  offer_msg?: string;
  offer_price?: string;
}
