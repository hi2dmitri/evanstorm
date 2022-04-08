import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';


export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Evan Storm - NYC based photographer</title>
        <meta name="description" content="Evan Storm NYC based photographer" />
        <link rel="icon" href="/logo_es.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"/>
      </Head>
      <Header path='/'/>
      <main className="flex items-center justify-center h-[calc(100vh-80px)] w-1000px relative">
        <img src='/front.jpg' alt='woman posing on the street of New York City' className='h-[100%] w-[100%] object-cover'></img>
        <div className="absolute mt-[100px] font-sans 2xl:text-6xl md:text-5xl font-['Fjalla_One'] text-4xl text-white [text-shadow:0px_10px_7px_rgb(10,0,0,1)]">
          EVAN STORM PHOTOGRAPHY
        </div>
      </main>
      <div className="absolute bottom-[20px] right-[20px] font-sans text-m text-white">
        All Rights Reserved © 2022
      </div>
    </div>
  );
}
