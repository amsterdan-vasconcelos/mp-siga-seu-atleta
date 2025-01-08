import { GoSortAsc, GoSortDesc } from 'react-icons/go';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dir, SortBy as Sort } from '@/types/filters';

type SortByProps = {
  sort?: Sort;
  onSortByChange: (selectedSort: string) => void;
  dir?: Dir;
  onDirectionChange: (selectedDirection: Dir) => void;
};

export function SortBy({
  sort,
  onSortByChange,
  onDirectionChange,
  dir,
}: SortByProps) {
  return (
    <div className='flex flex-col md:flex-row items-center gap-1'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Ordenação:
      </span>

      <div className='flex items-center gap-1'>
        <Select value={sort || 'followers'} onValueChange={onSortByChange}>
          <SelectTrigger className='w-32'>
            <SelectValue placeholder='Seguidores' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='followers'>Seguidores</SelectItem>
            <SelectItem value='name'>Nome</SelectItem>
          </SelectContent>
        </Select>

        <Button
          type='button'
          onClick={() => onDirectionChange(dir !== 'asc' ? 'asc' : 'desc')}>
          {dir === 'asc' ? (
            <GoSortAsc className='size-6' />
          ) : (
            <GoSortDesc className='size-6' />
          )}
        </Button>
      </div>
    </div>
  );
}
