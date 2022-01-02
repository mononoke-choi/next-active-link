import { AppProps } from 'next/app';
import { BottomTab } from '../components/bottomTab';
import '../public/base.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <BottomTab />
    </>
  );
}

export default CustomApp;
