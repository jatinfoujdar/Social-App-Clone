import React from 'react'
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { mode } from "@chakra-ui/theme-tools"
import { BrowserRouter } from "react-router-dom"

const style = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "white.900")(props),
      bg: mode("gray.100", "101010")(props),
    }
  })
};

const config = {
  initialColorMode: "dark", 
  useSystemColorMode: true, 
};

const color = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e"
  }
}

const theme = extendTheme({ config, styles: style, colors: color }) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
