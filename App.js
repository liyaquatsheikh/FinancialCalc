import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/MainActivity/HomeScreen";
import HomeLoan from "./components/HomeLoan/HomeLoan";
import CarLoan from "./components/CarLoan/CarLoan";
import PersonalLoan from "./components/PersonalLoan/PersonalLoan";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"   component = {HomeScreen}
                options={{
                    title: "Home",
                    headerStyle:{
                    backgroundColor: "#3b3a38",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle:{
                    fontWeight: "bold"
                    },
                }}

                />
                <Stack.Screen name="Home Loan"   component = {HomeLoan}
                   options={{
                                    title: "Home Loan",
                                    headerStyle:{
                                    backgroundColor: "#3b3a38",
                                    },
                                    headerTintColor: "#fff",
                                    headerTitleStyle:{
                                    fontWeight: "bold"
                                    },
                                }}
                />
                <Stack.Screen name="CarLoan"   component = {CarLoan} />
              <Stack.Screen name="PersonalLoan"   component = {PersonalLoan} />
         </Stack.Navigator>
       </NavigationContainer>
  );
}