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

const LoanApplicationScreen = ({ navigation, route }) => {
  const { loan, repaymentTerm, totalRepayment } = route.params;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    employmentStatus: '',
    monthlyIncome: '',
    purpose: '',
    agreeTerms: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmitApplication = () => {
    if (!formData.employmentStatus || !formData.monthlyIncome || !formData.purpose) {
      alert('Please fill in all fields');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to terms and conditions');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('LoanStatus', { applicationId: 'APP001' });
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Loan Application</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Loan Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Loan Amount</Text>
          <Text style={styles.summaryValue}>K{loan.amount}</Text>
          <Text style={styles.summaryLabel}>Total Repayment</Text>
          <Text style={styles.summaryValue}>K{totalRepayment.toFixed(2)}</Text>
        </View>

        {/* Application Form */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Employment Status *</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="e.g., Employed, Self-employed"
                value={formData.employmentStatus}
                onChangeText={(value) => handleInputChange('employmentStatus', value)}
                editable={!loading}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Monthly Income *</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.currencyPrefix}>K</Text>
              <TextInput
                style={styles.input}
                placeholder="0.00"
                value={formData.monthlyIncome}
                onChangeText={(value) => handleInputChange('monthlyIncome', value)}
                keyboardType="decimal-pad"
                editable={!loading}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Loan Purpose *</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Describe what you'll use this loan for"
                value={formData.purpose}
                onChangeText={(value) => handleInputChange('purpose', value)}
                multiline
                numberOfLines={4}
                editable={!loading}
              />
            </View>
          </View>

          {/* Terms Checkbox */}
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => handleInputChange('agreeTerms', !formData.agreeTerms)}
          >
            <MaterialCommunityIcons
              name={formData.agreeTerms ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={24}
              color={formData.agreeTerms ? '#2E7D32' : '#999'}
            />
            <Text style={styles.checkboxText}>
              I agree to the terms and conditions
            </Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.submitButton, loading && styles.buttonDisabled]}
            onPress={handleSubmitApplication}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.submitButtonText}>Submit Application</Text>
            )}
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
  summaryCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 12,
  },
  form: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    paddingVertical: 12,
  },
  textArea: {
    paddingVertical: 10,
    textAlignVertical: 'top',
  },
  currencyPrefix: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
    marginRight: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 8,
  },
  checkboxText: {
    fontSize: 13,
    color: '#333',
    marginLeft: 12,
  },
  submitButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});

export default LoanApplicationScreen;
