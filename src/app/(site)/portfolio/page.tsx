import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getImgPath } from "@/utils/image";
import VideoWork from "@/components/SharedComponent/VideoWork";
export const metadata: Metadata = {
    title: "Portfolio ",
};

const PortfolioListPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];

    const sampleWebsites = [
        {
            title: "Food Ordering System",
            image: getImgPath("/images/portfolio/fg.png"),
            link: "https://fg.empowerdigitaldata.com/",
            description: "A fully responsive e-commerce website with WooCommerce integration.",
            alt:"food order",
        },
        {
            title: "Food Ordering and delivery System",
            image: getImgPath("/images/portfolio/pat.png"),
            link: "https://patisserie-rolland.empowerdigitaldata.com/",
            description: "A clean and professional e-commerce website with WooCommerce integration for a corporate business.",
             alt:"food order",
        },
        {
            title: "Portfolio Showcase in Next.js",
            image: getImgPath("/images/portfolio/portfolio.png"),
            link: "https://kugankuganesh.github.io/2025.github.io/",
            description: "A personal portfolio website built with Next.js to showcase professional work.",
             alt:"food order",
        },
        {
            title: "Blog Platform in Next.js",
            image: getImgPath("/images/portfolio/blogk.png"),
            link: "https://kugankuganesh.github.io/kworld/",
            description: "A modern Next.js blog platform with API-driven content sourced from Blogger.",
             alt:"food order",
        },

         {
            title: "Food Ordering System in React.js",
            image: getImgPath("/images/portfolio/food.png"),
            link: "https://kugankuganesh.github.io/FoodDelivery/",
            description: "A responsive food ordering interface built with React.js.",
             alt:"food order",
        },

          {
            title: "Grocery Ordering System with React.js and Strapi",
            image: getImgPath("/images/portfolio/grofront.png"),
            link: "https://github.com/kugankuganesh/grocery_fronten",
            description: "A React.js storefront paired with Strapi for content and administration.",
             alt:"food order",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSub
                title="Portfolio"
                description="Dive into a curated collection of my finest work, showcasing expertise across various industries."
                breadcrumbLinks={breadcrumbLinks}
            />

            {/* Portfolio Cards */}
            <Portfolio />

            {/* Sample Websites Section */}
            <section className="bg-section dark:bg-darklight py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <div className="flex gap-2 items-center justify-center mb-4">
                            <span className="w-3 h-3 rounded-full bg-success"></span>
                            <span className="text-sm font-medium text-midnight_text dark:text-white/50">
                                Sample Websites
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-midnight_text dark:text-white mb-4">
                            Web Applications & Client Projects
                        </h2>
                        <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                            Explore selected Next.js, React.js, and WordPress projects demonstrating responsive design, API integration, e-commerce workflows, and practical user experiences.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sampleWebsites.map((site, index) => (
                            <Link key={index} href={site.link} passHref>
                                <div className="group bg-white dark:bg-darkmode rounded-lg overflow-hidden shadow-service hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                    
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-midnight_text dark:text-white group-hover:text-primary transition-colors">
                                            {site.title}
                                        </h3>
                                         <div className='relative w-full h-64 overflow-hidden rounded-xl bg-gray-100 dark:bg-darklight'>
                                                            <Image
                                                              src={site.image}
                                                              alt={site.alt}
                                                              fill
                                                              sizes='(max-width: 768px) 100vw, 33vw'
                                                              className='object-cover transition-transform duration-500 ease-out group-hover:scale-110'
                                                              draggable={false}
                                                            />
                                                          </div>
                                        <p className="text-gray-600 dark:text-white/50 mt-2 text-sm">
                                            {site.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <VideoWork />
        </>
    );
};

export default PortfolioListPage;
