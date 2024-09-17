import {Link} from 'react-router-dom';
import {Button} from '../components/Button.tsx';
import {Navbar} from '../sections/Navbar';
import {Hero} from '../sections/Hero';
import {Text, TextVariant} from '../components/Text.tsx';
import {Footer} from '../sections/Footer';

const MainPage = () => {
  return (
    <div>
      <Navbar city={'Новокузнецк'} place={'Междуреченск'} date={'Ленинск-Кузнецкий'}/>
      <main className='flex flex-col lg:flex-row '>
        <Hero/>
        <div className='flex p-6 gap-2 flex-col text-[#252B42] items-center lg:items-start'>
          <div>
          <Text variant={TextVariant.H3}>Уникальная возможность увидеть самые яркие и интересные номера из всемирно известных балетных спектаклей!</Text>
          <Text variant={TextVariant.H6}>Гала-концерт – это представление, которое позволит зрителю познакомиться с истинными шедеврами балетной классики: на одной сцене в один вечер артисты представляют фрагменты самых знаменитых и любимых зрителями спектаклей – «Лебединое озеро», «Спящая красавица», «Корсар», «Дон Кихот», «Щелкунчик», «Шахерезада» и др.</Text>
          <Text variant={TextVariant.H6}>
            <ul>
              <li>В концерте примут участие:</li>
              <li>Красноярский театр оперы и балета</li>
              <li>Новосибирский театр оперы и балета НОВАТ</li>
              <li>Мариинский театр оперы и балета</li>
              <li>Самарский академический театр оперы и балета</li>
            </ul>
          </Text>
          <Text variant={TextVariant.H6}>Продолжительность - 2 часа</Text>
          <Text variant={TextVariant.H6}> Филигранная техника, отточенные движения, красота линий, гармония пластики. Настоящий праздник балета в двух отделениях.</Text>
          </div>
            <div className='flex flex-col lg:flex-row pt-8 justify-between gap-4'>
            <Link to={'/novokuznetsk'}><Button><Text variant={TextVariant.H3}>Новокузнецк</Text></Button></Link>
            <Link to={'/mezhdurechensk'}><Button><Text variant={TextVariant.H3}>Междуреченск</Text></Button></Link>
            <Link to={'/leninsk_kuznetskiy'}><Button><Text variant={TextVariant.H3}>Ленинск-Кузнецкий</Text></Button></Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default MainPage;