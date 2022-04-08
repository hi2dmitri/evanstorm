import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

export default function Home() {
  const [toggle, setToggle] = useState (false);
  const [current, setCurrent] = useState(null);
  const handleClick = (e) => {
    setCurrent(e.target.id);
    setToggle(true);
  };

  return (
    <div className="w-screen h-[100vh] overflow-hidden">
      <Head>
        <title>Evan Storm - NYC based photographer</title>
        <meta name="description" content="Male Body Photography by Evan Storm" />
        <link rel="icon" href="/logo_es.png" />
      </Head>
      <Header path='/portfolio'/>
      {toggle && <Carousel current={current} setToggle={setToggle} code='m'/>}
      <main className="relative mb-[50px] 2xl:w-[1528px] xl:w-[1228px] lg:w-[883px] md:w-[697px] sm:w-[445px] w-[445px] h-[calc(100vh-100px)] left-[50%] top-[45%] translate-x-[-50%] translate-y-[-50%] overflow-scroll">
        <div id='/m1'className="absolute bg-[url('/m1.jpg')] rounded bg-center bg-cover left-[10px] top-[70px] 2xl:top-[100px] xl:top-[100px] lg:top-[80px] md:top-[70px] h-[250px] 2xl:h-[300px] xl:h-[280px] lg:h-[260px] md:h-[250px] w-[190px] 2xl:w-[220px] xl:w-[190px] hover:h-[260px] 2xl:hover:h-[310px] xl:hover:h-[290px] lg:hover:h-[270px] md:hover:h-[260px] hover:w-[200px] 2xl:hover:w-[230px] xl:hover:w-[200px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-vertical" onClick={handleClick}>
        </div>
        <div id='/m2'className="absolute bg-[url('/m2.jpg')] rounded bg-center bg-cover left-[220px] 2xl:left-[280px] xl:left-[230px] lg:left-[230px] sm:left-[220px] top-[20px] 2xl:top-[40px] xl:top-[40px] lg:top-[40px] md:top-[20px] h-[330px] 2xl:h-[420px] xl:h-[400px] l:h-[380px] lg:h-[360px] md:h-[330px] w-[220px] 2xl:w-[270px] xl:w-[250px] lg:w-[230px] md:w-[210px] hover:h-[340px] 2xl:hover:h-[430px] xl:hover:h-[410px] l:hover:h-[390px] lg:hover:h-[370px] md:hover:h-[340px] hover:w-[230px] 2xl:hover:w-[280px] xl:hover:w-[260px] lg:hover:w-[240px] md:hover:w-[220px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-vertical" onClick={handleClick}>
        </div>
        <div id='/m3'className="absolute bg-[url('/m3.jpg')] rounded bg-center bg-cover left-[20px] 2xl:left-[30px] xl:left-[30px] lg:left-[0px] md:left-[20px] sm:left-[40px] top-[380px] 2xl:top-[490px] xl:top-[480px] lg:top-[440px] md:top-[380px] h-[230px] 2xl:h-[270px] xl:h-[270px] lg:h-[250px] md:h-[230px] w-[380px] 2xl:w-[420px] xl:w-[400px] lg:w-[360px] hover:h-[240px] 2xl:hover:h-[280px] xl:hover:h-[280px] lg:hover:h-[260px] md:hover:h-[240px] hover:w-[390px] 2xl:hover:w-[430px] xl:hover:w-[410px] lg:hover:w-[370px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-horizontal" onClick={handleClick}>
        </div>
        <div id='/m4'className="absolute bg-[url('/m4.jpg')] rounded bg-center bg-cover left-[70px] 2xl:left-[600px] xl:left-[530px] lg:left-[480px] md:left-[350px] sm:left-[80px] top-[640px] 2xl:top-[60px] xl:top-[60px] lg:top-[70px] md:top-[730px] sm:top-[640px] h-[190px] 2xl:h-[270px] xl:h-[250px] lg:h-[230px] md:h-[230px] md:h-[190px] w-[350px] 2xl:w-[390px] xl:w-[360px] lg:w-[370px] md:w-[320px] sm:w-[350px] hover:h-[200px] 2xl:hover:h-[280px] xl:hover:h-[260px] lg:hover:h-[240px] md:hover:h-[240px] md:hover:h-[200px] hover:w-[360px] 2xl:hover:w-[400px] xl:hover:w-[370px] lg:hover:w-[380px] md:hover:w-[330px] sm:hover:w-[360px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-horizontal" onClick={handleClick}>
        </div>
        <div id='/m5'className="absolute bg-[url('/m5.jpg')] rounded bg-center bg-cover left-[10px] 2xl:left-[570px] xl:left-[510px] lg:left-[385px] md:left-[430px] sm:left-[10px] top-[860px] 2xl:top-[390px] xl:top-[390px] lg:top-[430px] md:top-[390px] h-[320px] 2xl:h-[380px] xl:h-[360px] lg:h-[340px] md:h-[320px] w-[200px] 2xl:w-[280px] xl:w-[230px] lg:w-[230px] md:w-[240px] hover:h-[330px] 2xl:hover:h-[390px] xl:hover:h-[370px] lg:hover:h-[350px] md:hover:h-[330px] hover:w-[210px] 2xl:hover:w-[290px] xl:hover:w-[240px] lg:hover:w-[240px] md:hover:w-[250px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-vertical" onClick={handleClick}>
        </div>
        <div id='/m6'className="absolute bg-[url('/m6.jpg')] rounded bg-center bg-cover left-[230px] 2xl:left-[875px] xl:left-[770px] lg:left-[635px] md:left-[50px] top-[880px] 2xl:top-[390px] xl:top-[390px] lg:top-[390px] md:top-[650px] sm:top-[880px] h-[320px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] md:h-[340px] sm:h-[320px] w-[200px] 2xl:w-[280px] xl:w-[230px] lg:w-[240px] md:w-[240px] sm:w-[200px] hover:h-[330px] 2xl:hover:h-[410px] xl:hover:h-[410px] lg:hover:h-[410px] md:hover:h-[350px] sm:hover:h-[330px] hover:w-[210px] 2xl:hover:w-[290px] xl:hover:w-[240px] lg:hover:w-[250px] md:hover:w-[250px] sm:hover:w-[210px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-vertical" onClick={handleClick}>
        </div>
        <div id='/m7'className="absolute bg-[url('/m7.jpg')] rounded bg-center bg-cover 2xl:block xl:hidden lg:block md:block sm:block left-[30px] 2xl:left-[1180px] lg:left-[540px] md:left-[10px] top-[1230px] 2xl:top-[420px] lg:top-[850px] md:top-[1020px] h-[220px] 2xl:h-[240px] xl:h-[240px] lg:h-[240px] md:h-[220px] w-[390px] 2xl:w-[335px] lg:w-[305px] md:w-[390px] hover:h-[230px] 2xl:hover:h-[250px] xl:hover:h-[250px] lg:hover:h-[250px] md:hover:h-[230px] hover:w-[400px] 2xl:hover:w-[340px] lg:hover:w-[315px] md:hover:w-[400px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-horizontal" onClick={handleClick}>
        </div>
        <div id='/m8'className="absolute bg-[url('/m8.jpg')] rounded bg-center bg-cover left-[5px] 2xl:left-[1310px] xl:left-[1030px] lg:left-[300px] md:left-[430px] top-[1480px] 2xl:top-[30px] xl:top-[410px] lg:top-[780px] md:top-[1000px] h-[280px] 2xl:h-[350px] xl:h-[330px] lg:h-[350px] md:h-[300px] w-[200px] 2xl:w-[200px] xl:w-[180px] lg:w-[200px] md:w-[230px] hover:h-[290px] 2xl:hover:h-[360px] xl:hover:h-[340px] lg:hover:h-[360px] md:hover:h-[360px] hover:w-[210px] 2xl:hover:w-[210px] xl:hover:w-[190px] lg:hover:w-[210px] md:hover:w-[240px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-vertical" onClick={handleClick}>
        </div>
        <div id='/m9'className="absolute bg-[url('/m9.jpg')] rounded bg-top bg-cover left-[225px] 2xl:left-[1015px] xl:left-[920px] lg:left-[20px] md:left-[450px] top-[1480px] 2xl:top-[10px] xl:top-[10px] lg:top-[740px] md:top-[20px] h-[260px] 2xl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-[260px] w-[200px] 2xl:w-[270px] xl:w-[270px] lg:w-[250px] md:w-[230px] hover:h-[260px] 2xl:hover:h-[320px] xl:hover:h-[320px] lg:hover:h-[320px] md:hover:h-[320px] sm:hover:h-[260px] hover:w-[210px] 2xl:hover:w-[280px] xl:hover:w-[280px] lg:hover:w-[260px] md:hover:w-[240px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer data-vertical" onClick={handleClick}>
        </div>
      </main>
    </div>
  );
}
