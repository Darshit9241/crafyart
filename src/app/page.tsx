import axios from "axios";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { consoleLog } from "../commonFunction/console";
import { DashboardDataType } from "../interface/dashboard";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const Dashboard = dynamic(
  () => import("@/src/components/Home/dashboard/Dashboard")
);

const LandingPage = dynamic(
  () => import("@/src/components/Home/landingPage/LandingPage")
);

const getData = async (): Promise<DashboardDataType> => {
  try {
    const apiUrl = process.env.API_BASE_URL_2;
    const accessKey = process.env.API_KEY;

    const response = await axios.post(`${apiUrl}/templates/api/getDashboard`, {
      key: `${accessKey}`,
      page: 1,
    });

    return response?.data;
  } catch (error) {
    consoleLog("error: ", error);
    throw new Error("Failed");
  }
};

export default async function Home() {
  let data: DashboardDataType = {
    datas: [],
    isLastPage: false,
    success: false,
  };

  const sessionId = cookies().get("_sdf");
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  if (sessionId) {
    data = await getData();
  }

  return (
    <main>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/landingPageMainVideo.png`}
        heading={"Free Invitation Templates & Cards Maker | Crafty Art"}
        text={
          "Create stunning invitations and cards with Crafty Art's free templates. Perfect for any occasion, our easy design tools help you craft invites in minutes."
        }
      />

      {sessionId ? <Dashboard data={data} /> : <LandingPage />}
    </main>
  );
}
