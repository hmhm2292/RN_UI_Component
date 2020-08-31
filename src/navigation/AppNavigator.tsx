import React, {ReactElement} from 'react';

import styled from 'styled-components/native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {SafeAreaProvider, useSafeArea} from 'react-native-safe-area-context';

import MainScreen from '../screens/MainScreen';
import LoadingScreen from '../screens/LoadingScreen';

const CustomDrawerContent = ({navigation}: {navigation: any}): ReactElement => {
  const insets = useSafeArea();
  return (
    <DrawerContainer
      style={[
        {
          paddingBottom: insets.bottom,
          paddingTop: insets.top + 10,
        },
      ]}>
      <DrawerView>
        <Logo
          source={require('../globals/images/react-native-UX-design.gif')}
        />
        <Title>RN UI Components</Title>
      </DrawerView>
      <DrawerContentScrollView
        contentContainerStyle={[
          {
            paddingTop: insets.top - 30,
          },
        ]}>
        <DrawerItem
          label="Main"
          onPress={(): void => {
            navigation.navigate('MainStack');
          }}
        />
        <DrawerItem
          label="Loading"
          onPress={(): void => {
            navigation.navigate('LoadingStack');
          }}
        />
      </DrawerContentScrollView>
      <DrawerItem
        label="Close"
        onPress={(): void => {
          navigation.closeDrawer();
        }}
      />
    </DrawerContainer>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = (): ReactElement => {
  return (
    <Drawer.Navigator
      drawerContent={(props): ReactElement => (
        <CustomDrawerContent {...props} />
      )}>
      <Drawer.Screen name="MainStack" component={MainStack} />
      <Drawer.Screen name="LoadingStack" component={LoadingStack} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const IconButton = ({openDrawer}: {openDrawer: any}): ReactElement => {
  return (
    <StyledTouchableOpacity onPress={(): void => openDrawer()}>
      <StyledImage source={require('../globals/images/menu.png')} />
    </StyledTouchableOpacity>
  );
};

const MainStack = ({navigation}: {navigation: any}): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={headerOptions('Main', navigation)}
      />
    </Stack.Navigator>
  );
};

const LoadingStack = ({navigation}: {navigation: any}): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={headerOptions('Loading', navigation)}
      />
    </Stack.Navigator>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <DrawerNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;

const DrawerView = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: lightgray;
  padding-bottom: 8px;
`;

const DrawerContainer = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const Logo = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 20px;
`;

const StyledImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-left: 20px;
`;

const headerOptions = (title: string, navigation: any) => {
  return {
    title: title,
    headerLeft: () => {
      return <IconButton {...navigation} />;
    },
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0.5,
    },
  };
};
