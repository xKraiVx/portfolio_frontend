import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Container,
  Divider,
  IconButton,
  IconButtonProps,
  Link,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const UiKit = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container>
      <Stack>
        <Typography
          sx={{ alignSelf: "center" }}
          variant="h5"
          color="secondary.main"
        >
          Typography
        </Typography>
        <Typography variant="h1">Title H1</Typography>
        <Typography variant="h2">Title H2</Typography>
        <Typography variant="h3">Title H3</Typography>
        <Typography variant="h4">Title H4</Typography>
        <Typography variant="h5">Title H5</Typography>
        <Typography variant="h6">Title H6</Typography>
        <Typography variant="body1">Paragraph 1</Typography>
        <Typography variant="body2">Paragraph 2</Typography>
        <Box>
          <Link href="#">Link</Link>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Stack flexDirection="row" flexWrap="wrap" spacing={1}>
          <Typography
            sx={{ width: "100%", textAlign: "center" }}
            variant="h5"
            color="secondary.main"
          >
            Buttons
          </Typography>
          <Stack spacing={1}>
            <Box>
              <Button variant="contained">Button contained</Button>
            </Box>
            <Box>
              <Button variant="contained" disabled>
                Button contained
              </Button>
            </Box>
            <Box>
              <Button variant="contained" size="small">
                Button contained
              </Button>
            </Box>
            <Box>
              <Button variant="contained" size="small" disabled>
                Button contained
              </Button>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <Box>
              <Button variant="outlined">Button outlined</Button>
            </Box>
            <Box>
              <Button variant="outlined" disabled>
                Button outlined
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" size="small">
                Button outlined
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" size="small" disabled>
                Button outlined
              </Button>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <Box>
              <Button variant="text">Button text</Button>
            </Box>
            <Box>
              <Button variant="text" disabled>
                Button text
              </Button>
            </Box>
            <Box>
              <Button variant="text" size="small">
                Button text
              </Button>
            </Box>
            <Box>
              <Button variant="text" size="small" disabled>
                Button text
              </Button>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <Box>
              <IconButton size="large" color="primary">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
            <Box>
              <IconButton size="medium" color="secondary">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
            <Box>
              <IconButton size="small" color="info">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
            <Box>
              <IconButton size="large" color="primary" disabled>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack flexDirection="row" flexWrap="wrap" spacing={1}>
          <Typography
            sx={{ width: "100%", textAlign: "center" }}
            variant="h5"
            color="secondary.main"
          >
            Labels
          </Typography>
          <Box>
            <Chip label="Chip Filled" />
          </Box>
          <Box>
            <Chip label="Chip Outlined" variant="outlined" />
          </Box>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack spacing={1}>
          <Typography
            sx={{ width: "100%", textAlign: "center" }}
            variant="h5"
            color="secondary.main"
          >
            Accordion
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack>
          <Typography
            sx={{ width: "100%", textAlign: "center" }}
            variant="h5"
            color="secondary.main"
          >
            Bar
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack>
          <Typography
            sx={{ width: "100%", textAlign: "center" }}
            variant="h5"
            color="secondary.main"
          >
            Card
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "tomato" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/textures/1.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default UiKit;
