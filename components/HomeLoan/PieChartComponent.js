//import React from 'react';
//import { View, Text } from 'react-native';
//import { PieChart } from 'react-native-svg-charts';
//
//const PieChartComponent = ({ data }) => {
//  const pieData = data.map((value, index) => ({
//    value,
//    svg: {
//      fill: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
//        Math.random() * 256
//      )}, ${Math.floor(Math.random() * 256)})`,
//      onPress: () => console.log('Press', index),
//    },
//    key: `pie-${index}`,
//  }));
//
//  return (
//    <View>
//      <Text>Pie Chart</Text>
//      {/* Enclose the chart within a <Text> component */}
//      <Text>
//        <PieChart style={{ height: 200 }} data={pieData} />
//      </Text>
//    </View>
//  );
//};
//
//export default PieChartComponent;
