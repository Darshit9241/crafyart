"use client";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const WithCraftyartBanner = dynamic(
  () => import("@/src/components/common/WithCraftyartBanner")
);
const CustomerSaying = dynamic(
  () =>
    import(
      "@/src/components/Home/landingPage/landingPageComponents/CustomerSaying"
    )
);

export default function page() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  return (
    <>
      <CustomHead
        heading={"Convert Images to PDF Online - Crafty Art"}
        text="Easily convert your images to PDF format effortlessly. Create PDF documents from your pictures hassle-free. Ideal for organizing and sharing your visual content."
      />

      <div className="items-center text-center justify-center py-24 px-5 md:px-20 bg_linear mx-auto max-w-[2400px]">
        <div>
          <h1 className="font-bold text-4xl text-white">
            Convert Images into PDF
          </h1>
          <p className="text-xl text-white pt-4">
            Convert Images to PDF online for free. Our Image to PDF Converter
            turns any image file into a PDF file.
          </p>
          <div className="p-4">
            <button className="p-3 px-5 bg-white rounded-2xl pt- text-black font-semibold">
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-center px-2 pt-10 font-bold text-black">
          How to Convert Images to PDF Free
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-20">
        <div className="bg-[#F4F7FE] p-10 rounded-2xl text-lg">
          <p>
            1. Select the images you want to convert to PDF, then add them to
            our converter to change them into a PDF.
          </p>
        </div>
        <div className="bg-[#F4F7FE] p-10 rounded-2xl text-lg">
          <p>
            2. Our online image to PDF converter changes your images into
            multiple PDFs or one merged PDF in seconds.
          </p>
        </div>
        <div className="bg-[#F4F7FE] p-10 rounded-2xl text-lg">
          <p>
            3. Download your converted PDF files and save them to your computer.
            After converting your images to PDFs, all files will be deleted from
            our servers.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-center px-2 font-bold text-black">
          Our Features
        </h1>
      </div>

      <div className="grid grid-row-4 lg:grid-cols-4 gap-4 lg:px-5 xl:px-20 2xl:px-32 pt-10 mx-auto max-w-[2400px]">
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[50px]"
              src={`${assetsUrl}/w_assets/tools/png-to-jpg/icone1.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">
              Quick and Easy Image to PDF Converter
            </h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              You can drag and drop your file above to quickly turn it into a
              PDF. You'll also be able to change settings like margin,
              orientation, and size.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[50px]"
              src={`${assetsUrl}/w_assets/tools/png-to-jpg/icone2.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">
              Guaranteed File Protection
            </h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              TLS encryption keeps your images secure at all times. No one can
              access your files, and we automatically delete them from our
              servers.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[60px]"
              src={`${assetsUrl}/w_assets/tools/png-to-jpg/icone3.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">
              Convert your Images to PDF Online
            </h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              Our Images to PDF converter works in your web browser, so it
              doesn't depend on your operating system. You can use it on a Mac,
              Windows, or Linux computer.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[70px]"
              src={`${assetsUrl}/w_assets/tools/png-to-jpg/icone4.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">Include extra documents</h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              After you've uploaded your images, you'll see a preview. You can
              change the settings and add more images to convert to PDF. We'll
              merge them into one PDF file for you.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-row-4 lg:grid-cols-4 gap-4 px-10 mx-auto max-w-[2400px]">
        <div className="lg:grid grid-cols-subgrid gap-4 col-span-3">
          <div className="col-start-2">
            <div className="py-5 lg:py-10 text-center">
              <div className="flex justify-center">
                <img
                  className="h-[50px] w-[50px]"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/icone5.png`}
                  alt="Logo"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold pt-5">Types of Image Files</h1>
              </div>
              <div className="text-center px-2 pt-2">
                <p>
                  Even though it's called the "images to PDF" converter, it can
                  also process many other image formats like GIF, BMP, TIFF, or
                  PNG. No matter what format you have, we'll convert your image
                  to PDF.
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-3">
            <div className="py-5 lg:py-10 text-center">
              <div className="flex justify-center">
                <img
                  className="h-[50px] w-[50px]"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/icone6.png`}
                  alt="Logo"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold pt-5">
                  Cloud-Based Conversion
                </h1>
              </div>
              <div className="text-center px-2 pt-2">
                <p>
                  Operating in the cloud, the Images to PDF converter doesn't
                  use any of your CPU's capacity. You also don't need to install
                  any software. Plus, it's free for everyone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      <div className="bg_linear flex flex-col text-white justify-center items-center px-5 md:px-10 py-20 text-center mx-auto max-w-[2400px]">
        <h1 className="font-bold text-3xl">
          Easily Convert your Images into PDF online.
        </h1>
      </div>

      <div className="mx-auto max-w-[2400px] py-5">
        <div className="flex justify-center">
          <h1 className="text-xl md:text-3xl text-center py-5 font-bold text-black">
            <p>
              {" "}
              <span className="text_linear">Check Out</span> Our Other Features
            </p>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center px-0 lg:px-5 xl:px-48">
          <div className="flex-shrink-0 w-full sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <a href="/tools/image-resizer">
              <div className="p-2 lg:p-5 rounded-3xl flex items-center justify-center bg-[#FAF5F0] cursor-pointer">
                <img
                  className="h-[200px] md:h-auto 2xl:h-[300px] w-auto"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/img1.png`}
                  alt="Placeholder Image"
                />
              </div>
            </a>
            <h1 className="text-center font-bold text-xl pt-4">Resize image</h1>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <a href="/tools/image-compressor">
              <div className="p-2 lg:p-5 rounded-3xl flex items-center justify-center bg-[#FAF5F0] cursor-pointer">
                <img
                  className="h-[200px] md:h-auto 2xl:h-[300px] w-auto"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/img2.png`}
                  alt="Placeholder Image"
                />
              </div>
            </a>
            <h1 className="text-center font-bold text-xl pt-4">
              Image compressor
            </h1>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <a href="/tools/qr-code-generator">
              <div className="p-2 lg:p-5 rounded-3xl flex items-center justify-center bg-[#FAF5F0] cursor-pointer">
                <img
                  className="h-[200px] md:h-auto 2xl:h-[300px] w-auto"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/img3.png`}
                  alt="Placeholder Image"
                />
              </div>
            </a>
            <h1 className="text-center font-bold text-xl pt-4">
              Qr code generator
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
