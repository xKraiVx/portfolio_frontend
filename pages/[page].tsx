import { FunctionComponent } from "react";
import Head from "next/head";
import { SunAnimation } from "@layouts/components/sun-animation/sun-animation";
import { Box } from "@mui/material";

//TODO:(LOW) Page functional, query, types ...

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
  );
};

export default Page;
