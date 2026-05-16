import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider, useThemeContext } from '../context/theme';
import { CursorContextProvider } from '../context/cursor';
import { MenuContextProvider } from '../context/menu';
import GlobalStyles from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import AppBar from '../components/AppBar';
import Cursor from '../components/Cursor';
import Menu from '../components/Menu';
import SiteOfTheDay from '../components/SiteOfTheDay';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const ThemedApp = ({ children }) => {
  const [state] = useThemeContext();
  const currentTheme = themes[state.theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const Header = () => <AppBar direction="down" renderAs="header" />;

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    enter: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <Head>
        <title>Stinginc Agency- Creative Studio</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/yzi3byl.css" />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: calibre;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/CalibreTest-Regular.otf') format('opentype'),
            url('/fonts/calibre-test-regular.woff') format('woff');
        }

        @font-face {
          font-family: calibre;
          font-weight: 900;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/CalibreTest-Black.otf') format('opentype'),
            url('/fonts/calibre-test-black.woff') format('woff');
        }
      `}</style>
      <ThemeContextProvider>
        <MenuContextProvider>
          <CursorContextProvider>
            <ThemedApp>
              <Header />
              <Menu />
              <div style={{ position: 'relative' }}>
                <AnimatePresence exitBeforeEnter initial={false}>
                  <motion.div
                    key={router.pathname}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={pageVariants}
                    style={{ position: 'absolute', width: '100%' }}
                  >
                    <Component {...pageProps} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <Cursor />
              <SiteOfTheDay />
            </ThemedApp>
          </CursorContextProvider>
        </MenuContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
