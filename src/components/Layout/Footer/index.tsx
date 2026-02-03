import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer = () => {
  return (
    <footer className="bg-darkmode text-white pt-20">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={getImgPath('/images/logo/logo-white.svg')}
                alt="Venus logo"
                width={160}
                height={50}
                quality={100}
              />
            </Link>

            <p className="text-white/60 max-w-md leading-relaxed mb-6">
              Venus is a digital-focused development brand crafting modern,
              scalable, and high-performance web solutions for startups and
              businesses.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-lg hover:bg-blue-700 transition"
            >
              Start a Project →
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="https://kugankuganesh.github.io/2025.github.io/" className="hover:text-primary">Portfolio</Link></li>
              <li><Link href="https://kugankuganesh.github.io/kworld/" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="mailto:kugankuganesh@gmail.com" className="hover:text-primary">
                  kugankuganesh@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+94785092933" className="hover:text-primary">
                  + (94) 78 5092 933
                </Link>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <Link href="https://www.linkedin.com/in/kuganesan-kangatharan/" className="hover:text-primary">LinkedIn</Link>
              {/* <Link href="https://kugankuganesh.github.io/2025.github.io/" className="hover:text-primary">PePortfolio</Link> */}
              <Link href="https://kugankuganesh.github.io/kworld/" className="hover:text-primary">Blog</Link>
              <Link href="https://github.com/kugankuganesh" className="hover:text-primary">GitHub</Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm gap-4">
          <p>© {new Date().getFullYear()} Venus. All rights reserved.</p>
          <p>
            Built with ❤️ using Next.js
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
