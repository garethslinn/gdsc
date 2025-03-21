// Card.tsx
import React from 'react';
import Image from 'next/image';
import { CardProps } from './Card.types';
import { CardContainer, Title, Description, ImageWrapper, ContentWrapper } from './Card.styles';

const Card: React.FC<CardProps> = ({ title, link, imageSrc, noLink, children    }) => {
    return (
        <CardContainer>
            <Title>{title}</Title>
            <ContentWrapper>
                <Description>{children}</Description>
                <ImageWrapper>
                    <Image src={imageSrc} alt={title} width={300} height={300} />
                </ImageWrapper>
            </ContentWrapper>
            {!noLink &&
                <a className="learn-more" href={link} target="_blank" rel="noopener noreferrer"><span>Learn more</span></a>
            }
         </CardContainer>
    );
};

export default Card;
