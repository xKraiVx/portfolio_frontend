import { FunctionComponent } from 'react';
import Head from 'next/head'
import { GetStaticProps } from 'next/types';
import { HomePNormalized } from '@common/types/home-page';

import { homePageApi } from '@requests/home-page.api';

import { DefaultLayout } from '@layouts/default-layout/default-layout';

import { selectTemplate } from '@features/home/components/select-template';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Styles: FunctionComponent<HomePNormalized> = ({ title, header, widgets }) => {


    return (
        <DefaultLayout headerData={header} title="DEFAULT STYLES">
            <Head>
                <title>Styles</title>
            </Head>
            <Box component="main">
                <Typography variant="h1">
                    H1 heading
                </Typography>
                <Typography variant="h2">
                    H2 heading
                </Typography>
                <Typography variant="h3">
                    H3 heading
                </Typography>
                <Typography variant="h4">
                    H4 heading
                </Typography>
                <Typography variant="h5">
                    H5 heading
                </Typography>
                <Typography variant="h6">
                    H6 heading
                </Typography>
                <Typography variant="body1">
                    Body1 text
                </Typography>
                <Typography variant="body2">
                    Body2 text
                </Typography>
            </Box>
        </DefaultLayout>
    )
}

export default Styles

export const getStaticProps: GetStaticProps = async () => {

    const {
        title,
        header,
        widgets
    } = await homePageApi.getHomePage();

    return {
        props: {
            title,
            header,
            widgets
        },
        revalidate: 1
    }
}
