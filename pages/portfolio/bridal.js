import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-50px)] overflow-hidden sm:mb-[50px] md:mb-[50px]">
      <Head>
        <title>Evan Storm - NYC based photographer</title>
        <meta name="description" content="Evan Storm NYC based photographer" />
        <link rel="icon" href="/logo_es.png" />
      </Head>
      <Header path='/portfolio'/>
      <main className="flex 2xl:flex-col xl:flex-col lg:flex-col 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex-wrap md:flex-wrap sm:flex-wrap 2xl:mx-[200px] xl:mx-[100px] lg:mx-[100px] mx-[100px] 2xl:h-[calc(100vh-130px)] xl:h-[calc(100vh-130px)] lg:h-[calc(100vh-130px)] h-[calc(100vh-130px)] overflow-scroll">
      </main>
    </div>
  );
}
