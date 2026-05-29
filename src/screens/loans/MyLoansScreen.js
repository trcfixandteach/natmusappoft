import React, { useState, useEffect } from 'react';
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

const MyLoansScreen = ({ navigation }) => {
  const [loans, setLoans] = useState([
    {
      id: 1,
      amount: 1000,
      status: 'In Progress',
      nextPaymentDate: '2026-06-15',
      balance: 500,
      monthlyPayment: 150,
    },
    {
      id: 2,
      amount: 500,
      status: 'Completed',
      completedDate: '2026-04-20',
      balance: 0,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return '#FF9800';
      case 'Completed':
        return '#4CAF50';
      case 'Pending':
        return '#2196F3';
      default:
        return '#999';
    }
  };

  const renderLoanItem = ({ item }) => (
    <TouchableOpacity
      style={styles.loanCard}
      onPress={() => navigation.navigate('LoanStatus', { loanId: item.id })}
    >
      <View style={styles.loanHeader}>
        <View>
          <Text style={styles.loanAmount}>K{item.amount}</Text>
          <Text style={styles.loanId}>Loan ID: {item.id}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.loanDetails}>
        {item.balance !== undefined && (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Balance</Text>
            <Text style={styles.detailValue}>K{item.balance}</Text>
          </View>
        )}
        {item.monthlyPayment && (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Monthly Payment</Text>
            <Text style={styles.detailValue}>K{item.monthlyPayment}</Text>
          </View>
        )}
        {item.nextPaymentDate && (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Next Payment</Text>
            <Text style={styles.detailValue}>{item.nextPaymentDate}</Text>
          </View>
        )}
      </View>

      <View style={styles.loanFooter}>
        <Text style={styles.viewMoreText}>View Details</Text>
        <MaterialCommunityIcons name="chevron-right" size={20} color="#2E7D32" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Loans</Text>
        <MaterialCommunityIcons name="information" size={24} color="#2E7D32" />
      </View>

      {loans.length > 0 ? (
        <FlatList
          data={loans}
          renderItem={renderLoanItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
          scrollEnabled={true}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons name="folder-open" size={60} color="#E0E0E0" />
          <Text style={styles.emptyText}>No loans yet</Text>
          <Text style={styles.emptySubtext}>Apply for a loan to get started</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  listContent: {
    padding: 16,
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
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  loanAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  loanId: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  loanDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 11,
    color: '#999',
  },
  detailValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  loanFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  viewMoreText: {
    color: '#2E7D32',
    fontWeight: '600',
    fontSize: 13,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
});

export default MyLoansScreen;
