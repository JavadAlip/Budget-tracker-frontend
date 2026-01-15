import { View, Text, TextInput, Button } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function SetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Create Password</Text>

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button title="Save & Continue" onPress={() => router.replace('/home')} />
    </View>
  );
}
