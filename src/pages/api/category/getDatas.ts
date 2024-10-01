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
    const apiKey = process.env.API_KEY;

    const response = await axios.post(`${apiUrl}/templates/api/getCategories`, {
      key: req.body.key,
      category: req.body.category,
      sub_category: req.body.sub_category,
      filter: req.body.filter,
      page: req.body.page,
    });
    return res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
