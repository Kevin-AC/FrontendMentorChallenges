
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WeatherProvider } from './context/WeatherContext'
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <WeatherProvider>
            <App />
        </WeatherProvider>,
    </>
)
