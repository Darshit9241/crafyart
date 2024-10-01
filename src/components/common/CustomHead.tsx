// import React from "react";

// interface CustomHeadProps {
//   image?: string;
//   robots?: string;
//   text?: string | undefined;
//   heading: string | undefined;
// }

// export default function CustomHead({
//   image,
//   robots,
//   text,
//   heading,
// }: CustomHeadProps) {
//   return (
//     <>
//       <meta name="revisit-after" content="1 days" />
//       <title>{heading}</title>
//       <meta property="og:title" content={heading} />
//       <meta name="robots" content={robots ?? ""} />
//       {text && <meta name="description" content={text} />}
//       <meta property="og:description" content={text} />
//       <meta property="og:image" content={image} />
//       <meta property="og:image:alt" content={"Crafty Art Image"} />
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
//       />
//     </>
//   );
// }


import React from "react";

interface CustomHeadProps {
  image?: string;
  robots?: string;
  text?: string | undefined;
  heading: string | undefined;
}

export default function CustomHead({
  image,
  robots,
  text,
  heading = "Crafty Art",
}: CustomHeadProps) {
  return (
    <>
      <meta name="revisit-after" content="1 days" />
      <title>{heading}</title>
      <meta property="og:title" content={heading} />
      <meta name="robots" content={robots ?? ""} />
      {text && <meta name="description" content={text} />}
      <meta property="og:description" content={text} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={"Crafty Art Image"} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org/",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "image": "https://www.craftyartapp.com/images/logo.svg",
            "name": "Crafty Art",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "B 815, IT Park",
              "addressLocality": "Gujarat",
              "addressRegion": "GJ",
              "postalCode": "394105",
              "addressCountry": "IN"
            }
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.5"
          },
          "author": {
            "@type": "Person",
            "name": "Chirag"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Crafty Art"
          }
        }
      ` }} />
    </>
  );
}

