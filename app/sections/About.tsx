import React from 'react';
import '../animations/animate.css';
import AnimatedBody from '../animations/AnimatedBody';
import AnimatedTitle from '../animations/AnimatedTitle';

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={'Sayam Monga.'}
                    className={
                        'mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]'
                    }
                    wordSpace={'mr-[14px]'}
                    charSpace={'mr-[0.001em]'}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Hey there! I’m currently pursuing my B.Tech at Thapar Institute of Engineering and Technology, with a strong passion for Front-end and Full Stack Development. I have a solid grip on JavaScript, React.js, Next.js, HTML, and CSS — and I’m constantly looking to level up my skills." />

                        <AnimatedBody
                            delay={0.1}
                            text="I love diving into new challenges and exploring different domains because I believe growth comes from stepping out of your comfort zone. I’m especially focused on developing my weaknesses and turning them into strengths — learning across various areas helps me gain new perspectives and exciting experiences.

                            "
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Whether it’s crafting a sleek user interface or building out a complex application, I’m always aiming to create something innovative and impactful. I enjoy experimenting with the latest technologies and keeping up with current trends in the tech world."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Right now, I’m working on some exciting projects that I’m really proud of (stay tuned!), and I’m always open to fresh opportunities, collaborations, and anything that fuels creativity and learning."
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="Let’s connect and build something awesome together!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
