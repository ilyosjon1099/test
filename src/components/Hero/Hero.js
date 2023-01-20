import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Seeking an opportunity to achieve personal growth along with the overall success of a team of ambitious IT specialists. Offering enthusiasm, unique insights, and understanding of various programming languages.
        </SectionText>
        <Button href="" >
          <a class="" href={`../../files/Ergashev_Islomjon_resume.pdf`} download>
            Download Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;