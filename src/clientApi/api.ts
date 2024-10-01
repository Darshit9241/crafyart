import axios, { AxiosResponse } from "axios";
import { decryptData } from "../aes-crypto";
import {
  DeleteAccountOtpType,
  DeleteAccountType,
  GetCategoryDataType,
  GetCountryCodeType,
  GetDraftApiDataType,
  GetIpType,
  GetKeywordDataType,
} from "../interface/commonType";
import { CreateUserPayload } from "../interface/createUser";
import {
  DashboardDataType,
  DashboardNewDataType,
} from "../interface/dashboard";
import { RazorpayProps, StripeApiResponse } from "../interface/payment_props";
import { PackageData } from "../interface/pricePlan";
import { PurchaseTemplate } from "../interface/purchaseTemplates";
import { SearchTempType } from "../interface/searchTemplateType";
import {
  BillingDetails,
  StripePaymentMethodApiData,
} from "../interface/stripePaymentMethod";
import { CurrentPlanProps, GetUserType } from "../interface/user";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_NEXT_API_BASE_URL}`;

const api = {
  getIp: async (): Promise<GetIpType | unknown> => {
    try {
      const response: AxiosResponse<GetIpType> = await axios.get(
        `https://story.craftyartapp.com/get-ip`
      );
      const res: GetIpType = response?.data;
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  getCountryCode: async (payload: {
    ip: string;
  }): Promise<GetCountryCodeType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/get/getCountryCode`,
        payload
      );
      const res: GetCountryCodeType = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  getUserData: async (payload: {
    user_id: string;
  }): Promise<GetUserType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/user/getData`,
        payload
      );
      const decryptedData: GetUserType = JSON.parse(
        decryptData(response.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return decryptedData;
    } catch (error: unknown) {
      return error;
    }
  },

  createUser: async (
    payload: CreateUserPayload
  ): Promise<GetUserType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/user/create`,
        payload
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  deleteAccountOtp: async (payload: {
    mail: string;
  }): Promise<DeleteAccountOtpType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/user/account/delete/otp`,
        payload
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  deleteAccount: async (payload: {
    otp: string;
    idToken: string;
  }): Promise<DeleteAccountType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/user/account/delete/user`,
        payload
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  updateUser: async (userData: {
    name: string;
    updateDp: number | any;
    photo_uri: string;
  }): Promise<string | unknown> => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name || "");
      formData.append("updateDp", userData.updateDp || "");
      formData.append("file", userData.photo_uri || "");

      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/user/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response?.data;
    } catch (error: unknown) {
      return error;
    }
  },

  getCurrentPlan: async (): Promise<CurrentPlanProps | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/user/account/currentPlan`
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getUserTemplate: async (payload: {
    page: number;
  }): Promise<PurchaseTemplate | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/user/account/template`,
        payload
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getCategoryData: async (payload: {
    cat_id: string;
    page: number;
  }): Promise<GetCategoryDataType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/category/getData`,
        payload
      );
      const res = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  getCategoryDatas: async (payload: {
    key: string;
    category: string;
    filter: any;
    page: number;
  }): Promise<GetCategoryDataType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/category/getDatas`,
        payload
      );
      const res = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  getNewDashboardData: async (payload: {
    page: number;
  }): Promise<DashboardNewDataType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/dashboard/getNewData`,
        payload
      );
      const res: DashboardNewDataType = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  getDashboardData: async (payload: {
    page: number;
  }): Promise<DashboardDataType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/dashboard/getData`,
        payload
      );
      const res: DashboardDataType = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  getKeywordData: async (payload: {
    key_name: string;
    page: number;
  }): Promise<GetKeywordDataType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/special/getKeywordData`,
        payload
      );
      const res: GetKeywordDataType = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  searchTemplate: async (payload: {
    keywords: string;
    page: number;
  }): Promise<SearchTempType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/search/templates`,
        payload
      );
      const res: SearchTempType = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  specialTemplates: async (payload: {
    keywords: string;
    page: number;
  }): Promise<SearchTempType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/special/getTemplatesData`,
        payload
      );
      const res: SearchTempType = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  getDraftData: async (payload: {
    type: string;
    page: number;
  }): Promise<GetDraftApiDataType | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/draft/getData`,
        payload
      );
      const res: GetDraftApiDataType = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  draftAction: async (payload: {
    id: string;
    type: string;
  }): Promise<string | unknown> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/draft/action`,
        payload
      );

      return response?.data;
    } catch (error) {
      return error;
    }
  },

  getUploadData: async (payload: {
    type: string;
    asset_type: number;
    page: number;
  }): Promise<GetDraftApiDataType | unknown> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/upload/getData`,
        payload
      );
      const res = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  uploadAction: async (payload: {
    id: any;
    type: string;
  }): Promise<string | unknown> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/upload/action`,
        payload
      );

      return response?.data;
    } catch (error: unknown) {
      return error;
    }
  },

  getPlanData: async (payload: {
    currency: string;
  }): Promise<PackageData[] | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/plans/getData`,
        payload
      );
      const res = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res?.subs;
    } catch (error: unknown) {
      return error;
    }
  },

  razorpay: async (payload: {
    _paf: string;
  }): Promise<RazorpayProps | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/payment/razorPay`,
        payload
      );
      const res: RazorpayProps = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  stripe: async (payload: {
    pi: string;
    _paf: string;
  }): Promise<StripeApiResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/payment/stripe`,
        payload
      );
      const res: StripeApiResponse = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error: unknown) {
      return error;
    }
  },

  webhook: async (payload: { _paf: string; _pdf: string }) => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/payment/webhook`,
        payload
      );
      const res = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  cardList: async (): Promise<StripePaymentMethodApiData | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/payment/list`
      );
      const res = JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
      return res?.data;
    } catch (error: unknown) {
      return error;
    }
  },

  detach: async (payload: { pm: string }): Promise<string | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/payment/detach`,
        payload
      );
      return response?.data;
    } catch (error: unknown) {
      return error;
    }
  },

  updateCard: async (payload: {
    pm: string | undefined;
    billing_details: BillingDetails;
    month: number | undefined;
    year: number | undefined;
  }): Promise<string | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/payment/update`,
        payload
      );

      return response?.data;
    } catch (error: unknown) {
      return error;
    }
  },

  removeBackground: async (payload: { image: File }): Promise<Blob> => {
    try {
      const formData = new FormData();
      formData.append("file", payload.image);

      const response: AxiosResponse<Blob> = await axios.post(
        `${API_BASE_URL}/tools/bgRemove`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },


  getColorData: async (): Promise<ColorDataListResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/filter/list/color`
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getInterestData: async (payload: {
    cat_id: number;
  }): Promise<CommonFilterDataListResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/filter/list/interest`,
        payload
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getReligionsData: async (): Promise<ReligionsDataListResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/filter/list/religions`
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getSizeData: async (payload: {
    cat_id: number;
  }): Promise<SizeDataListResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/filter/list/sizes`,
        payload
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getStyleData: async (): Promise<CommonFilterDataListResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/filter/list/style`
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getThemeData: async (payload: {
    cat_id: number;
  }): Promise<ThemeDataListResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/filter/list/theme`,
        payload
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },

  getLanguageData: async (): Promise<ThemeDataListResponse | unknown> => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        `${API_BASE_URL}/filter/list/language`
      );
      return JSON.parse(
        decryptData(response?.data, process.env.NEXT_PUBLIC_AES_KEY)
      );
    } catch (error: unknown) {
      return error;
    }
  },
};

export default api;





 // imageEnhancer: async (payload: { image: File }): Promise<Blob> => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', payload.image);
  
  //     const response = await axios.post<ArrayBuffer>(
  //       'http://192.168.1.23:8000/Enhancer/upload/',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           'accept': 'application/json',
  //         },
  //         responseType: 'arraybuffer',
  //       }
  //     );
  
  //     const blob = new Blob([response.data], { type: 'image/png' });
  //     return blob;
  //   } catch (error) {
  //     console.error('Error enhancing image:', error);
  //     throw new Error('Image enhancement failed');
  //   }
  //   // try {
  //   //   const formData = new FormData();
  //   //   formData.append("file", payload.image);

  //   //   const response: AxiosResponse<Blob> = await axios.post(
  //   //     `${API_BASE_URL}/tools/ImageEnhancer`,
  //   //     formData,
  //   //     {
  //   //       headers: {
  //   //         "Content-Type": "multipart/form-data",
  //   //       },
  //   //       responseType: "blob",
  //   //     }
  //   //   );

  //   //   return response.data;
  //   // } catch (error) {
  //   //   throw error;
  //   // }
  // },