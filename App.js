import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EpisodesList from './components/EpisodesList';
import EpisodeDetail from './components/EpisodeDetail';
import CharacterDetail from './components/CharacterDetail';
import Favorites from './components/Favorites';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Episodes">
          <Stack.Screen name="Episodes" component={EpisodesList} />
          <Stack.Screen name="EpisodeDetail" component={EpisodeDetail} />
          <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
