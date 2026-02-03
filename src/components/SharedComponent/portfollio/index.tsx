import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='dark:bg-darkmode bg-section py-20'>
      <div className='text-center lg:px-0 px-6'>
        {/* Section header */}
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50 uppercase tracking-wider'>
            Portfolio
          </span>
        </div>

        {/* Section title */}
        <h2
          className='sm:text-4xl text-3xl leading-snug font-extrabold text-midnight_text text-center pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Discover Projects That Inspire Innovation
        </h2>

        {/* Section description */}
        <p
          className='text-base font-medium text-gray-600 dark:text-white/60 max-w-2xl mx-auto pb-16'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'>
          Explore a curated showcase of my recent projects, highlighting creative solutions, cutting-edge design, and impactful results across multiple industries.
        </p>
      </div>

      {/* Portfolio cards */}
      <div className='container mx-auto max-w-6xl px-4'>
        <PortfolioCard />
      </div>
    </section>
  )
}

export default Portfolio
