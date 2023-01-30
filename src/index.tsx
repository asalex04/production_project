import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "shared/config/i18n/i18n";
import App from "./app/App";
import {ThemeProvider} from "./app/providers/ThemeProvider";

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