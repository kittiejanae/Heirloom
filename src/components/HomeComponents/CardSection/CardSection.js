import React from "react";
import {
  SectionContainer,
  FeatureTitle,
  FeatureH2,
  FeaturesContentWrapper,
  FeatureWrapper,
  FeatureImage,
  FeatureP,
} from "./CardSectionElements";

import feature1 from "../../../images/feature1.svg";
import feature2 from "../../../images/feature2.svg";
import feature3 from "../../../images/feature3.svg";

const CardSection = () => {
  return (
    <div>
      <SectionContainer className="features">
        <FeatureTitle>
          <FeatureH2>Features</FeatureH2>
        </FeatureTitle>
        <FeaturesContentWrapper>
          <FeatureWrapper>
            <FeatureImage src={feature1} type="image/svg" />
            <FeatureP>
              Keep track of any changes with the recipe journal
            </FeatureP>
          </FeatureWrapper>
          <FeatureWrapper>
            <FeatureImage src={feature2} type="image/svg" />
            <FeatureP>
              Keep your secret recipes secure from prying eyes with recipe lock
            </FeatureP>
          </FeatureWrapper>
          <FeatureWrapper>
            <FeatureImage src={feature3} type="image/svg" />
            <FeatureP>
              Digital cooking tools: timer, serving size adjuster, Star Rating &
              More
            </FeatureP>
          </FeatureWrapper>
        </FeaturesContentWrapper>
      </SectionContainer>
    </div>
  );
};

export default CardSection;
