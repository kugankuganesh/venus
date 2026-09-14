import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
import Contactform from '@/components/Home/Contact';
import VideoWork from '@/components/SharedComponent/VideoWork';
export const metadata: Metadata = {
  title: "Venus",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Progresswork isColorMode={false} />
      <Services />
      <Portfolio />
      <VideoWork />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contactform />
    </main>
  )
}
