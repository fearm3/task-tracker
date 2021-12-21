import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <StyledImage src={codingSvg} />
        <HeaderContainer>
          <h1>
            {" "}
            About Sotfware Developer <span>Abraham Lincoln</span>
          </h1>
        </HeaderContainer>
        <InfoContainer>Info</InfoContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
