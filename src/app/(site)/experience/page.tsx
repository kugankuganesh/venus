import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'


const ExperienceSection = () => {
   const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/experience', text: 'Experience' },
  ]
  return (
    <section className='bg-section dark:bg-darklight py-20'>
       <HeroSub
        title='Experience'
        description='Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.'
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className='container mx-auto max-w-6xl px-4'>

        {/* Header */}
        <div className='text-center mb-16'>
          <span className='text-sm font-medium text-primary'>
            Experience
          </span>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mt-3'>
            Work & Professional Journey
          </h2>
          <p className='text-gray-600 dark:text-white/60 max-w-3xl mx-auto mt-4'>
            Experienced PHP Developer with 5+ years of expertise in Laravel and
            CodeIgniter, currently transitioning into Full Stack 
            development by building scalable, modern web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className='space-y-10'>

          {/* Job 1 */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Software Engineer
              </h3>
              <span className='text-sm text-gray-500 dark:text-white/50'>
                Sep 2024 – Present · Colombo, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              NSOFT Solutions
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
               Managing server-side operations on cPanel and VPS, including 
              deployment.
              </li>
              <li>
                Designed scalable database architectures and optimized system performance.
              </li>
              <li>
                Customized business workflows to meet specific customer requirements.
              </li>
              <li>
                Configuration, and maintenance of Laravel applications.
              </li>
               <li>
                Leading backend and frontend development using CodeIgniter, Laravel 
                and React for multiple  projects.
              </li>
               <li>
                Code merging and Deployment using GIT.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Software Engineer
              </h3>
              <span className='text-sm text-gray-500 dark:text-white/50'>
                Aug 2023 – Aug 2024 · Colombo, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              AKH IT Solutions
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
                Developed business-focused web solutions using Laravel and React.
              </li>
              <li>
                Built a garment industry system integrating Shopify and Xero APIs.
              </li>
              
            </ul>
          </div>

          {/* Job 3 */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Software Engineer
              </h3>
              <span className='text-sm text-gray-500 dark:text-white/50'>
                Dec 2022 – Aug 2023 · Colombo, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              IM Solutions (Pvt) Ltd
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
                Worked on multiple enterprise projects using Laravel, Yii, and CodeIgniter.
              </li>
              <li>
                Built scalable backend services and optimized existing systems.
              </li>
            </ul>
          </div>

          {/* Job 4 */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Web Developer (Laravel & WordPress)
              </h3>
              <span className='text-sm text-gray-500 dark:text-white/50'>
                Mar 2022 – Nov 2022 · Colombo, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              Stalione Lanka (Pvt) Ltd
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
                Developed Laravel frontend features and WordPress-based solutions.
              </li>
              <li>
                Participated in full product lifecycle: development, testing, deployment, and maintenance.
              </li>
            </ul>
          </div>

          {/* Job 5 */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Web Developer (PHP & WordPress)
              </h3>
              <span className='text-sm text-gray-500 dark:text-white/50'>
                Jan 2019 – Apr 2022 · Batticaloa, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              DreamSpace Academy
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
                Developed WordPress websites and PHP-based applications.
              </li>
              <li>
                Mentored junior developers and coordinated training programs.
              </li>
            </ul>
          </div>

          {/* Odoo */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Odoo Consultant
              </h3>
              <span className='text-sm text-gray-500 dark:text-white/50'>
                Jan 2019 – Apr 2022 · Colombo, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              Nisus Solutions
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
                Developed custom ERP modules based on client requirements.
              </li>
              <li>
                Supported CMS team with WordPress development tasks.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
