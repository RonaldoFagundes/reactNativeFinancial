import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'; 
import {NavigationContainer} from '@react-navigation/native';
//import AuthProvider from './src/context/auth';
import AppProvider from './src/context/app';

import Routes from './src/routes';

export default function App() {
  return ( 
    <SafeAreaProvider>
      <NavigationContainer>       
        <AppProvider>
           <Routes/>
       </AppProvider>    
      </NavigationContainer>  
    </SafeAreaProvider> 
  );
}

