import Head from 'next/head';
import Page from '../components/Page';
import Header from '../components/Header';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunnyside Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page>
        <Header />
        <Services />
        <Testimonials />
        <Gallery />
        <Footer />
      </Page>
    </>
  );
}
