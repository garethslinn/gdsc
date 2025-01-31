"use client";

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import Card from "@/app/components/card/Card";
import ResponsiveColumns from "@/app/components/responsiveColumns/ResponsiveColumns";
import { intro } from "@/app/constants/casestudies/intro";

const About: React.FC = () => {
    const basePath = process.env.NODE_ENV === "production" ? "/gdsc" : "";

    return (
        <>
            <Title first text="Developing Custom Solutions Tailored to Your Needs" />
            <Paragraph first foregroundColor="">
                GDS Consulting offers elegant, custom-built solutions from start to finish, addressing the significant challenges you face. I build entire products while also tackling your immediate development and optimisation needs.
            </Paragraph>

            <ResponsiveColumns columns={intro} />
            <Card
                title="Frontend Development"
                link="/development"
                imageSrc={`${basePath}/assets/images/frontend.svg`}
            >
                I excel in building products primarily around frontend technologies. The world of frontend moves fast, but my extensive experience with developing open source, rapid performance, and advanced UX/UI ensures that I can contribute effectively and stay updated with new tech.
            </Card>
            <Card
                title="Backend Development"
                link="/development"
                imageSrc={`${basePath}/assets/images/backend.svg`}
            >
                My backend stack includes TypeScript, Express, NodeJS, and MongoDB, ensuring your backend is robust and efficient. I can also assist with Python as when needed.
            </Card>
            <Card
                title="Performance Optimisation"
                link="/case-studies"
                imageSrc={`${basePath}/assets/images/optimisation.svg`}
            >
                Scalability problems can be a good sign of growth, but they can also be painful. I analyse potential bottlenecks in your code and infrastructure, propose a prioritised backlog of improvements, and bring them to life. I will prepare your product for user surges, making it reliable, resource-efficient, and scalable.
            </Card>
            <Card
                title="Product Design"
                link="/graphic-design"
                imageSrc={`${basePath}/assets/images/design.svg`}
            >
                Whether you have just the hint of an idea or are further along in product development, I dive in to produce interfaces where beauty and functionality combine to provide users with an exceptional experience.
            </Card>
        </>
    );
};

export default About;
