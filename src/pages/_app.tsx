
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import theme from '../theme/theme'
import NextNProgress from 'nextjs-progressbar';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
import './global.css'


export default function App({ Component, pageProps }: AppProps) {
  const colorModeManager =
    typeof pageProps.cookies === 'string'
      ? cookieStorageManagerSSR(pageProps.cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <ColorModeProvider>
        <NextNProgress options={{ easing: 'ease' }} color={'var(--chakra-colors-orange-200)'} />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}
