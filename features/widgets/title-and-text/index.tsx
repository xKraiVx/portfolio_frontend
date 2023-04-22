import { ITitleAndTextN } from "@cms/normalized-types/widgets/global-widgets/title-and-text.type";
import { TextEditor } from "@common/components/text-editor/text-editor";
import { Box, Container, Typography } from "@mui/material";

interface Props {
  data: ITitleAndTextN;
}

export const TitleAndText = ({ data }: Props) => {
  const { title, text, navigation_id } = data;
  return (
    <Box
      component="section"
      sx={{ minHeight: "100vh", paddingTop: 15 }}
      id={navigation_id.identificator}
    >
      <Container>
        <Typography variant="h3">{title}</Typography>
        <TextEditor data={text} />
      </Container>
    </Box>
  );
};
