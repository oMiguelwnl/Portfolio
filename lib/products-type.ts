import { StaticImageData } from "next/image";


type ProjectLink = {
    name: string;
    url: string;
};

type ProjectData = {
    title: string;
    number: string;
    description: string;
    tags: readonly string[];
    imageUrl: StaticImageData;
    links: readonly ProjectLink[];
    key: number;
};

export type ProjectCardProps = ProjectData;

