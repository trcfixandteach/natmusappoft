import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

const PromoCodeScreen = ({ navigation }) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoCodes] = useState([
    {
      id: 1,
      code: 'SAVE10',
      discount: '10%',
      description: '10% off on interest rates',
      expiryDate: '2026-12-31',
      active: true,
    },
    {
      id: 2,
      code: 'WELCOME50',
      discount: '50K',
      description: 'K50 discount on first loan',
      expiryDate: '2026-06-30',
      active: true,
    },
    {
      id: 3,
      code: 'REFER20',
      discount: '20%',
      description: '20% cashback on referral',
      expiryDate: '2026-08-31',
      active: true,
    },
  ]);

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      alert('Please enter a promo code');
      return;
    }
    const found = promoCodes.find(p => p.code.toUpperCase() === promoCode.toUpperCase());
    if (found) {
      setAppliedPromo(found);
      alert(`Promo code "${found.code}" applied successfully!`);
    } else {
      alert('Invalid promo code');
    }
  };

  const renderPromoCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.promoCard, appliedPromo?.id === item.id && styles.promoCardApplied]}
      onPress={() => {
        setPromoCode(item.code);
        setAppliedPromo(item);
      }}
    >
      <View style={styles.promoIcon}>
        <MaterialCommunityIcons name="ticket-discount" size={32} color="#2E7D32" />
      </View>
      <View style={styles.promoInfo}>
        <Text style={styles.promoCode}>{item.code}</Text>
        <Text style={styles.promoDesc}>{item.description}</Text>
        <Text style={styles.promoExpiry}>Expires: {item.expiryDate}</Text>
      </View>
      <View style={styles.promoDiscount}>
        <Text style={styles.discountValue}>{item.discount}</Text>
        {appliedPromo?.id === item.id && (
          <MaterialCommunityIcons name="check-circle" size={20} color="#4CAF50" />
        )}
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
          <Text style={styles.title}>Promo Codes</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Promo Code Input */}
        <View style={styles.inputSection}>
          <Text style={styles.sectionTitle}>Enter Promo Code</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter code"
              value={promoCode}
              onChangeText={setPromoCode}
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={styles.applyButton}
              onPress={handleApplyPromo}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Applied Promo */}
        {appliedPromo && (
          <View style={styles.appliedPromoCard}>
            <MaterialCommunityIcons name="check-circle" size={24} color="#4CAF50" />
            <View style={styles.appliedPromoInfo}>
              <Text style={styles.appliedPromoTitle}>{appliedPromo.code}</Text>
              <Text style={styles.appliedPromoText}>{appliedPromo.description}</Text>
            </View>
          </View>
        )}

        {/* Available Promos */}
        <View style={styles.promoSection}>
          <Text style={styles.sectionTitle}>Available Promo Codes</Text>
          <FlatList
            data={promoCodes}
            renderItem={renderPromoCard}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  inputSection: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
  },
  applyButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  appliedPromoCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appliedPromoInfo: {
    marginLeft: 12,
    flex: 1,
  },
  appliedPromoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  appliedPromoText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  promoSection: {
    marginBottom: 24,
  },
  promoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  promoCardApplied: {
    borderColor: '#2E7D32',
    backgroundColor: '#F0F7F0',
  },
  promoIcon: {
    marginRight: 16,
  },
  promoInfo: {
    flex: 1,
  },
  promoCode: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  promoDesc: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  promoExpiry: {
    fontSize: 11,
    color: '#CCC',
    marginTop: 4,
  },
  promoDiscount: {
    alignItems: 'center',
  },
  discountValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});

export default PromoCodeScreen;