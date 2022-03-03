import NextHead from "next/head";

const Head = ({
  title = "Muhammad al-Xorazmiy AKT maktabi | ICTSchool.uz",
  description = "Muhammad al-Xorazmiy nomidagi AKTga ixtisoslashtirilgan maktab | ICTSchool.uz",
  image = "",
  children,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://ictschool.uz/" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="uz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ictschool" />
      <meta name="apple-mobile-web-app-title" content="ICTSchool" />
      <meta name="author" content="Maftuna Vohidjonovna & UwUssimo Robinson" />
      {children}
    </NextHead>
  );
};

export default Head;
