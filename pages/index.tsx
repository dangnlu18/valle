import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* header will go here  */}
      <Header />
      {/* there is a banner here  */}
      <Banner />
      {/* <Footer />  */}


      
    </div>
  )
}

export default Home
