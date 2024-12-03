import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const animals = ["giraffe", "zebra", "bear"]

createRoot(document.getElementById('root')).render(
    <App />
)
