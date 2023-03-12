import { Box, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
  data: string;
}

export const TextEditor = ({ data, sx }: Props): JSX.Element => {
  return <Box sx={sx} dangerouslySetInnerHTML={{ __html: data }} />;
};
