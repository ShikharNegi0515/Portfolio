import React from "react";

const Hero = () => {
    // const resumeLink =
    //     "https://drive.google.com/uc?export=download&id=1CVbNOBVwdlDhqKE9SZTNovS4NEuSMq-I";

    const handleResume = () => {
        const viewLink = "https://drive.google.com/file/d/1CVbNOBVwdlDhqKE9SZTNovS4NEuSMq-I/view?usp=sharing";
        const downloadLink = "https://drive.google.com/uc?export=download&id=1CVbNOBVwdlDhqKE9SZTNovS4NEuSMq-I";

        window.open(viewLink, "_blank");

        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = "Shikhar_Negi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm Shikhar Negi</h1>
                <p>I'm a passionate Web Developer creating interactive and responsive websites.</p>
                <button className="hero-btn" onClick={handleResume}>
                    Resume
                </button>
            </div>
        </section>
    );
};

export default Hero;
