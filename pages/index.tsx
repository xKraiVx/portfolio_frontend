import { GetStaticProps, NextPage } from "next/types";

import { homePageApi } from "@requests/home-page.api";

import { DefaultLayout } from "@layouts/default-layout/default-layout";

import { PageBuilder } from "@features/page-builder/page-builder";
import { IHomeN } from "@cms/normalized-types/page/home-normalized";

const Home: NextPage<IHomeN> = (data) => {
  const { header, homePage, footer } = data;
  const { widgets, seo } = homePage || {};

  return (
    <DefaultLayout headerData={header} seo={seo} footerData={footer}>
      <PageBuilder widgets={widgets} />
    </DefaultLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await homePageApi.getHomePage(locale);

  return {
    props: {
      ...data,
    },
  };
};
