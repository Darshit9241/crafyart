import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const imageUrl: string | string[] | any = req.query.url;

  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(response.data);

    const compressedImageBuffer = await sharp(imageBuffer)
      .resize(250)
      .toBuffer();

    res.setHeader("Content-Type", "image/jpeg");
    res.status(200).send(compressedImageBuffer);
  } catch (error) {
    res.status(500).send(error);
  }
}
