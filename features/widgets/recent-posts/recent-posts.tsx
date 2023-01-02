import { Box, useTheme } from "@mui/material";
import { recentPostsStyles } from "./recent-posts.theme";

interface Props {
  widgetData: any;
}

const RecentPosts = ({ widgetData }: Props): JSX.Element => {
  const theme = useTheme();
  const styles = recentPostsStyles(theme);

  return (
    <Box component="section" sx={styles.root}>
      RecentPosts
    </Box>
  );
};

export default RecentPosts;
