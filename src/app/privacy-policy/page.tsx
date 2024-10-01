"use client";
import { handleEmailClick } from "@/src/commonFunction/emailCheck";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

export default function index() {
  return (
    <div className="py-[50px] max-sm:py-[20px] px-[15px]">
      <CustomHead
        heading={"Privacy Policy"}
        text="Where creativity meets confidentiality! Explore our guidelines for secure artistic expression. Privacy and art, perfectly blended."
      />
      <Box className="flex items-center flex-col">
        <Typography
          className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto sm:mb-10"
          variant="h1"
        >
          Privacy Policy
        </Typography>

        <Box className="w-[80%] max-sm:w-full  mx-auto">
          <Typography>
            Crafty Art built the Crafty Art graphic design tool as an
            ad-supported website. This service is provided by Crafty Art at no
            cost and is intended for use as-is. This page is used to inform
            visitors regarding my policies, regarding the collection, use, and
            disclosure of personal information if anyone decides to use my
            service. If you choose to use my service, then you agree to the
            collection and use of information in relation to this policy. The
            personal information that I collect is used for providing and
            improving the service. I will not use or share your information with
            anyone except as described in this privacy policy. The terms used in
            this privacy policy have the same meanings as in our terms and
            conditions, which are accessible at CraftyArt, unless otherwise
            defined in this privacy policy.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Information Collection and Use
          </Typography>

          <Typography>
            For a better experience while using our service, I may require you
            to provide us with certain personally identifiable information,
            including but not limited to Crafty Art. The information that I
            request will be retained on your device and is not collected by me
            in any way. The website does use third-party services that may
            collect information used to identify you.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Link to the privacy policies of third-party service providers used
            by the website
          </Typography>

          <ul
            style={{
              listStyleType: "unset",
              color: "blue",
              marginLeft: "20px",
            }}
          >
            <li>Google Play Services</li>
            <li>AdMob</li>
            <li>Google Analytics for Firebase</li>
            <li>Firebase Crashlytics</li>
            <li>Facebook</li>
            <li>Unity</li>
          </ul>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Log Data
          </Typography>

          <Typography>
            I want to inform you that whenever you use my service, in the event
            of an error in the website, I collect data and information (through
            third-party products) on your phone called "log data." This log data
            may include information such as your device's Internet Protocol
            ("IP") address, device name, operating system version, the
            configuration of the website when utilising my service, the time and
            date of your use of the service, and other statistics.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Cookies
          </Typography>

          <Typography>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory. This service does not use these "cookies" explicitly.
            However, the website may use third-party code and libraries that use
            "cookies" to collect information and improve their services. You
            have the option to either accept or refuse these cookies, and you
            will know when a cookie is being sent to your device. If you choose
            to refuse our cookies, you may not be able to use some portions of
            this service.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Service Providers
          </Typography>

          <Typography>
            I may employ third-party companies and individuals due to the
            following reasons:
          </Typography>

          <ul
            style={{
              listStyleType: "unset",
              color: "black",
              marginLeft: "25px",
            }}
          >
            <li>Google Play Services</li>
            <li>AdMob</li>
            <li>Google Analytics for Firebase</li>
            <li>Firebase Crashlytics</li>
            <li>Facebook</li>
            <li>Unity</li>
          </ul>

          <Typography>
            I want to inform users of this service that these third parties have
            access to their personal information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Security
          </Typography>

          <Typography>
            I value your trust in providing us with your personal information,
            so we are striving to use commercially acceptable means of
            protecting it. But remember that no method of transmission over the
            internet or method of electronic storage is 100% secure and
            reliable, and I cannot guarantee its absolute security.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Links to Other Site
          </Typography>

          <Typography>
            This service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by me. Therefore, I strongly advise
            you to review the privacy policies of these websites. I have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            How long we keep your information
          </Typography>

          <Typography>
            We will retain your personal data for as long as is necessary to
            fulfil the purpose for which this data was collected and any other
            permitted linked purpose (for example certain transaction details
            and correspondence related to any legal services we provide may be
            retained until the time limit for claims in respect of the
            transaction has expired or in order to comply with regulatory
            requirements regarding the retention of such data). If your personal
            data is used for two purposes we will retain it until the purpose
            with the latest period expires; but we will stop using it for the
            purpose with a shorter period once that period expires. Our
            retention periods are also based on our business needs and good
            practice.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            How we transfer, store and protect your data
          </Typography>

          <Typography>
            We are committed to protecting your data from third parties. That’s
            why it’s our strict policy never to sell your personal information
            to anyone. We don’t share information that personally identifies you
            with advertisers, such as your name or email, unless you ask us to.
            For example, if you see an ad for a nearby flower shop and select
            the 'tap to call' button, we’ll connect your call and may share your
            phone number with the flower shop. If you’re using an Android
            device, we require third-party apps to ask for your permission to
            access certain types of data – like your photos, contacts or
            location.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Children’s Privacy
          </Typography>

          <Typography>
            These services do not address anyone under the age of 13. I do not
            knowingly collect personally identifiable information from children
            under 13 years of age. In the event that I discover that a child
            under 13 has provided me with personal information, I immediately
            delete it from our servers. If you are a parent or guardian and you
            are aware that your child has provided us with personal information,
            please contact me so that I can take the necessary actions.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Changes to this Privacy Policy
          </Typography>

          <Typography>
            I may update our privacy policy from time to time. Thus, you are
            advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new privacy policy on this
            page.
          </Typography>

          <Typography>
            This policy is effective as of{" "}
            <span className="text-[blue]"> 29th Aug 2022 </span>
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Contact Us
          </Typography>

          <Typography>
            If you have any questions or suggestions about my privacy policy, do
            not hesitate to contact me at{" "}
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              {" "}
              infiappsolution@gmail.com
            </span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
