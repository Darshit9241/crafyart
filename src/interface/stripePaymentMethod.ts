export interface AddressDetails {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface BillingDetails {
  address: AddressDetails | undefined;
  email: string;
  name: string | undefined;
  phone: string | undefined;
}

export interface CardChecks {
  address_line1_check: string;
  address_postal_code_check: string;
  cvc_check: string;
}

export interface CardNetworks {
  available: string[];
}

export interface Card {
  brand: string;
  checks: CardChecks;
  country: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  last4: string;
  networks: CardNetworks;
  three_d_secure_usage: {
    supported: boolean;
  };
}

export interface StripePaymentMethod {
  billing_details: BillingDetails;
  card: Card;
  created: number;
  customer: string;
  id: string;
  livemode: boolean;
  metadata: any[];
  object: string;
  type: string;
}

export interface StripePaymentMethodApiData {
  data: StripePaymentMethod[];
  has_more: boolean;
  object: string;
  url: string;
}
