import { NextApiRequest } from "next";

export function isFakeDomain(req: NextApiRequest) {
  const domain1 = process.env.NEXT_PUBLIC_ALLOW_DOMAIN_1;
  const domain2 = process.env.NEXT_PUBLIC_ALLOW_DOMAIN_2;
  const domain3 = process.env.NEXT_PUBLIC_ALLOW_DOMAIN_3;
  if (req.method !== "POST") {
    return true;
  }
  const allowedDomain = [domain1, domain2, domain3,"192.168.1.23:3895"];
  const referer = req.headers.referer || "";
  const domainMatch = referer.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  const domain = domainMatch ? domainMatch[1] : "";

  return !allowedDomain.includes(domain);
}
