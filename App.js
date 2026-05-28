import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

// Import Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import OTPScreen from './src/screens/auth/OTPScreen';
import DashboardScreen from './src/screens/dashboard/DashboardScreen';
import LoanSelectionScreen from './src/screens/loans/LoanSelectionScreen';
import LoanDetailsScreen from './src/screens/loans/LoanDetailsScreen';
import LoanApplicationScreen from './src/screens/loans/LoanApplicationScreen';
import MyLoansScreen from './src/screens/loans/MyLoansScreen';
import LoanStatusScreen from './src/screens/loans/LoanStatusScreen';
import StatementsScreen from './src/screens/statements/StatementsScreen';
import TransactionHistoryScreen from './src/screens/statements/TransactionHistoryScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import SettingsScreen from './src/screens/profile/SettingsScreen';
import PaymentScreen from './src/screens/payment/PaymentScreen';
import PromoCodeScreen from './src/screens/promo/PromoCodeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') iconName = 'home';
          else if (route.name === 'Loans') iconName = 'credit-card';
          else if (route.name === 'Statements') iconName = 'file-document';
          else if (route.name === 'Profile') iconName = 'account';
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#999999',
        headerShown: true,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Loans" component={MyLoansScreen} options={{ title: 'My Loans' }} />
      <Tab.Screen name="Statements" component={StatementsScreen} options={{ title: 'Statements' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Account' }} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [splash, setSplash] = React.useState(true);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          MaterialCommunityIcons: require('@react-native-vector-icons/material-community').default,
        });
        setIsReady(true);
        setTimeout(() => setSplash(false), 2000);
      } catch (error) {
        console.log('Font loading error:', error);
      }
    };
    loadFonts();
  }, []);

  if (!isReady || splash) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },
          }}
        >
          {!isLoggedIn ? (
            <Stack.Group screenOptions={{ animationEnabled: false }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="OTP" component={OTPScreen} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="MainApp" component={DashboardNavigator} />
              <Stack.Screen name="LoanSelection" component={LoanSelectionScreen} />
              <Stack.Screen name="LoanDetails" component={LoanDetailsScreen} />
              <Stack.Screen name="LoanApplication" component={LoanApplicationScreen} />
              <Stack.Screen name="LoanStatus" component={LoanStatusScreen} />
              <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
              <Stack.Screen name="Payment" component={PaymentScreen} />
              <Stack.Screen name="PromoCode" component={PromoCodeScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </Provider>
  );
}
