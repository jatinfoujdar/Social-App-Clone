import React from 'react'
// import { ChakraProvider,ColorModeScript  } from "@chakra-ui/react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {mode} from "@chakra-ui/theme-tools"


const style = {
  global:(props)=>({
    body:{
      color:mode("gray.800","white.900")(props),
      bg:mode("gray.100", "101010")(props),
    }
  })
};

const config = {
  intialColorMode: "dark",
  usesystemColorMode: true,
};
const color = {
  gray:{
    light: "#616161",
    dark: "#1e1e1e"
  }
}

const theme = extendTheme({config, style,color})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>,
)
