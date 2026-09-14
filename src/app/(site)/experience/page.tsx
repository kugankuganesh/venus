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
              Full-Stack Developer with 5+ years of experience building scalable,
              high-performance web and mobile applications, secure RESTful APIs,
              and integrated enterprise software solutions.
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
                Sep 2024 – 14 Aug 2026 · Colombo, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              NsoftIT Solutions
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
                Managed VPS and cPanel server-side operations, including
                automated deployment and routine maintenance of high-availability
                Laravel applications.
              </li>
              <li>
                Led full-stack development using Laravel, CodeIgniter, and React
                across multiple enterprise client projects.
              </li>
              <li>
                Developed and maintained React Native mobile applications,
                including APK builds and platform deployment.
              </li>
              <li>
                Engineered custom WordPress plugins, including Uber integration,
                subscription services, WooCommerce extensions, and interactive
                calendars.
              </li>
               <li>
                Standardized version control procedures and CI workflow pipelines
                using Git.
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
                Developed and maintained third-party integrations for Xero and
                Shopify APIs using Laravel and React.
              </li>
              <li>
                Optimized application performance and built automated unit tests,
                reducing production errors by 20%.
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
                Engineered secure, high-throughput RESTful APIs and backend
                micro-architectures using Laravel, CodeIgniter, and Yii.
              </li>
              <li>
                Designed and maintained optimized MySQL schemas and complex queries.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver scalable
                enterprise software solutions.
              </li>
            </ul>
          </div>

          {/* Job 4 */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Software Engineer
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
                Architected and developed a full-stack automated student
                management platform using Laravel and modern web technologies.
              </li>
              <li>
                Delivered features across development, testing, deployment, and
                maintenance while supporting business requirements.
              </li>
            </ul>
          </div>

          {/* Job 5 */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Software Engineer
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
                Developed custom Laravel web applications and tailored WordPress
                ecosystem solutions.
              </li>
              <li>
                Supported digital transformation initiatives through practical,
                business-focused software delivery.
              </li>
            </ul>
          </div>

          {/* Odoo */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-xl shadow-service'>
            <div className='flex justify-between flex-wrap gap-3 mb-4'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                Odoo Developer
              </h3>
              <span className='text-sm text-gray-500 dark:text-white/50'>
                Jan 2018 – Jul 2018 · Colombo, Sri Lanka
              </span>
            </div>
            <p className='text-primary font-medium mb-4'>
              Nisus Solutions
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-600 dark:text-white/70'>
              <li>
                Customized and built tailored Odoo ERP modules to match exact
                functional requirements and client specifications.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
