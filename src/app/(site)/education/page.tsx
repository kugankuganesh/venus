import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import HeroSub from '@/components/SharedComponent/HeroSub'


const EducationSection = () => {
    const breadcrumbLinks = [
        { href: '/', text: 'Home' },
        { href: '/education', text: 'Education' },
    ]
  return (
     <section className='bg-section dark:bg-darklight py-20'>
       <HeroSub
        title='Education'
        description='Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.'
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='text-sm font-medium text-midnight_text dark:text-white/50'>
              Education & Certifications
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-4'>
            Academic Background & Professional Learning
          </h2>
          <p className='text-gray-600 dark:text-white/60 max-w-2xl mx-auto'>
            A strong foundation in software engineering combined with continuous
            learning through globally recognized certifications.
          </p>
        </div>

        {/* Degrees */}
        <div className='mb-20'>
          <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-8'>
            🎓 Degrees Received
          </h3>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Degree Card */}
            <div className='bg-white dark:bg-darkmode p-8 rounded-lg shadow-service'>
              <h4 className='text-xl font-bold text-midnight_text dark:text-white mb-2'>
                BSc in Software Engineering
              </h4>
              <p className='text-primary font-medium mb-1'>
                 University of the West of England
              </p>
              <p className='text-sm text-gray-500 dark:text-white/50 mb-4'>
                2015 – 2018
              </p>
              <p className='text-gray-600 dark:text-white/60 mb-5'>
                Studied core computer science and software engineering subjects
                including Data Structures, Algorithms, DBMS, Operating Systems,
                Computer Architecture, and Software Design principles.
              </p>
              <Link
                href='https://www.uwe.ac.uk/'
                className='inline-flex items-center text-primary font-medium hover:gap-2 transition-all'>
                Visit Website
                <Icon icon='ei:chevron-right' width='22' />
              </Link>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-8'>
            📜 Professional Certifications
          </h3>

          <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                title: 'Laravel Framework for Beginners',
                provider: 'Alison',
                tag: 'Laravel',
              },
              {
                title: 'Laravel Advanced Topics',
                provider: 'Alison',
                tag: 'Laravel',
              },
              {
                title: 'RESTful Services Fundamentals',
                provider: 'Alison',
                tag: 'RESTful Services',
              },
              {
                title: 'Introduction to Project Management',
                provider: 'Alison',
                tag: 'Project Management',
              },
              {
                title: 'Diploma in Project Management (Revised 2017)',
                provider: 'Alison',
                tag: 'Project Management',
              },
              {
                title: 'Scrum Master Training',
                provider: 'Alison',
                tag: 'Scrum Master',
              },
              {
                title: 'PRINCE2® Project Management – Practitioner',
                provider: 'Alison',
                tag: 'PRINCE2®',
              },
              {
                title: 'Agile Essentials: A Practical Guide',
                provider: 'Alison',
                tag: 'Agile',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className='bg-white dark:bg-darkmode p-6 rounded-lg shadow-service flex justify-between items-start gap-4'>
                <div>
                  <h4 className='text-lg font-bold text-midnight_text dark:text-white'>
                    {cert.title}
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-white/60'>
                    {cert.provider} · Certificate
                  </p>
                </div>
                <span className='text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full'>
                  {cert.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
<div className='mt-20'>
  <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-8'>
    🛠 Skills & Technologies
  </h3>

  <div className='grid md:grid-cols-4 gap-8'>
    {/* Backend */}
    <div className='bg-white dark:bg-darkmode p-6 rounded-lg shadow-service'>
      <h4 className='text-lg font-bold text-midnight_text dark:text-white mb-4'>
        Backend
      </h4>
      <div className='flex flex-wrap gap-3'>
        {[
          'Laravel', 'Magannto 2','CodeIgniter',
          'PHP',
          'REST APIs',
          'Node.js',
          'Authentication',
          'Payment Gateways',
        ].map((skill) => (
          <span
            key={skill}
            className='px-3 py-1 text-sm rounded-full bg-primary/10 text-primary'>
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Frontend */}
    <div className='bg-white dark:bg-darkmode p-6 rounded-lg shadow-service'>
      <h4 className='text-lg font-bold text-midnight_text dark:text-white mb-4'>
        Frontend
      </h4>
      <div className='flex flex-wrap gap-3'>
        {[
          'React',
          'Next.js',
          'JavaScript',
          'TypeScript',
          'Tailwind CSS',
          'Responsive UI',
        ].map((skill) => (
          <span
            key={skill}
            className='px-3 py-1 text-sm rounded-full bg-primary/10 text-primary'>
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* CMS & eCommerce */}
    <div className='bg-white dark:bg-darkmode p-6 rounded-lg shadow-service'>
      <h4 className='text-lg font-bold text-midnight_text dark:text-white mb-4'>
        CMS & eCommerce
      </h4>
      <div className='flex flex-wrap gap-3'>
        {[
          'WordPress',
          'WooCommerce',
          'Custom Themes',
          'Custom Plugins',
          'ACF',
          'Performance Optimization',
        ].map((skill) => (
          <span
            key={skill}
            className='px-3 py-1 text-sm rounded-full bg-primary/10 text-primary'>
            {skill}
          </span>
        ))}
      </div>
    </div>

            {/* Tools & Practices */}
            <div className='bg-white dark:bg-darkmode p-6 rounded-lg shadow-service'>
                <h4 className='text-lg font-bold text-midnight_text dark:text-white mb-4'>
                Tools & Practices
                </h4>
                    <div className='flex flex-wrap gap-3'>
                        {[
                        'Git & GitHub',
                        'Agile / Scrum',
                        'Project Management',
                        'CI/CD',
                        'System Design',
                        'API Integration',
                        ].map((skill) => (
                            <span
                                key={skill}
                                className='px-3 py-1 text-sm rounded-full bg-primary/10 text-primary'>
                                {skill}
                            </span>
                        ))}
                    </div>
            </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default EducationSection
