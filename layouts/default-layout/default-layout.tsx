import { FunctionComponent, ReactNode } from "react";
import { Header } from "@layouts/components/header/header";
import { CustomCursor } from "@layouts/components/custom-cursor/custom-cursor";
import { Box } from "@mui/material";
import { defaultLayoutStyles } from "./default-layout.theme";
import { Sounds } from "@layouts/components/sounds/sounds";
import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";
import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { Seo } from "@common/components/seo/seo";
import { IFooterN } from "@cms/normalized-types/single-types/footer-normalized.type";
import { Footer } from "@layouts/components/footer/footer";

interface Props {
  headerData?: IHeaderN;
  seo?: ISeoN | null;
  children?: ReactNode | ReactNode[];
  footerData?: IFooterN;
}

export const DefaultLayout = ({
  headerData,
  footerData,
  seo,
  children,
}: Props): JSX.Element => {
  const styles = defaultLayoutStyles();

  return (
    <Box sx={styles.root}>
      <Seo data={seo} />
      <Header data={headerData} />
      <Box>{children}</Box>
      <Footer data={footerData} />
      <Sounds />
    </Box>
  );
};
