import { createTheme } from '@mui/material/styles';
import { Container } from './components/Container';
import { IconButton } from './components/IconButton';
import { Link } from './components/Link';
import { typography } from './typography';

let lightTheme = createTheme({
    palette: {
        primary: {
            light: '#33eaff',
            main: '#00e5ff',
            dark: '#00a0b2',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffef62',
            main: '#ffeb3b',
            dark: '#b2a429',
            contrastText: '#000',
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

lightTheme = createTheme(lightTheme, {
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
                        backgroundColor: lightTheme.palette.primary.main,
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
        ...Container(lightTheme),
        ...IconButton(lightTheme),
        ...Link(lightTheme)
    }
})

export default lightTheme;