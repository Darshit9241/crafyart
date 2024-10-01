import AES from "crypto-js/aes";
import { enc } from "crypto-js";
import { lib } from "crypto-js";

export const CryptoJSAesJson = {
  encrypt: function (value: any, password: string | undefined): string {
    if (password) {
      if (password.match(/[^\x00-\x7F]/)) {
      }
      return AES.encrypt(JSON.stringify(value), password, {
        format: CryptoJSAesJson,
      }).toString();
    }
    return "undefined";
  },

  decrypt: function (jsonStr: string, password: string | undefined): string {
    try {
      if (password) {
        if (password.match(/[^\x00-\x7F]/)) {
        }
        return JSON.parse(
          AES.decrypt(jsonStr, password, { format: CryptoJSAesJson }).toString(
            enc.Utf8
          )
        );
      }
      return "undefined";
    } catch (e) {
       return "undefined";
    }
   
  },

  stringify: function (cipherParams: {
    ciphertext: any;
    iv?: any;
    salt?: any;
  }): string {
    const j = {
      c: cipherParams.ciphertext.toString(enc.Base64),
      i: undefined,
      s: undefined,
    };
    if (cipherParams.iv) j.i = cipherParams.iv.toString();
    if (cipherParams.salt) j.s = cipherParams.salt.toString();
    return JSON.stringify(j).replace(/\s/g, "");
  },

  parse: function (jsonStr: string): any {
    const j = JSON.parse(jsonStr);

    const cipherParams = lib.CipherParams.create({
      ciphertext: enc.Base64.parse(j.c),
    });
    if (j.i) cipherParams.iv = enc.Hex.parse(j.i);
    if (j.s) cipherParams.salt = enc.Hex.parse(j.s);
    return cipherParams;
  },
};

export const encryptData = (str: string, key?: string) => {
  return CryptoJSAesJson.encrypt(str, key || process.env.AES_KEY);
};

export const decryptData = (
  str: string | undefined,
  key?: string,
  defaultVal?: string | undefined
) => {
  if (!str) {
    return defaultVal || "";
  }
  return CryptoJSAesJson.decrypt(str, key || process.env.AES_KEY);
};
export const colorsData = [
  { code: "#29db1e" },
  { code: "#000000" },
  { code: "#2718e0" },
  // { code: "#ffffff" },
  { code: "#d75f03" },
  { code: "#fbf500" },
  { code: "#db1010" },
];
