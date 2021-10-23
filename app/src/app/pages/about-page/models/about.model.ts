export interface AboutInterface {
    content: string;
    title: string;
    copyright: string;
    socialMedia: SocialMediaInterface[]
}

export interface SocialMediaInterface {
    link: string;
    icon: string;
    name: string;
}