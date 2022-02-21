import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider,} from "@material-ui/core/styles";


const myTheme = createTheme({
    palette: {
        primary:{
            main: "#4d3033",
        },
        secondary: {
            main: "#9a6e5d",
        }
    }
})


ReactDOM.render(
    <ThemeProvider theme={myTheme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
