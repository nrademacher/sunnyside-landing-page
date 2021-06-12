import Head from 'next/head';
import Header from '../components/Header';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className="subpixel-antialiased md:text-lg font-medium">
      <Header />
      <Services />
    </div>
  );
}
