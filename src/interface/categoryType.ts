import { TemplateDataType } from "./commonType";

export interface CategoryApiData {
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

export interface ServerSideProps {
  datas?: TemplateDataType[];
  meta_title?: string;
  meta_desc?: string;
  h1_tag?: string;
  h2_tag?: string;
  long_desc?: string;
  short_desc?: string;
}
