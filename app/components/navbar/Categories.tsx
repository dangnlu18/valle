'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { PiWineDuotone, PiSuitcase}from 'react-icons/pi';
import { RiRestaurantLine } from 'react-icons/ri';
import { BiCalendarStar } from 'react-icons/bi';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Events',
    icon: BiCalendarStar,
    description: 'Check out our latest events!',
  },
  {
    label: 'Wineries',
    icon: PiWineDuotone,
    description: 'Check out the local wineries nearby!',
  },
  {
    label: 'Restaurants',
    icon: RiRestaurantLine,
    description: 'Try some amazing restaurants nearby!'
  },
  {
    label: 'Packages',
    icon: PiSuitcase,
    description: 'Check out some of our amazing bundled packages!'
  }




]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-around
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;