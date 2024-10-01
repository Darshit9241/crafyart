interface ColorDataType {
  id: number;
  code: string;
  status: number;
  emp_id: number;
  created_at: string;
  updated_at: string;
}

interface ColorDataListResponse {
  status: boolean;
  success: string;
  data: ColorDataType[];
}

interface CommonFilterDataType {
  id: number;
  name: string;
  status: number;
  emp_id: number;
  created_at: string;
  updated_at: string;
  id_name: string;
}

interface CommonFilterDataListResponse {
  status: boolean;
  success: string;
  data: CommonFilterDataType[];
}

interface ReligionsDataType {
  id: number;
  name: string;
  status: number;
}

interface ReligionsDataListResponse {
  flag: boolean;
  data: ReligionsDataType[];
}

interface DataType {
  name: string;
  id_name: string | number;
}

interface SizeDataType {
  id: number;
  name: string;
  height_ration: string;
  id_name: string;
  width_ration: string;
  unit: string;
  height: string;
  width:string; 
} 

interface SizeDataListResponse {
  status: boolean;
  success: string;
  data: SizeDataType[];
}

interface ThemeDataListResponse {
  flag: boolean;
  data: CommonFilterDataType[];
}
