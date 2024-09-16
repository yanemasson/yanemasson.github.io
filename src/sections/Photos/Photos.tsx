import Image_1 from './images/1.jpg'
import Image_2 from './images/2.jpg'
import Image_3 from './images/3.jpg'
import Image_4 from './images/4.jpg'
import Image_5 from './images/5.jpg'
import Image_6 from './images/6.jpg'
import Image_7 from './images/7.jpg'
import Image_8 from './images/8.jpg'
import Image_9 from './images/9.jpg'
import Photo from './components/Photo.tsx';
import {Button} from '../../components/Button.tsx';
import {Text, TextVariant} from '../../components/Text.tsx';

type PhotosProps = {
  href: string
}
export const Photos = ({href}: PhotosProps) => {
  return (
    <div className='flex flex-col py-24 gap-6 text-center items-center'>
      <div className='flex justify-center gap-5'>
        <Photo src={Image_1}></Photo>
        <Photo src={Image_2}></Photo>
        <Photo src={Image_3}></Photo>
      </div>
      <div className='flex justify-center gap-5'>
        <Photo src={Image_4}></Photo>
        <Photo src={Image_5}></Photo>
        <Photo src={Image_6} alt={'6'}></Photo>
      </div>
      <div className='flex justify-center gap-5'>
        <Photo src={Image_7}></Photo>
        <Photo src={Image_8}></Photo>
        <Photo src={Image_9}></Photo>
      </div>
      <div className='flex pt-6 self-center'>
        <a href={href}><Button><Text variant={TextVariant.H3}>Купить билет</Text></Button></a>
      </div>
    </div>
  );
};
