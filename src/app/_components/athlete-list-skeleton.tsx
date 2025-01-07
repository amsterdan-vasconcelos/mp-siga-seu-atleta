import { Skeleton } from '@/components/ui/skeleton';
import { ATHLETES_PER_PAGE } from '@/lib/contants';

export function AthletesListSkeleton() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {Array.from({ length: ATHLETES_PER_PAGE }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <>
      <div className='w-full bg-card border-2 border-black'>
        {/* HEADER */}
        <div className='flex items-start justify-between p-4 flex-row overflow-hidden gap-2'>
          <div className='flex items-center space-x-4 truncate'>
            <Skeleton className='h-14 w-14 rounded-full' />
            <div className='grid gap-2'>
              <Skeleton className='h-[15px] w-[180px]' />
              <Skeleton className='h-[10px] w-[180px]' />
            </div>
          </div>
          <div className='mt-[11px]'>
            <Skeleton className='h-[15px] w-[30px]' />
          </div>
        </div>
        {/* CONTENT */}
        <div className='p-4 text-sm text-gray-700 font-light grid gap-2 h-32'>
          <Skeleton className='h-[10px] w-full' />
          <Skeleton className='h-[10px] w-full' />
          <Skeleton className='h-[10px] w-full' />
          <Skeleton className='h-[10px] w-[80%]' />
        </div>
        {/* FOOTER */}
        <div className='flex items-center justify-between border-t p-4 text-sm'>
          <Skeleton className='h-[15px] w-[60px]' />
          <Skeleton className='h-[15px] w-[100px]' />
        </div>
      </div>
    </>
  );
}
