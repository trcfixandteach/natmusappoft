import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Picker,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

const LoanDetailsScreen = ({ navigation, route }) => {
  const { loan } = route.params;
  const [repaymentTerm, setRepaymentTerm] = useState('monthly');
  const [totalRepayment, setTotalRepayment] = useState(loan.amount * (1 + loan.interestRate / 100));

  const calculateRepayment = (term) => {
    const baseAmount = loan.amount * (1 + loan.interestRate / 100);
    return baseAmount;
  };

  const handleContinue = () => {
    navigation.navigate('LoanApplication', {
      loan,
      repaymentTerm,
      totalRepayment,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Loan Details</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.content}>
          {/* Loan Summary */}
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Loan Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Loan Amount</Text>
              <Text style={styles.summaryValue}>K{loan.amount}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Interest Rate</Text>
              <Text style={styles.summaryValue}>{loan.interestRate}%</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.summaryLabel}>Total Repayment</Text>
              <Text style={styles.totalValue}>K{totalRepayment.toFixed(2)}</Text>
            </View>
          </View>

          {/* Repayment Term Selection */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Repayment Term</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={repaymentTerm}
                onValueChange={(itemValue) => {
                  setRepaymentTerm(itemValue);
                  setTotalRepayment(calculateRepayment(itemValue));
                }}
                style={styles.picker}
              >
                <Picker.Item label="Monthly" value="monthly" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Bi-weekly" value="biweekly" />
              </Picker>
            </View>
          </View>

          {/* Key Terms */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsTitle}>Key Terms & Conditions</Text>
            <View style={styles.termItem}>
              <MaterialCommunityIcons name="check-circle" size={20} color="#2E7D32" />
              <Text style={styles.termText}>Flexible repayment schedule</Text>
            </View>
            <View style={styles.termItem}>
              <MaterialCommunityIcons name="check-circle" size={20} color="#2E7D32" />
              <Text style={styles.termText}>Early repayment without penalty</Text>
            </View>
            <View style={styles.termItem}>
              <MaterialCommunityIcons name="check-circle" size={20} color="#2E7D32" />
              <Text style={styles.termText}>Secure and encrypted transactions</Text>
            </View>
            <View style={styles.termItem}>
              <MaterialCommunityIcons name="check-circle" size={20} color="#2E7D32" />
              <Text style={styles.termText}>No hidden charges</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Continue to Application</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  content: {
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  totalRow: {
    borderBottomWidth: 0,
    paddingTop: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#999',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 12,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  termsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  termsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 12,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  termText: {
    fontSize: 13,
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoanDetailsScreen;
