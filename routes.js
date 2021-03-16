import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import CreateUser from './pages/CreateUser';


const Stack = createStackNavigator();

const routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="CreateUser" component={CreateUser}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detalhes" component={Detalhes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;