import {ImgHTMLAttributes} from 'react';

const Photo = ({src}: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img className='w-[90vw] lg:w-[31vw] rounded-xl' src={src}/>
  );
};

export default Photo;