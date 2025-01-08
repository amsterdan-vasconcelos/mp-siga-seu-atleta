import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useHandleUrl() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  return { pathname, replace, searchParams };
}
