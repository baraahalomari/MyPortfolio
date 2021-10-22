import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection><br /><br /><br />
        <SectionTitle main center>
          Hello there <br />
          I'm Bara'ah Alomari
        </SectionTitle>
        <SectionText>
        I'm full stack software developer, I'm passion to Build & Design wep and mobile application.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;