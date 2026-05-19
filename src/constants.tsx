import kpitLogo from "../public/assets/KPIT_Technologies_Logo.png";
import { Github, Linkedin, Mail } from "lucide-react";
import npmLogo from "../public/assets/npmLogo.png";
import FMCGLogo from "../public/assets/FMCG_img.png";
import ENDLogo from "../public/assets/azure_data_pipeline_light_bold.svg";
import Project1Img from "../public/assets/architecture.svg";
import Project3Img from "../public/assets/Project3Img.png";

export const skills = {
  languages: ["Python", "SQL", "JavaScript", "C++"],
  BigDataTechnologies: ["Apache Spark", "PySpark", "Spark SQL"],
  Cloudcomputing: [
    "Azure Data Factory (ADF)",
    "ADLS",
    "Azure Synapse",
    "Databricks",
    "AWS S3",
  ],
  DataEngineeringTools: ["Data Modelling", "ETL/ELT Pipelines"],
  Orchestration: ["Apache Airflow"],
  Other: [
    "Git",
    "Postman",
    "Docker",
    "REST API",
    "React.js",
    "Next.js",
    "Node.js",
  ],
};

export const companies = [
  {
    name: "KPIT Technologies",
    logo: kpitLogo,
    link: "https://www.kpit.com/",
    role: "Associate Data Engineer",
    current: true,
    period: "2024- Present",
  },
  {
    name: "KPIT Technologies",
    logo: kpitLogo,
    link: "https://www.kpit.com/",
    role: "Software Trainee",
    current: true,
    period: "2023-2024",
  },
];

export const socialLinks = [
  { name: "gitHub", icon: Github, url: "https://github.com/ankitbisen12" },
  {
    name: "linkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ankit-bisen-13a55a1a7/",
  },
  { name: "Email", icon: Mail, url: "mailto:ankitbisen751@gmail.com" },
];

export const projects = [
  {
    name: "NPM Package",
    description:
      "A lightweight and efficient Node.js utility to delete or comment all console statements in JavaScript and TypeScript projects.",
    link: "https://github.com/ankitbisen12/console-purge",
    preview: "https://www.npmjs.com/package/console_purge",
    path: npmLogo,
    skills: ["babel-parser", "AST", "Javascript"],
  },
  {
    name: "Pfizer Pharma Project",
    description:
      "Engineered an end-to-end data engineering pipeline for a pharmaceutical use case using Databricks and AWS S3. Implemented incremental ingestion with Auto Loader, followed by bronze, Silver & gold layer transformations for data cleaning, validation, and business rule enforcement.",
    link: "https://github.com/ankitbisen12/Pfizer_Pharma_project",
    preview: "https://github.com/ankitbisen12/Pfizer_Pharma_project",
    path: Project1Img,
    skills: [
      "Python",
      "PySpark",
      "AWS S3",
      "SQL",
      "Databricks",
      "Spark streaming",
      "Delta tables",
      "Auto Loader",
      "Orchestration",
    ],
  },
  {
    name: "End-to-End Data Pipeline for Tesla Vehicle Telemetry",
    description:
      "Designed and implemented an end-to-end data pipeline to process and analyze telemetry data from electric vehicles inspired by systems used by Tesla. The pipeline ingests, transforms, and analyzes large-scale time-series data generated from vehicle sensors to derive actionable insights on performance, efficiency, and operational behavior.",
    link: "https://github.com/ankitbisen12/End-to-End-Data-Pipeline-for-Tesla-Vehicle-Telemetry",
    preview:
      "https://github.com/ankitbisen12/End-to-End-Data-Pipeline-for-Tesla-Vehicle-Telemetry",
    path: Project3Img,
    skills: ["Databricks", "Python", "PySpark", "Delta tables", "SQL"],
  },
  {
    name: "SportsBar Data Pipeline",
    description:
      "The SportsBar Data Pipeline demonstrates an end-to-end modern data engineering solution featuring.This project reflects production-grade implementation of Databricks + Spark + AWS S3 within a Medallion framework",
    link: "https://github.com/ankitbisen12/FMCG_Data_Engg",
    preview: "https://github.com/ankitbisen12/FMCG_Data_Engg",
    path: FMCGLogo,
    skills: ["Databricks", "Python", "PySpark", "AWS S3", "SQL"],
  },
  {
    name: "End-to-End Data Lakehouse Pipeline",
    description:
      "This project demonstrates a **production-grade data engineering pipeline** that ingests data from AWS S3, processes it using Azure Data Factory (ADF) and Azure Databricks, and loads it into Azure Synapse Analytics for analytics and reporting.",
    link: "https://github.com/ankitbisen12/End-to-End-Data-Lakehouse-Pipeline",
    preview:
      "https://github.com/ankitbisen12/End-to-End-Data-Lakehouse-Pipeline",
    path: ENDLogo,
    skills: [
      "ADF",
      "ADLS",
      "Azure Synape",
      "PySpark",
      "SQL",
      "AWS S3",
      "Python",
    ],
  },
];
