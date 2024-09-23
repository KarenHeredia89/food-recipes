import ImageSlideshow from '@/components/images/image-slideshow';

import Link from 'next/link';
export default function Home() {
  return (
    <>
      <header>
        <div className='w-[40rem] h-96'>
          <ImageSlideshow />
        </div>
        <div>
          <div className='text-2xl p-5'>
            <h1 className='text-transparent bg-orange-gradient bg-clip-text'>NextLevel Food for NextLevel Foodies</h1>
            <p className='mt-4'>Taste & Share food from all over the world.</p>
          </div>
          <div className='text-2xl flex items-center gap-4 px-5'>
            <Link href='/community' className='text-orange-500 text-nowrap mt-4 hover:opacity-90'>Join the community</Link>
            <Link href='/meals' className='btn-primary'>Explore meals</Link>
          </div>
        </div>
      </header>
      <main className='flex-center'>
        <div className='container'>
          <section className='flex flex-col gap-4 text-center w-11/12 text-2xl'>
            <h2>How it works</h2>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>

          <section className='flex flex-col gap-4 text-center w-11/12 text-2xl'>
            <h2>Why NextLevel Food?</h2>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
        </div>
      </main>
    </>
    
  );
}
