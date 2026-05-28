import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

const loanOptions = [
  { id: 1, amount: 100, interestRate: 5, term: 'Monthly' },
  { id: 2, amount: 200, interestRate: 5, term: 'Monthly' },
  { id: 3, amount: 500, interestRate: 4.5, term: 'Monthly' },
  { id: 4, amount: 1000, interestRate: 4, term: 'Monthly' },
  { id: 5, amount: 2000, interestRate: 3.5, term: 'Monthly' },
];

const LoanSelectionScreen = ({ navigation }) => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleSelectLoan = (loan) => {
    setSelectedLoan(loan.id);
    navigation.navigate('LoanDetails', { loan });
  };

  const renderLoanCard = ({ item }) => (
    <TouchableOpacity
      style={styles.loanCard}
      onPress={() => handleSelectLoan(item)}
    >
      <View style={styles.loanHeader}>
        <Text style={styles.loanAmount}>K{item.amount}</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#2E7D32" />
      </View>
      <View style={styles.loanDetails}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Interest Rate</Text>
          <Text style={styles.detailValue}>{item.interestRate}%</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Term</Text>
          <Text style={styles.detailValue}>{item.term}</Text>
        </View>
      </View>
      <View style={styles.loanFooter}>
        <Text style={styles.selectText}>Select Amount</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Select Loan Amount</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.content}>
          <Text style={styles.subtitle}>Choose your preferred loan amount</Text>
          <FlatList
            data={loanOptions}
            renderItem={renderLoanCard}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            style={styles.list}
          />
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
  subtitle: {
    fontSize: 14,
    color: '#999',
    marginBottom: 16,
  },
  list: {
    marginTop: 8,
  },
  loanCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  loanAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  loanDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
  },
  detail: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  loanFooter: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectText: {
    color: '#2E7D32',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default LoanSelectionScreen;
