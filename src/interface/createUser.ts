export interface CreateUserType {
  auto_create: boolean;
  category_id: number;
  category_name: string;
  category_size: string;
  created_at: string;
  height: number;
  id_name: string;
  inrAmount: string;
  inrVal: number;
  is_premium: boolean;
  latest: boolean;
  pages: number;
  related_tags: string;
  string_id: string;
  template_id: number;
  template_name: string;
  template_thumb: string;
  thumbArray: string[];
  usdAmount: string;
  usdVal: number;
  width: number;
  template_model: string[];
}

export interface CreateUserPayload {
  name: string;
  email: string;
  photo_uri: string;
  user_id: string;
  login_type: string;
}
