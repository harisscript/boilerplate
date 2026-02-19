import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { navigate } from '@/navigation/navigationRef';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button title="Go to Home" onPress={() => navigate('Home')} />
      <Button title="Go to Login" onPress={() => navigate('Login')} />
      <Button title="Go to Register" onPress={() => navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24 },
});

export default ProfileScreen;
