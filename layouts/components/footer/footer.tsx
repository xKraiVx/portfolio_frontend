import { IFooterN } from "@cms/normalized-types/single-types/footer-normalized.type";
import { Box, Container, Typography } from "@mui/material";

interface Props {
  data?: IFooterN;
}
export const Footer = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <Box>
      <Container>
        <Typography>{data.rights}</Typography>
      </Container>
    </Box>
  );
};
