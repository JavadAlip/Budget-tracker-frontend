import { View, Text, TextInput, Button } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Otp() {
  const [otp, setOtp] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>OTP Verification page</Text>

      <TextInput
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />

      <Button title="Verify OTP" onPress={() => router.push('/set-password')} />
    </View>
  );
}
