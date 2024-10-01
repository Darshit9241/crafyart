import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
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
    const apiUrl = process.env.API_BASE_URL_2;
    const accessKey = process.env.API_KEY;

    const form = new FormData();
    form.append("key", `${accessKey}`);
    form.append("id", req.body.pi);
    form.append("u", decryptData(cookieValue._sdf));
    form.append("p", decryptData(req.body._paf));
    form.append(
      "currency",
      decryptData(cookieValue.cc,  process.env.AES_KEY, 'USD') === "IN" ? "INR" : "USD"
    );
    form.append("from", "Web");

    const response = await axios.post(`${apiUrl}/templates/api/stripe`, form);

    if (response.status === 200) {
      res.status(200).json(encryptData(JSON.stringify(response.data)));
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
