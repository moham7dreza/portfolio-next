"use client";

import {Typography} from "@material-tailwind/react";
import {EyeIcon, RectangleGroupIcon,} from "@heroicons/react/24/solid";
import {SkillCard} from "@/components";

const SKILLS = [
    {
        icon: RectangleGroupIcon,
        title: "Frontend Web Development:",
        children:
            "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    },
    {
        icon: EyeIcon,
        title: "Backend Web Development:",
        children:
            "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    },
];

export function Skills() {
    return (
        <section className="px-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined} color="blue-gray" className="mb-2 font-bold uppercase">
                    my skills
                </Typography>
                <Typography placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined} variant="h1" color="blue-gray" className="mb-4">
                    What I do
                </Typography>
                <Typography placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            variant="lead"
                            className="mx-auto w-full !text-gray-500 lg:w-10/12"
                >
                    I&apos;m not just a developer; I&apos;m a digital dreamweaver.
                    Crafting immersive online experiences is not just a job but my
                    calling. Discover below how I can help you.
                </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {SKILLS.map((props, idx) => (
                    <SkillCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
