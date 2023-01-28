import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ThemeProvider from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)