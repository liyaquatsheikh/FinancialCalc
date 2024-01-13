import React , { useState }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useRoute } from '@react-navigation/native';



import Globals from './AppContext';

const TableRow = ({ data }) => {
  if (!data) {
    return null; // Handle case where data is undefined or null
  }

  return (
    <View style={styles.tableRow}>
      {data.map((cell, index) => (
        <View key={index} style={styles.cell}>
          <Text>{cell}</Text>
        </View>
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

const generateNumberRows = () => {
  const rows = [];
  for (let i = 1; i <= 10; i++) {
    rows.push([i.toString(), (i * 2).toString(), (i * 3).toString(), (i * 4).toString()]);
  }
  return rows;
};

const headers = ['Number', 'Double', 'Triple', 'Quadruple'];
const rows = generateNumberRows();

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Report() {




  return (
    <View>
         <TouchableOpacity onPress={() => console.log(Globals)}>
                <Text>Show Values</Text>
              </TouchableOpacity>

              {Globals.emi !== null && Globals.totalInterest !== null && (
                <View>
                  <Text>EMI: {Globals.emi}</Text>
                  <Text>Total Interest: {Globals.totalInterest}</Text>
                </View>
              )}

      <Table headers={headers} rows={rows} />
    </View>
  );
}
