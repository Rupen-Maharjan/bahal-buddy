'use client';
import Link from 'next/link';

const ready = () => {
  return (
    <section className="py-16 md:py-24">
          <div className="container">
            <div className="rounded-lg bg-primary/10 p-8 md:p-12">
              <div className="mx-auto max-w-[800px] text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Perfect Space?
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Join thousands of happy tenants and landlords on our platform today.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-10 sm:flex-row">
                <Link href={'/signup'} className="mt-10 inline-flex items-center justify-center px-4 lg:px-8 py-2 lg:py-4 font-sans font-semibold tracking-wide  lg:h-[60px] rounded-full shadow-md text-black">
            Login
          </Link>
                  <Link href={'/signup'} className="mt-10 inline-flex items-center justify-center px-4 lg:px-8 py-2 lg:py-4 font-sans font-semibold tracking-wide text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-full lg:h-[60px] shadow-md">
            Sign Up
          </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ready