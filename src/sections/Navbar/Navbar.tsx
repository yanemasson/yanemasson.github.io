import {Text, TextVariant} from '../../components/Text.tsx';
import {useMediaBreakpoint} from '../../hooks/useMediaBreakpoint.ts';

type NavProps = {
  city: string;
  place: string;
  date: string;
};
export const Navbar = ({city, place, date}:NavProps) => {
  const lg = useMediaBreakpoint('lg')
  return (
    <nav
      className={'h-14 flex w-full items-center justify-center text-white p-4 transition-colors duration-500 bg-[#252B42]/90'}
    >
        <div className='flex w-full items-center gap-8 justify-center lg:justify-end'>
            <Text variant={lg ?TextVariant.H4 :TextVariant.H7}>{city}</Text>
            <Text variant={lg ?TextVariant.H4 :TextVariant.H7}>{place}</Text>
            <Text variant={lg ?TextVariant.H4 :TextVariant.H7}>{date}</Text>
          </div>
    </nav>
  );
};
