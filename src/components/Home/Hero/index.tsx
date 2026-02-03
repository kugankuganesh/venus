'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
   <section className="relative pt-24 md:pt-28 bg-white dark:bg-darklight bg-cover">

      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              build everything
            </span>
          </div>
          <h1 className="text-midnight_text font-bold dark:text-white text-3xl md:text-4xl leading-tight">
            Full Stack Developer Building Scalable Web & Business Systems.

          </h1>
          <p className="text-grey dark:text-white/70 text-lg font-normal leading-relaxed">

            I design and develop high-performance web applications, eCommerce platforms, and custom business software using Laravel, React, Next.js, WordPress, and Odoo.

            Helping startups and companies turn ideas into reliable digital products.

          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="portfolio"
              className="py-3 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              View My Work
            </Link>

            <Link
              href="contact"
              className="py-3 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Hire Me
            </Link>
          </div>

          {/* <div className='flex items-center mt-12 gap-4'>
            <div className='flex items-center'>
              <Image
                src={getImgPath('/images/hero/hero-profile-1.png')}
                alt='hero-image'
                width={20}
                height={20}
                quality={100}
                className='w-10 h-10 rounded-full border border-solid border-white -ml-0'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-2.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10 h-10 rounded-full border border-solid border-white -ml-3'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-3.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10 h-10 rounded-full border border-solid border-white -ml-3'
              />
            </div>
            <div>
              <p className='text-sm font-normal text-grey max-w-56'>
                Need help?{' '}
                <Link href='#' className='text-primary hover:text-blue-700'>
                  Contact our experts
                </Link>{' '}
                Tell us about your project
              </p>
            </div>
          </div> */}
        </div>

        <div className="md:col-span-6 col-span-12 relative flex justify-center items-center">
          <Image
            src={getImgPath('/images/hero/hero-image.png')}
            alt="Hero illustration"
            width={500}
            height={400}
            priority
            className="w-full max-w-sm md:max-w-md animate-float"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
