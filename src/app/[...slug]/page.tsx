import NewSpecial from "@/src/components/AsyncComponent/NewSpecial";
import axios from "axios";
import { notFound } from "next/navigation";

const getData = async (slug: string): Promise<any> => {
  const apiUrl = process.env.API_BASE_URL_2;
  const accessKey = process.env.API_KEY;

  try {
    const response = await axios.post(`${apiUrl}/pages/api/page?id=1`, {
      key: `${accessKey}`,
      slug: slug,
    });
    let serverData = response?.data;

    if (response?.data?.status === "success") {
      return serverData;
    } else notFound();
  } catch (error) {
    notFound();
  }
};

export default async function page({ params }: any) {
  const { slug } = params;
  const slugString = slug.join("/");

  const data = await getData(`${slugString}`);

  return (
    <>
      {/* <SpecialPage data={data?.data} slug={slugString} /> */}
      <NewSpecial data={data?.data} slug={slugString} slugId={slug} />
    </>
  );
}
