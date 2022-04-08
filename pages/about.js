import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-50px)] overflow-hidden sm:mb-[50px] md:mb-[50px]">
      <Head>
        <title>Evan Storm - NYC based photographer</title>
        <meta name="description" content="Evan Storm NYC based photographer" />
        <link rel="icon" href="/logo_es.png" />
      </Head>
      <Header path='/about'/>
      <main className="flex 2xl:flex-col xl:flex-col lg:flex-col 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex-wrap md:flex-wrap sm:flex-wrap 2xl:mx-[300px] xl:mx-[150px] lg:mx-[150px] mx-[100px] 2xl:h-[calc(100vh-130px)] xl:h-[calc(100vh-130px)] lg:h-[calc(100vh-130px)] h-[calc(100vh-130px)] overflow-scroll">
        <article className="flex my-[40px] 2xl:h-[calc((100vh-280px)/2)] xl:h-[calc((100vh-280px)/2)] lg:h-[calc((100vh-280px)/2)] h-fit">
          <div className="2xl:h-[calc((100vh-210px)/2)] 2xl:mr-[70px] xl:mr-[70px] lg:mr-[70px] xl:h-[calc((100vh-210px)/2)] lg:h-[calc((100vh-210px)/2)] 2xl:w-[calc((100vw-480px)/2)] xl:w-[calc((100vw-280px)/2)] lg:w-[calc((100vw-290px)/2)] w-[calc((100vw-200px))] text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base overflow-scroll">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit orci elit, non tempor elit lacinia fringilla. Sed vitae neque eu lectus pretium elementum a eu nibh. Proin ex lorem, finibus non dapibus vel, maximus ut eros. Fusce augue leo, vehicula et mollis non, placerat eu urna. Nullam aliquam a ante vel faucibus. Proin faucibus dignissim sodales. Sed fringilla risus tellus, sed iaculis sem semper eu.
              <br/>
              <br/>
              Sed enim odio, fringilla quis dui consectetur, scelerisque consequat magna. Donec sit amet quam et ex consequat rutrum eget in massa. Vestibulum massa lectus, tincidunt eget venenatis at, mollis sed nulla. Mauris ac cursus nunc. Aenean fringilla tortor a urna convallis, eu interdum magna faucibus. Cras consequat diam in sapien sodales auctor. Vestibulum feugiat viverra mi, quis aliquet nibh interdum at. Sed in tellus quis lorem tempus vehicula. Morbi mauris dui, auctor dictum lorem a, elementum consectetur mi. Nam ut lorem eu ipsum iaculis rhoncus. Phasellus placerat fringilla sapien, vulputate luctus dolor congue sed. Etiam tincidunt sem nec lectus consectetur, tempor faucibus augue faucibus. Curabitur non sapien tellus. In hac habitasse platea dictumst. Vivamus facilisis dolor risus, in efficitur elit ullamcorper nec. Pellentesque quis est ultrices, pretium est at, aliquet enim.
            </div>
          </div>
          <div className="relative h-[calc((100vh-210px)/2)] 2xl:block xl:block lg:block md:hidden sm:hidden hidden 2xl:w-[calc((100vw-460px)/2)] xl:w-[calc((100vw-260px)/2)] lg:w-[calc((100vw-260px)/2)] w-[calc((100vw-260px)/2)]">
            <img src='/storm_1.jpg'alt='evan storm image' className='h-[100%] w-[100%] object-cover object-top'/>
          </div>
        </article>
        <article className="flex h-[calc((100vh-210px)/2)] 2xl:flex-row xl:flex-row lg:flex-row 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
          <div className="relative lg:h-[calc((100vh-210px)/2)] md:h-[400px] pr-[30px] 2xl:w-[calc((100vw-400px)/2)] xl:w-[calc((100vw-200px)/2)] lg:w-[calc((100vw-200px)/2)] w-[calc(100vw-200px)]">
            <img src='/storm.png'alt='evan storm image' className='h-[100%] w-[100%] object-cover'/> 
          </div>
          <div className="2xl:h-[calc((100vh-210px)/2)] pb-[30px] 2xl:py-[0px] xl:py-[0px] lg:pt-[0px] pt-[30px] 2xl:pl-[30px] xl:pl-[30px] lg:pl-[30px] xl:h-[calc((100vh-210px)/2)] lg:h-[calc((100vh-210px)/2)] 2xl:w-[calc((100vw-400px)/2)] xl:w-[calc((100vw-200px)/2)] lg:w-[calc((100vw-200px)/2)] w-[calc(100vw-200px)] text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base overflow-scroll">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit orci elit, non tempor elit lacinia fringilla. Sed vitae neque eu lectus pretium elementum a eu nibh. Proin ex lorem, finibus non dapibus vel, maximus ut eros. Fusce augue leo, vehicula et mollis non, placerat eu urna. Nullam aliquam a ante vel faucibus. Proin faucibus dignissim sodales. Sed fringilla risus tellus, sed iaculis sem semper eu.
              <br/>
              <br/>
              Sed enim odio, fringilla quis dui consectetur, scelerisque consequat magna. Donec sit amet quam et ex consequat rutrum eget in massa. Vestibulum massa lectus, tincidunt eget venenatis at, mollis sed nulla. Mauris ac cursus nunc. Aenean fringilla tortor a urna convallis, eu interdum magna faucibus. Cras consequat diam in sapien sodales auctor. Vestibulum feugiat viverra mi, quis aliquet nibh interdum at. Sed in tellus quis lorem tempus vehicula. Morbi mauris dui, auctor dictum lorem a, elementum consectetur mi. Nam ut lorem eu ipsum iaculis rhoncus. Phasellus placerat fringilla sapien, vulputate luctus dolor congue sed. Etiam tincidunt sem nec lectus consectetur, tempor faucibus augue faucibus. Curabitur non sapien tellus. In hac habitasse platea dictumst. Vivamus facilisis dolor risus, in efficitur elit ullamcorper nec. Pellentesque quis est ultrices, pretium est at, aliquet enim.
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
