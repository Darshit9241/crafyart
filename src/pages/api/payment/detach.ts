import { decryptData, encryptData } from "@/src/aes-crypto";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
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
    form.append("pm", req.body.pm);
    form.append("u", decryptData(cookieValue._sdf));
    form.append("testMode", "1");

    const response = await axios.post(`${apiUrl}/templates/api/detachpm`, form);

    if (response.status == 200) {
      res.status(200).json(encryptData(JSON.stringify(response.data)));
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
