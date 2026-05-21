"use client";

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import GraveCard from './common/GraveCard';
import Image from 'next/image';

function RecentDepartures() {
  return (
    <section className='flex-1 -mt-5 min-h-screen px-4 sm:px-6'>
      <Image src={"/image/image.png"} height={100} width={100} alt='bg image' className=''/>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl md:text-3xl font-creepster tracking-wider'>Recent Departures</h1>
                {/* api response of latest here */}
                <p className='text-sm md:text-md text-white/60'>updated 4 mins ago</p>
            </div>
            <Link href="/" className='text-sm text-white/80 hover:text-yellow-400 inline-flex items-center gap-1 uppercase'>
                View all Graves
                <ArrowRight className='h-4 w-4' />
            </Link>
        </div>
        
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3].map((item) => (
                <GraveCard key={item}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default RecentDepartures
