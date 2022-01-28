import React from 'react';
import { View, Text } from 'react-native';
import AppRoutes from './App';
import AuthRoutes from './Auth';
// ==============Check if user is logged in or not================

// const containsUser = useSelector(state =>
//   state.jwt.token == '' ? false : true
// )

// if (!containsUser) {

//   return (
//       <NavigationContainer>
//           <AuthStack />
//       </NavigationContainer>
//   )
// }
// else
//   return (
//       <NavigationContainer>
//           <AppNavigator />
//       </NavigationContainer>
//   )
// }


const Navigator = () => {
  return (
    // ===========Temporary===========
    <View>
      <Text>This is Router Screen</Text>
    </View>
  );
};
export default Navigator;
