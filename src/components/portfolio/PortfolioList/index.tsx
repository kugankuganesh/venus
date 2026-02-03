import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioList = () => {
  return (
    <section id='portfolio' className='md:pb-24 pb-16 pt-8 dark:bg-darkmode'>
      <div className='max-w-[1600px] mx-auto px-6'>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
          {portfolioinfo.map((item, index) => (
            <Link key={index} href={`/portfolio/#!`} passHref>
              <div className='w-full group'>
                <div className='relative w-full h-64 overflow-hidden rounded-lg'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                     width={50}
                      height={200}
                  style={{ width: '100%', height: '100%' }}
                    
                   
                  />
                </div>
                <h4 className='pt-6 pb-1 text-2xl font-bold text-midnight_text dark:text-white group-hover:text-primary transition-colors'>
                  {item.title}
                </h4>
                <p className='text-lg text-secondary dark:text-white/50 group-hover:text-primary transition-colors'>
                  {item.info}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioList
