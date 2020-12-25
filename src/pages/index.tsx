import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import '../styles/global.css';

import Title from '@/components/Title';
import Hamburger from '@/components/Hamburger';
import HeroImage from '@/components/HeroImage';

const Button = styled.button`
  background: #454ade;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-width: 220px;
  min-height: 60px;
`;

const H3 = styled.h3`
  color: #ffffff;
  text-align: center;
  margin: 0;
`;

const Main = styled.main`
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Home: React.FC<PageProps> = () => (
  <Main>
    <TopSection>
      <Title />
      <Hamburger />
    </TopSection>
    <HeroContainer>
      <HeroImage />
    </HeroContainer>

    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p>Be the first to try the Grand Plans App.</p>
      <Button role="button">
        <H3>Join wait list</H3>
      </Button>
    </div>
  </Main>
);

export default Home;
