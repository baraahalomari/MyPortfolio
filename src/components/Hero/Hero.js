import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <br />
        <br />
        <br />
        <SectionTitle main center>
          Hello there <br />
          I'm Bara'ah Alomari
        </SectionTitle>
        <SectionText>
          A dedicated full-stack software developer with a passion for building
          and designing web and mobile applications. I possess strong skills and
          expertise in creating robust and user-friendly software solutions.
          With a keen eye for detail and a commitment to delivering high-quality
          work, I strive to bring innovative ideas to life through my coding
          abilities.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
