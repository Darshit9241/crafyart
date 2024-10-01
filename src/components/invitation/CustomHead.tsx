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
  heading,
}: CustomHeadProps) {
  return (
    <>
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
    </>
  );
}
