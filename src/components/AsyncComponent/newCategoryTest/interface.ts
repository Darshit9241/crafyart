interface SeoData {
  h1_tag: string;
  h2_tag: string;
  long_desc: string;
  meta_desc: string;
  meta_title: string;
  short_desc: string;
}

interface Payment {
  inrVal: number;
  usdVal: number;
  inrAmount: string;
  usdAmount: string;
}

interface TemplateData {
  auto_create: boolean;
  category_id: number;
  category_name: string;
  category_size: string | null;
  created_at: string;
  height: number;
  id_name: string;
  inrAmount: string;
  inrVal: number;
  is_premium: boolean;
  latest: boolean;
  pages: number;
  payment: Payment;
  string_id: string;
  tags: string[];
  template_id: number;
  template_name: string;
  template_thumb: string;
  thumbArray: string[];
  usdAmount: string;
  usdVal: number;
  width: number;
}

interface Category {
  category_id: number;
  category_name: string;
  category_size: string | null;
  template_id: number;
  string_id: string;
  tags: string[];
  template_name: string;
  template_thumb: string;
  thumbArray: string[];
  auto_create: boolean;
  created_at: string;
  height: number;
  id_name: string;
  inrAmount: string;
  inrVal: number;
  is_premium: boolean;
  latest: boolean;
  pages: number;
  payment: Payment;
  usdAmount: string;
  usdVal: number;
  width: number;
}

interface CategoryDataApiResponse {
  data: {
    category_id: number;
    isLastPage: boolean;
    new_related_tags: any[];
    seo_data: SeoData;
    sub_category: Category[];
    template_data: TemplateData[];
  };
  new_api: boolean;
  status: boolean;
}

interface SearchParamsType {
  animation?: string;
  color?: string;
  interest?: string;
  language?: string[];
  license?: string;
  orientation?: string;
  religion?: string[];
  size?: string;
  style?: string[];
  theme?: string;
  query?: string;
}
