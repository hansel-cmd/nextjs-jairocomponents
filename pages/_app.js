import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <script src='/js/bootstrap.bundle.min.js'></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
