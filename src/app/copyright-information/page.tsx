"use client";
import { handleEmailClick } from "@/src/commonFunction/emailCheck";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

export default function index() {
  return (
    <div className="py-[50px] max-sm:py-[20px] px-[15px]">
      <CustomHead
        heading={"Copyright Information: What You Need to Know"}
        text="Understand the implications of Copyright Information guide."
      />
      <Box className="flex items-center flex-col">
        <Typography
          className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto sm:mb-10"
          variant="h1"
        >
          Copyright Information
        </Typography>

        <Box className="w-[80%] max-sm:w-full  mx-auto">
          <Typography>
            If you think that any material on the Crafty Art website violates
            any copyrights, you can notify us by sending the following notice,
            complete with all pertinent details: Notice of a copyright violation
            on{" "}
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              infiappsolution@gmail.com
            </span>
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Guidelines for Copyright Notification
          </Typography>

          <Typography className="mb-2">
            Crafty Art respects the rights to others intellectual property, and
            it is our policy to address any complaints of copyright infringement
            in accordance with any applicable laws. Crafty Art may remove or
            restrict access to the allegedly illegal material after receiving a
            notice in accordance with these Guidelines, as well as take any
            other appropriate action, such as blocking a user's account. Crafty
            Art will make every effort to get in touch with the person who
            posted the content before taking any such action so they can make
            any remark they see fit in accordance with the rules.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            The following conditions must be met by copyright infringement
            notifications:
          </Typography>

          <Typography className="mb-3">
            1. the notification's submitter's electronic or handwritten
            signature.
          </Typography>
          <Typography className="mb-3">
            2. Identification of the allegedly violated copyrighted work or, in
            the case of numerous allegedly infringing works, a list of those
            works.
          </Typography>
          <Typography className="mb-3">
            3. Identification of the allegedly infringing material that has to
            be found and removed or denied access to, together with enough
            details to enable Crafty Art to do so.
          </Typography>
          <Typography className="mb-3">
            4. Contact information for the complaining person, including their
            address, phone number, and, if available, email address.
          </Typography>
          <Typography className="mb-3">
            5. a declaration that the party making the complaint has cause to
            believe that the use of the item is not permitted by the law or the
            copyright owner.
          </Typography>

          <Typography className="mb-3">
            6. An affirmation that the notification's details are factual and
            accurate
          </Typography>
          <Typography className="mb-3">
            Crafty Art will adhere to the process outlined by applicable laws to
            ensure copyright compliance. When Crafty Art receives a valid
            notification that complies with the aforementioned requirements, it
            will promptly remove or restrict access to the infringing materials.
            Crafty Art may or may not send a confirmation of the removal or
            disable.
          </Typography>
          <Typography className="mb-3">
            The claims made by the person who published the allegedly illegal
            material must also adhere to the guidelines for copyright
            notifications. Keep in mind that you might be held accountable if
            the material violates the rights of a third party, so we advise you
            to get legal counsel if you are unsure.
          </Typography>

          <Typography className="mb-3">
            If you think the person publishing the allegedly illegal material is
            a repeat offender publisher, you can help Crafty Art by providing
            the necessary information so they can verify it and take the
            necessary action.
          </Typography>

          <Typography className="mb-3">
            The copyright infringement notification may not be valid if any of
            the aforementioned conditions are not met.
          </Typography>

          <Typography className="mb-3">
            We appreciate your assistance.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Incorporating material into your designs
          </Typography>

          <Typography className="mb-3">
            There are relatively few limitations on what you can do with your
            projects if you use content in a design or composition to create
            something original. Go crazy!
          </Typography>
          <Typography className="mb-3">
            However, there are limitations on solitary content, such as the
            inability to print it on goods or merchandise intended for sale. An
            example of this would be a photo used alone without any other design
            elements.
          </Typography>

          <Typography className="mb-3">
            Please be aware that there is a pixel restriction for unprocessed
            media in your design when using Pro material for specific online
            purposes (such as websites and ebooks) (for example, a huge photo
            being used on a web page design). This restriction was put in place
            to prevent downloading of our Pro Content for use outside of Canva
            from your website. Canva website doctypes and Canvas websites are
            exempt from this pixel restriction.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Selling templates
          </Typography>

          <Typography className="mb-3">
            You cannot use Pro content in templates of any kind, including
            templates for websites, social networking websites, documents,
            projects, or anything else that is intended for distribution and/or
            sale to third parties, unless the template was specifically designed
            for use on Crafty Art (i.e., a template that encourages your
            customers to design in Crafty Art).
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Trademarks and logos
          </Typography>

          <Typography className="mb-3">
            A trademark must be a distinctive symbol that is only used by the
            brand owner. Because of this, you cannot use any Free or Pro content
            from Canva's media library in a trademark (fonts, simple shapes, and
            lines are the only exceptions). Keep in mind that other Canva users
            are free to use the same Content and you cannot assert exclusive
            rights if you utilise Free or Pro content in any branded materials,
            including logos.
          </Typography>

          <Typography className="mb-2">
            If you wish to create a special trademark logo, you can:
          </Typography>

          <Typography className="mb-1">1. Utilise one of our fonts.</Typography>

          <Typography className="mb-1">
            2. Use simple curves and forms.
          </Typography>

          <Typography className="mb-3">
            3. Upload your own graphics (which may be one you created yourself
            or had a nearby graphic artist create for you).
          </Typography>

          <Typography>
            For small or individual projects where you don't need exclusive
            rights, our logo templates can be handy. They can also serve as a
            source of inspiration for your own original design.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Getting a licence
          </Typography>

          <Typography className="mb-3">
            When you make use of content in a design, you are given a licence.
          </Typography>
          <Typography className="mb-3">
            Licences for Free Content are provided without charge. If you're a
            paid user, you must pay to obtain a Pro Content licence; otherwise,
            if you have a current Crafty Art subscription, it is provided free
            of charge.
          </Typography>

          <Typography className="mb-3">
            You are only permitted to use Pro content in one design at a time,
            so you must purchase a new licence each time you want to use the
            same Pro content in a different design. Each time you utilise Pro
            content in a new design, if you have a Crafty Art Pro or Crafty Art
            for Teams plan, a new licence is automatically provided to you.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Reporting Abuse
          </Typography>

          <Typography className="mb-3">
            Abuseful content and files are not tolerated at Crafty Art. Send an
            email to{" "}
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              {" "}
              infiappsolution@gmail.com{" "}
            </span>{" "}
            with a concise summary or description of the suspected abuse in
            respect to the content or files.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
