import React, {useState, useEffect} from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import images from '../public/images.json';

export default function Carousel({current, setToggle, code}) {

  const [curImage, setCurImage] = useState(current);
  const handleClickFront = () => {
    const number = curImage[2] === '9' ? '1' : +curImage[2] + 1;
    setCurImage('/' + code + number);
  };
  const handleClickBack = () => {
    const number = curImage[2] === '1' ? '9' : +curImage[2] - 1;
    setCurImage('/' + code + number);
  };
  const currentImage = images.filter(image => image.src === curImage)[0];


  return (

    <div id='carousel' className='absolute w-screen z-30 h-[calc(100vh-85px)] mt-[5px] bg-white' 
      onKeyDown={(e) => {if (e.code === 'ArrowRight') {handleClickFront(e);}
      else if (e.code === 'ArrowLeft') {handleClickBack(e);}}} tabIndex={0}>
      <div style={{position: 'absolute', display: 'flex', marginTop: '50px', justifyContent: 'center', left: '50%', borderRadius:'10px', transform: 'translate(-50%, -60%)', top: '50%', 'height': currentImage.size === 'vertical' ? '70vh' : '49.6vh', width: currentImage.size === 'vertical' ? '46.7vh' : '72.4vh'}}>
        <button className="absolute left-[-10%] rounded-md translate-x-[-50%] translate-y-[-50%] top-[50%] text-black text-2xl hover:text-gray-600 hover:text-3xl" onClick={handleClickBack}><MdArrowBackIos/></button>
        <img src={`${curImage}.jpg`} alt={currentImage.descr} style={{borderRadius: '10px', boxShadow: '0px 2px 15px 10px grey', zIndex:0, objectFit:'cover', height: '100%', width: '100%'}} loading='lazy' />
        <button className="absolute right-[-10%] rounded-md translate-x-2/4 translate-y-[-50%] top-[50%] text-black text-2xl hover:text-gray-600 hover:text-3xl" onClick={handleClickFront}><MdArrowForwardIos/></button>
        <button className='absolute top-[10px] right-[10px]' onClick={() => setToggle(false)}><AiFillCloseCircle className='text-gray-400 hover:text-gray-200' size='25px' /></button>
      </div>
    </div>
  );
}
