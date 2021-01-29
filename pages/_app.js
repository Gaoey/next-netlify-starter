import '@styles/globals.css';
import Router from 'next/router';
import * as gtag from '../lib/gtag';


// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => console.log({ url }) || gtag.pageview(url))

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
