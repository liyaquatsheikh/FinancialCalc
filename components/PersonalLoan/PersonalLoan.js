import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenureMonths, setTenureMonths] = useState('');
  const [monthsPaid, setMonthsPaid] = useState('');
  const [loanDetails, setLoanDetails] = useState([]);

  const calculateLoanDetails = () => {
    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate);
    const tenure = parseFloat(tenureMonths);
    const months = parseFloat(monthsPaid);

    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(tenure)) {
      alert('Please enter valid numeric values.');
      return;
    }

    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = (annualInterestRate / 12) / 100;

    const details = [];
    let remainingAmount = principal;

    for (let i = 1; i <= tenure; i++) {
      // Calculate EMI
      const emi = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -tenure));

      // Calculate monthly interest
      const monthlyInterest = remainingAmount * monthlyInterestRate;

      // Calculate remaining amount after paying i EMIs
      remainingAmount =
        principal *
        (Math.pow(1 + monthlyInterestRate, tenure) - Math.pow(1 + monthlyInterestRate, i)) /
        (Math.pow(1 + monthlyInterestRate, tenure) - 1);

      details.push({
        month: i,
        emi: emi.toFixed(2),
        monthlyInterest: monthlyInterest.toFixed(2),
        remainingAmount: remainingAmount.toFixed(2),
      });
    }

    setLoanDetails(details);
  };



  const tableHead = ['Month', 'EMI', 'Monthly Interest', 'Remaining Amount'];

   const renderTableRow = ({ item }) => (
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>{item.month}</Text>
        <Text style={styles.tableCell}>{item.emi}</Text>
        <Text style={styles.tableCell}>{item.monthlyInterest}</Text>
        <Text style={styles.tableCell}>{item.remainingAmount}</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Loan Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter loan amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />

      <Text style={styles.label}>Interest Rate (%):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter interest rate"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
      />

      <Text style={styles.label}>Tenure (months):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter loan tenure in months"
        keyboardType="numeric"
        value={tenureMonths}
        onChangeText={setTenureMonths}
      />

      <Text style={styles.label}>Months Paid:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of months paid"
        keyboardType="numeric"
        value={monthsPaid}
        onChangeText={setMonthsPaid}
      />

     <TouchableOpacity style={styles.calculateButton} onPress={calculateLoanDetails}>
            <Text style={styles.calculateButtonText}>Calculate</Text>
          </TouchableOpacity>





      {loanDetails.length > 0 && (
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Month</Text>
            <Text style={styles.tableHeaderText}>EMI</Text>
            <Text style={styles.tableHeaderText}>Monthly Interest</Text>
            <Text style={styles.tableHeaderText}>Remaining Amount</Text>
          </View>

          <FlatList
            data={loanDetails}
            keyExtractor={(item) => item.month.toString()}
            renderItem={renderTableRow}
          />
        </View>
      )}


    </View>
  );
};

const styles = StyleSheet.create({



  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  calculateButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 16,
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default LoanCalculator;
