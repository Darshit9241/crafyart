import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { decryptData, encryptData } from "@/src/aes-crypto";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    if (isFakeDomain(req)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const cookieValue = req.cookies;
    const apiUrl: string | undefined = process.env.API_BASE_URL_2;
    const accessKey: string | undefined = process.env.API_KEY;

    if (!apiUrl || !accessKey) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const _sdf: string | undefined = decryptData(cookieValue._sdf);
    const cc: string | undefined = decryptData(cookieValue.cc, process.env.AES_KEY, 'USD');

    if (!_sdf || !cc) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const form = new FormData();
    form.append("key", accessKey);
    form.append("u", _sdf);
    form.append("p", decryptData(req.body._paf));
    form.append("currency", cc === "IN" ? "INR" : "USD");
    form.append("from", "Web");

    const response: AxiosResponse = await axios.post(
      `${apiUrl}/templates/api/razorpay`,
      form
    );

    if (response.status === 200) {
      res.status(200).json(encryptData(JSON.stringify(response.data)));
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
