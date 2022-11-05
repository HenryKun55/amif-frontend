import 'react-image-gallery/styles/css/image-gallery.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './pages/App'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
