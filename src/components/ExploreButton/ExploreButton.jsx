import React from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import { Explore, ButtonText } from './ExploreButton.styles';

export const ExploreButton = ({ handleExploreButtonClick, text, pointRight } = {}) => (
  <div>
    <Explore
      onClick={handleExploreButtonClick}
    >
      <ButtonText>{text}</ButtonText>
      {pointRight ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
    </Explore>
  </div>
);
