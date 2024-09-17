import {Navbar} from '../sections/Navbar';
import {Hero} from '../sections/Hero';
import {Photos} from '../sections/Photos';
import {Footer} from '../sections/Footer';
import {Description} from '../sections/Description';
import YandexMetrika from '../components/YandexMetrika.tsx';
import MailRuMetrika from '../components/MailRuMetrika.tsx';

const Link: string = 'https://forma1.ru/bcalendar?site=www.mauk-dkii.ru&cald_id=544414'
const LeninskKuznetskiy = () => {
  return (
    <div>
      <YandexMetrika counterId={98366893} />
      <MailRuMetrika counterId="3556729" />
      <Navbar city={'Ленинск-Кузнецкий'} place={'Дворец культуры и искусства'} date={'21 ноября в 18:00'}/>
      <main className='flex flex-col lg:flex-row '>
        <Hero/>
        <Description href={Link}/>
      </main>
      <Photos href={Link}/>
      <Footer />
    </div>
  );
};

export default LeninskKuznetskiy;