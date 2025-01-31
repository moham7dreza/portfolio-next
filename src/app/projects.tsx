"use client";

import {ProjectCard} from "@/components";
import {Typography} from "@material-tailwind/react";

const PROJECTS = [
    {
        img: "/image/shab.JPG",
        title: "Shab",
        desc: "i work as backend developer at shab company",
        href: "https://www.shab.ir"
    },
    {
        img: "/image/blog2.svg",
        title: "Toprate",
        desc: "find the best of everything (in developing)",
    },
    {
        img: "/image/blog2.svg",
        title: "Shop Builder",
        desc: "multi-vendor e-commerce (in developing)",
    },
    {
        img: "/image/blog3.svg",
        title: "Iran Stock Price Prediction",
        desc: "multi-vendor e-commerce (in developing)",
        href: "https://github.com/moham7dreza/time_series_prediction_react"
    },
];

export function Projects() {
    return (
        <section className="py-28 px-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4">
                    My Projects
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
                >
                    Whether you have a mobile app idea that needs to come to life or a
                    website that requires a facelift, I&apos;m here to turn your digital
                    dreams into reality.
                </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
                {PROJECTS.map((props, idx) => (
                    <ProjectCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
