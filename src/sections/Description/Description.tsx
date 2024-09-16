import {Text, TextVariant} from '../../components/Text';
import {Button} from '../../components/Button.tsx';

type DesProps = {
  href: string
}
export const Description = ({href}: DesProps) => {
  return (
    <div className='flex p-6 gap-2 flex-col text-[#252B42] items-start'>
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
      <div className='flex pt-6 self-center'>
        <a href={href}><Button><Text variant={TextVariant.H3}>Купить билет</Text></Button></a>
      </div>
    </div>
  );
};
