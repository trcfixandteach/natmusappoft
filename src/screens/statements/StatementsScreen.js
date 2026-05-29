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

const StatementsScreen = ({ navigation }) => {
  const [statements] = useState([
    {
      id: 1,
      month: 'May 2026',
      transactions: 5,
      totalAmount: 750,
      date: '2026-05-31',
    },
    {
      id: 2,
      month: 'April 2026',
      transactions: 4,
      totalAmount: 600,
      date: '2026-04-30',
    },
    {
      id: 3,
      month: 'March 2026',
      transactions: 3,
      totalAmount: 450,
      date: '2026-03-31',
    },
  ]);

  const renderStatementItem = ({ item }) => (
    <TouchableOpacity
      style={styles.statementCard}
      onPress={() => navigation.navigate('TransactionHistory', { statementId: item.id })}
    >
      <View style={styles.statementHeader}>
        <View>
          <Text style={styles.monthText}>{item.month}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#2E7D32" />
      </View>
      <View style={styles.statementDetails}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Transactions</Text>
          <Text style={styles.detailValue}>{item.transactions}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Total Amount</Text>
          <Text style={styles.detailValue}>K{item.totalAmount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Statements</Text>
        <MaterialCommunityIcons name="file-document" size={24} color="#2E7D32" />
      </View>
      <FlatList
        data={statements}
        renderItem={renderStatementItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
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
  statementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  monthText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  dateText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  statementDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  detail: {
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#E0E0E0',
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
});

export default StatementsScreen;