import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { render } from 'react-dom';


// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//       <MantineProvider theme={theme}>
//         <App />
//       </MantineProvider>
//   </React.StrictMode>,
// )

render(
    <MantineProvider theme={theme}>
            <App />
    </MantineProvider>,
    document.getElementById('root'),
);
