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

const TransactionHistoryScreen = ({ navigation, route }) => {
  const { statementId } = route.params || {};
  const [transactions] = useState([
    {
      id: 1,
      type: 'payment',
      description: 'Loan Repayment',
      amount: 150,
      date: '2026-05-15',
      time: '10:30 AM',
    },
    {
      id: 2,
      type: 'payment',
      description: 'Loan Repayment',
      amount: 150,
      date: '2026-05-10',
      time: '02:45 PM',
    },
    {
      id: 3,
      type: 'disbursement',
      description: 'Loan Disbursement',
      amount: 1000,
      date: '2026-04-20',
      time: '09:15 AM',
    },
  ]);

  const getTransactionIcon = (type) => {
    return type === 'payment' ? 'arrow-up-circle' : 'arrow-down-circle';
  };

  const getTransactionColor = (type) => {
    return type === 'payment' ? '#FF6B6B' : '#51CF66';
  };

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionCard}>
      <View style={styles.transactionIcon}>
        <MaterialCommunityIcons
          name={getTransactionIcon(item.type)}
          size={28}
          color={getTransactionColor(item.type)}
        />
      </View>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDateTime}>{item.date} at {item.time}</Text>
      </View>
      <Text style={[styles.transactionAmount, { color: getTransactionColor(item.type) }]}>
        {item.type === 'payment' ? '-' : '+'}K{item.amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Transaction History</Text>
        <View style={{ width: 24 }} />
      </View>

      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons name="history" size={60} color="#E0E0E0" />
          <Text style={styles.emptyText}>No transactions</Text>
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
  transactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    marginRight: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  transactionDateTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    marginTop: 12,
  },
});

export default TransactionHistoryScreen;