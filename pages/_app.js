import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component className="font-body text-dark" {...pageProps} />;
}

export default MyApp;
