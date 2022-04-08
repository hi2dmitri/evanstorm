import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

export default function Home() {

  return (
    <div className="w-screen h-screen sm:h-[calc(100vh-50px)] md:h-[calc(100vh-50px)]overflow-hidden sm:mb-[50px] md:mb-[50px]">
      <Head>
        <title>Evan Storm - NYC based photographer</title>
        <meta name="description" content="Evan Storm NYC based photographer" />
        <link rel="icon" href="/logo_es.png" />
      </Head>
      <Header path='/contact'/>
      <main className="flex bg-[url('/contact.jpg')] bg-left bg-cover items-center justify-center h-[calc(100vh-80px)] overflow-scroll">
        <ContactForm/>
      </main>
    </div>
  );
}
