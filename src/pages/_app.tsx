
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider, ColorModeScript, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import theme from '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
  const colorModeManager =
    typeof pageProps.cookies === 'string'
      ? cookieStorageManagerSSR(pageProps.cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}
