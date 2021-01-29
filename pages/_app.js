import '@styles/globals.css'
import { useEffect } from 'react'
import ReactGA from 'react-ga';

function Application({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactGA.initialize('UA-188191546-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  })

  return <Component {...pageProps} />
}

export default Application
