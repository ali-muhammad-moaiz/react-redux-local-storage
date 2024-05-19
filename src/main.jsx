import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import DataStore from './app/store.js';

Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={DataStore}>
    <App />
  </Provider>
)
