import 'tailwindcss/tailwind.css';

import { RecoilRoot } from 'recoil';
import Notification from '@/components/Notification';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Notification />
    </RecoilRoot>
  );
}

export default MyApp;
