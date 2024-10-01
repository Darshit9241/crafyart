// import Sitemap from "@/src/components/sitemapComponent/Sitemap";
// import { DashboardDataType } from "@/src/interface/dashboard";
// import axios from "axios";

// interface DataAndKeywords {
//   data: DashboardDataType;
//   specialKeywordUrl: { datas: string[] };
//   dynamicPage: { page_slug: string; title: string }[];
// }

// const getData = async (): Promise<DataAndKeywords> => {
//   try {
//     const apiUrl = process.env.API_BASE_URL_2;
//     const accessKey = process.env.API_KEY;

//     const response = await axios.post(`${apiUrl}/templates/api/getCats`, {
//       key: `${accessKey}`,
//     });

//     const specialKeywordUrl = await axios.get(
//       `${apiUrl}/templates/api/keywords`
//     );

//     const dynamicPage = await axios.post(`${apiUrl}/pages/api/page-slug`, {
//       key: `${accessKey}`,
//     });

//     return {
//       data: response.data,
//       specialKeywordUrl: specialKeywordUrl.data,
//       dynamicPage: dynamicPage.data.data,
//     };
//   } catch (error) {
//     throw new Error("Failed");
//   }
// };

// export default async function page() {
//   const { data, specialKeywordUrl, dynamicPage } = await getData();

//   return (
//     <div>
//       <Sitemap
//         data={data}
//         specialKeywordUrl={specialKeywordUrl}
//         dynamicPage={dynamicPage}
//       />
//     </div>
//   );
// }

import Sitemap from "@/src/components/sitemapComponent/Sitemap";
import { DashboardDataType } from "@/src/interface/dashboard";
import axios from "axios";

interface DataAndKeywords {
  data: DashboardDataType;
  // specialKeywordUrl: { datas: string[] };
  specialKeywordUrl: any;

  dynamicPage: { page_slug: string; title: string }[];
}

const getData = async (): Promise<DataAndKeywords> => {
  try {
    const apiUrl = process.env.API_BASE_URL_2;
    const accessKey = process.env.API_KEY;

    const response = await axios.post(`${apiUrl}/templates/api/getCats`, {
      key: `${accessKey}`,
    });

    const specialKeywordUrl = await axios.get(
      `${apiUrl}/templates/api/keywords`
    );

    let dynamicPage;
    try {
      dynamicPage = await axios.post(`${apiUrl}/pages/api/page`, {
        key: `${accessKey}`,
      });
    } catch (error) {
      console.error("Error fetching dynamic page slugs:", error);
      dynamicPage = { data: { data: [] } };
    }

    return {
      data: response.data,
      specialKeywordUrl: specialKeywordUrl.data,
      dynamicPage: dynamicPage.data.data,
    };
  } catch (error) {
    throw new Error("Failed to fetch data: " + error);
  }
};

export default async function page() {
  const { data, specialKeywordUrl, dynamicPage } = await getData();

  return (
    <div>
      <Sitemap
        data={data}
        specialKeywordUrl={specialKeywordUrl}
        dynamicPage={dynamicPage}
      />
    </div>
  );
}
