import { FunctionComponent } from "react";
import { localStyles } from "./local.theme";
import { Container, Stack, useTheme, IconButton, Box } from "@mui/material";
import { Logo } from "@common/components/logo";
import { BurgerMenu } from "../burger-menu";
import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";

interface Props {
  data?: IHeaderN;
}

export const Header: FunctionComponent<Props> = ({ data }) => {
  const theme = useTheme();
  const styles = localStyles(theme);

  const { menu, logo } = data || {};

  return (
    <Box sx={styles.root}>
      <Container maxWidth={false}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={styles.content}
        >
          <Logo data={logo} sx={styles.logo} />
          <Stack justifyContent="center" alignItems="flex-end">
            <BurgerMenu data={menu} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
