import Head from 'next/head'

import { DefaultLayout } from '../layouts/default-layout/default-layout';

import { signInPageApi } from '../api/requests/sign-in-page.api';
import { headerApi } from '../api/requests/header.api';

import styles from '../styles/Home.module.css'

export default function SignIn({ pageData, headerData }) {
  const title = pageData?.attributes?.title;
  return (
    <DefaultLayout headerData={headerData} title={title}>
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

export const getStaticProps = async () => {

  const pageRes = signInPageApi.getSignInPage()
  const headerRes = headerApi.getHeader()

  const responses = await Promise.all([pageRes, headerRes])

  return {
    props: {
      pageData: responses[0],
      headerData: responses[1]
    },
    revalidate: 1
  }
}
