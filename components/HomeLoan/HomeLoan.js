import React, { useState, useRef, useEffect  } from 'react';
import {
            View, Text,
            TouchableOpacity,
            StyleSheet, Dimensions,
            ScrollView,StatusBar,
            SafeAreaView, TextInput ,
            Modal, FlatList, Animated
        }
from 'react-native';
import styles from './css/styles';
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
        const [isInputFocused, setInputFocused] = useState(false);
        const [isPrincipleAmountFocused, setPrincipleAmountFocused] = useState(false);
        const [isAnnualInterestRateFocused, setAnnualInterestRateFocused] = useState(false);
        const [isTenureFocused, setTenureFocused] = useState(false);
        const labelPositionPrincipleAmount = useRef(new Animated.Value(0)).current;
        const labelPositionAnnualInterestRate = useRef(new Animated.Value(0)).current;
        const labelPositionTenure = useRef(new Animated.Value(0)).current;
        const { label, labelFocused, labelNotFocused } = styles;

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
                                animationType="fade"
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
                            {
                              color: isPrincipleAmountFocused ? '#5585e6' : '#e39612' ,
                                 fontSize : isPrincipleAmountFocused ? 15 : 16
                            ,   borderColor: isPrincipleAmountFocused ? '#5585e6' : '#e39612',
                        },
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
                  { color: isAnnualInterestRateFocused ? '#5585e6' : '#e39612'
                   , fontSize : isAnnualInterestRateFocused ? 15 : 16
                   },
             ]}
         >
            Annual Interest Rate (%):
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
                        { color: isTenureFocused ? '#5585e6' : '#e39612'
                         , fontSize : isAnnualInterestRateFocused ? 15 : 16
                        },
                      ]}

         >
                         Tenure:
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

          <FontAwesome name="times" size={20} color="#eb1e0c" />
           <Text style={styles.buttonTextReset}>Reset</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.buttonCalculate} onPress={() => handleButtonPress('Two')} >
          <FontAwesome name="check" size={20} color="#cfa006" />
                <Text style={styles.buttonTextCalculate}>Calculate</Text>
         </TouchableOpacity>

      </View>

 </View>



        <View   style = {styles.section}   >

                     <Text style={styles.sectionTitle}>Result</Text>

         </View>


       </ScrollView>
       </ScrollView>
       </SafeAreaView>
  );
}

