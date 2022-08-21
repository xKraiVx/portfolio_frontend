import { FunctionComponent } from 'react';
import Head from 'next/head'
import { GetStaticProps } from 'next/types';
import { HomePNormalized } from '@common/types/home-page';

import { homePageApi } from '@requests/home-page.api';

import { DefaultLayout } from '@layouts/default-layout/default-layout';

import { selectTemplate } from '@features/home/components/select-template';

const Home: FunctionComponent<HomePNormalized> = ({ title, header, widgets }) => {


  return (
    <DefaultLayout headerData={header} title={title}>
      <div>
        <Head>
          <title>{title}</title>
        </Head>

        <main>
          {widgets.length && widgets.map(widget => selectTemplate(widget))}
        </main>
      </div>
    </DefaultLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const { title, header, widgets } = await homePageApi.getHomePage();

  return {
    props: {
      title,
      header,
      widgets
    },
    revalidate: 1
  }
}
