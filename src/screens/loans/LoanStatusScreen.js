import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  ProgressViewIOS,
  ProgressBarAndroid,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

const LoanStatusScreen = ({ navigation, route }) => {
  const { loanId } = route.params || {};
  const [loanData] = useState({
    id: loanId || 1,
    amount: 1000,
    status: 'In Progress',
    amountPaid: 300,
    amountRemaining: 700,
    totalRepayment: 1050,
    nextPaymentDate: '2026-06-15',
    monthlyPayment: 150,
    paymentHistory: [
      { date: '2026-05-15', amount: 150, status: 'Completed' },
      { date: '2026-04-15', amount: 150, status: 'Completed' },
      { date: '2026-03-15', amount: 150, status: 'Completed' },
    ],
  });

  const progressPercentage = (loanData.amountPaid / loanData.totalRepayment) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Loan Status</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Loan Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Repayment Progress</Text>
            <Text style={styles.progressPercent}>{Math.round(progressPercentage)}%</Text>
          </View>
          {Platform.OS === 'ios' ? (
            <ProgressViewIOS value={progressPercentage / 100} style={styles.progressBar} />
          ) : (
            <ProgressBarAndroid progress={progressPercentage / 100} style={styles.progressBar} />
          )}
          <View style={styles.progressDetails}>
            <View style={styles.progressDetail}>
              <Text style={styles.detailLabel}>Paid</Text>
              <Text style={styles.detailValue}>K{loanData.amountPaid}</Text>
            </View>
            <View style={styles.progressDetail}>
              <Text style={styles.detailLabel}>Remaining</Text>
              <Text style={styles.detailValue}>K{loanData.amountRemaining}</Text>
            </View>
          </View>
        </View>

        {/* Loan Details */}
        <View style={styles.detailsCard}>
          <Text style={styles.sectionTitle}>Loan Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Total Amount</Text>
            <Text style={styles.detailValue}>K{loanData.amount}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Monthly Payment</Text>
            <Text style={styles.detailValue}>K{loanData.monthlyPayment}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Next Payment Due</Text>
            <Text style={styles.detailValue}>{loanData.nextPaymentDate}</Text>
          </View>
          <View style={[styles.detailRow, styles.borderNone]}>
            <Text style={styles.detailLabel}>Status</Text>
            <View style={[styles.statusBadge, { backgroundColor: '#FF9800' }]}>
              <Text style={styles.statusText}>{loanData.status}</Text>
            </View>
          </View>
        </View>

        {/* Payment History */}
        <View style={styles.historyCard}>
          <Text style={styles.sectionTitle}>Payment History</Text>
          {loanData.paymentHistory.map((payment, index) => (
            <View key={index} style={[styles.historyItem, index === loanData.paymentHistory.length - 1 && styles.lastItem]}>
              <View style={styles.historyLeft}>
                <MaterialCommunityIcons name="check-circle" size={20} color="#4CAF50" />
                <View style={styles.historyText}>
                  <Text style={styles.historyDate}>{payment.date}</Text>
                  <Text style={styles.historyStatus}>{payment.status}</Text>
                </View>
              </View>
              <Text style={styles.historyAmount}>K{payment.amount}</Text>
            </View>
          ))}
        </View>

        {/* Action Button */}
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate('Payment', { loanId: loanData.id })}
        >
          <MaterialCommunityIcons name="credit-card-plus" size={20} color="#FFFFFF" />
          <Text style={styles.payButtonText}>Make Payment</Text>
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
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  progressPercent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  progressBar: {
    height: 8,
    marginBottom: 16,
  },
  progressDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  progressDetail: {
    alignItems: 'center',
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  borderNone: {
    borderBottomWidth: 0,
  },
  detailLabel: {
    fontSize: 13,
    color: '#999',
  },
  detailValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  historyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  historyText: {
    marginLeft: 12,
  },
  historyDate: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  historyStatus: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  historyAmount: {
    fontSize: 13,
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
    marginTop: 20,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default LoanStatusScreen;
