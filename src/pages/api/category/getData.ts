import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { encryptData } from "@/src/aes-crypto";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (isFakeDomain(req)) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const apiUrl = process.env.API_BASE_URL_2;

    const response = await axios.post(
      `${apiUrl}/templates/api/getCategoryDatas`,
      {
        debug_key: "debug",
        limit: 48,
        cat_id: req.body.cat_id,
        page: req.body.page,
      }
    );

    return res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
