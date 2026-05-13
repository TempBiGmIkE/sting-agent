import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            STINGINC didn’t just happen—
            <br />
            its was inevitable formed as a reaction to the fear of tomorrow
            (from the gatekeepers). While the world clings to the old, we are
            engineering the new power. The ~Youth~ are taking over—are you with
            us or in the way?
            <br /> we are on a mission to change culture. Change is coming......
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
