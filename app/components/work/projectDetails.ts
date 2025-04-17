import {
    SiCplusplus,
    SiFramer,
    SiGithub,
    SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiSocketdotio,
    SiTypescript,
    SiWebgl,
    SiZig,
    SiWebrtc,
} from 'react-icons/si';
import { IconType } from 'react-icons';

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: 'Code Colab',
        description: `
        Code Colab is a real-time coding platform with a live editor, drawing board, and video conferencing, built for seamless interview prep and collaboration.`,
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiSocketdotio],
        techNames: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Socket.io'],
        techLinks: [
            'https://www.typescriptlang.org/',
            'https://reactjs.org/',
            'https://nextjs.org/',
            'https://tailwindcss.com/',
            'https://www.socket.io.com/',
        ],
        github: 'https://github.com/sayam-monga/CodeColab',
        demo: 'https://code-colab-frontend-2f44.vercel.app/',
        image: '/projects/codecolab.png',
        available: true,
    },
    // {
    //     id: 1,
    //     name: "VR MALL",
    //     description:
    //         "Developed an virtual mall by using Three.js and Typescript..",
    //     technologies: [SiWebgl,SiTypescript, SiReact],
    //     techNames: ["WebGL", "Typescript", "React"],
    //     techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
    //     github: "https://github.com/karthikmudunuri/VRMALL",
    //     demo: "https://vrmalldemo.netlify.app/",
    //     image: "/projects/vrmall.png",
    //     available: true,
    // },
];
