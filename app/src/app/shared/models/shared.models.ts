export interface Character {
    id: number;
    name: string;
    origin: string;
    role: string;
    image: string;
    family: {
        name: string;
        member: string;
    }
}

export interface Movie {
    id: number;
    name: string;
    year: number;
    poster: string;
    crawl: string;
    filmMakers: {
        name: string;
        role: string;
    };
}