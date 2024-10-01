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
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const apiUrl = process.env.API_BASE_URL_2;
    const accessKey = process.env.API_KEY;

    const response = await axios.post(`${apiUrl}/templates/api/V3/createUser`, {
      key: `${accessKey}`,
      user_id: req.body.user_id,
      name: req.body.name,
      email: req.body.email,
      photo_uri: req.body.photo_uri,
      login_type: req.body.login_type,
      device_id: "",
      utm_medium: "craftyart",
      utm_source: "craftyart",
    });

    res.status(200).json(encryptData(JSON.stringify(response.data)));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
