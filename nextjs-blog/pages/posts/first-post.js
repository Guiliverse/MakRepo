import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (

    <>
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      
      
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <img 
          src = '/images/profile.jpg'
          height={144}
          width={144}
          alt = "Your Name" />
    </Layout>
    </>
  );
}