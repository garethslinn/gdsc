"use client";

import QuoteTool from "@/app/components/quoteTool/QuoteTool";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import { methodologies } from "@/app/constants/methodologies";
import { industries } from "@/app/constants/industries";
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import SkillGrid from "@/app/components/skillGrid/SkillGrid";
import { techSkills } from "@/app/constants/techSkills";
import TwoColumnContainer from "@/app/components/layout/TwoColumnContainer";
import {softSkills} from "@/app/constants/softSkills";
import SkillCards from "@/app/components/skillCards/SkillCards";
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import React from "react";
import ChartsContainer from "@/app/components/charts/chartsContainer/ChartsContainer";

export default function Experience() {

    return (
        <>
            <section aria-labelledby="experience">
                <Title id="experience" first text="Experience cannot be learned" />
                <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                    As a seasoned developer with over 20 years of commercial experience,
                    I have had the privilege of working across a myriad of industries
                    including telecommunications, e-commerce, digital agencies, finance,
                    gambling, retail, and many more. My journey is marked by a continuous
                    commitment to learning and adapting, allowing me to stay at the
                    forefront of technological advancements and industry best practices.
                </Paragraph>
            </section>

            <section aria-labelledby="tech-skills">
                <Title id="tech-skills" text="Tech Skills by Years Experience" />
                <SkillGrid data={techSkills} />
            </section>

            <section aria-labelledby="metrics">
                <Title id="metrics" text="Skill Metrics" />
                <ChartsContainer />
            </section>

            <section aria-labelledby="soft-skills">
                <Title id="soft-skills" text="Soft Skills" />
                <SkillCards skills={softSkills} />
            </section>

            <section aria-labelledby="clients">
                <Title id="clients" backgroundColor="#f1f1f1" text="Clients" />
                <QuoteTool />
            </section>
        </>
    );
}
