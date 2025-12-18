import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - CHILUKA HARSHITH REDDY</title>
        <meta name="description" content="Portfolio website showcasing my projects and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}

