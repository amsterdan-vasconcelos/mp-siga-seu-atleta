import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { UserRound } from 'lucide-react';

import { AthleteWithSport } from '@/lib/athletes';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { CardGrainyBackground } from './card-grainy-background';

type AthleteCardProps = {
  athlete: AthleteWithSport;
};

function formatFollowersCount(followersNumber: number) {
  const formatter = new Intl.NumberFormat('en-us', {
    notation: 'compact',
    compactDisplay: 'short',
  });

  return formatter.format(followersNumber);
}

export function extractInstagramAccount(url: string) {
  const match = url.match(/instagram\.com\/([^/]+)/);
  return match ? match[1] : null;
}

export function AthleteCard({ athlete }: AthleteCardProps) {
  return (
    <div className='relative group'>
      <Card className='relative group-hover:-translate-y-2 transition-transform transform group-hover:-translate-x-2'>
        <CardHeader className='p-4 flex items-center justify-between flex-row gap-2 overflow-hidden'>
          <div className='flex items-center space-x-4 truncate'>
            {athlete.instagramImageUrl && (
              <Avatar className='w-14 h-14 border-2 border-black'>
                <AvatarImage
                  src={athlete.instagramImageUrl}
                  alt='Avatar do Atleta'
                  className='object-cover'
                />
              </Avatar>
            )}
            <div className='truncate'>
              <CardTitle className='text-lg font-bold truncate'>
                {athlete.instagramName}
              </CardTitle>
              <CardDescription className='text-sm truncate'>
                {athlete.sport.name}
              </CardDescription>
            </div>
          </div>

          <div className='font-medium flex items-center gap-1'>
            <UserRound className='h-5 w-5' />
            {formatFollowersCount(athlete.instagramFollowersCount || 0)}
          </div>
        </CardHeader>

        <CardContent className='p-4 flex-grow text-sm text-gray-700 font-light'>
          <p className='min-h-[7.5em] leading-[1.5em]'>
            {athlete.instagramBio}
          </p>
        </CardContent>

        {athlete.instagramUrl && (
          <CardFooter className='flex items-center justify-between border-t p-4 text-sm'>
            <span className='w-[40%] font-bold truncate'>
              @{extractInstagramAccount(athlete.instagramUrl)}
            </span>
            <Link
              href={athlete.instagramUrl}
              prefetch={false}
              target='_blank'
              className='flex items-center space-x-1 text-blue-500'>
              <FaInstagram className='w-4 h-4' />
              <span>Ver no Instagram</span>
            </Link>
          </CardFooter>
        )}
      </Card>
      <CardGrainyBackground />
    </div>
  );
}
