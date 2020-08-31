import React from 'react';
import styled from 'styled-components/native';

const LoadingScreen: React.FC = (): JSX.Element => {
  return (
    <StyledSafeAreaView>
      <StyledText>Loading</StyledText>
    </StyledSafeAreaView>
  );
};

export default LoadingScreen;

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
`;
