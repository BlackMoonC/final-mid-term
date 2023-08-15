import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-neutral-900 w-full h-full'>
  <Router>
    <App />
  </Router>,
  </div>
)
