import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import PortfolioImage from '../../components/PortfolioImage';

export default function Home() {
  const router = useRouter();
  const handleClick = (e)=> {
    router.push('/portfolio' + e.target.id);
  };

  return (
    <div className="w-screen h-screen sm:h-[calc(100vh-50px)] md:h-[calc(100vh-50px)]overflow-hidden sm:mb-[50px] md:mb-[50px]">
      <Head>
        <title>Evan Storm - NYC based photographer</title>
        <meta name="description" content="Evan Storm NYC based photographer" />
        <link rel="icon" href="/logo_es.png" />
      </Head>
      <Header path='/portfolio'/>
      <main className="flex 2xl:flex-col xl:flex-col lg:flex-col 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap mx-[80px] h-[calc(100vh-120px)] mt-[30px] overflow-scroll">
        <article className="flex justify-around flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap items-end 2xl:h-[calc(100vh/2-70px)] xl:h-[calc(100vh/2-70px)] lg:h-[calc(100vh/2-70px)] h-fit">
          <PortfolioImage handleClick={handleClick} descr='masculinity' url='/m3.jpg'/>
          <PortfolioImage handleClick={handleClick} descr='femininity' url='/f3.jpg'/>
        </article>
        <article className="flex justify-around flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap items-end 2xl:h-[calc(100vh/2-70px)] xl:h-[calc(100vh/2-70px)] lg:h-[calc(100vh/2-70px)] h-fit">
          <PortfolioImage handleClick={handleClick} descr='maternity' url='/p7.jpg'/>
          <PortfolioImage handleClick={handleClick} descr='editorials' url='/editorials.jpg'/>
        </article>
      </main>
    </div>
  );
}
