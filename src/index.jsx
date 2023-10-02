import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/index";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

document.body.style.backgroundColor = darkTheme.palette.background.default;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
);
