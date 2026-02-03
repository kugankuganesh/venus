'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      { breakpoint: 1320, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section id='portfolio' className='dark:bg-darkmode py-16'>
      <div className='max-w-[1600px] mx-auto px-6'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <div key={index} className='px-3'>
              <Link href={`/portfolio/${item.slug}`} className='group block'>
                {/* Card */}
                <div className='flex flex-col h-full'>
                  {/* Image */}
                  <div className='relative w-full h-64 overflow-hidden rounded-xl bg-gray-100 dark:bg-darklight'>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes='(max-width: 768px) 100vw, 33vw'
                      className='object-cover transition-transform duration-500 ease-out group-hover:scale-110'
                      draggable={false}
                    />
                  </div>

                  {/* Content */}
                  <div className='pt-6 text-center'>
                    <h4 className='text-xl font-bold text-midnight_text dark:text-white group-hover:text-primary transition-colors'>
                      {item.title}
                    </h4>
                    <p className='mt-2 text-base text-secondary dark:text-white/50 group-hover:text-primary transition-colors'>
                      {item.info}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default PortfolioCard
