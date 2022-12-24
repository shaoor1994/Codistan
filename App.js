// import React, { Component } from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// // import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";


// // import devicesCard from "../Components/Cards/Devices.js";
// const Navigation = createStackNavigator(
//   // devicesCard= {
//   //   screen: devicesCard,
//   //   navigationOptions: {
//   //     headerShown: "true",
//   //   },
//   // },
 
//   codeCharts= {
//     screen: codeCharts,
//     navigationOptions: {
//       headerShown: "true",
//     },
//   },

//   {
//     initialRouteName: "codeCharts",
//     // mode: "modal",
//   }
 
//   );

//   const Appcontainer = createAppContainer(Navigation);

// export default class App extends React.Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Appcontainer />
//       </NavigationContainer>
//     );
//   }
// }


// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();

// // import codeCharts from "./Components/Charts/Chart.js";

// // export default function MyStack() {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="codeCharts" component={codeCharts} />
      
// //     </Stack.Navigator>
// //   );
// // }

import CodeCharts from "./Components/Charts/Chart"
import CreateCard from "./Components/Cards/Devices";
import HeaderCustom from "./Components/Header/Header";
import { StyleSheet, View,ScrollView ,Text} from 'react-native';
import AlarmTable from "./Components/Tables/AlarmTable";
import ProbeTable from "./Components/Tables/ProbeTable";
// import { ScrollView } from "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
   {/* header is Static above Scroll View */}
      <HeaderCustom/>
        <ScrollView>
        <Text style={{marginTop:60,marginLeft:20, marginTop:55, fontSize:30,fontWeight:"bold"}}>Welcome, Metford</Text>
        <Text style={{marginTop:20 ,marginLeft:20}}>Here's what's happening in your Cake Account</Text>
      <CreateCard/>
      <CodeCharts/>
      <Text style={{marginLeft:15,fontWeight:"bold",fontSize:30}}>Alarm Logs</Text>
      <AlarmTable/>
      <Text style={{marginLeft:15,fontWeight:"bold",fontSize:30}}>Probe</Text>
      <ProbeTable/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
   // justifyContent: 'center',
   alignSelf:'center'
  },
});
