import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
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
            image: "/images/sample/ecommerce.jpg",
            link: "https://fg.empowerdigitaldata.com/",
            description: "A fully responsive e-commerce website with WooCommerce integration.",
        },
        {
            title: "Food Ordering and delivery System",
            image: "/images/sample/corporate.jpg",
            link: "https://patisserie-rolland.empowerdigitaldata.com/",
            description: "A clean and professional e-commerce website with WooCommerce integration for a corporate business.",
        },
        {
            title: "Portfolio Showcase",
            image: "/images/sample/portfolio.jpg",
            link: "https://kugankuganesh.github.io/2025.github.io/",
            description: "A personal portfolio website to showcase creative works using React js.",
        },
        {
            title: "Blog Platform",
            image: "/images/sample/blog.jpg",
            link: "kugankuganesh.github.io/kworld/",
            description: "A modern blog platform with custom CMS features using Next js and Api, Blogs posts comming from blogger website.",
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
                            Explore Some of My Work
                        </h2>
                        <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                            Check out a few of my sample websites that demonstrate responsive design, functionality, and clean user experience.
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
        </>
    );
};

export default PortfolioListPage;
