import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { Router } from './Router'

import { lightTheme } from './styles/themes/light'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <Router />
        </ShoppingCartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
