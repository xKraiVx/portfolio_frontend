import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import Head from "next/head";

interface Props {
  data: ISeoN | null;
}

export const Seo = ({ data }: Props): JSX.Element => {
  if (!data) {
    return (
      <Head>
        <title>Empty seo</title>
      </Head>
    );
  }

  const {
    metaTitle,
    metaDescription,
    metaRobots,
    cannonicalUrl,
    metaImage,
    metaSocial,
    updateAt,
  } = data;

  const facebookMeta = metaSocial?.find(
    (social) => social.socialNetwork === "Facebook"
  );
  const twitterMeta = metaSocial?.find(
    (social) => social.socialNetwork === "Twitter"
  );

  return (
    <Head>
      <title>{metaTitle}</title>
      <link rel="icon" href="/favicon-wm.ico" />

      {metaRobots && <meta name="robots" content={metaRobots} />}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {updateAt && <meta property="article:modified_time" content={updateAt} />}

      {facebookMeta && (
        <>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          {facebookMeta.title && (
            <meta property="og:title" content={facebookMeta.title} />
          )}
          {facebookMeta.description && (
            <meta
              property="og:description"
              content={facebookMeta.description}
            />
          )}
          {cannonicalUrl && <meta property="og:url" content={cannonicalUrl} />}
          {metaTitle && <meta property="og:site_name" content={metaTitle} />}
          {metaImage?.previewUrl && (
            <meta property="og:image" content={metaImage?.previewUrl} />
          )}
          {metaImage?.width && (
            <meta
              property="og:image:width"
              content={String(metaImage?.width)}
            />
          )}
          {metaImage?.height && (
            <meta
              property="og:image:height"
              content={String(metaImage?.height)}
            />
          )}
          {metaImage?.mime && (
            <meta property="og:image:type" content={metaImage?.mime} />
          )}
        </>
      )}

      {twitterMeta && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          {metaImage?.url && (
            <meta name="twitter:image" content={metaImage?.url} />
          )}
          {metaImage?.alternativeText && (
            <meta
              name="twitter:image:alt"
              content={metaImage?.alternativeText}
            />
          )}
          {twitterMeta.title && (
            <meta name="twitter:title" content={twitterMeta.title} />
          )}
          {twitterMeta.description && (
            <meta
              name="twitter:description"
              content={twitterMeta.description}
            />
          )}
        </>
      )}
    </Head>
  );
};
