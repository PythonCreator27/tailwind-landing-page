import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
