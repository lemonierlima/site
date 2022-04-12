import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'
import Script from "next/script"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Lemonier Lima</title>
      </Head>
      <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous"/>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}