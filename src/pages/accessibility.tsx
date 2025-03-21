"use client";

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import SkillGrid from "@/app/components/skillGrid/SkillGrid";
import { techSkills } from "@/app/constants/techSkills";
import QuoteTool from "../app/components/quoteTool/QuoteTool";
import TwoColumnContainer from "@/app/components/layout/TwoColumnContainer";
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import { industries } from "@/app/constants/industries";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import { methodologies } from "@/app/constants/methodologies";
import SkillCards from "@/app/components/skillCards/SkillCards";
import { softSkills } from "@/app/constants/softSkills";
import ImageDisplay from "@/app/components/imageDisplay/ImageDisplay";

const Accessibility: React.FC = () => {
    return (
        <>
            Certainly! Here’s an updated accessibility statement that includes the use of `rem` units in your CSS for better accessibility:

            ---

            ## Accessibility Statement for GDS Consulting

            GDS Consulting (gds-c.com) is committed to ensuring digital accessibility for everyone, including people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

            ### Measures to Support Accessibility

            GDS Consulting takes the following measures to ensure accessibility:

            - **Include accessibility as part of our mission statement.**
            - **Integrate accessibility into our procurement practices.**
            - **Provide continual accessibility training for our staff.**
            - **Assign clear accessibility targets and responsibilities.**
            - **Employ formal accessibility quality assurance methods.**

            ### Accessibility Features

            GDS Consulting incorporates the following features to enhance accessibility:

            - **ARIA (Accessible Rich Internet Applications):** We use ARIA roles and attributes to ensure our website is accessible to users with assistive technologies.
            - **Color Contrast Management:** Our site is designed to maintain high color contrast ratios to ensure text is readable for all users, including those with visual impairments.
            - **Dark and Light Mode:** Users can switch between dark and light modes based on their preferences, providing a more comfortable viewing experience in different lighting conditions.
            - **Skip Navigation Links:** Skip nav links are provided to allow users to bypass repetitive navigation links and go directly to the main content.
            - **Tabindex Management:** We use tabindex to ensure a logical and accessible tab order for keyboard navigation.
            - **Alt Attributes:** All images on our site include descriptive alt attributes, ensuring that users who rely on screen readers can understand the content of images.
            - **Relative Units in CSS:** We use `rem` units for CSS, allowing users to adjust text size according to their browser settings for better readability and accessibility.

            ### Conformance Status

            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. GDS Consulting is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.

            ### Feedback

            We welcome your feedback on the accessibility of GDS Consulting. Please let us know if you encounter accessibility barriers on GDS Consulting:

            - **Email:** accessibility@gds-c.com
            - **Phone:** +1-800-123-4567
            - **Mailing address:** 123 Accessibility Street, Suite 456, City, State, ZIP

            We try to respond to feedback within 5 business days.

            ### Compatibility with Browsers and Assistive Technology

            GDS Consulting is designed to be compatible with the following assistive technologies:

            - **Browsers:** We aim for compatibility with the latest versions of Chrome, Firefox, Safari, and Edge.
            - **Assistive Technologies:** Our website works with popular screen readers such as JAWS, NVDA, and VoiceOver.

            ### Technical Specifications

            Accessibility of GDS Consulting relies on the following technologies to work with the particular combination of web browsers and any assistive technologies or plugins installed on your computer:

            - **HTML**
            - **WAI-ARIA**
            - **CSS**
            - **JavaScript**

            These technologies are relied upon for conformance with the accessibility standards used.

            ### Limitations and Alternatives

            Despite our best efforts to ensure accessibility of GDS Consulting, there may be some limitations. Below is a description of known limitations, and potential solutions:

            - **Known Limitations:**
            - **PDF Documents:** Some PDF documents may not be fully accessible. We are working on improving our PDF accessibility and can provide accessible versions upon request.

            ### Assessment Approach

            GDS Consulting assessed the accessibility of GDS Consulting by the following approaches:

            - **Self-evaluation:** We regularly test our website for accessibility compliance using automated tools and manual testing.
            - **External evaluation:** We engage with third-party experts to conduct accessibility audits.

            ### Formal Complaints

            If you are not satisfied with our response to your feedback, you can contact the regulatory authority in your country to lodge a formal complaint.

            ### This Statement Was Created On

            This statement was created on August 1, 2024, using the [W3C Accessibility Statement Generator Tool](https://www.w3.org/WAI/planning/statements/).

            ---

            This statement now includes the use of `rem` units in CSS, which is an important aspect of accessibility related to font scaling and user preferences. Feel free to adjust any part of the statement as needed.
        </>
    );
};

export default Accessibility;
