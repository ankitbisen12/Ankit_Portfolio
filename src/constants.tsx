import kpitLogo from '../public/assets/KPIT_Technologies_Logo.png';
import { Github, Linkedin, Mail } from 'lucide-react';
import npmLogo from '../public/assets/npmLogo.png';
import FMCGLogo from '../public/assets/FMCG_img.png';
import ENDLogo from '../public/assets/azure_data_pipeline_light_bold.svg';


export const skills= {
    languages: ['Python', 'SQL', 'JavaScript', 'C++'],
    BigDataTechnologies: ['Apache Spark', 'PySpark', 'Spark SQL'],
    Cloudcomputing: ['Azure Data Factory (ADF)', 'ADLS', 'Azure Synapse', 'Databricks', 'AWS S3'],
    DataEngineeringTools: ['Data Modelling', 'ETL/ELT Pipelines'],
    Orchestration: ['Apache Airflow'],
    Other: ['Git', 'Postman', 'Docker', 'REST API', 'React.js', 'Next.js','Node.js'],
}

export const companies = [
    { name: "KPIT Technologies", logo: kpitLogo, link: 'https://www.kpit.com/', role: 'Associate Engineer', current: true, period: '2024- Present' },
    { name: "KPIT Technologies", logo: kpitLogo, link: 'https://www.kpit.com/', role: 'Trainee', current: true, period: '2023-2024' },
];

export const socialLinks = [
    { name: 'gitHub', icon: Github, url: 'https://github.com/ankitbisen12' },
    { name: 'linkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ankit-bisen-13a55a1a7/' },
    { name: 'Email', icon: Mail, url: 'mailto:ankitbisen751@gmail.com' },
];

export const projects = [
    { name: "NPM Package", description: "A lightweight and efficient Node.js utility to delete or comment all console statements in JavaScript and TypeScript projects.", link: "https://github.com/ankitbisen12/console-purge", preview: "https://www.npmjs.com/package/console_purge", path: npmLogo, skills: ['babel-parser', 'AST', 'Javascript'] },
    { name: "SportsBar Data Pipeline", description: "The SportsBar Data Pipeline demonstrates an end-to-end modern data engineering solution featuring.This project reflects production-grade implementation of Databricks + Spark + AWS S3 within a Medallion framework", link: "https://github.com/ankitbisen12/FMCG_Data_Engg", preview: "https://dbc-7e34c2e8-cb45.cloud.databricks.com/dashboardsv3/01f111ae928a1e6c84361d0fd9b4a53e/published?o=7474655592935296", path: FMCGLogo, skills: ['Databricks', 'Python', 'PySpark', 'AWS S3', 'SQL'] },
    { name: "End-to-End Data Lakehouse Pipeline", description: "This project demonstrates a **production-grade data engineering pipeline** that ingests data from AWS S3, processes it using Azure Data Factory (ADF) and Azure Databricks, and loads it into Azure Synapse Analytics for analytics and reporting.", link: "https://github.com/ankitbisen12/End-to-End-Data-Lakehouse-Pipeline", preview: "https://github.com/ankitbisen12/End-to-End-Data-Lakehouse-Pipeline", path: ENDLogo, skills: ['ADF', 'ADLS','Azure Synape', 'PySpark','SQL','AWS S3','Python'] }
];



