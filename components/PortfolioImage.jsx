import React from 'react';

const PortfolioImage = ({url, descr, handleClick}) => {
  return (
    <div id={url} className="relative rounded mb-[20px] h-[calc(100vh/2-100px)] 2xl:w-[640px] xl:w-[500px] lg:w-[400px] md:w-[568px] sm:w-[470px] w-[300px] hover:h-[calc(100vh/2-90px)] 2xl:hover:w-[660px] xl:hover:w-[520px] lg:hover:w-[420px] md:hover:w-[588px] sm:hover:w-[490px] hover:w-[320px] hover:shadow-lg hover:shadow-gray-500 shadow-sm shadow-gray-300 hover:cursor-pointer">
      <img id={'/' + descr} src={url} alt={descr} className='h-[100%] w-[100%] object-cover object-top' onClick={handleClick}></img>
      <div className="absolute h-[30px] bg-white bottom-[0px] right-[0px] w-[150px] text-center">{descr}</div>
    </div>
  );
};

export default PortfolioImage;