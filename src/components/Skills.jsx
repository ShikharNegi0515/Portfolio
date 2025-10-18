import React from "react";

const skillsData = [
    { name: "HTML", img: "https://img.icons8.com/color/256/html-5.png" },
    { name: "CSS", img: "https://img.icons8.com/fluency/256/css3.png" },
    { name: "JavaScript", img: "https://img.icons8.com/fluency/256/javascript.png" },
    { name: "React", img: "https://img.icons8.com/officel/256/react.png" },
    { name: "Chakra UI", img: "https://img.icons8.com/color/256/chakra-ui.png" },
    { name: "Tailwind CSS", img: "https://img.icons8.com/color/256/tailwind_css.png" },
    { name: "Bootstrap", img: "https://img.icons8.com/color-glass/144/bootstrap.png" },
    { name: "TypeScript", img: "https://img.icons8.com/color/256/typescript.png" },
    { name: "Node.js", img: "https://img.icons8.com/color/256/nodejs.png" },
    { name: "Express.js", img: "https://img.icons8.com/ios/100/express-js.png" },
    { name: "MongoDB", img: "https://img.icons8.com/color/256/mongodb.png" },
];

const toolsData = [
    { name: "Git", img: "https://img.icons8.com/color/256/git.png" },
    { name: "VS Code", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" },
    { name: "npm", img: "https://img.icons8.com/color/256/npm.png" },
    { name: "Postman", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
    { name: "Netlify", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png" },
];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <h2>Skills</h2>
            <div className="skills-container grid-skills">
                {skillsData.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <img src={skill.img} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>

            <section className="tools-section" id="tools">
                <h2>Tools</h2>
                <div className="tools-container grid-tools">
                    {toolsData.map((tool) => (
                        <div className="tool-card" key={tool.name}>
                            <img src={tool.img} alt={tool.name} />
                            <p>{tool.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Skills;
