import {Navbar} from '../sections/Navbar';
import {Hero} from '../sections/Hero';
import {Photos} from '../sections/Photos';
import {Footer} from '../sections/Footer';
import {Description} from '../sections/Description';

const Link: string = 'https://novokuznetsk.kassy.ru/events/teatr/2-7025/hall/?t=1726486086'
const Mezhdurechensk = () => {
  return (
    <div>
      <Navbar city={'Междуреченск'} place={'ДК "Распадский"'} date={'20 ноября в 19:00'}/>
      <main className='flex flex-row'>
        <Hero/>
        <Description href={Link}/>
      </main>
      <Photos href={Link}/>
      <Footer />
    </div>
  );
};

export default Mezhdurechensk;