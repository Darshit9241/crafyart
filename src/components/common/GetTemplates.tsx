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
            "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 20px",
          gap: "50px",
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
              color: "#ffffff",
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
              color: "#ffffff",
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
          <span className="text_linear">
            {props?.bt_name ?? "Get All Templates"}{" "}
          </span>
        </button>
      </Box>
    </>
  );
}
