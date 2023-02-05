import { createTheme } from "@mui/material";
import '../index.css'
import green from "@mui/material/colors/green";
import grey from "@mui/material/colors/grey";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: green[100],
        },
        secondary: {
            main: 'rgba(232,90,141,0.96)',
        },
        background: {
            default: '#eaf5ea',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        h5: {
            fontWeight: '700',
            fontSize: '.9rem',
        },
        h6: {
            fontWeight: '700',
            fontSize: '0.6rem',
            color: grey[500],
        }
    },
    shape: {
        borderRadius: 15,
    },
    components: {
        MuiCard: {
            defaultProps: {
                elevation: 2
            },
            styleOverrides: {
                root: {
                    borderWidth: '2px',
                    borderColor: '#a8a6a6',
                    borderStyle: 'solid'
                }
            }
        }

    }

})

export default theme;