import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from "../utils/theme"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} options={{
        useSystemColorMode: true
      }}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
