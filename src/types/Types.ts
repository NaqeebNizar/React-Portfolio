import { IconType } from "react-icons";

export interface ExperienceType {
    id: number;
    companyName: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string[];
    image?: string;
}

export type TechStackItemType = [IconType, string, string];

export interface ProjectType {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    demoUrl?: string;
    codeUrl: string;
    image?: string;
}

export interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
    [key: string]: unknown;
}

export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}