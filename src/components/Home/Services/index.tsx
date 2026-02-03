import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Services = () => {
  return (
    <section className='bg-section dark:bg-darklight py-20' id='services'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Section header */}
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50 uppercase tracking-wider'>
            Our Services
          </span>
        </div>
        <h2
          className='sm:text-4xl text-3xl leading-snug font-extrabold text-midnight_text md:text-center text-start pt-7 pb-16 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Innovative Solutions to Elevate Your Business
        </h2>

        {/* Services grid */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`}
              data-aos-duration='1000'
              className='col-span-1 bg-white dark:bg-darkmode rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col justify-between items-center text-center py-12 px-8 gap-6'>
              
              {/* Service icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={60}
                className='mb-4'
              />

              {/* Service title */}
              <h3 className='text-2xl font-bold text-midnight_text dark:text-white'>
                {item.title}
              </h3>

              {/* Service description */}
              <p className='text-base text-gray-600 dark:text-white/60'>
                {item.description}
              </p>

              {/* CTA */}
              <Link
                href='#'
                className='mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700'>
                Get Started
                <Icon icon='ei:chevron-right' width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
