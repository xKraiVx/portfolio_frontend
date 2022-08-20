import { SunAnimation } from "@layouts/components/sun-animation/sun-animation"
import { Box } from "@mui/material"
import Head from "next/head"
import { FunctionComponent } from "react"



const Page: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Random page</title>
            </Head>
            <Box>
                <SunAnimation />
            </Box>
        </>

    )
}

export default Page