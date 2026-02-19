import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { navigate } from '@/navigation/navigationRef';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Go to Register" onPress={() => navigate('Register')} />
      <Button title="Go to Home" onPress={() => navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24 },
});

export default LoginScreen;
