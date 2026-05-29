import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community';

const SettingsScreen = ({ navigation }) => {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    twoFactorAuth: false,
    biometric: true,
  });

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Security Settings */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Security</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <MaterialCommunityIcons name="shield" size={20} color="#2E7D32" />
              <View style={styles.settingText}>
                <Text style={styles.settingName}>Two-Factor Authentication</Text>
                <Text style={styles.settingDesc}>Extra security for your account</Text>
              </View>
            </View>
            <Switch
              value={settings.twoFactorAuth}
              onValueChange={() => toggleSetting('twoFactorAuth')}
              trackColor={{ false: '#E0E0E0', true: '#A5D6A7' }}
              thumbColor={settings.twoFactorAuth ? '#2E7D32' : '#999'}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <MaterialCommunityIcons name="fingerprint" size={20} color="#2E7D32" />
              <View style={styles.settingText}>
                <Text style={styles.settingName}>Biometric Login</Text>
                <Text style={styles.settingDesc}>Use fingerprint to login</Text>
              </View>
            </View>
            <Switch
              value={settings.biometric}
              onValueChange={() => toggleSetting('biometric')}
              trackColor={{ false: '#E0E0E0', true: '#A5D6A7' }}
              thumbColor={settings.biometric ? '#2E7D32' : '#999'}
            />
          </View>
        </View>

        {/* Notifications Settings */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <MaterialCommunityIcons name="bell" size={20} color="#2E7D32" />
              <View style={styles.settingText}>
                <Text style={styles.settingName}>Push Notifications</Text>
                <Text style={styles.settingDesc}>Receive payment reminders</Text>
              </View>
            </View>
            <Switch
              value={settings.pushNotifications}
              onValueChange={() => toggleSetting('pushNotifications')}
              trackColor={{ false: '#E0E0E0', true: '#A5D6A7' }}
              thumbColor={settings.pushNotifications ? '#2E7D32' : '#999'}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <MaterialCommunityIcons name="email" size={20} color="#2E7D32" />
              <View style={styles.settingText}>
                <Text style={styles.settingName}>Email Notifications</Text>
                <Text style={styles.settingDesc}>Receive updates via email</Text>
              </View>
            </View>
            <Switch
              value={settings.emailNotifications}
              onValueChange={() => toggleSetting('emailNotifications')}
              trackColor={{ false: '#E0E0E0', true: '#A5D6A7' }}
              thumbColor={settings.emailNotifications ? '#2E7D32' : '#999'}
            />
          </View>
        </View>

        {/* App Settings */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>App</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <MaterialCommunityIcons name="information" size={20} color="#2E7D32" />
              <View style={styles.settingText}>
                <Text style={styles.settingName}>App Version</Text>
                <Text style={styles.settingDesc}>Version 1.0.0</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <MaterialCommunityIcons name="delete" size={20} color="#FF6B6B" />
              <View style={styles.settingText}>
                <Text style={[styles.settingName, { color: '#FF6B6B' }]}>Clear Cache</Text>
                <Text style={styles.settingDesc}>Free up storage space</Text>
              </View>
            </View>
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
  sectionCard: {
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 16,
  },
  settingName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  settingDesc: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default SettingsScreen;