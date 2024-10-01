import { PurchaseItemProps } from "./payment_props";

export interface User {
  can_update: number;
  coins: number;
  country_code: string | null;
  created_at: string;
  device_id: string | null;
  email: string;
  fldr_str: string;
  id: number;
  is_premium: number;
  login_type: string;
  name: string;
  number: string | null;
  photo_uri: string;
  razorpay_cus_id: string;
  refer_id: string;
  special_user: number;
  stripe_cus_id: string;
  total_validity: number;
  uid: string;
  updated_at: string;
  utm_medium: string;
  utm_source: string;
  validity: number;
  displayName: string;
}

export interface FEventUser {
  name: string;
  id: string;
  number: string | null;
  email: string;
  photo_uri: string | null;
}

export interface BrandKit {
  address: string | null;
  brand_logo: string | null;
  business_designation: string | null;
  business_name: string | null;
  business_tagline: string | null;
  created_at: string;
  email: string;
  facebook: string | null;
  facebook_url: string | null;
  id: number;
  instagram: string | null;
  instagram_url: string | null;
  linkedin: string | null;
  linkedin_url: string | null;
  name: string;
  primary_number: string | null;
  profile_pic: string | null;
  secondary_number: string | null;
  twitter: string | null;
  twitter_url: string | null;
  updated_at: string;
  url: string;
  user_id: string;
  website: string | null;
  website_url: string | null;
}

export interface GetUserType {
  brandKit: BrandKit;
  current: any;
  purDatas: PurchaseItemProps[];
  url: string;
  user: User;
}

export interface PurchaseHistoryItem {
  amount: string;
  color: string;
  method: string;
  package_name: string;
  purchase_date: string;
  status: string;
  transaction_id: string;
  validity: string;
}

export interface HistoryItem {
  amount: string;
  color: string;
  height: number;
  product_id: string;
  product_image: string;
  product_name: string;
  product_type: number;
  purchase_date: string;
  status: string;
  transaction_id: string;
  width: number;
}

export interface CurrentPlanProps {
  current: string | any;
  currentColor: string;
  hasCurrentPlan: boolean;
  hasHistory: boolean;
  hasPurchases: boolean;
  history: PurchaseHistoryItem[] | any;
  historyColor: string;
  purchaseHistory: HistoryItem[] | string;
}
