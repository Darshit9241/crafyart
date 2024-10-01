interface AmountDetails {
  tip: any[];
}

interface AutomaticPaymentMethods {
  allow_redirects: string;
  enabled: boolean;
}

interface RedirectToUrl {
  return_url: string;
  url: string;
}

interface NextAction {
  redirect_to_url: RedirectToUrl;
  type: string;
}

interface PaymentIntent {}

export interface StripeApiResponse {
  amount: number;
  amount_capturable: number;
  amount_details: AmountDetails;
  amount_received: number;
  application: null;
  application_fee_amount: null;
  automatic_payment_methods: AutomaticPaymentMethods;
  canceled_at: null;
  cancellation_reason: null;
  capture_method: string;
  client_secret: string;
  confirmation_method: string;
  created: number;
  currency: string;
  customer: string;
  description: string;
  id: string;
  invoice: null;
  last_payment_error: null;
  latest_charge: null;
  livemode: boolean;
  metadata: any;
  next_action: NextAction;
  object: string;
  on_behalf_of: null;
  payment_method: string;
  payment_method_configuration_details: any;
  payment_method_options: any;
  payment_method_types: string[];
  processing: null;
  receipt_email: null;
  review: null;
  setup_future_usage: string;
  shipping: null;
  source: null;
  statement_descriptor: null;
  statement_descriptor_suffix: null;
  status: string;
  transfer_data: null;
  transfer_group: null;
}

export interface RazorpayProps {
  key: string;
  name: string;
  customer_id: string;
  description: string;
  order_id: string;
  remember_customer: boolean;
}

export interface PaymentProps {
  id: string;
  type: number;
  inrVal: number;
  usdVal: number;
  inrAmount: string;
  usdAmount: string;
}

export interface ProductDataType {
  product_name: string;
  Product_id: string;
  amount: number;
}

export interface PaymentStatusProps {
  success: boolean;
  msg: string;
}

export interface PurchaseItemProps {
  id: string;
  type: number;
}
