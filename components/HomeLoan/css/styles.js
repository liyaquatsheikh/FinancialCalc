import { StyleSheet, Dimensions } from 'react-native';


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
          marginBottom: 12,
          backgroundColor: "#3b3a38",
          paddingLeft:18,
          paddingRight:18,
          paddingTop: 10,
          paddingBottom: 10,
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
 buttonTextCalculate: {
      color: '#cfa006',
      fontSize: 16,
      alignItems: 'center',
      marginLeft: 10, // Add spacing between icon and text
      textAlignVertical: 'center',
    },

    buttonTextReset: {
      color: '#eb1e0c',
      fontSize: 16,
      alignItems: 'center',
      marginLeft: 10, // Add spacing between icon and text
      textAlignVertical: 'center',
    },
 buttonReset: {
          flexDirection: 'row',
          backgroundColor: '#333230',
          padding: 16,
          margin: 4,
          borderRadius: 8,
          alignItems: 'center',
          borderWidth: 0.0,
          width: 120,
          borderColor: '#eb1e0c', // Border color
          borderWidth: 0.3,       // Border width
        },

        buttonCalculate: {
                  flexDirection: 'row',
                  backgroundColor: '#333230',
                  padding: 16,
                  margin: 4,
                  borderRadius: 8,
                  alignItems: 'center',
                  borderWidth: 0.0,
                  width: 140,
                  borderColor: '#cfa006', // Border color
                  borderWidth: 0.3,       // Border width
                },

    ButtonRowSection :{
       flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20, // Adjust spacing if needed


    },

        textInputContainer: {
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: '#e8a41c',

          },


        textInput: {
          paddingHorizontal: 8,
          fontSize: 16,
          padding:10,
          color: 'white'
        },



  dropdownContainer: {
    marginTop: 8,
     position: 'relative',

  },
  dropdownButton: {
     borderBottomWidth: 1,
        borderColor: 'white',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor : '#e39612',

  },
  dropdownButtonText: {
    color: '#e39612',
    fontSize: 16,
    padding: 6
  },
  modalContainer: {
 position: 'absolute',
  top: 180,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalItem: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    width: 350
  },
  modalItemText: {
    fontSize: 20,
  },
  dropdownIcon: {
      marginRight: 10,
      color: '#e39612'
    },



 label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 2,
    padding:0
  },

 labelFocused: {
    color: '#5585e6',
    fontSize: 15,
    // Additional styles for focused state
  },
  labelNotFocused: {
    color: '#e39612',
    fontSize: 16,
    // Additional styles for not focused state
  },


});


export default styles;