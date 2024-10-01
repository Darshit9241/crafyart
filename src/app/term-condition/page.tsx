"use client";
import { handleEmailClick } from "@/src/commonFunction/emailCheck";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

export default function index() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_BASE;

  return (
    <div className="py-[50px] max-sm:py-[20px] px-[15px]">
      <CustomHead
        heading={"Terms & Conditions"}
        text="Explore our comprehensive Terms & Conditions for a transparent and secure experience. Understand the rules governing our services."
      />
      <Box className="flex items-center flex-col">
        <Typography
          className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto sm:mb-10"
          variant="h1"
        >
          Terms & Conditions
        </Typography>

        <Box className="w-[80%] max-sm:w-full  mx-auto">
          <Typography>
            <span className="font-semibold"> Welcome </span> to Crafty Art!
            These Terms of Use apply to your use of Crafty Art’s online graphic
            design platform. By using the service, you agree that these terms
            will become a legally binding agreement between you and the Crafty
            Art contracting entity identified in these terms. At Crafty Art, we
            like to make complex things simple! You’ll find simple explanations
            of our terms in these boxes, but keep in mind that only the terms
            outside these boxes are legally binding.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            1. Overview
          </Typography>

          <Typography className="mb-2">
            Crafty Art is a graphic design platform that empowers people to
            design virtually anything, from logos and greeting cards to posters,
            banners, and flyers (each a "design"). When you use the service,
            you’ll have access to a variety of content provided by Crafty Art
            and other content providers to use in your designs ("Licensed
            Content"). Your use of the licensed content is subject to the
            content licence agreement. You also have the option to upload your
            own content ("user content"), over which you have full control and
            responsibility. You can use licensed content, your user content, and
            tools available in Crafty Art to create your designs.
          </Typography>
          <Typography className="mb-2">
            The service is made available on {domain}, Crafty Art mobile app,
            Crafty Art desktop application, and in other forms provided or made
            available by Crafty Art. Your use of the service is subject to these
            terms and Crafty Art’s Acceptable Use Policy. By using the service,
            you acknowledge Crafty Art’s privacy policy. If you are using Crafty
            Art for Education, please refer to the Crafty Art for Education
            Additional Terms, which are supplemental to these Terms.
          </Typography>
          <Typography className="mb-2">
            You may use the service only if you can form a binding contract with
            Crafty Art and are legally permitted to do so. By using the Service,
            you represent and warrant that you have the full right, power, and
            authority to agree to and be bound by these Terms and to fully
            perform all of your obligations hereunder.
          </Typography>
          <Typography className="mb-2">
            If you sign up for the Service on behalf of an organisation using an
            email address provided by your employer or another organisation, (i)
            you represent and warrant that you are an authorised representative
            of that entity with authority to bind that entity to these Terms;
            (ii) your use of the Service will bind that entity to these Terms;
            and (iii) "you" and "your" in these Terms will refer to both you and
            that entity.
          </Typography>
          <Typography className="mb-2">
            Our Crafty Art for Teams plan is intended for teams, businesses, and
            organisations of all sizes that want to work and design together. If
            you create a team on behalf of an organisation or employer, you are
            binding them to these terms and all the obligations set out in them.
            If they haven’t authorised  you to do this, you’ll need someone who
            is authorised  to create the team.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            2. Using the service
          </Typography>

          <Typography className="mb-2">
            1. Age Requirement. Children may not access or use the service
            unless their use is directly authorised  by their parent, guardian,
            or another authorised  adult (such as a teacher) who agrees to be
            bound by these Terms. For purposes of these Terms, a child is a
            person under the age of 13 (or the minimum legal age required to
            provide consent for processing of personal data in the country where
            the child is located). For children using Crafty Art for Education,
            please refer to the Crafty Art for Education Additional Terms. There
            are legal restrictions on making certain services available to
            children. Our free Crafty Art for Education plan for students is
            compliant with all the laws that apply to children using an online
            service. You can learn more about Crafty Art for Education here.
          </Typography>
          <Typography className="mb-3">
            2. Access to the service. Subject to your compliance with these
            Terms, you are granted a non-exclusive, limited, non-transferable,
            freely revocable licence to access and use the Service for business
            or personal use. Crafty Art reserves all rights not expressly
            granted under these terms. Each person must have a unique account,
            and you are responsible for any activity conducted on your account.
          </Typography>
          <Typography className="mb-3">
            3. Acceptable use policy. Your use of the service, your user
            content, and your designs must comply with Crafty Art’s Acceptable
            Use Policy.
          </Typography>
          <Typography className="mb-3">
            4. Anti-discrimination. Crafty Art does not support and will not
            tolerate its service being used to discriminate against others,
            especially when based on race, religion, sex, sexual orientation,
            age, disability, ancestry, or national origin. You are not permitted
            to use the service in a manner that would or would likely incite,
            promote, or support such discrimination, and you must not use the
            service to incite or promote hostility or violence. We believe in
            being a force for good in the world, and that means we don’t
            tolerate crafty art being used in inappropriate ways.
          </Typography>
          <Typography className="mb-3">
            5. Restrictions on the use of the service. You shall not yourself or
            through any third party (i) rent, lease, sell, distribute, offer in
            a service bureau, sublicense, or otherwise make available the
            Service or the licensed Content to any third party (except as
            permitted under these Terms); (ii) copy, replicate, decompile,
            reverse-engineer, attempt to derive the source code of, modify, or
            create derivative works of the Service, or any part thereof; (iii)
            access the Service for purposes of performance benchmarking; (iv)
            access the Service for purposes of building or marketing a
            competitive product; (v) use the Service to store or transmit a
            virus or malicious code; (vi) use a virtual private network (VPN) to
            circumvent geographic-based pricing or content access; (vii) use the
            Service to transmit unsolicited emails or engage in spamming; (viii)
            use any form of data mining, extraction, or scraping on the Service
            and/or the contents available therein for machine learning or other
            purposes; or (ix) bypass the measures we may use to prevent or
            restrict access to the Service, including without limitation
            features that prevent or restrict use or copying of any content or
            enforce limitations on use of the Service or the licensed Content.
            We work hard to make Crafty Art available to everyone, so we can’t
            allow you to bring harm to Crafty Art or the platform.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            3. Security and data privacy
          </Typography>

          <Typography className="mb-2">
            1. Information Security. Crafty Art implements and maintains
            physical, technical, and administrative security measures designed
            to protect your information from unauthorised  access, destruction,
            use, modification, or disclosure. You can learn more about how
            Crafty Art protects the service and your information at Crafty Art’s
            Trust Centre.
          </Typography>
          <Typography className="mb-3">
            2. Data Privacy. Crafty Art’s Privacy Policy describes how Crafty
            Art collects, uses, transfers, discloses, and stores your personal
            data. By creating a Crafty Art for Teams account, you confirm that
            you have read, understood, and agreed to our Data Processing
            Addendum in full, and that the Data Processing Addendum shall be
            incorporated into these Terms to the extent Personal Data subject to
            the Applicable Data Laws (as defined in the Data Processing
            Addendum) is processed in your use of the Service. In the event of
            any conflict between these terms and the Data Processing Addendum,
            the Data Processing Addendum shall prevail. If you have a Crafty Art
            for Teams account, we act as a "data processor" under laws like the
            GDPR because you make the decisions about the personal data in your
            account and we are processing that data on your behalf. The Data
            Processing Addendum governs our relationship as it relates to that
            personal data.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            4. Content and Designs
          </Typography>

          <Typography className="mb-2">
            1. User Content. You represent and warrant that you own all rights,
            title, and interest in and to your User Content or that you have
            otherwise secured all necessary rights in your User Content as may
            be necessary to permit the access, use, and distribution thereof as
            contemplated by these Terms. As between you and Crafty Art, you own
            all rights, title, and interest in and to your user content. You
            grant Crafty Art a royalty-free and sublicensable licence to
            display, host, copy, store, and use your user content solely to the
            extent necessary to provide the service to you. To the extent you
            include user content in a design that you’ve shared with others, you
            grant Crafty Art a perpetual, royalty-free, sublicensable licence to
            display, host, copy, store, and use your user content to the extent
            necessary to continue to make that design available.When you upload
            content to Crafty Art, you’re guaranteeing that you have the rights
            to it. We never obtain any ownership over your content, but we do
            need you to give us certain rights to store it and have it ready for
            you to use in your designs.
          </Typography>
          <Typography className="mb-3">
            2. Licenced Content. You may use licensed content in connection with
            the service. The use of licenced content is subject to additional
            licence rights and restrictions set forth in the Content Licence
            Agreement. The applicable licence rights and restrictions vary
            depending on the type and source of the licenced content. You can
            determine which content licence terms apply by hovering over the
            item of licenced content and clicking on the info icon.We make a
            variety of content available for you to use in your designs. Certain
            restrictions apply to how you can use that content and what you can
            do with the designs you include that content in. The restrictions
            vary based on the type and source of the content. You can learn more
            here: Crafty Art's Licencing Explained.
          </Typography>
          <Typography className="mb-3">
            3. Designs. Your designs may include a combination of user content
            and licenced content. While you retain ownership of your user
            content, any use of designs containing licenced content is subject
            to the applicable terms of the Content Licence Agreement.We never
            own your designs, but there may be certain restrictions depending on
            the types of Crafty Art-provided content you’ve included in your
            designs.
          </Typography>
          <Typography className="mb-3">
            4. Sharing and publishing your designs. You may publish or share
            designs with others within the service, via a third-party service,
            or via a link. Crafty Art maintains no responsibility in relation to
            such sharing of designs, and Crafty Art’s enablement of such
            activity or the Service’s performance of actions to publicly share
            designs at your instruction shall not be considered a violation of
            any of Crafty Art’s obligations under these Terms.There are a number
            of ways to share your designs with the world. You’re responsible for
            who you share them with and how you do it.
          </Typography>
          <Typography className="mb-3">
            5. Printing your designs. You can use the service to print your
            designs (only available in certain locations). Print orders are
            subject to additional fees and taxes as specified when you place a
            print order. Print services are provided by third-party print
            partners who are responsible for completing, delivering, or
            otherwise making available print orders. You can choose to have your
            print order delivered to you or to pick it up at one of our
            partners’ locations (subject to availability in your area). Print
            orders may be affected by circumstances outside of Crafty Art’s
            control. Delivery times are only estimates, which Crafty Art cannot
            guarantee. If you have an issue with a print order, reach out to
            Crafty Art Support. Unfortunately, we’re unable to provide refunds
            for errors made by you or if you just change your mind about a print
            order.You can bring your designs to life on everything from greeting
            cards and t-shirts to coffee mugs and journals. Printing is done
            through our print partners and can be delivered to you or picked up
            at a partner’s location (where available). You can learn more here:
            Crafty Art Print.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            5.Teams Administration
          </Typography>

          <Typography className="mb-2">
            You can create or join a "team" on Crafty Art that allows you to
            collaborate with others. The creator of the team is the "team
            owner." Each team may have one or more people identified as
            administrators (each, an "administrator") by the team owner or
            another administrator. Both the team owners and administrators can
            add, modify, or remove people from the team, as well as manage their
            permissions and access to user content and designs. Only the team
            owner may assign a new team owner. If you add a person to a team,
            you represent and warrant that you or your organisation have
            obtained all necessary consents from that person to be added. If you
            enable account management services that allow you to manage the
            teams and users using Crafty Art at your organisation, you represent
            and warrant that you are authorised to do so on behalf of your team
            and/or organisation.
          </Typography>
          <Typography className="mb-2">
            If you are on a team on Crafty Art for Teams, the team owner or
            administrator may control access to, delete, or re-assign ownership
            to the user content you upload and designs you create on the account
            you access as part of the team. Crafty Art is not responsible for
            any actions taken by team owners or administrators. It is your
            responsibility not to upload user content or create designs on an
            account associated with a team if you do not want to potentially
            transfer ownership or disclose such user content or designs to
            others on the team.
          </Typography>
          <Typography className="mb-2">
            If you’re on a team on Crafty Art for Teams, make sure you’re aware
            of the privacy settings and only upload content and create designs
            you’re comfortable with others on the team having access to and
            control over. Administrators can transfer designs between people on
            the team. Keep your personal content and designs to yourself by
            creating a personal account.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            6. Billing
          </Typography>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700]"
          >
            i. Subscription Plan:
          </Typography>

          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            The Subscription Plan offers users full access to all premium
            features, customization options, regular updates, and exclusive
            tools like the background remover.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            Billing Frequency: Users can choose from monthly, quarterly, or
            yearly billing.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            Access Duration: Users have continuous access to premium features as
            long as their subscription is active.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            Customization: Users can customize all templates as needed after
            purchase.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            How to Buy
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            1. Navigate to the "Pricing" section in the header.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            2. Select one of the subscription plans: monthly, quarterly, or
            yearly.{" "}
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            3. Complete the purchase of the chosen subscription plan.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            4. Alternatively, select a premium template, click on the "Customize
            This Template" button, and choose the "Buy a Subscription" option in
            the pop-up.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700]"
          >
            ii. Single Template Purchase
          </Typography>

          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            {" "}
            Users can buy specific templates with a one-time payment.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            Lifetime Access: The one-time payment provides lifetime access to
            the chosen template.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            Customization: Users can customize the template as needed after
            purchase.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            How to Buy
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px] ml-5 ">
            1. Select the desired premium template.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px] ml-5 ">
            2. Click on the "Customize This Template" button.{" "}
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px] ml-5 ">
            3. In the pop-up, choose the "Buy Single Template" option.{" "}
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px] ml-5 ">
            4. Complete the purchase.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            No Purchase Limit
          </Typography>

          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px] ml-5 ">
            There is no limit to the number of templates a user can purchase.
            Each template provides lifetime access after a one-time payment.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            Note: This is a general draft and may need further customization
            based on specific details or legal requirements applicable to Crafty
            Art Pro. Consulting with legal professionals is recommended to
            ensure compliance with applicable laws and regulations.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700]"
          >
            iii. Contact Information:
          </Typography>

          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
            For any subscription-related queries or other issues, users can
            contact Crafty Art at
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              infiappsolution@gmail.com
            </span>
            .
          </li>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            7. Crafty Art’s Intellectual Property
          </Typography>

          <Typography>
            Except as expressly set out in these Terms, all intellectual
            property rights in and to the service and licenced content remain
            the sole property of Crafty Art and its licensors. You assign to
            Crafty Art any suggestions, ideas, enhancement requests, or other
            feedback you provide to Crafty Art relating to the service or Crafty
            Art’s products. Crafty Art owns all content, data, software,
            inventions, ideas, and other technology and intellectual property
            that it develops in connection with the service and its products.{" "}
            <br /> We get great ideas about how to improve Crafty Art from our
            users. If you share feedback or ideas with us, you’re letting us use
            that information to improve Crafty Art, and we own any improvements
            we make.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            8. Warranty Disclaimer.
          </Typography>

          <Typography>
            The service is provided on an "as-is" and "as-available" basis. To
            the maximum extent permitted by applicable law and subject to any
            non-excludable rights and remedies you may have under applicable
            law, Crafty Art, its licensors, and its suppliers expressly disclaim
            any and all warranties of any kind, whether express or implied,
            including, but not limited to, warranties of merchantability,
            fitness for a particular purpose, or non-infringement. Crafty Art
            does not warrant that your use of the service will be uninterrupted
            or error-free. Crafty Art does not warrant that it will review your
            data for accuracy or that it will preserve or maintain your data
            without loss. You understand that use of the service necessarily
            involves transmission of your data over networks that Crafty Art
            does not own, operate, or control, and that Crafty Art is not
            responsible for any of your data lost, altered, intercepted, or
            stored across such networks. Crafty Art will not be liable for
            delays, interruptions, service failures, or other problems inherent
            in the use of the internet, electronic communications, or other
            systems outside Crafty Art’s reasonable control. <br /> We offer the
            service as-is and can’t be responsible for things outside of our
            control.
          </Typography>
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            9. Third-Party Services
          </Typography>

          <Typography>
            You may elect to use the Service in conjunction with third-party
            websites, platforms, or apps (including, but not limited to, those
            available at CraftyArt.com/apps) ("Third Party Service(s)"). Your
            use of a third-party service is subject to the terms and conditions
            applicable to that third-party service. <br /> Crafty Art makes no
            representations or warranties in relation to third-party services
            and expressly disclaims all liability arising from your use of
            third-party services. Within Crafty Art, you can use apps created by
            third parties. Those apps might have their own set of terms that
            apply to you, and because the apps were created by third parties, we
            can’t be responsible for them.
          </Typography>
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            10. Your indemnity obligations{" "}
          </Typography>

          <Typography>
            You agree, to the extent permitted by law, to defend, indemnify, and
            hold harmless Crafty Art and its affiliates, officers, directors,
            agents, licensors, and employees from and against any and all
            claims, costs, damages, losses, liabilities, and expenses (including
            reasonable attorneys’ fees and costs) resulting from or related to
            (i) your violation of these Terms or (ii) your user content. <br />{" "}
            If Crafty Art suffers harm due to your content or your violation of
            these Terms, or if someone tries to hold Crafty Art responsible for
            your content or your violations, you’ll be responsible for any costs
            incurred by Crafty Art in defending Crafty Art.
          </Typography>
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            11. Limitation of Liability
          </Typography>

          <Typography>
            In no event shall either party’s aggregate cumulative liability
            hereunder (whether in contract, tort, negligence, strict liability
            in tort, by statute, or otherwise) exceed the greater of (i) $100
            USD or (ii) the subscription fees paid by you to Crafty Art during
            the twelve-month period preceding the event or occurrence giving
            rise to such liability. The foregoing limitations shall not apply to
            liabilities arising out of your indemnification obligations or your
            breach of the section entitled ‘restrictions on use of the service.’{" "}
            <br />
            In no event shall either party be liable for any consequential,
            incidental, indirect, special, exemplary, or punitive damages,
            losses, or expenses (including but not limited to business
            interruption, lost business, or lost profits), even if it has been
            advised of their possible existence and notwithstanding the failure
            of the essential purpose of any remedy. The foregoing limitations
            shall not apply to liabilities arising out of your indemnification
            obligations or your breach of the section entitled ‘restrictions on
            use of the service.’ <br /> Crafty Art is not responsible for, and
            assumes no liability for, the contents of user content. <br /> These
            terms do not affect consumer rights that cannot, by law, be waived
            or limited. These terms do not exclude or limit liability arising
            out of either party’s gross negligence, fraud, or willful
            misconduct.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            12. Term and Termination
          </Typography>

          <Typography className="mb-3">
            1. Term.  These Terms shall take effect the first time you access
            the Service and shall continue in full force and effect until i) if
            you are a paid subscriber, the expiration or termination of your
            subscription; or ii) if you are using Crafty Art’s free offering,
            when your account is deleted or terminated.
          </Typography>
          <Typography className="mb-3">
            2. Violations.  If Crafty Art, in its sole discretion, determines
            that you or your use of the Service, your User Content, or your
            Designs violate these Terms, including but not limited to, Crafty
            Art’s Acceptable Use Policy, the Section entitled ‘Restrictions on
            Use of the Service," or the Section entitled "Anti-discrimination,"
            (any of which is considered a "Violation") Crafty Art may take one
            or more of the following actions in its sole discretion: (i) delete
            the prohibited User Content or Designs; (ii) suspend your access to
            the Service; (iii) terminate and delete your account along with all
            Designs and User Content associated with that account (iv)
            permanently ban you from using the Service; and/or (v) disclose the
            prohibited User Content or Designs to appropriate government
            authorities.If you break the rules, we have the right to remove you
            and everything in your account from the service.
          </Typography>
          <Typography className="mb-3">
            3. Effect of Termination In the event of termination of your
            subscription for cause due to default by Crafty Art, Crafty Art
            shall refund, on a prorated basis, any prepaid fees for the service
            for the period beginning on the effective date of termination
            through the end of your then-current subscription. In the event of a
            termination of your subscription due to a violation by you, you will
            not receive any refund and shall immediately pay any outstanding
            fees for the remaining period of your subscription.Upon any
            expiration or termination of your subscription, you must cease using
            the service. You will lose access to your designs, user content, and
            any other information uploaded to the service (and we may delete all
            such data unless legally prohibited) after the expiration or
            termination of your subscription. User content included in any
            shared design will continue to be available within that design even
            after the expiration of your subscription. Unless your account was
            terminated due to a violation, you can download or export your user
            content and designs using the functionality of the service prior to
            the expiration or termination of your subscription. If your account
            has been terminated due to a violation, you may not create a new
            account on any Crafty Art service unless you receive Crafty Art’s
            written permission.
          </Typography>
          <Typography className="mb-3">
            4. Survival of Terms Sections titled "Term and Termination,"
            "Billing," "Crafty Art’s Intellectual Property," "Limitation of
            Liability," "Indemnification," and "Miscellaneous," inclusive, shall
            survive any expiration or termination of these Terms.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            13. Miscellaneous
          </Typography>

          <Typography className="mb-3">
            1. Compliance with applicable law. You agree to abide by all
            applicable local, state, national, and foreign laws, treaties, and
            regulations in connection with your use of the service. Crafty Art
            agrees to abide by all applicable local, state, national, and
            foreign laws, treaties, and regulations in connection with its
            provision of the service.
          </Typography>
          <Typography className="mb-3">
            2. Governing Law and Jurisdiction These Terms will be governed by
            and construed in accordance with the laws of the State of
            California, without regard to its conflict of laws provisions. Any
            legal action or proceeding arising under these terms shall be
            brought exclusively in the federal or state courts located in Santa
            Clara County, California, and the parties consent to the exclusive
            jurisdiction of such courts. The United Nations Convention on
            Contracts for the International Sale of Goods is expressly excluded
            in its entirety from application to these terms.
          </Typography>
          <Typography className="mb-3">
            3.Export Restrictions. The service is subject to trade sanctions and
            laws and regulations that govern the import, export, and use of the
            service. These laws or regulations may prohibit Crafty Art from
            providing you with the service or require that we discontinue making
            it available to you without notice. By using the service, you agree
            to comply with all trade sanctions, export and import laws, and
            regulations and warrant that (i) you are not prohibited from
            accessing the service and (ii) you will not make the service
            available to anyone who is prohibited from accessing it under the
            laws or regulations of any jurisdiction.
          </Typography>
          <Typography className="mb-3">
            4. Dispute Resolution. If you have a dispute arising out of these
            Terms, contact us here, and we’ll attempt to work with you to
            resolve the dispute. If we’re unable to resolve a dispute, you and
            Crafty Art each agree to resolve any claim, dispute, or controversy
            (excluding any Crafty Art claims for injunctive or other equitable
            relief) arising out of or in connection with these Terms
            (collectively, "Claims") by binding arbitration by the American
            Arbitration Association ("AAA") under the Commercial Arbitration
            Rules and Supplementary Procedures for Consumer Related Disputes
            then in effect for the AAA, except as provided herein. The
            arbitration will be conducted in Santa Clara County, California,
            unless you and Crafty Art agree otherwise. Each party will be
            responsible for paying any AAA filing, administrative, and
            arbitrator fees in accordance with AAA rules. The award rendered by
            the arbitrator shall include costs of arbitration, reasonable
            attorneys’ fees, and reasonable costs for expert and other
            witnesses, and any judgement on the award rendered by the arbitrator
            may be entered in any court of competent jurisdiction. Nothing in
            this Section shall prevent either party from seeking injunctive or
            other equitable relief from the courts as necessary to prevent the
            actual or threatened infringement, misappropriation, or violation of
            that party’s data security, intellectual property rights, or other
            proprietary rights. All claims must be brought in the parties’
            individual capacity and not as a plaintiff or class member in any
            purported class or representative proceeding, and, unless we agree
            otherwise, the arbitrator may not consolidate more than one person’s
            claims. You agree that, by entering into this agreement, you and
            Crafty Art are each waiving the right to a trial by jury or to
            participate in a class action.
          </Typography>
          <Typography className="mb-3">
            5. Crafty Art Contracting Entity The Crafty Art entity contracting
            with you under these Terms and the address to which you should send
            legal notices depend on your billing address.
          </Typography>

          <Typography className="mb-3">
            6. Assignment. You may not assign these Terms or any of your rights
            under them without Crafty Art’s consent, except to any successor by
            way of a merger, acquisition, or change of control. Crafty Art may
            transfer or assign any of its rights and obligations under these
            Terms, in whole or in part, at any time, with or without notice.
          </Typography>

          <Typography className="mb-3">
            7. Headings and explanations. The headings used in these Terms and
            the explanatory boxes are provided for convenience only and will not
            in any way affect the meaning or interpretation of the Terms or any
            portion thereof.
          </Typography>

          <Typography className="mb-3">
            8. Severability. If a particular provision of these Terms is found
            to be invalid or unenforceable, it shall not affect the other
            provisions, and the Terms shall be construed in all respects as if
            that invalid or unenforceable provision had been limited or omitted
            to the minimum extent necessary.
          </Typography>

          <Typography className="mb-3">
            9. Waiver. Crafty Art’s express waiver or failure to enforce any
            provision of these Terms shall in no way be construed to be a
            present or future waiver of such provision nor affect Crafty Art’s
            ability to enforce any provision thereafter.
          </Typography>

          <Typography className="mb-3">
            10. Notices.  All required notices to you will be sent to the email
            address associated with your account or through other legally
            permissible means.
          </Typography>

          <Typography className="mb-3">
            11. DMCA. We respect the intellectual property rights of artists and
            content owners. We will respond to notices of alleged copyright
            infringement that comply with the Digital Millennium Copyright Act
            of 1998 ("DMCA"). For more information, please read our intellectual
            property policy.
          </Typography>

          <Typography className="mb-3">
            12. Changes to these Terms We may modify these Terms (and any
            policies or agreements referenced in them) at any time. We will post
            the most current version of these terms on CraftyArt.com. We will
            provide you with reasonable advance notice of any change to the
            Terms that, in our sole determination, materially adversely affects
            your rights or your use of the Service. We may provide you with this
            notice via the service and/or by email to the email address
            associated with your account. By continuing to use the service after
            any revised terms become effective, you agree to be bound by the new
            terms.
          </Typography>

          <Typography className="mb-3">
            13. Changes to the service. Crafty Art may add, change, or remove
            features or functionality from the service; modify or introduce
            limitations to storage or other features; or discontinue the service
            altogether at any time. If you are on a paid subscription and Crafty
            Art discontinues the service you are using during your subscription,
            Crafty Art will migrate or make available to you a substantially
            similar service provided by Crafty Art (if available), and if it’s
            unable to do so, Crafty Art will provide you with a pro-rata refund
            of fees prepaid for the remaining period of your subscription.
          </Typography>

          <Typography className="mb-3">
            14. Entire Agreement. These terms and the terms and policies
            referenced herein constitute the entire agreement between you and
            Crafty Art with respect to the service. These Terms supersede any
            prior representations, agreements, or understandings between you and
            Crafty Art, whether written or oral, with respect to the Service,
            including previous versions of the Terms. All terms, conditions, or
            provisions on a purchase order shall be of no force and effect
            notwithstanding any acceptance of such a purchase order. The English
            version of these terms will control.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            14. Subscription Terms and Conditions
          </Typography>
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            i. Normal Subscription:
          </Typography>
          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700]"
          >
            Usage Rights:
          </Typography>
          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            1. Personal and Business Use:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            1. Navigate to the "Pricing" section in the header.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            2. Select one of the subscription plans: monthly, quarterly, or
            yearly.{" "}
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            3. Complete the purchase of the chosen subscription plan.
          </li>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            4. Alternatively, select a premium template, click on the "Customize
            This Template" button, and choose the "Buy a Subscription" option in
            the pop-up.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700]"
          >
            Restrictions:
          </Typography>
          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            1. Resale and Redistribution:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            You are strictly prohibited from reselling, sublicensing, or
            redistributing the product to third parties. This restriction
            ensures that the product is used only by the individual or entity
            that purchased the subscription.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            2. Commercial Use Limitations:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            The normal subscription does not permit certain types of commercial
            use. For example, you cannot use the product to create promotional
            content for social media platforms, including but not limited to
            Instagram, Facebook, Twitter, and YouTube. Any attempt to market,
            advertise, or promote the product using these platforms is not
            allowed under the normal subscription.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            3. Promotional Content:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            You are not allowed to post, share, or distribute any videos,
            images, or other content that promotes the product on social media
            or any other public-facing platforms. This includes, but is not
            limited to, influencer marketing, sponsored posts, or any form of
            paid promotion.
          </li>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            ii. Commercial Subscription:
          </Typography>
          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700]"
          >
            Full Commercial Access:
          </Typography>
          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            1. Extended Rights:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            Purchasing the commercial plan grants you full commercial rights to
            use the product without the limitations imposed on the normal
            subscription. This includes the right to promote the product on
            social media and other public platforms.
          </li>
          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            2. Social Media Promotions:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            With the commercial plan, you are authorized to create and share
            promotional content on social media platforms. This includes running
            advertisements, creating sponsored posts, collaborating with
            influencers, and other marketing activities designed to promote the
            product.
          </li>
          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            3. Distribution and Marketing:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            The commercial subscription allows you to distribute and market the
            product more freely, subject to the terms outlined in the commercial
            plan agreement. This may include wider distribution channels,
            broader marketing strategies, and other commercial activities aimed
            at expanding the product's reach.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            4. Commercial Use Limitations:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            The normal subscription does not permit certain types of commercial
            use. For example, you cannot use the product to create promotional
            content for social media platforms, including but not limited to
            Instagram, Facebook, Twitter, and YouTube. Any attempt to market,
            advertise, or promote the product using these platforms is not
            allowed under the normal subscription.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            5. Promotional Content:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            You are not allowed to post, share, or distribute any videos,
            images, or other content that promotes the product on social media
            or any other public-facing platforms. This includes, but is not
            limited to, influencer marketing, sponsored posts, or any form of
            paid promotion.
          </li>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            iii. Adherence to Terms:
          </Typography>

          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            By purchasing and using our product, you agree to comply with the
            terms and conditions outlined in this agreement. Any violation of
            these terms may result in the termination of your subscription,
            legal action, or other remedies as deemed appropriate by the
            company.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            1. Contact and Support:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            For any questions regarding the use of the product or to upgrade to
            a commercial plan, please contact our customer support team. We are
            available to assist you with any inquiries and ensure that you have
            the appropriate subscription for your needs.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            2. Disclaimer:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            The company reserves the right to modify these terms and conditions
            at any time. Continued use of the product signifies your acceptance
            of any updated terms.
          </li>

          <Typography
            variant="h3"
            className=" text-[17px] mt-5 mb-2 font-[700] ml-5"
          >
            3. Distribution and Marketing:
          </Typography>
          <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ml-5">
            By adhering to these guidelines, you ensure that you are using our
            product in accordance with our legal and commercial policies. If you
            require further clarification or need assistance with your
            subscription, please reach out to our support team.
          </li>
        </Box>
      </Box>
    </div>
  );
}
