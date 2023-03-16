import { ILogoComponentN } from "@cms/normalized-types/components/logo-component-normalized";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";
import { NextImage } from "../next-image/next-image";
interface Props {
  data: ILogoComponentN;
}
export const Logo: FunctionComponent = ({ data }: Props) => {
  const { image, href } = data;
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Link href={href}>
        <a>
          <NextImage src={image.url} />
        </a>
      </Link>
    </Box>
  );
};
