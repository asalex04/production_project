import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import 'shared/config/i18n/i18n'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
