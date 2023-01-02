import { FunctionComponent } from "react";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next/types";

import { homePageApi } from "@requests/home-page.api";

import { DefaultLayout } from "@layouts/default-layout/default-layout";

import { selectTemplate } from "@features/home/components/select-template";
import { Box } from "@mui/material";
import { PageBuilder } from "@features/page-builder/page-builder";
import { Seo } from "@common/components/seo/seo";
import { IHomeN } from "@cms/normalized-types/page/home-normalized";
import { postApi } from "@requests/post.api";

const Home: NextPage<IHomeN> = (data) => {
  const { header, homePage } = data;
  const { widgets, seo } = homePage || {};

  return (
    <DefaultLayout headerData={header} seo={seo}>
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
