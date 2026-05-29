import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

const ProfileScreen = ({ navigation }) => {
  const [userProfile] = useState({
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+260 96 123 4567',
    joinDate: 'January 2026',
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <MaterialCommunityIcons name="account-circle" size={80} color="#2E7D32" />
          </View>
          <Text style={styles.profileName}>{userProfile.fullName}</Text>
          <Text style={styles.joinDate}>Member since {userProfile.joinDate}</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="email" size={20} color="#2E7D32" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{userProfile.email}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="phone" size={20} color="#2E7D32" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>{userProfile.phone}</Text>
            </View>
          </View>
        </View>

        {/* Account Settings */}
        <View style={styles.settingsCard}>
          <Text style={styles.cardTitle}>Account Settings</Text>
          <TouchableOpacity
            style={styles.settingRow}
            onPress={() => navigation.navigate('Settings')}
          >
            <MaterialCommunityIcons name="cog" size={20} color="#2E7D32" />
            <Text style={styles.settingText}>Settings</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="lock" size={20} color="#2E7D32" />
            <Text style={styles.settingText}>Change Password</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="bell" size={20} color="#2E7D32" />
            <Text style={styles.settingText}>Notifications</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Support */}
        <View style={styles.supportCard}>
          <Text style={styles.cardTitle}>Support</Text>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="help-circle" size={20} color="#2E7D32" />
            <Text style={styles.settingText}>Help & Support</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="file-document" size={20} color="#2E7D32" />
            <Text style={styles.settingText}>Terms & Conditions</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <MaterialCommunityIcons name="logout" size={20} color="#FFFFFF" />
          <Text style={styles.logoutButtonText}>Logout</Text>
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
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 20,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  joinDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoContent: {
    marginLeft: 16,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  supportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 16,
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ProfileScreen;