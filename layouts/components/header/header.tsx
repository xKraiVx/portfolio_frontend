import { FunctionComponent } from "react";
import { headerStyles } from "./header.theme";
import { Container, Stack, useTheme, IconButton, Box } from "@mui/material";
import { Navigation } from "@common/components/navigation/navigation";
import { Logo } from "@common/components/logo/logo";
import { SubMenu } from "../sub-menu/sub-menu";
import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";

interface Props {
  data?: IHeaderN;
}

export const Header: FunctionComponent<Props> = ({ data }) => {
  const theme = useTheme();
  const styles = headerStyles(theme);

  const { menu, logo } = data || {};

  return (
    <Box sx={styles.root}>
      <Container maxWidth={false} disableGutters>
        <Box sx={styles.content}>
          <Logo data={logo} />
          <Navigation data={menu} />
          <Stack justifyContent="center" alignItems="flex-end">
            <SubMenu />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
