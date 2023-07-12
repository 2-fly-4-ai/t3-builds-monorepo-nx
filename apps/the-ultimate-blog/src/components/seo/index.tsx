import { isEmpty } from "lodash";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";

/**
 * Custom SEO component
 *
 * Used to seo meta tags for each page
 *
 * @param {Object} seo Seo.
 * @param {string} uri Page URI.
 * @see https://www.npmjs.com/package/next-seo
 *
 * @returns {JSX.Element}
 *
 */
const Seo = ({ seo, uri, custom_meta }) => {
  const {
    breadcrumbTitle,
    breadcrumbs,
    canonicalUrl,
    description,
    openGraph,
    robots,
    title,
  } = seo;

  let metaRobotsNoindex = false;
  let metaRobotsNofollow = false;

  if (robots[0] == "nofollow") {
    metaRobotsNoindex = true;
  }
  if (robots[1] == "noindex") {
    metaRobotsNofollow = true;
  }

  if (uri.includes("/search")) {
    metaRobotsNoindex = false;
    metaRobotsNofollow = false;
  }

  const opengraphImage = openGraph?.image ?? "";
  let opengraphDescription = openGraph?.description ?? "";

  const opengraphTitle = title ?? "";
  const opengraphSiteName = openGraph?.siteName ?? "";
  let metaDesc = description ?? "";

  const currentLocation = process.browser ? window.location.origin : "";
  const opengraphUrl =
    (process.env.NEXT_PUBLIC_NEXTJS_SITE_URL
      ? process.env.NEXT_PUBLIC_NEXTJS_SITE_URL
      : currentLocation) + uri;

  let test = "";

  if (uri.includes("category")) {
    test = `${breadcrumbTitle} - PetsMarketPlc`;
    metaDesc = custom_meta;
  } else if (uri.includes("best")) {
    test = `Best ${breadcrumbTitle} - PetsMarketPlc`;
    metaDesc = custom_meta;
  } else if (uri.includes("brand")) {
    test = `${breadcrumbTitle} - PetsMarketPlc`;
    metaDesc = custom_meta;
  }

  return (
    <NextSeo
      title={title || test}
      description={metaDesc || opengraphDescription}
      canonical={opengraphUrl}
      noindex={metaRobotsNoindex}
      nofollow={metaRobotsNofollow}
      openGraph={{
        type: "website",
        locale: "en_US",
        url: opengraphUrl,
        title: opengraphTitle,
        description: opengraphDescription,
        images: [
          {
            url: opengraphImage?.sourceUrl,
            width: 1280,
            height: 720,
          },
        ],
        /* eslint-disable */
        site_name: opengraphSiteName,
        /* eslint-enable */
      }}
      twitter={{
        handle: "@petsmarket_plc",
        site: "https:www.twitter.com/petsmarket_plc",
        cardType: "summary_large_image",
      }}
    />
  );
};

Seo.propTypes = {
  seo: PropTypes.object,
};

Seo.defaultProps = {
  seo: {
    canonical: "",
    title: "",
    metaDesc: "",
    metaRobotsNoindex: "",
    metaRobotsNofollow: "",
    opengraphDescription: "",
    opengraphTitle: "",
    opengraphImage: {
      sourceUrl: "",
    },
    opengraphUrl: "",
    opengraphSiteName: "",
  },
};

export default Seo;
