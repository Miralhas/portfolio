export type Project = {
    id: number;
    title: string;
    description: string;
    technologySlugs: string[];
    imageSrc: string;
    githubHref: string;
    webisteLink?: string;
}