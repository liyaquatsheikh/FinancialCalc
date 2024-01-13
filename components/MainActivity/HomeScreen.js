import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView,StatusBar, SafeAreaView } from 'react-native';


const { width } = Dimensions.get('window');

export default function HomeScreen( { navigation } ) {

 const handleButtonPress = (buttonName) => {
    alert(`Button ${buttonName} clicked!`);
  };
  return (

   <SafeAreaView style={styles.container}>
  <StatusBar   barStyle="light-content"   backgroundColor="#3b3a38"/>


  <ScrollView   contentContainerStyle={styles.TopScrollView}>


{/* sdfsd
  <View style={styles.titleContainer}>
          <Text style={styles.title}>Financial Calculator</Text>
   </View>

*/}
  <ScrollView   contentContainerStyle={styles.scrollView}>


<View   style = {styles.section}   >

 <Text style={styles.sectionTitle}>Loan EMI</Text>


         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("Home Loan")}
         >
           <Text  style={styles.innerText}  >HL</Text>
           <Text style={styles.buttonText}>Home Loan</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Car Loan")} >
                <Text  style={styles.innerText}  >CL</Text>
                <Text style={styles.buttonText}>Car Loan</Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PersonalLoan")} >
                <Text  style={styles.innerText}  >PL </Text>
                <Text style={styles.buttonText}>Personal Loan</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >BL </Text>
                <Text style={styles.buttonText}>Business Loan</Text>
         </TouchableOpacity>

         </View>




<View   style = {styles.section}   >

 <Text style={styles.sectionTitle}>Bank</Text>


         <TouchableOpacity
           style={styles.button}
           onPress={() => handleButtonPress('One')}
         >
           <Text  style={styles.innerText}  >EMI </Text>
           <Text style={styles.buttonText}>Button One</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >EMI </Text>
                <Text style={styles.buttonText}>Button Two</Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >EMI </Text>
                <Text style={styles.buttonText}>Button Two</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >EMI </Text>
                <Text style={styles.buttonText}>Button Two</Text>
         </TouchableOpacity>

         </View>





<View   style = {styles.section}   >

 <Text style={styles.sectionTitle}>Stock Market</Text>


         <TouchableOpacity
           style={styles.button}
           onPress={() => handleButtonPress('One')}
         >
           <Text  style={styles.innerText}  >EMI </Text>
           <Text style={styles.buttonText}>Button One</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >EMI </Text>
                <Text style={styles.buttonText}>Button Two</Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >EMI </Text>
                <Text style={styles.buttonText}>Button Two</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Two')} >
                <Text  style={styles.innerText}  >EMI </Text>
                <Text style={styles.buttonText}>Button Two</Text>
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
          marginBottom: 16,
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
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 10,

                paddingTop: 10
      },

     TopScrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
      },
    button: {
      flexDirection: 'row',
      backgroundColor: '#3b3a38',
      padding: 10,
      margin: 2,
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 0.6
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
    buttonText: {
      color: 'white',
      fontSize: 16,
//      fontWeight: 'bold',
    },
});
