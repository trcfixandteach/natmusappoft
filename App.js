import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

// Screens
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
import PaymentScreen from './src/screens/payment/PaymentScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import SettingsScreen from './src/screens/profile/SettingsScreen';
import PromoCodeScreen from './src/screens/promo/PromoCodeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Auth Stack
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
    </Stack.Navigator>
  );
};

// Dashboard Stack
const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="DashboardHome" component={DashboardScreen} />
      <Stack.Screen name="LoanSelection" component={LoanSelectionScreen} />
      <Stack.Screen name="LoanDetails" component={LoanDetailsScreen} />
      <Stack.Screen name="LoanApplication" component={LoanApplicationScreen} />
      <Stack.Screen name="LoanStatus" component={LoanStatusScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PromoCode" component={PromoCodeScreen} />
      <Stack.Screen name="Statements" component={StatementsScreen} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
    </Stack.Navigator>
  );
};

// Loans Stack
const LoansStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="MyLoansHome" component={MyLoansScreen} />
      <Stack.Screen name="LoanStatus" component={LoanStatusScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

// Profile Stack
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="ProfileHome" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

// Main App Bottom Tab Navigator
const MainAppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E0E0E0',
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoansStack}
        options={{
          tabBarLabel: 'My Loans',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={StatementsScreen}
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="swap-horizontal" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root Navigator
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    // Simulate splash screen timeout
    const bootstrapAsync = async () => {
      try {
        // Fetch user token from storage
        // await AsyncStorage.getItem('userToken');
        setUserToken(null); // For now, set to null to show auth screens
      } catch (e) {
        console.error('Failed to restore token:', e);
      }
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken == null ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainApp" component={MainAppTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
