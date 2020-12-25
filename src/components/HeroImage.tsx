import React from 'react';
import styled from 'styled-components';
import hero from './activities.svg';

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 620px;
`;

const HeroImage: React.FC = () => <Img src={hero} alt="Fun Activites" />;

export default HeroImage;
