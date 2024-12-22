export interface ResumeData {
    info: PersonalData;
    summary: string;
    experience: Company[];
    education: Education[];
    skills: string[];
    langs: Language[];
    hobby: string[];
};

export interface PersonalData {
    name: string;
    position: string;
    phone: string;
    email: string;
}

export interface Company {
    name: string;
    title: string;
    from: string;
    to: string;
    projects: CompanyProject[];
    scope: string[];
    skills: string[]
}

export interface CompanyProject {
    name: string;
    scope: string[];
    skills: string[]
}

export interface Education {
    school: string;
    title: string;
    from: string;
    to: string;
}

export interface Language {
    name: string;
    level: string;
}