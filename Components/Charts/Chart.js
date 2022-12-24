
import React from 'react';


import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {
  LineChart,
} from 'react-native-chart-kit';

const MyBezierLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Pie Warmer Right</Text>
      <LineChart
        data={{
          labels: ['00:00', '03:00', '06:00', '12:00','15:00'],
          datasets: [
            {
              data: [
                // Math.random() * -30,
                -40,

                -20,
                0,
                30,
                40,
              ]
            },
          ],
        }}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        // yAxisLabel={'C'}
        yAxisSuffix={'C'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(255, 87, 51 , ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};









export default  CodeCharts = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            {/*Example of Bezier LineChart*/}
            <MyBezierLineChart />
          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// export default function codeCharts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'left',
    fontSize: 25,
    padding: 16,
    marginTop: 16,
    fontWeight:"bold"
  },
});
