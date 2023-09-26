// this is for loading global CSS into the app - wraps all the pages in the app
// you can use this to keep state when navigating between pages or add global style
// *** you cannot import global CSS anywhere else ***

// note: you have to restart the dev server when adding this page - `npm run dev`

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}