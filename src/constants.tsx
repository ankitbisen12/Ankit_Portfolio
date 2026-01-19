import kpitLogo from '../public/assets/KPIT_Technologies_Logo.png';
import { Github, Linkedin, Mail } from 'lucide-react';
import npmLogo from '../public/assets/npmLogo.png';

export const skills = {
    frontend: ['Javascript', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'MongoDB'],
    languages: ['C++', 'Python', 'Javascript', 'SQL'],
    tools: ['Git', 'Postman'],
}

export const companies = [
    { name: "KPIT Technologies", logo: kpitLogo, link: 'https://www.kpit.com/', role: 'Associate Software Engineer', current: true, period: '2024- Present' },
    { name: "KPIT Technologies", logo: kpitLogo, link: 'https://www.kpit.com/', role: 'Engineering Trainee', current: true, period: '2023-2024' },
];

export const socialLinks = [
    { name: 'gitHub', icon: Github, url: 'https://github.com/ankitbisen12' },
    { name: 'linkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ankit-bisen-13a55a1a7/' },
    { name: 'Email', icon: Mail, url: 'mailto:ankitbisen751@gmail.com' },
];

export const projects = [
    { name: "NPM Package", description: "A lightweight and efficient Node.js utility to delete or comment all console statements in JavaScript and TypeScript projects.", link: "https://github.com/ankitbisen12/console-purge", preview: "https://www.npmjs.com/package/console_purge", path: npmLogo, skills: ['babel-parser', 'AST', 'Javascript'] },
    { name: "Ecommerce website", description: "A dynamic e-commerce web application using React.js on the frontend and Node.js on the backend,enabling smooth and interactive user experiences.", link: "https://github.com/ankitbisen12/Ecommerce-Backend", preview: "https://github.com/ankitbisen12/Ecommerce-Backend", path: npmLogo, skills: ['Javascript', 'React.js', 'Node.js', 'MongoDB', 'RESTAPI', 'JWT'] },
    { name: "ML models", description: "ML models (Linear Regression, XGBoost, Decision Tree) to predict health insurance premiums andCredit Risk Score", link: "https://github.com/ankitbisen12/Machine_Learning_Models", preview: "https://github.com/ankitbisen12/Machine_Learning_Models", path: npmLogo, skills: ['Python', 'ML', 'scikit-learn'] }
];



