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
            <Title first text="Developing Custom Solutions Tailored to Your Needs." />
            <Paragraph first foregroundColor="">
                With over 20 years of experience in front-end development, UX/UI design, and full-stack engineering,
                GDS Consulting specialises in creating accessible, inclusive, and high-performing digital experiences.
                As accessibility advocates and contributors to the W3C, our work focuses on ensuring compliance with
                WCAG, EAA, AUIG, and ADA standards while optimizing usability for neurodivergent users.
                Whether its building scalable UI frameworks, conducting in-depth accessibility audits, or
                enhancing brand identity with accessible theming, We provide end-to-end solutions tailored to your needs.
            </Paragraph>

            <Title text="Our services by section" />

            <section>
                <Card
                    title="Accessibility Audits & Compliance"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/accessibility.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>In-depth web accessibility audits aligned with WCAG, AUIG</li>
                        <li>Screen reader testing and keyboard navigation evaluation</li>
                        <li>Recommendations for improving readability, usability, and cognitive accessibility</li>
                        <li>Neurological intervention strategies for ADHD, dyslexia, autism, and cognitive differences</li>
                        <li>Automated and manual accessibility testing to ensure compliance</li>
                        <li>Assistive technology compatibility checks</li>
                        <li>ARIA implementation and semantic HTML structure improvements</li>
                        <li>Real-world testing with users from diverse neurological backgrounds</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Card
                    title="Project & Product Management"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/scrummaster.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>Jira & backlog management for agile workflows</li>
                        <li>Sprint planning & execution for structured project delivery</li>
                        <li>Client demos & stakeholder engagement to showcase progress</li>
                        <li>Feature prioritization & roadmap development</li>
                        <li>Cross-functional team coordination</li>
                        <li>Agile, Lean, and Kanban methodologies for project efficiency</li>
                        <li>Risk assessment & planning</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Card
                    title="User Experience (UX) & Neurological Accessibility"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/nux.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>Neurological UX design for users with ADHD, dyslexia, autism, and cognitive challenges</li>
                        <li>Wireframing & prototyping with a focus on accessibility and cognitive ease</li>
                        <li>Readability optimization to reduce cognitive overload and enhance focus</li>
                        <li>Cognitive-friendly navigation structures to improve usability and reduce frustration</li>
                        <li>Reducing distractions & improving focus through controlled animations, layouts, and color contrasts</li>
                        <li>Discussions to understand diverse accessibility needs</li>
                        <li>Assistive technology integration to support neurodivergent users</li>
                        <li>Real-world usability testing with users who rely on assistive technologies</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Card
                    title="Documentation & Knowledge Sharing"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/docs.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>Technical documentation for developers and designers</li>
                        <li>Best practices guides for accessibility compliance</li>
                        <li>User manuals & onboarding documentation</li>
                        <li>Accessibility-focused training materials and knowledge sharing</li>
                        <li>Guidelines on implementing cognitive-friendly UI & UX</li>
                        <li>Educational content on WCAG, ARIA, and best practices for inclusive design</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Card
                    title="UI & Frontend Development"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/react.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>Accessible page layouts following best practices</li>
                        <li>Reusable component libraries for efficiency and scalability (e.g., InfoCharts, Helprjs)</li>
                        <li>CSS styling optimised for readability, accessibility, and responsiveness</li>
                        <li>Dyslexia-friendly fonts & color schemes to improve readability</li>
                        <li>Scalable Vector Graphics (SVG) design for accessibility and performance</li>
                        <li>ARIA and semantic HTML implementation for screen reader compatibility</li>
                        <li>Interactive data visualisation (e.g., Highcharts, D3, InfoCharts)</li>
                        <li>Advanced theming for accessibility, including dark mode, light mode, and high-contrast settings</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Card
                    title="Theming & Branding"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/css.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>Dark mode, light mode, and high-contrast color schemes for accessibility</li>
                        <li>Accessible branding strategies that work for all users</li>
                        <li>Scalable, consistent design systems that adapt across devices</li>
                        <li>Color psychology & accessibility considerations to ensure inclusivity</li>
                        <li>Scalable vector design and branding using CorelDraw, Inkscape, and SVG graphics</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Card
                    title="Backend Development & Infrastructure"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/mongo.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>API development for seamless integration (Node.js, Express)</li>
                        <li>Database design & optimisation for secure and efficient data handling (MongoDB, MySQL)</li>
                        <li>Security & authentication (OAuth, JWT, multi-factor authentication, bcrypt password hashing)</li>
                        <li>Admin panel development for easy content and user management</li>
                        <li>Performance optimisations for speed and efficiency</li>
                        <li>Server-side JavaScript for handling secure transactions and API requests</li>
                        <li>Real-time monitoring & logging using PM2 and Nginx</li>
                    </ul>
                </Card>
            </section>

            <section>
                <Card
                    title="Hosting & Deployment"
                    link=""
                    imageSrc={`${basePath}/assets/images/logos/cybersecurity.svg`}
                    noLink
                >
                    <h3>Services available:</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li>Domain & hosting setup tailored to project needs</li>
                        <li>Domain interception & DNS management for seamless migrations</li>
                        <li>Launching sites live or behind a security wall during development</li>
                        <li>Server configuration & performance monitoring for optimised speed</li>
                        <li>Backup & disaster recovery planning to protect data integrity</li>
                        <li>SSL implementation and reverse proxy setup using Nginx</li>
                    </ul>
                </Card>
            </section>
        </>
    );
};

export default About;
