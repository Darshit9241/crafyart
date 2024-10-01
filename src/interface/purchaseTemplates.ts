export interface Product {
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

export interface PurchaseTemplate {
  current_page: number;
  data: Product[];
  hasNextPage: boolean;
  message: string;
  success: boolean;
}
