import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, description }) => {
  const router = useRouter();
  const pageTitle = title 
    ? `${title} | Label Ladder` 
    : 'Label Ladder - Data Annotation & Processing Services';
  const pageDescription = description || 'We provide end-to-end data processing and annotation services to transform your data into a powerful asset.';

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;