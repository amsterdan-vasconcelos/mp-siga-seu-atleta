import * as React from 'react';

import { cn } from '@/lib/utils';
import { FaSearch } from 'react-icons/fa';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full border-2 border-black bg-card px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, type, ...props }, ref) => {
  return (
    <div className='relative w-full'>
      <FaSearch className='absolute size-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-900' />
      <input
        type={type}
        className={cn(
          'flex h-10 w-full border-2 border-black bg-card pl-8 pr-3 py-2 font-semibold text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg',
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
SearchInput.displayName = 'SearchInput';

export { Input, SearchInput };
