  import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
interface GetTemplatesProps {
  heading: string;
  text: string;
  navigate?: string;
  bt_none?: boolean;
  bt_name?: string;
}
export default function GetTemplates(props: GetTemplatesProps) {
  const router = useRouter();
  const token = authCookiesGet();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(90deg, #E2BBFE -1.13%, #9CDBFE 101.66%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 20px",
          gap: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontWeight: "600",
              lineHeight: "41px",
              textAlign: "center",
            }}
            className="text-[25px] sm:text-[31px] mb-2"
          >
            {props?.heading}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "black ",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {props?.text}
          </Typography>
        </Box>
        <button
          style={{
            backgroundColor: "white",
            width: "fit-content",
            textTransform: "unset",
            borderRadius: "5px",
            fontWeight: "500",
            fontSize: "17px",
            color: "white",
            display: props?.bt_none ? "none" : "block",
            cursor: props?.navigate ? "pointer" : "not-allowed",
          }}
          onClick={() => {
            if (props?.navigate) {
              if (token) {
                router.push(props?.navigate);
              } else router.push("/login");
            }
          }}
          className="py-[10px] px-[15px]"
        >
          <span className="text-black">
            {props?.bt_name ?? "Get All Templates"}{" "}
          </span>
        </button>
      </Box>
    </>
  );
}