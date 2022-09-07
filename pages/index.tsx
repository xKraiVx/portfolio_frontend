import { FunctionComponent } from 'react';
import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next/types';
import { HomePNormalized } from '@common/types/home-page';

import { homePageApi } from '@requests/home-page.api';

import { DefaultLayout } from '@layouts/default-layout/default-layout';

import { selectTemplate } from '@features/home/components/select-template';
import { Box } from '@mui/material';

const Home: FunctionComponent<HomePNormalized> = ({ title, header, widgets, toggleTheme }) => {
  return (
    <DefaultLayout headerData={header} title={title} toggleTheme={toggleTheme}>
      <Head>
        <title>{title}</title>
      </Head>
      <Box component="main">
        {widgets?.length && widgets?.map(widget => selectTemplate(widget))}
      </Box>
    </DefaultLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {

  const {
    title,
    header,
    widgets
  } = await homePageApi.getHomePage(locale);

  return {
    props: {
      title,
      header,
      widgets
    },
  }
}
