import { createTheme } from '@mui/material/styles';
import { colors } from './colors'
import { Container } from './components/Container';
import { IconButton } from './components/IconButton';
import { Link } from './components/Link';
import { typography } from './typography';

let theme = createTheme({
  palette: colors,
  typography: typography,
})

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarGutter: 'auto',
          '&::-webkit-scrollbar': {
            width: 8,
            height: 8
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            borderRadius: 8,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 8,
          },
          overflow: 'auto',
          '&.hide-cursor': {
            cursor: 'none',
            ' *': {
              cursor: 'none !important',
            }
          }
        }
      }
    },
    ...Container(theme),
    ...IconButton(theme),
    ...Link(theme)
  }
})

export default theme;