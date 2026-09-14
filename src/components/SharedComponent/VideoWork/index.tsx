import React from 'react'
import { getImgPath } from '@/utils/image'

const videoProjects = [
  {
    title: 'Gold Shop Application',
    video: getImgPath(encodeURI('/images/portfolio/vedio/gold-shop-app - Google Chrome 2026-09-13 16-49-42.mp4')),
    description: 'A walkthrough of a gold shop management and ordering application.',
    githubLinks: [
      { label: 'View GitHub Repository', url: 'https://github.com/kugankuganesh/pwaning_stock_management_mobile_app_reactnative' },
    ],
  },
  {
    title: 'KD Nursery Platform',
    video: getImgPath(encodeURI('/images/portfolio/vedio/kd-nursery - Google Chrome 2026-09-14 13-12-03.mp4')),
    description: 'A product and service experience created for a nursery business.',
    githubLinks: [
      { label: 'View GitHub Repository', url: 'https://github.com/kugankuganesh/KD-nursery' },
    ],
  },
  {
    title: 'Gold Pawning Login',
    video: getImgPath(encodeURI('/images/portfolio/vedio/Login _ Gold Pawning - Google Chrome 2026-09-13 12-47-18.mp4')),
    description: 'A secure login flow for a gold pawning business application.',
    githubLinks: [
      { label: 'View GitHub Repository', url: 'https://github.com/kugankuganesh/Pawing_and_stock_management_system_laravel' },
    ],
  },
  {
    title: 'Portfolio Showcase in Next.js',
    video: getImgPath(encodeURI("/images/portfolio/vedio/Kuganesan's Portfolio - Google Chrome 2026-09-14 14-38-27.mp4")),
    description: 'A walkthrough of my personal portfolio website built with Next.js.',
    githubLinks: [
      { label: 'View GitHub Repository', url: 'https://github.com/kugankuganesh/2025.github.io' },
    ],
  },
  {
    title: 'Blog Platform in Next.js',
    video: getImgPath(encodeURI('/images/portfolio/vedio/Welcome to Kworld - Google Chrome 2026-09-14 14-36-10.mp4')),
    description: 'A walkthrough of a modern Next.js blog platform with API-driven content.',
    githubLinks: [
      { label: 'View GitHub Repository', url: 'https://github.com/kugankuganesh/kworld' },
    ],
  },
  {
    title: 'Food Delivery System in React.js',
    video: getImgPath(encodeURI('/images/portfolio/vedio/Food Del - Google Chrome 2026-09-14 14-48-31.mp4')),
    description: 'A walkthrough of a responsive food delivery application built with React.js.',
    githubLinks: [
      { label: 'View GitHub Repository', url: 'https://github.com/kugankuganesh/grocery_frontend' },
    ],
  },
]

const VideoWork = () => {
  return (
    <section className='bg-white dark:bg-darkmode py-20'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center mb-16'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='text-sm font-medium text-midnight_text dark:text-white/50'>
              More Work
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-4'>
            Explore More of My Work
          </h2>
          <p className='text-gray-600 dark:text-white/60 max-w-2xl mx-auto'>
            Watch project walkthroughs and explore more of my software development work on GitHub.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {videoProjects.map((project) => (
            <article
              key={project.title}
              className='bg-section dark:bg-darklight rounded-lg overflow-hidden shadow-service'>
              <video
                className='w-full aspect-video object-cover bg-black'
                controls
                muted
                playsInline
                preload='metadata'
                aria-label={`${project.title} video preview`}>
                <source src={project.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-white/60 mt-2 text-sm'>
                  {project.description}
                </p>
                {project.githubLinks && (
                  <div className='flex flex-wrap gap-4 mt-5'>
                    {project.githubLinks.map((githubLink) => (
                      <a
                        key={githubLink.url}
                        href={githubLink.url}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center text-primary font-semibold hover:text-blue-700'>
                        {githubLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoWork
