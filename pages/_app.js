import '../styles/globals.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fathom.load('KUIOOJEN', {
      includedDomains: ['the-audio-recorder.vercel.app'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
