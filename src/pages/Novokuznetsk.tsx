import {Navbar} from '../sections/Navbar';
import {Hero} from '../sections/Hero';
import {Photos} from '../sections/Photos';
import {Footer} from '../sections/Footer';
import {Description} from '../sections/Description';

const Link: string = 'https://quicktickets.ru/novokuznetsk-dk-alyuminshchik/s645'
const Novokuznetsk = () => {
  return (
    <div>
      <Navbar city={'Новокузнецк'} place={'ДК "Алюминщик"'} date={'19 ноября в 19:00'}/>
      <main className='flex flex-row'>
        <Hero/>
        <Description href={Link}/>
      </main>
      <Photos href={Link}/>
      <Footer />
    </div>
  );
};

export default Novokuznetsk;