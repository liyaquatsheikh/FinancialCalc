import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Globals from './AppContext';

const TableRow = ({ data }) => {
  if (!data) {
    return null; // Handle case where data is undefined or null
  }

  return (
    <View style={styles.tableRow}>
      {data.map((item, index) => (
        <Text key={index} style={styles.tableCell}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const Table = ({ headers, rows }) => {
  if (!headers || !rows) {
    return null; // Handle case where headers or rows are undefined or null
  }

  return (
    <View style={styles.table}>
      <TableRow data={headers} style={styles.headerRow} />
      {rows.map((rowData, index) => (
        <TableRow key={index} data={rowData} />
      ))}
    </View>
  );
};

const Report = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('Tab screen is focused, executing the method.');
      // Your logic here
    }
  }, [isFocused]);

  return (
    <ScrollView style ={styles.container}>
      {Globals.loanDetails.length > 0 && (
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Month</Text>
            <Text style={styles.tableHeaderText}>Interest Paid</Text>
            <Text style={styles.tableHeaderText}>Principle Paid</Text>
            <Text style={styles.tableHeaderText}>Balance Amount</Text>
          </View>

          <FlatList
            data={Globals.loanDetails}
            keyExtractor={(item) => item.month.toString()}
            renderItem={({ item }) => (
              <TableRow
                data={[
                  item.month,
                  item.monthlyInterest,
                  item.monthlyPrincipal,
                  item.remainingAmount,
                ]}
              />
            )}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 0,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#3b3a38',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#333230',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  container : {
    backgroundColor: '#333230'
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.6,
    borderColor: '#cfa006',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    color: 'white',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
});

export default Report;
