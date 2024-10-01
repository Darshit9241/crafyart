export interface TemplateDataType {
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
  video: string | null;
}

export interface GetIpType {
  ip: string;
}

export interface GetCountryCodeType {
  countryCode: string;
}

export interface DeleteAccountOtpType {
  message: string;
  type: string;
}

export interface DeleteAccountType {
  message: string;
  success: boolean;
}

export interface GetCategoryDataType {
  cat_id: number;
  datas: TemplateDataType[];
  h1_tag: string | null;
  h2_tag: string | null;
  isLastPage: boolean;
  long_desc: string | null;
  message: string;
  meta_desc: string | null;
  meta_title: string | null;
  short_desc: string | null;
  total_pages: number;
}

export interface GetKeywordDataType {
  current_page: number;
  datas: TemplateDataType[];
  h2_tag: string;
  long_desc: string;
  message: string;
  meta_desc: string;
  meta_title: string;
  short_desc: string;
  title: string;
  total_page: number;
}

export interface GetDraftApiDataType {
  datas: TemplateDataType[];
  isLastPage: boolean;
  message: string;
  success: boolean;
}
