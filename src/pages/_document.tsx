import { ColorModeScript, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme/theme'

export default function Document() {
  return (
    <Html>
      <Head />

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}