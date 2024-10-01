import { TemplateDataType } from "@/src/interface/commonType";
import { PaymentProps, ProductDataType } from "@/src/interface/payment_props";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  openSidebar: boolean;
  openMobileMenubar: boolean;
  openTempModal: boolean;
  enterAccount: boolean;
  mainLoader: boolean;
  mainLoad: boolean;
  modalClosePath: string;
  currentPath: string;
  tempId: string;
  openLogin: boolean;
  _paf: PaymentProps[] | any;
  productData: ProductDataType | null;
  clearTemplateCookie: boolean;
  templatePreviewData: TemplateDataType | null;
  uploadRemoveId: any;
}

const initialState: DataState = {
  openSidebar: false,
  openMobileMenubar: false,
  openTempModal: false,
  enterAccount: false,
  mainLoader: true,
  mainLoad: false,
  modalClosePath: "",
  currentPath: "",
  tempId: "",
  openLogin: false,
  _paf: [],
  productData: null,
  clearTemplateCookie: false,
  templatePreviewData: null,
  uploadRemoveId: [],
};

const dataActions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<boolean>) => {
      state.openSidebar = action.payload;
    },
    openMobileMenubar: (state, action: PayloadAction<boolean>) => {
      state.openMobileMenubar = action.payload;
    },
    openTempModal: (state, action: PayloadAction<boolean>) => {
      state.openTempModal = action.payload;
    },
    enterAccount: (state, action: PayloadAction<boolean>) => {
      state.enterAccount = action.payload;
    },
    mainLoader: (state, action: PayloadAction<boolean>) => {
      state.mainLoader = action.payload;
    },
    mainLoad: (state, action: PayloadAction<boolean>) => {
      state.mainLoad = action.payload;
    },
    modalClosePath: (state, action: PayloadAction<string>) => {
      state.modalClosePath = action.payload;
    },
    tempId: (state, action: PayloadAction<string>) => {
      state.tempId = action.payload;
    },
    openLogin: (state, action: PayloadAction<boolean>) => {
      state.openLogin = action.payload;
    },
    _paf: (state, action: PayloadAction<PaymentProps[] | any>) => {
      state._paf = action.payload;
    },
    productData: (state, action: PayloadAction<PaymentProps[] | any>) => {
      state.productData = action.payload;
    },
    clearTemplateCookie: (state, action: PayloadAction<boolean>) => {
      state.clearTemplateCookie = action.payload;
    },
    templatePreviewData: (
      state,
      action: PayloadAction<TemplateDataType | null>
    ) => {
      state.templatePreviewData = action.payload;
    },
    currentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
    uploadRemoveId: (state, action: PayloadAction<string>) => {
      state.uploadRemoveId = action.payload;
    },
  },
});

export const {
  openSidebar,
  openMobileMenubar,
  openTempModal,
  modalClosePath,
  currentPath,
  enterAccount,
  mainLoader,
  tempId,
  mainLoad,
  openLogin,
  _paf,
  productData,
  clearTemplateCookie,
  templatePreviewData,
  uploadRemoveId,
} = dataActions.actions;
export default dataActions.reducer;
