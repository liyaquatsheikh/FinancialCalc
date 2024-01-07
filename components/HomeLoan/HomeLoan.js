import React, { useState, useRef, useEffect  } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions,
ScrollView,StatusBar, SafeAreaView, TextInput , Modal, FlatList, Animated}
from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeLoan() {
const [principleAmount, setPrincipleAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
const [textInputValue, setTextInputValue] = useState('');
  const [numberInputValue, setNumberInputValue] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Monthly Repayment (EMI)');
  const labelPosition = useRef(new Animated.Value(0)).current;
const [isNumberInputFocused, setNumberInputFocused] = useState(false);
  // New state to track input focus
  const [isInputFocused, setInputFocused] = useState(false);


const [isPrincipleAmountFocused, setPrincipleAmountFocused] = useState(false);
const [isAnnualInterestRateFocused, setAnnualInterestRateFocused] = useState(false);
const [isTenureFocused, setTenureFocused] = useState(false);

  const labelPositionPrincipleAmount = useRef(new Animated.Value(0)).current;
  const labelPositionAnnualInterestRate = useRef(new Animated.Value(0)).current;
  const labelPositionTenure = useRef(new Animated.Value(0)).current;


  const handlePrincipleAmountChange = (text) => {
    setPrincipleAmount(text);
  };

  const handleAnnualInterestRateChange = (text) => {
    setAnnualInterestRate(text);
  };

  const handleTenureChange = (text) => {
    setTenure(text);
  };

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleNumberInputChange = (text) => {
    // Validate if the entered value is a number
    const numericValue = parseFloat(text);
    if (!isNaN(numericValue) || text === '') {
      setNumberInputValue(text);
    }
  };


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    toggleModal();
  };

  const data = ['Monthly Repayment (EMI)', 'Loan Amount', 'Annual Interest Rate(%)', 'Loan Term'];


  const onFocusPrincipleAmount = () => {
    Animated.timing(labelPositionPrincipleAmount, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();

    setPrincipleAmountFocused(true);
  };

  const onBlurPrincipleAmount = () => {
    if (!principleAmount) {
      Animated.timing(labelPositionPrincipleAmount, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }

    setPrincipleAmountFocused(false);
  };

  const onFocusAnnualInterestRate = () => {
    Animated.timing(labelPositionAnnualInterestRate, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();

    setAnnualInterestRateFocused(true);
  };

  const onBlurAnnualInterestRate = () => {
    if (!annualInterestRate) {
      Animated.timing(labelPositionAnnualInterestRate, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }

    setAnnualInterestRateFocused(false);
  };

  const onFocusTenure = () => {
    Animated.timing(labelPositionTenure, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();

    setTenureFocused(true);
  };

  const onBlurTenure = () => {
    if (!tenure) {
      Animated.timing(labelPositionTenure, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }

    setTenureFocused(false);
  };



  const onFocus = () => {
    Animated.timing(labelPosition, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();

    // Set the input focus state
    setInputFocused(true);
  };

  const onBlur = () => {
    if (!textInputValue && !numberInputValue) {
      Animated.timing(labelPosition, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();

    // Unset the input focus state
    setInputFocused(false);
    }
  };


  useEffect(() => {
    Animated.timing(labelPositionPrincipleAmount, {
      toValue: principleAmount ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [principleAmount]);

  useEffect(() => {
    Animated.timing(labelPositionAnnualInterestRate, {
      toValue: annualInterestRate ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [annualInterestRate]);

  useEffect(() => {
    Animated.timing(labelPositionTenure, {
      toValue: tenure ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [tenure]);

  const labelTranslateYPrincipleAmount = labelPositionPrincipleAmount.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 0],
  });

  const labelTranslateYAnnualInterestRate = labelPositionAnnualInterestRate.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 0],
  });

  const labelTranslateYTenure = labelPositionTenure.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 0],
  });


 useEffect(() => {
    Animated.timing(labelPosition, {
      toValue: textInputValue || numberInputValue ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [textInputValue, numberInputValue]);

  const labelTranslateY = labelPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 0],
  });


 const handleButtonPress = (buttonName) => {
    alert(`Button ${buttonName} clicked!`);
  };
  return (

   <SafeAreaView style={styles.container}>
  <StatusBar   barStyle="light-content"   backgroundColor="#3b3a38"/>


  <ScrollView   contentContainerStyle={styles.TopScrollView}>
  <ScrollView   contentContainerStyle={styles.scrollView}>




<View   style = {styles.section}   >

<View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>{selectedItem}</Text>
              <FontAwesome name={isModalVisible ? 'angle-up' : 'angle-down'} size={20} color="white" style={styles.dropdownIcon} />

        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleItemPress(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      </View>
 </View>


<View   style = {styles.section}   >






       <View style={styles.textInputContainer}>

        <Animated.Text
               style={[
                               styles.label,
                               { transform: [{ translateY: labelTranslateYPrincipleAmount }] },
                               { color: isPrincipleAmountFocused ? '#5585e6' : 'white' },
                             ]}
                >
                               Principle Amount:
                           </Animated.Text>

              <TextInput
                style={styles.textInput}

                 placeholderTextColor="white"
                keyboardType="numeric"
               value={principleAmount}
              onChangeText={handlePrincipleAmountChange}
                onFocus={onFocusPrincipleAmount}
                onBlur={onBlurPrincipleAmount}
              />
            </View>


            <View style={styles.textInputContainer}>

         <Animated.Text
        style={[
                        styles.label,
                        { transform: [{ translateY: labelTranslateYAnnualInterestRate }] },
                        { color: isAnnualInterestRateFocused ? '#5585e6' : 'white' },
                      ]}

         >
                         Annual Interest Rate (%)
                    </Animated.Text>

                          <TextInput
                            style={styles.textInput}

                             placeholderTextColor="white"
                            keyboardType="numeric"
                            value={annualInterestRate}
                                         onChangeText={handleAnnualInterestRateChange}
                          onFocus={onFocusAnnualInterestRate}
                                 onBlur={onBlurAnnualInterestRate}
                          />
                        </View>

  <View style={styles.textInputContainer}>


         <Animated.Text
        style={[  styles.label,
                        { transform: [{ translateY: labelTranslateYTenure }] },
                        { color: isTenureFocused ? '#5585e6' : 'white' },
                      ]}

         >
                         Tenure
                    </Animated.Text>
                          <TextInput
                            style={styles.textInput}

                             placeholderTextColor="white"
                            keyboardType="numeric"
                            value={tenure}
                                         onChangeText={handleTenureChange}

                           onFocus={onFocusTenure}
                                   onBlur={onBlurTenure}
                          />
                        </View>
   <View    style = {styles.ButtonRowSection}  >
         <TouchableOpacity
           style={styles.buttonReset}
           onPress={() => handleButtonPress('One')} >

          <FontAwesome name="times" size={20} color="white" />
           <Text style={styles.buttonText}>Reset</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.buttonCalculate} onPress={() => handleButtonPress('Two')} >
          <FontAwesome name="check" size={20} color="white" />
                <Text style={styles.buttonText}>Calculate</Text>
         </TouchableOpacity>

      </View>

 </View>



<View   style = {styles.section}   >

 <Text style={styles.sectionTitle}>Loan EMI</Text>


         <TouchableOpacity
           style={styles.button}
           onPress={() => handleButtonPress('One')}
         >
           <Text  style={styles.innerText}  >HL</Text>
           <Text style={styles.buttonText}>Home Loan</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >CL</Text>
                <Text style={styles.buttonText}>Car Loan</Text>
         </TouchableOpacity>



         </View>





       </ScrollView>

       </ScrollView>
       </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flexGrow: 1,
        backgroundColor: 'black',
    },

      titleContainer: {
        width: '100%',
        padding: 20,
        alignItems: 'left',
        backgroundColor: '#3b3a38',
        borderBottomColor: 'white',
      },

       section: {
          marginBottom: 10,
          backgroundColor: "#3b3a38",
          padding:8,
          borderRadius: 12,

        },
        sectionTitle: {
          color: 'white',
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 16,
          textAlign: 'center'
        },
      title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },

     scrollView: {
        flexGrow: 1,
         justifyContent: 'flex-start',

        alignItems: 'stretch',
        paddingHorizontal: 10,
                paddingTop: 10
      },

     TopScrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
      },

    innerText: {
      color: '#bcbec2',
      fontSize: 18,
      backgroundColor: '#4168a6',
      fontWeight: 'bold',
      marginRight: 15,
      borderWidth: 0.0,
      textAlign: 'center',
      width: 60,
     // borderColor: 'white', // Border color
      padding: 5,
      borderRadius: 8,
    },

    button: {
          flexDirection: 'row',
          backgroundColor: '#1864de',
          padding: 16,
          margin: 4,
          borderRadius: 8,
          alignItems: 'center',
          borderWidth: 0.0,
          width: 100,
          borderColor: 'white', // Border color
          borderWidth: 1,       // Border width
        },

    buttonText: {
      color: 'white',
      fontSize: 16,
      alignItems: 'center',
      marginLeft: 10, // Add spacing between icon and text
      textAlignVertical: 'center',
    },
 buttonReset: {
          flexDirection: 'row',
          backgroundColor: '#3b3a38',
          padding: 16,
          margin: 4,
          borderRadius: 8,
          alignItems: 'center',
          borderWidth: 0.0,
          width: 120,
          borderColor: 'white', // Border color
          borderWidth: 1,       // Border width
        },

        buttonCalculate: {
                  flexDirection: 'row',
                  backgroundColor: '#3b3a38',
                  padding: 16,
                  margin: 4,
                  borderRadius: 8,
                  alignItems: 'center',
                  borderWidth: 0.0,
                  width: 140,
                  borderColor: 'white', // Border color
                  borderWidth: 1,       // Border width
                },

    ButtonRowSection :{
     flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,

    },

    textInputContainer: {
        marginTop: 25,
        borderBottomWidth: 1,
        borderColor: 'white',

      },


        textInput: {
          paddingHorizontal: 10,
          fontSize: 16,
          padding:10,
          color: 'white'
        },



  dropdownContainer: {
    marginTop: 20,




  },
  dropdownButton: {
     borderBottomWidth: 1,
        borderColor: 'white',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

  },
  dropdownButtonText: {
    color: 'white',
    fontSize: 16,
    padding: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalItem: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    width: 250,
  },
  modalItemText: {
    fontSize: 16,
  },
  dropdownIcon: {
      marginRight: 10,
    },
 label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    padding:10
  },
});
