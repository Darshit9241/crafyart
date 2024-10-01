import { TemplateDataType } from "./commonType";

export interface DashboardData {
  category_id: number;
  category_name: string;
  category_thumb: string;
  id_name: string;
  template_model: TemplateDataType[];
}

export interface DashboardDataType {
  datas: DashboardData[];
  isLastPage: boolean;
  success: boolean;
}


export interface PagesData {
  title:any;
  link:any
}
export interface DashboardDataType1 {
  pages: PagesData[] 
  isLastPage: boolean;
  success: boolean;
}
export interface Category {
  category_id: number;
  category_name: string;
  category_thumb: string;
  id_name: string;
  template_model: TemplateDataType[];
}

export interface DashboardNewDataType {
  datas: Category[];
  isLastPage: boolean;
  status: boolean;
}
