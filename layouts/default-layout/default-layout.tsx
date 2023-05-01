import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

import { TWidgetN } from "@cms/normalized-types/widgets/widget-normalized";
import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";
import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { IFooterN } from "@cms/normalized-types/single-types/footer-normalized.type";

import { Seo } from "@common/components/seo/seo";

import { Header } from "@layouts/components/header";
import { Sounds } from "@layouts/components/sounds/sounds";
import { Footer } from "@layouts/components/footer/footer";

import { defaultLayoutStyles } from "./default-layout.theme";

interface Props {
  headerData?: IHeaderN;
  seo?: ISeoN | null;
  children?: ReactNode | ReactNode[];
  footerData?: IFooterN;
  fixedBackground?: ReactNode;
  widgets?: TWidgetN[];
}

export const DefaultLayout = ({
  headerData,
  footerData,
  seo,
  children,
  fixedBackground,
  widgets,
}: Props): JSX.Element => {
  const styles = defaultLayoutStyles();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 0.5,
      }}
    >
      <Box sx={styles.root}>
        <Seo data={seo} />
        <Header data={headerData} />
        {fixedBackground}
        <Box>{children}</Box>
        <Footer data={footerData} />
        <Sounds />
      </Box>
    </motion.div>
  );
};
