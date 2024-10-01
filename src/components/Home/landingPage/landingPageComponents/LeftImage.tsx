import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type PropsType = {
  title?: string;
  point?: React.ReactNode;
  image?: string;
  buttonName?: string;
  video?: string;
  alt?: string;
  path?: string | any;
  whatsapp?: boolean;
};

export default function LeftImage({
  title,
  point,
  image,
  buttonName,
  video,
  alt,
  path,
  whatsapp,
}: PropsType) {
  const router = useRouter();
  return (
    <Box className="bg-[#F4F7FE]">
      <Box className="flex py-[50px]  px-[20px] xl:px-[7%] w-full  xl:w-[92%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
        <Box className="flex-1 flex justify-center ">
          {image ? (
            <img
              src={image}
              alt={alt}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          ) : (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="object-contain w-[550px] max-lg:w-[400px] max-sm:w-full"
            >
              <track kind="captions" label="English" src={video} default />
            </video>
          )}
        </Box>
        <Box className="flex-1 flex justify-center py-[30px]  max-lg:pb-0  max-lg:w-[100%]">
          <Box className="w-[90%] flex  flex-col gap-[20px]   max-lg:w-[8 0%] max-sm:w-[100%]">
            <Typography
              className="text-[28px] font-semibold text-black max-lg:text-[22px]  max-sm:text-center"
              variant="h3"
            >
              {title}
            </Typography>
            {point}
            <Button
              style={{
                background:
                  "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                width: "fit-content",
                fontSize: "18px",
                textTransform: "unset",
                borderRadius: "5px",
                fontWeight: "500",
                color: "white",
              }}
              className="bg_linear py-[7px] px-[20px] ml-[40px]  max-lg:mx-auto text-[14px] 2sm:text-[17px]"
              onClick={() => {
                if (whatsapp) {
                  const phoneNumber = "9898978207";
                  const message = "Hello, I want to place a custom order.";

                  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;

                  window.location.href = whatsappLink;
                } else if (path) {
                  router.push(path);
                } else router.push("/login");
              }}
            >
              {buttonName}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
