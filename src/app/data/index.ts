export const companies: string[] = [
    "amazon.png",
    "numerade.svg",
    "bellabona.svg",
    "betsol.svg",
    "cu.png"
];

interface Expertise {
    title: string;
    skills: string[];
    icon: string;
}
export const myskills: Expertise[] = [
    {
        title: "UI/UI designer",
        skills: ["Figma", "Adobe XD", "Sketch"],
        icon: 'ui.png'
    },
    {
        title: "Web dev",
        skills: ["HTML5", "CSS3", "React", "Angular", "Vue",
            "Django", "Spring", "React Native", "Android", "Git"],
        icon: "web.png"
    },
    {
        title: "Cloud dev",
        skills: ["GCP Compute",
            "AWS ECS", "EKS", "RDS", 
            "Lambda", "IAM", "Sagemaker",
            "Cloudwatch", "S3"],
        icon: "cloud.png"
    }
]