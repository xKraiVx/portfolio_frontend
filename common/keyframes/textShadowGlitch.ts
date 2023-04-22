import { keyframes } from "@emotion/css";
import { Theme } from "@mui/material";

export const textShadowGlitch = (theme: Theme) => keyframes`
from, 20%, 53%, 80%, to {
    text-shadow: ${theme.spacing(1 / 4, 1 / 4, 1 / 4)} ${
  theme.palette.secondary.dark
};
text-stroke: 1px transparent;
-webkit-text-stroke: 1px transparent;
  }

  70% {
    text-shadow: ${theme.spacing(1 / 2, 1 / 2, 1 / 2)} ${
  theme.palette.primary.light
};
text-stroke: 1px ${theme.palette.primary.light};
-webkit-text-stroke: 1px ${theme.palette.primary.light};
  }

  100% {
    text-shadow: ${theme.spacing(1 / 2, 1 / 2, 1 / 2)} ${
  theme.palette.primary.light
};
text-stroke: 1px ${theme.palette.primary.light};
-webkit-text-stroke: 1px ${theme.palette.primary.light};
  }
`;
