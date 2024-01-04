import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes.js'
import GlobalStyle from './styles/global.js'
import { AuthProvider } from './hooks/auth'
import { DishProvider } from './hooks/dish'
import { FavoritesProvider } from './hooks/favorites.jsx'

import { Routes } from './routes/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyle/>
        <AuthProvider>
          <DishProvider>
            <FavoritesProvider>
              <Routes />
            </FavoritesProvider>
          </DishProvider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
