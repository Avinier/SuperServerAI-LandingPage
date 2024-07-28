import React, { useEffect, useState } from "react";
import '../styles/aiinfo.css';

function AiInfo() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const textBoxes = [
        { text: "Custom trained LLM", className: "top-1/4    left-1/4" },
        { text: "Advanced AI capabilities", className: "top-1/4 right-1/4" },
        { text: "Scalable solutions", className: "bottom-1/4 left-1/4" },
        { text: "24/7 Support", className: "bottom-1/4 right-1/4" },
    ];

    return (
        <section className="min-h-screen bg-background relative overflow-hidden">
            <h2 className="text-4xl font-heading text-center text-text pt-[100px]">
                What makes us different
            </h2>
            <p className="text-xl font-body text-center text-text mb-7 mt-5">
                Our custom trained LLM will help you blah blah
            </p>
            <div className="relative w-full h-[600px]">
                <img
                    src="/images/ai-image2.png"
                    alt="ai-image"
                    className="object-cover w-[1000px] mx-auto rounded-md transition-transform duration-300 animate-float"
                />
                {textBoxes.map((box, index) => (
                    <div
                        key={index}
                        className={`absolute ${
                            box.className
                        } bg-white p-4 font-body text-[1.2rem] rounded-md shadow-lg text-text animate-float opacity-0 transition-opacity duration-1000 ${
                            scrollPosition > 300 * (index + 1) ? "opacity-100" : ""
                        }`}
                    >
                        {box.text}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AiInfo;