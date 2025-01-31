"use client";

import Image from "next/image";
import {Button, Input, Typography} from "@material-tailwind/react";

function Hero() {
    return (
        <header className="bg-white p-8">
            <div
                className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
                <div className="row-start-2 lg:row-auto">
                    <Typography placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                variant="h1"
                                color="blue-gray"
                                className="mb-4 lg:text-5xl !leading-tight text-3xl"
                    >
                        Welcome to my Portofolio!
                    </Typography>
                    <Typography placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                variant="lead"
                                className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
                    >
                        I&apos;m Mohamadreza Rezaei, a passionate web developer based in Iran. Here,
                        you&apos;ll get a glimpse of my journey in the world of web
                        development, where creativity meets functionality.
                    </Typography>
                    <div className="grid">
                        <Typography placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    variant="small"
                                    className="mb-2 text-gray-900 font-medium"
                        >
                            Your email
                        </Typography>
                        <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                            {/* @ts-ignore */}
                            <Input color="gray" label="Enter your email" size="lg"/>
                            <Button color="gray" className="w-full px-4 md:w-[12rem]" placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}>
                                require offer
                            </Button>
                        </div>
                    </div>
                    <Typography variant="small" className="font-normal !text-gray-500" placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                        Read my{" "}
                        <a href="#" className="font-medium underline transition-colors">
                            Terms and Conditions
                        </a>
                    </Typography>
                </div>
                <Image
                    width={1024}
                    height={1024}
                    alt="team work"
                    src="/image/me.jpg"
                    className="h-[36rem] w-full rounded-xl object-cover"
                />
            </div>
        </header>
    );
}

export default Hero;
