import Image from 'next/image';

export function SportIcon({ code }: { code: string }) {
  return (
    <Image
      src={`https://codante.s3.amazonaws.com/codante-apis/olympic-games/pictograms/${code}.avif`}
      alt={`Pictograma ${code}`}
      width={20}
      height={20}
      className='mr-2'
    />
  );
}
