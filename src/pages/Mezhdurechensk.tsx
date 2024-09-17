import {Navbar} from '../sections/Navbar';
import {Hero} from '../sections/Hero';
import {Photos} from '../sections/Photos';
import {Footer} from '../sections/Footer';
import {Description} from '../sections/Description';
import YandexMetrika from '../components/YandexMetrika.tsx';
import MailRuMetrika from '../components/MailRuMetrika.tsx';

const Link: string = 'https://novokuznetsk.kassy.ru/events/teatr/2-7025/hall/?t=1726486086'
const Mezhdurechensk = () => {
  return (
    <div>
      <YandexMetrika counterId={98366893} />
      <MailRuMetrika counterId="3556729" />
      <Navbar city={'Междуреченск'} place={'ДК "Распадский"'} date={'20 ноября в 19:00'}/>
      <main className='flex flex-col lg:flex-row '>
        <Hero/>
        <Description href={Link}/>
      </main>
      <Photos href={Link}/>
      <Footer />
    </div>
  );
};

export default Mezhdurechensk;