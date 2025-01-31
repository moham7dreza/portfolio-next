import Image from "next/image";
import {Button, Card, CardBody, CardHeader, Typography,} from "@material-tailwind/react";
import React from "react";

interface ProjectCardProps {
    img: string;
    title: string;
    desc: string;
}

export function ProjectCard({img, title, desc, href}: ProjectCardProps) {
    return (
        <Card color="transparent" shadow={false}>
            <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
                <Image
                    src={img}
                    alt={title}
                    width={768}
                    height={768}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="p-0">
                <a
                    href="#"
                    className="text-blue-gray-900 transition-colors hover:text-gray-800"
                >
                    <Typography variant="h5" className="mb-2">
                        {title}
                    </Typography>
                </a>
                <Typography className="mb-6 font-normal !text-gray-500">
                    {desc}
                </Typography>

                <Typography
                    as="a"
                    href={href || "#"}
                    target={href ? "_blank" : "_self"}
                    variant="paragraph"
                    color="gray"
                    className="flex items-center gap-2 font-medium text-gray-900"
                >
                    <Button color="gray" size="sm">
                        see details
                    </Button>
                </Typography>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
