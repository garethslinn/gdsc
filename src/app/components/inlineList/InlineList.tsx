import React, { useEffect, useRef, useState } from 'react';
import {
    CompaniesListLayout,
    CompaniesListWrapper,
    Company,
    CompanyImage,
    CompanyTitle,
} from './InlineList.style';

// @ts-ignore
import { useRouter } from 'next/router';

interface Company {
    title: string;
    image: string;
    description: string[]; // Updated to string[]
    skills: string;
    dateFrom: string;
    dateTo: string;
}

interface CompaniesListProps {
    companies: Company[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    setActiveTitle: (title: string) => void;
    setActiveDescription: (description: string[]) => void; // Updated to string[]
}

const InlineList: React.FC<CompaniesListProps> = ({
          companies,
          activeIndex,
          setActiveIndex,
          setActiveTitle,
          setActiveDescription
      }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(100);
    const [visibleItems, setVisibleItems] = useState(1);

    const { basePath } = useRouter();

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                if (window.innerWidth <= 900) {
                    setItemWidth(50);
                    setVisibleItems(Math.floor(containerWidth / 55)); // Adjusted for item width + gap
                } else {
                    setItemWidth(100);
                    setVisibleItems(Math.floor(containerWidth / 110)); // Adjusted for item width + gap
                }
            }
        };

        handleResize(); // Initial calculation
        window.addEventListener('resize', handleResize); // Add resize listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, [companies.length]);

    useEffect(() => {
        if (companies.length > 0) {
            setActiveTitle(companies[activeIndex].title);
            setActiveDescription(companies[activeIndex].description); // Updated to string[]
        }
    }, [activeIndex, companies, setActiveTitle, setActiveDescription]);

    const handleCompanyClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <CompaniesListLayout>
            <CompaniesListWrapper
                ref={containerRef}
                activeIndex={activeIndex}
                itemWidth={itemWidth}
                visibleItems={visibleItems}
                role="list"
            >
                {companies.map((company, index) => (
                    <Company
                        key={index}
                        active={index === activeIndex}
                        onClick={() => handleCompanyClick(index)}
                        role="listitem"
                        aria-current={index === activeIndex ? "true" : "false"}
                        tabIndex={index === activeIndex ? 0 : -1}
                        aria-label={`Company ${company.title}`}
                    >
                        <CompanyImage
                            src={basePath ? `${basePath}/${company.image}` : company.image}
                            alt={company.title}
                        />
                        <CompanyTitle>&nbsp;</CompanyTitle>
                    </Company>
                ))}
            </CompaniesListWrapper>
        </CompaniesListLayout>
    );
};

export default InlineList;
