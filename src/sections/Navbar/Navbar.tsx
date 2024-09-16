import {Text, TextVariant} from '../../components/Text.tsx';

type NavProps = {
  city: string;
  place: string;
  date: string;
};
export const Navbar = ({city, place, date}:NavProps) => {
  return (
    <nav
      className={'h-14 flex w-full items-center justify-center text-white p-4 transition-colors duration-500 bg-[#252B42]/90'}
    >
        <div className='flex w-full items-center gap-5 justify-end'>
            <Text variant={TextVariant.H4}>{city}</Text>
            <Text variant={TextVariant.H4}>{place}</Text>
            <Text variant={TextVariant.H4}>{date}</Text>
          </div>
    </nav>
  );
};
