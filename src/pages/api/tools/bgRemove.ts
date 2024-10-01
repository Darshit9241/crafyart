import { decryptData } from "@/src/aes-crypto";
import { isFakeDomain } from "@/src/commonFunction/domain-checker";
import axios from "axios";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";

function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse<any>
) {
  try {
    if (isFakeDomain(req)) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const multerUpload = multer();
    await runMiddleware(req, res, multerUpload.single("file"));

    const cookieValue = req.cookies;
    const apiUrl = process.env.API_BASE_URL_3;
    const userId = decryptData(cookieValue._sdf);

    const formData = new FormData();
    formData.append("user_id", userId);

    if (req.file) {
      const fileBlob = new Blob([req.file.buffer], { type: req.file.mimetype });
      formData.append("file", fileBlob, req.file.originalname);
    }

    const response = await axios.post<ArrayBuffer>(
      `${apiUrl}/api/removebg`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "arraybuffer",
      }
    );

    const bufferData = Buffer.from(response.data);

    res.status(200).end(bufferData, "binary");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
