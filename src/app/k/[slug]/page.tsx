import SKeyword from "@/src/components/AsyncComponent/SkeywordPage";
import axios from "axios";
import { notFound } from "next/navigation";

const getData = async (slug: string): Promise<any> => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  try {
    const accessKey = process.env.API_KEY;
    const apiUrl = process.env.API_BASE_URL_2;

    const response = await axios.post(
      `${apiUrl}/templates/api/getKeyTemplates/`,
      {
        key: `${accessKey}`,
        key_name: slug,
        page: 1,
      }
    );
    let serverData = response?.data;
     let updatedLines = response?.data?.long_desc;
 
    const formattedText = response?.data?.long_desc;
    const lines = formattedText?.split(/\n/g);

    const keyword = "no keyword";
    if (lines && keyword) {
      const link = `
        <a href="${domain}k/wedding-invitation-template" target="_blank" rel="noopener" style="text-decoration: none;" class="text_linear">
          Wedding Invitation Template
        </a>
      `;
      const keywordRegExp = new RegExp(keyword, "gi");
      updatedLines = lines.map((line: string) =>
        line.replace(keywordRegExp, link)
      );
    }

    return { serverData, updatedLines };
  } catch (error) {
    notFound();
  }
};

export default async function page({ params }: any) {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <>
      <SKeyword
        serverData={data?.serverData}
        updatedLines={data?.updatedLines}
        categoryId={slug}
        slugId={slug}
      />
    </>
  );
}
