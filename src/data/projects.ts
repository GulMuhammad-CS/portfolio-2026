import { Project } from "@/types/project";

export const projectsData: Project[] = [
    {
        id: "sexual-health-journal",
        title: "NLP powered Sexual Health Journalling App",
        description: "A journalling app that utilizes NLP models to identify key topics, layered with a sentiment analysis to provide necessary context, ultimately giving a layered feedback approach to the user. Also featuring various security features (encryption, on-device processing) accessibility features like high contrast colours for visually-impaired users, and a safety net to provide support for users going through hard times by identifying keywords in entries.",
        techStack: ["Java", "JavaFX", "Systems Architecture", "LangChain4J", "SQLite", "Jackson", "css"],
        githubUrl: "https://github.com/GulMuhammad-CS/Sexual-Health-Journal"
    },
    {
        id: "ER/SPEAK-AAC",
        title: "ER/SPEAK AAC - 2nd Place Winner",
        description: "Designed for the MedTech Innovation programme, this prize-winnign alternative and augmentative communication (AAC) software is designed to provide an intuitive and non-triggering interface to allow non-verbal patients with ASD to communicate with healthcare providers.",
        techStack: ["TypeScript", "css"],
        githubUrl: "https://github.com/GulMuhammad-CS/ER-SPEAK"
    },
    {
        id: "Python Chessbot",
        title: "Bitboard Chess Agent",
        description: "Built using the chessmaker API in python, this chessbot translates the current board state into the bitboard format, giving it to the search engine which utilizes several AI search and optimization techniques (alpha-beta pruning, chacheiong, killer moves heuristics, etc). It finds the optimal move as deep as it can, translating it back and executing the move.",
        techStack: ["Python"],
        githubUrl: "https://github.com/GulMuhammad-CS/Chessbot_updated"
    }

]