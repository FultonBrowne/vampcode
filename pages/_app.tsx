import '../styles/globals.css';
import { AppProps } from 'next/app';
import localFont from 'next/font/local';

// Load the Jost font
const jost = localFont({
  src: [
    {
      path: '../public/fonts/Jost-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Jost-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-jost',
});

// Load the Cinzel font
const cinzel = localFont({
  src: [
    {
      path: '../public/fonts/Cinzel-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-cinzel',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jost.variable} ${cinzel.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;