import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Product from '../screens/Product';
import Cart from '../screens/Cart';
import Map from '../screens/Map';
import ViewItem from '../screens/ViewItem';
import OrderConfirmation from '../screens/OrderConfirmation';
import TrackOrder from '../screens/TrackOrder';

import {HomeScreenHeader } from '../components/HomeScreenHeader';
import {ProductScreenHeader} from '../components/ProductScreeenHeader';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function HomeStack() {
    return (
        
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" component={Home}
                options={HomeScreenHeader} 
            />
            <Stack.Screen 
                name="Product" 
                component={Product}
                options={
                    ({route,navigation}) => ({
                        headerBackground:() => <ProductScreenHeader hasTabs route={route.params} navigation={navigation}/>,
                        headerTitle:false,
                        headerTintColor:'#fff'
                    })
                }
            />
            <Stack.Screen 
                name="Cart"
                component={Cart}
                options={{
                    headerTitle:false,
                    headerStyle:{elevation: 0, shadowOpacity: 0}
                }}
                
            />
            <Stack.Screen
                name="Location"
                component={Map}
            />
            <Stack.Screen
                name="View Item"
                component={ViewItem}
            />
            <Stack.Screen
                name="Order"
                component={OrderConfirmation}
                options={{
                    headerTitle:false,
                    headerStyle:{elevation: 0, shadowOpacity: 0}
                }}
            />
            <Stack.Screen
                name="Track"
                component={TrackOrder}
                options={{
                    headerTitle:false,
                    headerStyle:{elevation: 0, shadowOpacity: 0},
                    headerTransparent: true,
                    
                }}
            />
        </Stack.Navigator>
        
    );
  }

  export default AppNavigator;