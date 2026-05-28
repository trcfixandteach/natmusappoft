import React, { useEffect, useState } from 'react';
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

const DashboardScreen = ({ navigation }) => {
  const [myLoans, setMyLoans] = useState([
    {
      id: 1,
      amount: 1000,
      status: 'In Progress',
      term: 'Monthly',
      nextPaymentDate: '2026-06-15',
    },
  ]);

  const activeLoan = myLoans.find(loan => loan.status === 'In Progress');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back!</Text>
            <Text style={styles.userName}>User</Text>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bell" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <MaterialCommunityIcons name="credit-card" size={32} color="#2E7D32" />
            <Text style={styles.statLabel}>Total Loans</Text>
            <Text style={styles.statValue}>{myLoans.length}</Text>
          </View>
          <View style={[styles.statCard, styles.statCard2]}>
            <MaterialCommunityIcons name="cash" size={32} color="#F57C00" />
            <Text style={styles.statLabel}>Amount Borrowed</Text>
            <Text style={styles.statValue}>K{myLoans.reduce((sum, loan) => sum + loan.amount, 0)}</Text>
          </View>
        </View>

        {/* Active Loan */}
        {activeLoan ? (
          <View style={styles.activeLoanContainer}>
            <Text style={styles.sectionTitle}>Active Loan</Text>
            <View style={styles.loanCard}>
              <View style={styles.loanHeader}>
                <Text style={styles.loanAmount}>K{activeLoan.amount}</Text>
                <View style={[styles.badge, { backgroundColor: '#FF9800' }]}>
                  <Text style={styles.badgeText}>In Progress</Text>
                </View>
              </View>
              <View style={styles.loanDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Term:</Text>
                  <Text style={styles.detailValue}>{activeLoan.term}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Next Payment:</Text>
                  <Text style={styles.detailValue}>{activeLoan.nextPaymentDate}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => navigation.navigate('LoanStatus', { loanId: activeLoan.id })}
              >
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('LoanSelection')}
            >
              <MaterialCommunityIcons name="plus-circle" size={28} color="#2E7D32" />
              <Text style={styles.actionText}>Apply Loan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Payment')}
            >
              <MaterialCommunityIcons name="credit-card-plus" size={28} color="#2E7D32" />
              <Text style={styles.actionText}>Make Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('PromoCode')}
            >
              <MaterialCommunityIcons name="ticket-discount" size={28} color="#2E7D32" />
              <Text style={styles.actionText}>Promo Codes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Statements')}
            >
              <MaterialCommunityIcons name="file-document" size={28} color="#2E7D32" />
              <Text style={styles.actionText}>Statements</Text>
            </TouchableOpacity>
          </View>
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
  greeting: {
    fontSize: 14,
    color: '#999',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statCard2: {
    backgroundColor: '#FFF3E0',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 12,
  },
  activeLoanContainer: {
    marginBottom: 24,
  },
  loanCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  loanAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  loanDetails: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 12,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
  },
  detailValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  viewButton: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#2E7D32',
    fontWeight: '600',
    fontSize: 14,
  },
  quickActionsContainer: {
    marginBottom: 24,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default DashboardScreen;
