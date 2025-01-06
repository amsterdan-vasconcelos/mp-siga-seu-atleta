import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function About() {
  return (
    <Dialog>
      <DialogTrigger className='text-lg uppercase tracking-wider hover:underline underline-offset-2 font-semibold'>
        Sobre
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sobre o Projeto</DialogTitle>
          <DialogDescription asChild>
            <div>
              <p>
                Esse é um projeto criado com base no Mini Projeto{' '}
                <Link
                  href='https://codante.io/mini-projetos/siga-seu-atleta'
                  target='_blank'
                  className='text-yellow-500 font-bold hover:underline'>
                  Siga seu atleta
                </Link>{' '}
                da plataforma{' '}
                <Link
                  href='https://codante.io'
                  target='_blank'
                  className='text-yellow-500 font-bold hover:underline'>
                  Codante
                </Link>{' '}
                com o objetivo de aprender mais sobre o NextJS, Shadcn UI,
                Prisma e SQLite.
              </p>
              <br />
              <p>
                Com essa aplicação conseguimos ajudar a dar mais visibiliade
                para os atletas olímpicos e paralímpicos brasileiros.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
