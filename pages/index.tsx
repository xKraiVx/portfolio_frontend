import { ComponentType, FunctionComponent, ReactNode } from 'react';
import dynamic, { DynamicOptions } from 'next/dynamic';
import Head from 'next/head'
import { GetStaticProps } from 'next/types';
import { HomePNormalized, HomePWNormalized } from '@common/types/home-page';

import { homePageApi } from '@requests/home-page.api';

import { DefaultLayout } from '@layouts/default-layout/default-layout';

import styles from '@styles/Home.module.scss'
import { selectTemplete } from '@features/home/utils/select-template';


const Home: FunctionComponent<HomePNormalized> = ({ title, header, widgets }) => {


  return (
    <DefaultLayout headerData={header} title={title}>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
        </Head>

        <main className={styles.main}>
          {widgets.length && widgets.map(widget => selectTemplete(widget))}
        </main>
      </div>
    </DefaultLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const { title, header, widgets } = await homePageApi.getHomePage()

  return {
    props: {
      title,
      header,
      widgets
    },
    revalidate: 1
  }
}
