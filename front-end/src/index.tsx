import React from 'react';
import ReactDOM from 'react-dom';
import {Container, CssBaseline} from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import {MainPage} from './MainPage';

const theme = { };

function Root(): React.ReactElement {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main">
                    <CssBaseline />
                    <MainPage />
                </Container>
            </ThemeProvider>
        </>
    );
}

ReactDOM.render(Root(), document.body);
