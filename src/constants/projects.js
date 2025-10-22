export const projects = [
  {
    title: "RiskGauge - AI-Powered Loan Risk Assessment",
    description:
      "Developed a Quarkus-based system that analyzes bank statements and transactions to provide accurate, low-cost credit decisions. Integrates multiple data sources, applies AI for transaction classification, and helps banks underwrite loans efficiently.",
    tech: [
      "Quarkus",
      "LLM Integration",
      "REST APIs",
      "xls generation",
      "pdf parsing",
    ],
    tags: ["Credit Assessment", "FinTech", "Risk Monitoring", "System Design"],
    company: "FinFactor",
    links: {
      demo: "https://finfactor.ai/product/lendscape",
    },
  },
  {
    title: "Sentinel - Smart Post-Loan Monitoring System",
    description:
      "Built a Quarkus-powered platform for proactive loan monitoring. Uses a rule engine and LLM-driven transaction classification to detect financial strain, set dynamic risk triggers, and monitor collections to improve recovery rates.",
    tech: [
      "Quarkus",
      "Drools",
      "Rule Engine",
      "Kafka",
      "LLM Integration",
      "Batch Processing",
      "Microservices",
    ],
    tags: [
      "Risk Monitoring",
      "FinTech",
      "Early Warning System",
      "System Design",
    ],
    company: "FinFactor",
    links: {
      demo: "https://finfactor.ai/product/lendscape",
    },
  },
  {
    title: "Multi AA UI Platform",
    description:
      "Built from initial commit a unified interface for managing multiple Account Aggregator (AA) journeys. Worked on both frontend and backend integration enabling seamless data aggregation across financial sources.",
    tech: ["React.js", "REST APIs"],
    tags: ["Full-Stack", "FinTech", "Integration"],
    company: "FinFactor",
  },
  {
    title: "Provisioning Microservice",
    description:
      "Transformed a monolithic product by designing and implementing a Provisioning microservice. Enhanced system scalability using message queues, APIs, and SCIM, resulting in 20% reduction in deployment time.",
    tech: [
      "Spring Boot",
      "SCIM",
      "Message Queues",
      "RabbitMQ",
      "Microservices",
      "API Development",
    ],
    tags: ["Microservices", "Scalability", "Architecture"],
    company: "miniOrange",
  },
  {
    title: "Jenkins 2FA & SAML SSO Plugin",
    description:
      "Built industry's first 2FA and maintained SAML SSO solutions for Jenkins, capturing a niche market and driving 4X revenue increase. Includes support for multiple identity providers and enterprise security features.",
    tech: ["Java", "SAML 2.0", "OAuth2"],
    tags: ["Security", "SSO", "Authentication"],
    company: "miniOrange",
    links: {
      demo: "https://plugins.jenkins.io/ui/search/?query=miniorange",
    },
  },
  {
    title: "Atlassian Cloud OAuth SSO Plugin",
    description:
      "Developed industry's first SSO protocol broker for Atlassian Cloud, converting SAML assertions into OAuth tokens to enable OAuth-based SSO where only SAML was supported. Also maintained 10+ Atlassian DC and Server plugins, ensuring enterprise-grade security and seamless integration.",
    tech: ["Java", "SAML 2.0", "OAuth2", "Atlassian SDK"],
    tags: ["SSO", "OAuth", "Cloud Integration", "Enterprise Security"],
    company: "miniOrange",
    links: {
      demo: "https://marketplace.atlassian.com/vendors/1213308/miniorange",
    },
  },
];
