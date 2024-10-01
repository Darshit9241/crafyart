import TemplatePage from "@/src/components/AsyncComponent/TemplatePage";
import { SingleTempType } from "@/src/interface/getSingleTempType";
import axios from "axios";
import { notFound } from "next/navigation";

const getData = async (slug: string): Promise<SingleTempType> => {
  if (slug) {
    try {
      const apiUrl = process.env.API_BASE_URL_2;
      const accessKey = process.env.API_KEY;

      const response = await axios.post(
        `${apiUrl}/templates/api/V4/getPosterPage`,
        {
          key: `${accessKey}`,
          id_name: slug,
          fromFabric: "1",
        }
      );

      return response?.data;
    } catch (error) {
      notFound();
    }
  } else notFound();
};

export default async function index({ params }: any) {
  const { slug } = params;
  const templateData: SingleTempType = await getData(slug);

  return (
    <>
      <TemplatePage templateData={templateData} />
    </>
  );
}
