import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { GlobalStyles } from './components/GlobalStyles';
import { DetailModalProvider } from './providers/detail-modal';
import { DBProvider } from './providers/db';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <DetailModalProvider>
                <DBProvider>
                    <App />
                </DBProvider>
            </DetailModalProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
