import {ButtonHTMLAttributes} from 'react';

export const Button = ({...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='flex flex-col text-white w-60'>
      <button {...props} className='text-xl min-w-[50%] rounded-full p-4 bg-[#2091F9]/90 hover:bg-[#2091F9]/80 active:bg-[#2091F9] text-white' />
    </div>
  );
};


