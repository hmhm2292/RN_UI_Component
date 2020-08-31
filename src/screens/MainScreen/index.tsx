import React from 'react';
import styled from 'styled-components/native';

const MainScreen: React.FC = (): JSX.Element => {
  return (
    <StyledSafeAreaView>
      <StyledText>main</StyledText>
    </StyledSafeAreaView>
  );
};

export default MainScreen;

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
`;
