export interface SingleTempType {
  auto_create: boolean;
  category_id: number;
  category_id_name: string;
  category_name: string;
  category_size: string;
  description: string;
  h2_tag: string;
  height: number;
  id_name: string;
  inrAmount: string;
  inrVal: number;
  is_premium: boolean;
  latest: boolean;
  meta_description: string;
  payment: {
    inrAmount: string;
    inrVal: number;
    usdAmount: string;
    usdVal: number;
  };
  ratio: string;
  status: number;
  string_id: string;
  tags: string[];
  template_id: number;
  template_name: string;
  template_thumb: string;
  thumbArray: string[];
  url: string;
  width: number;
  usdAmount: string;
  usdVal: number;
  video: string;
}
