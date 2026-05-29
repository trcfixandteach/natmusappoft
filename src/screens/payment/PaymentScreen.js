import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

const PaymentScreen = ({ navigation, route }) => {
  const { loanId } = route.params || {};
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mobile-money');
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Payment of K' + amount + ' processed successfully!');
      navigation.goBack();
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Make Payment</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Amount Input */}
        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Amount to Pay</Text>
          <View style={styles.amountInputContainer}>
            <Text style={styles.currencySymbol}>K</Text>
            <TextInput
              style={styles.amountInput}
              placeholder="0.00"
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              editable={!loading}
            />
          </View>
        </View>

        {/* Payment Methods */}
        <View style={styles.methodsSection}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          
          <TouchableOpacity
            style={[styles.methodCard, paymentMethod === 'mobile-money' && styles.methodCardSelected]}
            onPress={() => setPaymentMethod('mobile-money')}
          >
            <MaterialCommunityIcons name="mobile-payment" size={28} color="#2E7D32" />
            <View style={styles.methodInfo}>
              <Text style={styles.methodName}>Mobile Money</Text>
              <Text style={styles.methodDesc}>MTN, Airtel, Zamtel</Text>
            </View>
            <MaterialCommunityIcons
              name={paymentMethod === 'mobile-money' ? 'radio-button-checked' : 'radio-button-unchecked'}
              size={24}
              color="#2E7D32"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.methodCard, paymentMethod === 'bank' && styles.methodCardSelected]}
            onPress={() => setPaymentMethod('bank')}
          >
            <MaterialCommunityIcons name="bank" size={28} color="#2E7D32" />
            <View style={styles.methodInfo}>
              <Text style={styles.methodName}>Bank Transfer</Text>
              <Text style={styles.methodDesc}>Direct bank deposit</Text>
            </View>
            <MaterialCommunityIcons
              name={paymentMethod === 'bank' ? 'radio-button-checked' : 'radio-button-unchecked'}
              size={24}
              color="#2E7D32"
            />
          </TouchableOpacity>
        </View>

        {/* Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.sectionTitle}>Payment Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Amount</Text>
            <Text style={styles.summaryValue}>K{amount || '0.00'}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Fee</Text>
            <Text style={styles.summaryValue}>K0.00</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.summaryLabel}>Total</Text>
            <Text style={styles.totalValue}>K{amount || '0.00'}</Text>
          </View>
        </View>

        {/* Payment Button */}
        <TouchableOpacity
          style={[styles.payButton, loading && styles.buttonDisabled]}
          onPress={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <MaterialCommunityIcons name="check" size={20} color="#FFFFFF" />
              <Text style={styles.payButtonText}>Process Payment</Text>
            </>
          )}
        </TouchableOpacity>
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
  amountSection: {
    marginBottom: 24,
  },
  amountLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2E7D32',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#FFFFFF',
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  methodsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  methodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  methodCardSelected: {
    borderColor: '#2E7D32',
    backgroundColor: '#F0F7F0',
  },
  methodInfo: {
    flex: 1,
    marginLeft: 16,
  },
  methodName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  methodDesc: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  totalRow: {
    borderBottomWidth: 0,
    paddingTop: 12,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#999',
  },
  summaryValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  payButton: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});

export default PaymentScreen;