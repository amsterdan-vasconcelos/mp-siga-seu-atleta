import Image from 'next/image';
import Link from 'next/link';

import { About } from './about';

export function Navbar() {
  return (
    <nav className='w-full flex items-center justify-between p-4 mb-8 shadow-md'>
      <Link
        href={'/'}
        className='relative w-[200px] h-[35px] flex items-center gap-2 text-lg font-bold uppercase tracking-wider select-none'>
        <Image
          alt='logo'
          className='absolute'
          src={'/logo.svg'}
          fill
          priority
        />
      </Link>

      <div>
        <About />
      </div>
    </nav>
  );
}
