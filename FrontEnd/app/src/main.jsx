import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Agrega los iconos al library
library.add(fas, fab, far);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)
