import { FunctionComponent, useEffect } from 'react';

import Head from 'next/head'
import { GetStaticProps } from 'next/types';

import useSWR, { SWRConfig } from 'swr';
import { homePageApi } from '../api/requests/home-page.api';

import { DefaultLayout } from '../layouts/default-layout/default-layout';

import styles from '../styles/Home.module.css'

const Page: FunctionComponent = () => {

  const {
    data: { homePage, header },
    error,
    isValidating
  } = useSWR('/api/home-page')


  const title = homePage.data.attributes.title;

  return (
    <DefaultLayout headerData={header.data} title={title}>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {title && <h1>{title}</h1>}
        </main>
      </div>
    </DefaultLayout>
  )

}

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Page />
    </SWRConfig>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const pageData = await homePageApi.getHomePage()

  return {
    props: {
      fallback: {
        '/api/home-page': pageData,
      }
    },
    revalidate: 60
  }
}