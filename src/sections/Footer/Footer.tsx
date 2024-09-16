import {Text, TextVariant} from '../../components/Text';


export const Footer = () => {
  return (
    <div className='flex flex-col p-12 gap-4 bg-[#252B42] text-white justify-start items-start'>
        <Text variant={TextVariant.H6}>Организатор: ИП Волик Михаил Александрович</Text>
      <Text variant={TextVariant.H6}>Адрес: 662313, Красноярский край, г. Шарыпово, мкр. 4-й</Text>
      <Text variant={TextVariant.H6}>ИНН: 245904917048</Text>
      <Text variant={TextVariant.H6}>ОГРН/ОРГНИП: 323246800154125</Text>
    </div>
  );
};
