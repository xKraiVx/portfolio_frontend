import { FunctionComponent } from 'react';

import Head from 'next/head'
import { GetStaticProps } from 'next/types';
import { HomePageFormated } from '../common/types/home-page';

import { homePageApi } from '../api/requests/home-page.api';

import { DefaultLayout } from '../layouts/default-layout/default-layout';

import styles from '../styles/Home.module.scss'

const Home: FunctionComponent<HomePageFormated>  = ({ title, header }) => {

  return (
    <DefaultLayout headerData={header} title={title}>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
        </Head>

        <main className={styles.main}>
          {title && <h1>{title}</h1>}
        </main>
      </div>
    </DefaultLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const { title, header } = await homePageApi.getHomePage()
  
  return {
    props: {
      title, 
      header
    },
    revalidate: 1
  }
}
