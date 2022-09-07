import { createTheme } from '@mui/material/styles';
import { Container } from './components/Container';
import { IconButton } from './components/IconButton';
import { Link } from './components/Link';
import { typography } from './typography';

let darkTheme = createTheme({
    palette: {
        primary: {
            light: '#4f5b62',
            main: '#263238',
            dark: '#000a12',
            contrastText: '#eeffff',
        },
        secondary: {
            light: '#eeffff',
            main: '#bbdefb',
            dark: '#8aacc8',
            contrastText: '#000a12',
        },
        error: {
            main: '#FF2C52',
        },
        background: {
            default: '#000a12',
            paper: '#000a12',
        },
        text: {
            primary: '#eeffff',
            secondary: '#263238',
        }
    },
    typography: typography,
})

darkTheme = createTheme(darkTheme, {
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
                        backgroundColor: darkTheme.palette.primary.main,
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
        ...Container(darkTheme),
        ...IconButton(darkTheme),
        ...Link(darkTheme)
    }
})

export default darkTheme;